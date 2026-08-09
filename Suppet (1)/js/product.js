(function(){
  const params = new URLSearchParams(location.search);
  const slug = PRODUCTS[params.get('linha')] ? params.get('linha') : 'vitaforca';
  const p = PRODUCTS[slug];
  const others = PRODUCT_ORDER.filter(item => item !== slug);
  const absoluteBase = 'https://www.drogavet.com.br/suppet/';

  document.documentElement.style.setProperty('--prod-color', p.color);
  const pageTitle = `${p.name} · Suppet DrogaVET`;
  const metaDesc = `${p.name} da linha Suppet, da DrogaVET. ${p.tagline}. ${p.short}.`;
  document.title = pageTitle;
  document.getElementById('pageTitle').textContent = pageTitle;
  document.getElementById('metaDescription').setAttribute('content', metaDesc);
  document.getElementById('ogTitle').setAttribute('content', pageTitle);
  document.getElementById('ogDescription').setAttribute('content', metaDesc);
  document.getElementById('ogImage').setAttribute('content', `${absoluteBase}${p.image}`);
  document.getElementById('twitterTitle').setAttribute('content', pageTitle);
  document.getElementById('twitterDescription').setAttribute('content', metaDesc);
  document.getElementById('twitterImage').setAttribute('content', `${absoluteBase}${p.image}`);
  document.getElementById('canonicalLink').setAttribute('href', `${absoluteBase}produto.html?linha=${p.slug}`);
  document.getElementById('ogUrl').setAttribute('content', `${absoluteBase}produto.html?linha=${p.slug}`);

  const ld = document.createElement('script');
  ld.type = 'application/ld+json';
  ld.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    image: [`${absoluteBase}${p.image}`],
    description: p.desc,
    sku: `SUPPET-${p.slug.toUpperCase()}`,
    brand: { '@type': 'Brand', name: 'Suppet' },
    manufacturer: { '@type': 'Organization', name: 'DrogaVET' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BRL',
      price: p.price.toFixed(2),
      availability: 'https://schema.org/InStock',
      url: `${absoluteBase}produto.html?linha=${p.slug}`
    }
  });
  document.head.appendChild(ld);

  document.getElementById('crumbName').textContent = p.name;
  const productImg = document.getElementById('productImg');
  productImg.src = p.image;
  productImg.alt = p.name;
  productImg.dataset.slug = p.slug;
  document.getElementById('gallery').classList.add(`gallery--${p.slug}`);
  document.getElementById('pName').textContent = p.name;
  document.getElementById('pName').style.color = p.colorDark;
  document.getElementById('pTagBadge').textContent = p.tagline;
  document.getElementById('pTagBadge').style.background = p.color;
  document.getElementById('pDesc').textContent = p.desc;
  document.getElementById('productPackage').textContent = p.packageText;
  document.getElementById('uniqueEyebrow').textContent = p.name;
  document.getElementById('uniqueEyebrow').style.color = p.color;
  document.getElementById('uniqueName').textContent = p.name;
  document.querySelector('.gallery').style.background = p.colorDark;
  document.querySelectorAll('.btn-primary').forEach(button => { button.style.background = p.color; });
  const addCartButton = document.getElementById('addCart');
  addCartButton.addEventListener('mouseenter', function(){ this.style.background = p.colorDark; });
  addCartButton.addEventListener('mouseleave', function(){ this.style.background = p.color; });

  const tiers = [
    { qty: 9, off: 0.15, label: 'Compre 9', badge: 'Melhor preço' },
    { qty: 3, off: 0.05, label: 'Compre 3', badge: 'Mais popular' },
    { qty: 1, off: 0, label: 'Compre 1', badge: null }
  ];
  let qty = 1;
  let selectedTier = 2;
  const tierList = document.getElementById('tierList');
  const qtyVal = document.getElementById('qtyVal');
  const qtyHint = document.getElementById('qtyHint');

  function tierIndexForQty(quantity){
    if(quantity >= 9) return 0;
    if(quantity >= 3) return 1;
    return 2;
  }

  function updateSelectionFromQty(){
    selectedTier = tierIndexForQty(qty);
    const pricing = getPricingForQty(p.price, qty);
    qtyVal.textContent = qty;
    if(pricing.discount === 0.15){
      qtyHint.textContent = 'Desconto de 15% aplicado automaticamente para compras a partir de 9 unidades.';
    } else if(pricing.discount === 0.05){
      qtyHint.textContent = 'Desconto de 5% aplicado automaticamente para compras a partir de 3 unidades.';
    } else {
      qtyHint.textContent = 'Ao chegar a 3 unidades, o desconto de 5% será aplicado automaticamente.';
    }
  }

  function renderTiers(){
    tierList.innerHTML = tiers.map((tier, index) => {
      const unit = p.price * (1 - tier.off);
      const totalTier = unit * tier.qty;
      const save = (p.price - unit) * tier.qty;
      const active = index === selectedTier;
      return `<button type="button" class="tier ${active ? 'active' : ''}" data-i="${index}" role="radio" aria-checked="${active ? 'true' : 'false'}">
        ${tier.badge ? `<span class="tier__badge" style="background:${p.color}">${tier.badge}</span>` : ''}
        <div class="tier__left"><span class="tier__radio"></span><div><span class="tier__name">${tier.label}${tier.off > 0 ? `<span class="tier__off">${Math.round(tier.off * 100)}% OFF</span>` : ''}</span><div class="tier__save">${tier.off > 0 ? `Você economiza ${formatCurrency(save)}` : 'Preço padrão'}</div></div></div>
        <div class="tier__price"><b>${formatCurrency(totalTier)}</b><span class="tier__unit">${tier.qty} unidade${tier.qty > 1 ? 's' : ''}</span></div>
      </button>`;
    }).join('');
    tierList.querySelectorAll('.tier').forEach(element => element.addEventListener('click', () => {
      const tier = tiers[+element.dataset.i];
      qty = tier.qty;
      updateSelectionFromQty();
      renderTiers();
      updateTotal();
    }));
  }

  function updateTotal(){
    const pricing = getPricingForQty(p.price, qty);
    document.getElementById('totalPrice').textContent = formatCurrency(pricing.unitPrice * qty);
  }

  document.getElementById('qtyMinus').addEventListener('click', () => {
    qty = Math.max(1, qty - 1);
    updateSelectionFromQty();
    renderTiers();
    updateTotal();
  });
  document.getElementById('qtyPlus').addEventListener('click', () => {
    qty += 1;
    updateSelectionFromQty();
    renderTiers();
    updateTotal();
  });

  updateSelectionFromQty();
  renderTiers();
  updateTotal();

  addCartButton.addEventListener('click', function(){
    const pricing = getPricingForQty(p.price, qty);
    addToCart({
      slug: p.slug,
      name: p.name,
      image: p.image,
      basePrice: p.price,
      tierLabel: `${pricing.label} · ${qty} unidade${qty > 1 ? 's' : ''}`,
      unitPrice: pricing.unitPrice,
      qty
    });
    const original = this.innerHTML;
    this.innerHTML = `${icon('check')} Adicionado!`;
    setTimeout(() => { this.innerHTML = original; }, 1800);
    renderCartModal();
    openModal('cartModal', this);
  });

  const miniIcons = ['paw', p.icon, 'leaf', 'shield'];
  document.getElementById('miniBenefits').innerHTML = p.miniBenefits.map((label, index) => `<div><div class="ic" style="color:${p.color}">${icon(miniIcons[index])}</div><span>${escapeHtml(label)}</span></div>`).join('');

  const petalsColors = [p.color, p.colorDark, p.colorDark, p.color];
  const left = p.benefits.slice(0, 2);
  const right = p.benefits.slice(2, 4);
  document.getElementById('petals').innerHTML = `<div class="petals__col">${left.map((benefit, index) => `<div class="petal" style="background:${petalsColors[index]}"><h4>${escapeHtml(benefit.title)}</h4><p>${escapeHtml(benefit.text)}</p></div>`).join('')}</div><div class="petals__center"><img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" decoding="async" class="petals__image--${p.slug}"></div><div class="petals__col">${right.map((benefit, index) => `<div class="petal" style="background:${petalsColors[index + 2]}"><h4>${escapeHtml(benefit.title)}</h4><p>${escapeHtml(benefit.text)}</p></div>`).join('')}</div>`;

  document.getElementById('accordion').innerHTML = `
    <div class="accordion-item open"><button type="button">Tabela de garantia (níveis mínimos) ${icon('plus')}</button><div class="accordion-panel"><div class="accordion-panel-in"><table class="nutri-table"><thead><tr><th>Nutriente</th><th>Por kg de produto</th><th>Por unidade (4 g)</th></tr></thead><tbody>${p.nutrition.map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join('')}</tbody></table></div></div></div>
    <div class="accordion-item"><button type="button">Modo de uso e conservação ${icon('plus')}</button><div class="accordion-panel"><div class="accordion-panel-in"><p>Suplemento super premium mastigável para cães, ${p.flavor.toLowerCase()}. Consulte a recomendação diária de acordo com o peso do pet na embalagem. Conservar em lugar seco, ventilado, ao abrigo dos raios solares e do calor excessivo. Após aberto, consumir em até 60 dias.</p></div></div></div>
    <div class="accordion-item"><button type="button">Fabricação e SAC ${icon('plus')}</button><div class="accordion-panel"><div class="accordion-panel-in"><p>DrogaVET Farmácias de Manipulação e Indústria Ltda. CNPJ: 06.110.511/0007-38. Rua Agostinho Mocelin, 700, Barracão 06, CEP 83606-310, Ferrari, Campo Largo/PR. SAC: <a href="tel:+554132098989">(41) 3209-8989</a> · <a href="mailto:sac@drogavet.com.br">sac@drogavet.com.br</a> · <a href="https://www.drogavet.com.br/" target="_blank" rel="noopener noreferrer">www.drogavet.com.br</a>.</p></div></div></div>`;

  document.querySelectorAll('.accordion-item button').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.accordion-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item').forEach(current => current.classList.remove('open'));
      if(!wasOpen) item.classList.add('open');
    });
  });

  document.getElementById('relatedGrid').innerHTML = others.map(otherSlug => {
    const related = PRODUCTS[otherSlug];
    return `<article class="prod-card prod-card--${related.slug}"><a href="produto.html?linha=${related.slug}" class="prod-card__media" data-track-product="${related.slug}" data-track-source="related_products"><img src="${related.image}" alt="${escapeHtml(related.name)}" loading="lazy" decoding="async"></a><div class="prod-card__body"><span class="tagline" style="color:${related.color}">${escapeHtml(related.tagline)}</span><h3>${escapeHtml(related.name)}</h3><p class="desc">${escapeHtml(related.desc)}</p><div class="prod-card__foot"><div class="prod-card__price">${formatCurrency(related.price)} <span>${escapeHtml(related.packageText)}</span></div><a href="produto.html?linha=${related.slug}" class="prod-card__go" style="background:${related.color}" data-track-product="${related.slug}" data-track-source="related_cta" aria-label="Conhecer ${escapeHtml(related.name)}">${icon('arrowR')}</a></div></div></article>`;
  }).join('');

  trackEvent('view_item', { item_name: p.name, item_slug: p.slug, value: p.price });
  initReveal();
})();
