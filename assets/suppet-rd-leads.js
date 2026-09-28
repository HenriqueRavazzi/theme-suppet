/**
 * Envio explícito de leads Suppet → RD Station Marketing.
 *
 * O Form Integration do RD (loader em cloudfront) costuma ser bloqueado por
 * adblockers. Este script escuta os eventos já disparados pelo quiz e pelo
 * Quero revender e posta a conversão direto na API — só quando o Form
 * Integration NÃO está disponível, para não duplicar leads.
 */
(function () {
  if (window.SuppetRdLeads) return;

  var config = window.SuppetRdConfig || {};
  var PUBLIC_TOKEN = config.publicToken || '';
  var API_KEY = config.apiKey || '';
  var EVENT_API = 'https://event-api.rdstation.com.br/v2/conversions';
  var PLATFORM_API = 'https://api.rd.services/platform/events?event_type=conversion';

  function formIntegrationReady() {
    return !!(
      window.RdstationFormsIntegration &&
      window.RdstationFormsIntegration.Integration
    );
  }

  function domain() {
    return window.location.origin.replace(/^https?:\/\//, '').replace(/^www\./, '');
  }

  function asText(value) {
    if (Array.isArray(value)) return value.filter(Boolean).join(', ');
    if (value == null) return '';
    return String(value);
  }

  function buildFormData(lead) {
    var data = {
      email: lead.email || '',
      conversion_domain: domain(),
      conversion_url: (lead.page_url || window.location.href).split('?')[0]
    };

    if (lead.name) data.name = lead.name;
    if (lead.nome) data.nome = lead.nome;
    if (lead.phone) data.phone = lead.phone;
    if (lead.city) data.city = lead.city;
    if (lead.about) data.about = lead.about;

    if (lead.pet_idade) data.idade = lead.pet_idade;
    if (lead.pet_porte) data.porte = lead.pet_porte;
    if (lead.pet_atividade) data.atividade = lead.pet_atividade;
    if (lead.comportamentos) data.comportamentos = asText(lead.comportamentos);
    if (lead.produtos_indicados) data.produtos_indicados = asText(lead.produtos_indicados);
    if (typeof lead.marketing_consent === 'boolean') {
      data.consentimento_comunicacao = lead.marketing_consent ? 1 : 0;
    }

    return data;
  }

  function postJson(url, body, headers) {
    return fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
      keepalive: true,
      mode: 'cors',
      credentials: 'omit'
    }).then(function (res) {
      if (!res.ok) throw new Error('RD HTTP ' + res.status);
      return res;
    });
  }

  function sendViaPublicToken(lead) {
    if (!PUBLIC_TOKEN) return Promise.reject(new Error('missing public token'));

    var identifier = lead.conversion_identifier || 'suppet-lead';
    var payload = {
      identificador: identifier,
      name: identifier,
      url: (lead.page_url || window.location.href).split('?')[0],
      internal_source: '5',
      page_title: document.title,
      form_type: 'WEB_FORM',
      form_data: buildFormData(lead)
    };

    // Form Integration usa "nome"; a API aceita name no form_data também.
    if (payload.form_data.name && !payload.form_data.nome) {
      payload.form_data.nome = payload.form_data.name;
    }

    return postJson(EVENT_API, payload, {
      'Content-Type': 'application/json',
      Authorization: 'PublicToken ' + PUBLIC_TOKEN
    });
  }

  function sendViaApiKey(lead) {
    if (!API_KEY) return Promise.reject(new Error('missing api key'));

    var formData = buildFormData(lead);
    var tags = ['shopify-suppet'];
    if (lead.conversion_identifier) tags.push(lead.conversion_identifier);

    var payload = {
      conversion_identifier: lead.conversion_identifier || 'suppet-lead',
      email: formData.email,
      name: formData.name || formData.nome || undefined,
      personal_phone: formData.phone || undefined,
      city: formData.city || undefined,
      website: formData.conversion_url || undefined,
      traffic_source: 'Shopify Suppet',
      available_for_mailing: lead.marketing_consent === true,
      tags: tags
    };

    // Campos cf_* só funcionam se já existirem na conta do RD; enviamos os
    // principais do quiz/revenda. Se algum não existir, caímos no PublicToken.
    if (formData.idade) payload.cf_idade = formData.idade;
    if (formData.porte) payload.cf_porte = formData.porte;
    if (formData.atividade) payload.cf_atividade = formData.atividade;
    if (formData.comportamentos) payload.cf_comportamentos = formData.comportamentos;
    if (formData.produtos_indicados) {
      payload.cf_produtos_indicados = formData.produtos_indicados;
    }
    if (formData.about) payload.cf_about = formData.about;

    Object.keys(payload).forEach(function (key) {
      if (payload[key] === undefined || payload[key] === '') delete payload[key];
    });

    return postJson(
      PLATFORM_API + '&api_key=' + encodeURIComponent(API_KEY),
      {
        event_type: 'CONVERSION',
        event_family: 'CDP',
        payload: payload
      },
      { 'Content-Type': 'application/json' }
    );
  }

  function sendLead(lead) {
    if (!lead || !(lead.email || lead.phone)) return Promise.resolve();

    // Com Form Integration ativo o clique no submit já enviou a conversão.
    if (formIntegrationReady()) return Promise.resolve({ skipped: 'form-integration' });

    var chain = API_KEY
      ? sendViaApiKey(lead).catch(function () {
          return sendViaPublicToken(lead);
        })
      : sendViaPublicToken(lead);

    return chain.catch(function (err) {
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('[Suppet RD] falha ao enviar lead', err);
      }
      return null;
    });
  }

  document.addEventListener('suppet:quiz:lead', function (event) {
    sendLead(event.detail);
  });

  document.addEventListener('suppet:reseller:lead', function (event) {
    sendLead(event.detail);
  });

  window.SuppetRdLeads = { send: sendLead };
})();
