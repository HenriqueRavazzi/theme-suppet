/* ======================================================
   SUPPET · DrogaVET — interações, carrinho, acessibilidade e mensuração
   ====================================================== */

const SITE_CONFIG = {
  brand: "Suppet",
  company: "DrogaVET",
  siteUrl: "https://www.drogavet.com.br/suppet/",
  companyUrl: "https://www.drogavet.com.br/",
  instagramUrl: "https://www.instagram.com/drogavet/",
  facebookUrl: "https://www.facebook.com/drogavet/",
  whatsappNumber: "554132098989",
  whatsappDisplay: "(41) 3209-8989",
  email: "sac@drogavet.com.br",
  couponCode: "SUPPET10"
};

const ICONS = {
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20s-7.5-4.6-9.6-9.4C1.1 7.6 3 4.5 6.3 4.2c2-.2 3.7 1 4.7 2.6 1-1.6 2.7-2.8 4.7-2.6 3.3.3 5.2 3.4 3.9 6.4C19.5 15.4 12 20 12 20Z"/><path d="M9 11.2h1.6l1-1.7 1.4 3 1-1.3H16"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3Z"/><path d="M9 12l2 2 4-4"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l2.4 5.8L21 10l-4.8 4 1.4 6.6L12 17.4 6.4 20.6 7.8 14 3 10l6.6-1.2L12 3Z"/></svg>',
  paw: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="9" r="2.1"/><circle cx="11" cy="6" r="2.1"/><circle cx="16" cy="6" r="2.1"/><circle cx="20" cy="10" r="2"/><path d="M13 12.2c3.2 0 6 2.4 6 5.2 0 2-1.6 3.1-3.6 2.5-1-.3-2.1-.3-3.1 0-2 .6-3.6-.5-3.6-2.5 0-2.8 2.1-5.2 4.3-5.2Z"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20c0-8 5-14 16-15-1 10-7 15-15 15Z"/><path d="M6 18c3-3 6-7 12-11"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"/></svg>',
  bone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6.5 7.5a2 2 0 1 0-3-2.6 2 2 0 0 0 1 3.3l7 7c-1 1-.6 2.6.6 3.4a2 2 0 1 0 2.9-2.7l-7-7Z"/><path d="M17.5 16.5a2 2 0 1 0 3 2.6 2 2 0 0 0-1-3.3l-7-7c1-1 .6-2.6-.6-3.4a2 2 0 1 0-2.9 2.7l7 7Z"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2.5 3h2.4l2.2 12.2h11.6L21 7H6.2"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.6"/><path d="M4.5 20c1.4-4 4-6 7.5-6s6.1 2 7.5 6"/></svg>',
  arrowL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 5l-7 7 7 7"/></svg>',
  arrowR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12.5l5 5L20 6"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 4v16M4 12h16"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="1"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 22v-8h2.7l.4-3.2H14V8.7c0-.9.3-1.6 1.7-1.6h1.8V4.2C17.2 4.1 16 4 14.7 4 11.9 4 10 5.7 10 8.4v2.4H7.3v3.2H10V22h4Z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Zm0 1.8a7.2 7.2 0 0 1 6.2 10.9c-.2.3-3 4.4-6.2 4.4a7.1 7.1 0 0 1-3.6-1l-.3-.2-2.6.7.7-2.5-.2-.3A7.2 7.2 0 0 1 12 4.8Zm-2.7 3.6c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.4 3.8 2.2.9 2.6.7 3.1.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.9-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5l-.8-1.8c-.2-.4-.4-.4-.6-.4Z"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8h12l1 12.5a1.5 1.5 0 0 1-1.5 1.5H6.5A1.5 1.5 0 0 1 5 20.5L6 8Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16v12H4z"/><path d="m4 8 8 6 8-6"/></svg>'
};
function icon(name){ return ICONS[name] || ""; }
function formatCurrency(value){ return `R$ ${Number(value || 0).toFixed(2).replace('.', ',')}`; }
function getPricingForQty(basePrice, qty){
  const quantity = Math.max(1, Number(qty) || 1);
  const discount = quantity >= 9 ? 0.15 : quantity >= 3 ? 0.05 : 0;
  const unitPrice = Number(basePrice) * (1 - discount);
  const label = discount === 0.15 ? 'Compre 9 · 15% OFF' : discount === 0.05 ? 'Compre 3 · 5% OFF' : 'Compre 1 · preço padrão';
  return { quantity, discount, unitPrice, label };
}
function escapeHtml(str){ return String(str || "").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function trackEvent(event, payload = {}){ window.dataLayer = window.dataLayer || []; const data = { event, ...payload }; window.dataLayer.push(data); document.dispatchEvent(new CustomEvent(`suppet:${event}`, { detail: data })); }
function copyText(text){ if(navigator.clipboard?.writeText) return navigator.clipboard.writeText(text); const temp = document.createElement('textarea'); temp.value = text; document.body.appendChild(temp); temp.select(); document.execCommand('copy'); temp.remove(); return Promise.resolve(); }
const CART_KEY = "suppet_cart_v2"; let lastFocusedElement = null;
function getCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch(e){ return []; } }
function saveCart(items){ localStorage.setItem(CART_KEY, JSON.stringify(items)); updateCartBadge(); renderCartModal(); }
function cartCount(items){ return (items || getCart()).reduce((s,i) => s + i.qty, 0); }
function cartTotal(items){ return (items || getCart()).reduce((s,i) => s + i.qty * i.unitPrice, 0); }
function addToCart(entry){
  const items = getCart();
  const existing = items.find(i => i.slug === entry.slug);
  if(existing){
    existing.qty += entry.qty;
    existing.basePrice = Number(existing.basePrice || entry.basePrice || entry.unitPrice);
    const pricing = getPricingForQty(existing.basePrice, existing.qty);
    existing.unitPrice = pricing.unitPrice;
    existing.tierLabel = `${pricing.label} · ${existing.qty} unidade${existing.qty > 1 ? 's' : ''}`;
  } else {
    const basePrice = Number(entry.basePrice || entry.unitPrice);
    const pricing = getPricingForQty(basePrice, entry.qty);
    items.push({ ...entry, basePrice, unitPrice: pricing.unitPrice, tierLabel: `${pricing.label} · ${entry.qty} unidade${entry.qty > 1 ? 's' : ''}` });
  }
  saveCart(items);
  const current = items.find(i => i.slug === entry.slug);
  trackEvent('add_to_cart', { item_name: entry.name, item_slug: entry.slug, quantity: entry.qty, unit_price: current?.unitPrice || entry.unitPrice, tier: current?.tierLabel || entry.tierLabel, value: entry.qty * (current?.unitPrice || entry.unitPrice) });
}
function removeCartItem(index){ const items = getCart(); const removed = items[index]; items.splice(index, 1); saveCart(items); if(removed) trackEvent('remove_from_cart', { item_name: removed.name, quantity: removed.qty }); }
function changeCartQty(index, delta){
  const items = getCart();
  if(!items[index]) return;
  items[index].qty = Math.max(1, items[index].qty + delta);
  const basePrice = Number(items[index].basePrice || items[index].unitPrice);
  const pricing = getPricingForQty(basePrice, items[index].qty);
  items[index].basePrice = basePrice;
  items[index].unitPrice = pricing.unitPrice;
  items[index].tierLabel = `${pricing.label} · ${items[index].qty} unidade${items[index].qty > 1 ? 's' : ''}`;
  saveCart(items);
}
function updateCartBadge(){ document.querySelectorAll('.cart-badge').forEach(b => { const n = cartCount(); b.textContent = n; b.classList.toggle('show', n > 0); }); }
function buildWhatsAppOrderText(items = getCart()){ const subtotal = cartTotal(items); const lines = ['Olá! Quero finalizar um pedido Suppet.','','Resumo do pedido:']; items.forEach((item, index) => { lines.push(`${index + 1}. ${item.name}`); lines.push(`   Opção: ${item.tierLabel}`); lines.push(`   Quantidade: ${item.qty}`); lines.push(`   Total do item: ${formatCurrency(item.qty * item.unitPrice)}`); }); lines.push(''); lines.push(`Subtotal: ${formatCurrency(subtotal)}`); lines.push(''); lines.push('Meu nome:'); lines.push('Cidade/UF:'); return lines.join('\n'); }
function buildWhatsAppLink(items = getCart()){ return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(buildWhatsAppOrderText(items))}`; }
function initModals(){ if(document.getElementById('loginModal')) return; const wrap = document.createElement('div'); wrap.innerHTML = `<div class="modal-overlay" id="loginModal" aria-hidden="true"><div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="loginModalTitle"><div class="modal-head"><h3 id="loginModalTitle">Bem-vindo(a)</h3><button class="modal-close" type="button" data-close="loginModal" aria-label="Fechar janela">${icon('close')}</button></div><div class="modal-body"><div class="auth-tabs" role="tablist" aria-label="Acesso de usuário"><button type="button" class="active" data-tab="signin" role="tab" aria-selected="true">Entrar</button><button type="button" data-tab="signup" role="tab" aria-selected="false">Criar conta</button></div><form class="auth-panel active" data-panel="signin"><div class="field"><label for="authEmail">E-mail</label><input id="authEmail" type="email" placeholder="voce@email.com" required></div><div class="field"><label for="authPass">Senha</label><input id="authPass" type="password" placeholder="••••••••" required></div><button type="submit" class="btn btn-primary btn-block">Continuar</button><a class="auth-forgot" href="mailto:${SITE_CONFIG.email}">Precisa de ajuda? Fale com nosso atendimento</a></form><form class="auth-panel" data-panel="signup"><div class="field"><label for="authName">Nome</label><input id="authName" type="text" placeholder="Seu nome" required></div><div class="field"><label for="authNewEmail">E-mail</label><input id="authNewEmail" type="email" placeholder="voce@email.com" required></div><div class="field"><label for="authNewPass">Senha</label><input id="authNewPass" type="password" placeholder="Crie uma senha" required></div><button type="submit" class="btn btn-primary btn-block">Criar conta</button></form><div class="auth-msg" id="authMsg" aria-live="polite">${icon('check')} Ambiente demonstrativo: atendimento e fechamento acontecem pelo WhatsApp.</div></div></div></div><div class="modal-overlay" id="cartModal" aria-hidden="true"><div class="modal-card modal-cart" role="dialog" aria-modal="true" aria-labelledby="cartModalTitle"><div class="modal-head"><h3 id="cartModalTitle">Seu carrinho</h3><button class="modal-close" type="button" data-close="cartModal" aria-label="Fechar carrinho">${icon('close')}</button></div><div class="modal-body"><div id="cartBody"></div></div></div></div>`; document.body.appendChild(wrap); document.querySelectorAll('.header-actions .icon-btn').forEach((btn, i) => { if(i === 1 && !btn.querySelector('.cart-badge')){ const badge = document.createElement('span'); badge.className = 'cart-badge'; badge.textContent = '0'; btn.appendChild(badge); } }); document.querySelectorAll('.header-actions .icon-btn').forEach((btn, i) => { btn.addEventListener('click', () => { if(i === 0) openModal('loginModal', btn); if(i === 1){ renderCartModal(); openModal('cartModal', btn); } }); }); document.querySelectorAll('.modal-overlay').forEach(overlay => { overlay.addEventListener('click', e => { if(e.target === overlay) closeModal(overlay.id); }); }); document.querySelectorAll('.modal-close').forEach(btn => btn.addEventListener('click', () => closeModal(btn.dataset.close))); document.addEventListener('keydown', e => { if(e.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach(o => closeModal(o.id)); if(e.key === 'Tab') trapFocus(e); }); document.querySelectorAll('.auth-tabs button').forEach(tab => { tab.addEventListener('click', () => { const target = tab.dataset.tab; document.querySelectorAll('.auth-tabs button').forEach(b => { const isActive = b === tab; b.classList.toggle('active', isActive); b.setAttribute('aria-selected', isActive ? 'true' : 'false'); }); document.querySelectorAll('.auth-panel').forEach(p => p.classList.toggle('active', p.dataset.panel === target)); document.getElementById('authMsg')?.classList.remove('show'); }); }); document.querySelectorAll('.auth-panel').forEach(form => { form.addEventListener('submit', e => { e.preventDefault(); document.getElementById('authMsg')?.classList.add('show'); trackEvent('login_interaction', { panel: form.dataset.panel }); }); }); }
function trapFocus(event){ const open = document.querySelector('.modal-overlay.open'); if(!open) return; const focusable = open.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'); if(!focusable.length) return; const first = focusable[0]; const last = focusable[focusable.length - 1]; if(event.shiftKey && document.activeElement === first){ event.preventDefault(); last.focus(); } else if(!event.shiftKey && document.activeElement === last){ event.preventDefault(); first.focus(); } }
function openModal(id, trigger = null){ const modal = document.getElementById(id); if(!modal) return; lastFocusedElement = trigger || document.activeElement; modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; modal.querySelector('button, [href], input')?.focus(); }
function closeModal(id){ const modal = document.getElementById(id); if(!modal) return; modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); if(!document.querySelector('.modal-overlay.open')) document.body.style.overflow = ''; document.getElementById('authMsg')?.classList.remove('show'); lastFocusedElement?.focus?.(); }
function renderCartModal(){
  const body = document.getElementById('cartBody');
  if(!body) return;
  const items = getCart();
  if(!items.length){
    body.innerHTML = `<div class="cart-empty">${icon('bag')}<p>Seu carrinho está vazio.</p><a href="${location.pathname.includes('produto.html') ? 'index.html#produtos' : '#produtos'}" class="btn btn-primary" style="margin-top:16px" data-close="cartModal">Ver produtos</a></div>`;
    body.querySelector('[data-close]')?.addEventListener('click', () => closeModal('cartModal'));
    return;
  }
  const subtotal = cartTotal(items);
  body.innerHTML = `<div class="cart-list">${items.map((it, i) => `<div class="cart-item"><div class="cart-item__img"><img src="${it.image}" alt="${escapeHtml(it.name)}" loading="lazy" decoding="async"></div><div class="cart-item__info"><h4>${escapeHtml(it.name)}</h4><span>${escapeHtml(it.tierLabel)}</span><div class="cart-item__qty"><button type="button" data-qty="-1" data-i="${i}" aria-label="Diminuir quantidade">−</button><span>${it.qty}</span><button type="button" data-qty="1" data-i="${i}" aria-label="Aumentar quantidade">+</button></div></div><div class="cart-item__price"><b>${formatCurrency(it.qty * it.unitPrice)}</b><button type="button" class="cart-item__remove" data-remove="${i}">remover</button></div></div>`).join('')}</div><div class="cart-footer"><div class="cart-subtotal"><span>Subtotal</span><b>${formatCurrency(subtotal)}</b></div><p class="cart-note">Coloque no carrinho e compre facilmente pelo WhatsApp.</p><div class="cart-actions"><button type="button" class="btn btn-primary btn-block" id="checkoutBtn">Finalizar no WhatsApp</button><button type="button" class="btn btn-light btn-block" id="copyOrderBtn">Copiar resumo do pedido</button><button type="button" class="btn btn-light btn-block" data-close="cartModal">Continuar comprando</button></div></div>`;
  body.querySelectorAll('[data-qty]').forEach(b => b.addEventListener('click', () => changeCartQty(+b.dataset.i, +b.dataset.qty)));
  body.querySelectorAll('[data-remove]').forEach(b => b.addEventListener('click', () => removeCartItem(+b.dataset.remove)));
  body.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => closeModal('cartModal')));
  body.querySelector('#checkoutBtn')?.addEventListener('click', () => {
    trackEvent('begin_checkout', { value: subtotal, items: items.length, destination: 'whatsapp' });
    window.open(buildWhatsAppLink(items), '_blank', 'noopener');
  });
  body.querySelector('#copyOrderBtn')?.addEventListener('click', async () => {
    await copyText(buildWhatsAppOrderText(items));
    trackEvent('copy_order_summary', { value: subtotal });
    const btn = body.querySelector('#copyOrderBtn');
    const original = btn.textContent;
    btn.textContent = 'Resumo copiado!';
    setTimeout(() => { btn.textContent = original; }, 1800);
  });
}
function initHeroShowcase(){ const slidesEl = document.getElementById('heroSlides'); const dotsEl = document.getElementById('heroDots'); const glowEl = document.getElementById('heroGlow'); if(!slidesEl || typeof PRODUCT_ORDER === 'undefined') return; slidesEl.innerHTML = PRODUCT_ORDER.map((slug, i) => { const p = PRODUCTS[slug]; return `<div class="hero__slide${i===0 ? ' active' : ''}" data-i="${i}"><img src="${p.image}" alt="${escapeHtml(p.name)}" data-slug="${p.slug}" ${i===0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"><div class="hero__slide-tag" style="background:${p.color}">${escapeHtml(p.name)}</div></div>`; }).join(''); dotsEl.innerHTML = PRODUCT_ORDER.map((slug, i) => `<button type="button" aria-label="Ver ${escapeHtml(PRODUCTS[slug].name)}" data-i="${i}" class="${i===0 ? 'active' : ''}"></button>`).join(''); const slides = [...slidesEl.querySelectorAll('.hero__slide')]; const dots = [...dotsEl.querySelectorAll('button')]; let current = 0; let timer = null; const DURATION = 3800; function goTo(i){ slides[current]?.classList.remove('active'); dots[current]?.classList.remove('active'); current = (i + slides.length) % slides.length; slides[current]?.classList.add('active'); dots[current]?.classList.add('active'); const p = PRODUCTS[PRODUCT_ORDER[current]]; if(glowEl) glowEl.style.backgroundColor = p.color; } function start(){ stop(); timer = setInterval(() => goTo(current + 1), DURATION); } function stop(){ if(timer) clearInterval(timer); } goTo(0); start(); dots.forEach(btn => btn.addEventListener('click', () => { goTo(+btn.dataset.i); start(); })); slidesEl.querySelectorAll('img').forEach(img => img.addEventListener('click', () => { trackEvent('select_product', { item_slug: img.dataset.slug, source: 'hero_showcase' }); location.href = `produto.html?linha=${img.dataset.slug}`; })); const showcase = document.getElementById('heroShowcase'); showcase?.addEventListener('mouseenter', stop); showcase?.addEventListener('mouseleave', start); }
function initTicker(){ const track = document.querySelector('.ticker__track'); if(!track) return; track.innerHTML = track.innerHTML + track.innerHTML; }
function initHeader(){ const header = document.querySelector('.site-header'); if(!header) return; const onScroll = () => header.classList.toggle('shrink', window.scrollY > 30); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); const burger = document.querySelector('.burger'); const menu = document.querySelector('.mobile-menu'); if(burger && menu){ burger.addEventListener('click', () => { burger.classList.toggle('open'); menu.classList.toggle('open'); }); menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { burger.classList.remove('open'); menu.classList.remove('open'); })); } }
function initReveal(){ const els = document.querySelectorAll('.reveal, .reveal-scale'); if(!els.length || !('IntersectionObserver' in window)){ els.forEach(el => el.classList.add('in')); return; } const io = new IntersectionObserver(entries => { entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); } }); }, { threshold: .18, rootMargin: '0px 0px -60px 0px' }); els.forEach((el, i) => { el.style.setProperty('--i', i % 8); io.observe(el); }); }
function initParallaxHero(){ const hero = document.querySelector('.hero'); if(!hero) return; const art = hero.querySelector('.hero__art'); const rays = hero.querySelector('.hero__rays'); const blob = hero.querySelector('.hero__blob'); const badge = hero.querySelector('.hero__badge'); let mx = 0, my = 0, tx = 0, ty = 0; const isFine = window.matchMedia('(pointer:fine)').matches; if(isFine){ hero.addEventListener('mousemove', e => { const r = hero.getBoundingClientRect(); mx = ((e.clientX - r.left) / r.width - .5) * 2; my = ((e.clientY - r.top) / r.height - .5) * 2; }); } function raf(){ tx += (mx - tx) * .06; ty += (my - ty) * .06; if(art) art.style.transform = `translate(${tx * -14}px, ${ty * -10}px) rotate(${tx * -1.2}deg)`; if(badge) badge.style.transform = `translate(${tx * 10}px, ${ty * 8}px)`; requestAnimationFrame(raf); } requestAnimationFrame(raf); window.addEventListener('scroll', () => { const y = window.scrollY; if(rays) rays.style.transform = `translateY(${y * .18}px) rotate(${y * .01}deg)`; if(blob) blob.style.transform = `translate(${y * .08}px, ${y * .12}px)`; }, { passive: true }); }
function initCampaignCarousel(){
  const carousel = document.getElementById('campaignCarousel');
  if(!carousel) return;
  const slides = [...carousel.querySelectorAll('.campaign-carousel__slide')];
  const dotsWrap = carousel.querySelector('.campaign-carousel__dots');
  const prev = carousel.querySelector('.campaign-carousel__arrow--prev');
  const next = carousel.querySelector('.campaign-carousel__arrow--next');
  if(!slides.length) return;

  dotsWrap.innerHTML = slides.map((slide, i) => `<button type="button" data-i="${i}" class="${i === 0 ? 'active' : ''}" aria-label="Ver ${escapeHtml(slide.querySelector('strong')?.textContent || `produto ${i + 1}`)}"></button>`).join('');
  prev.innerHTML = icon('arrowL');
  next.innerHTML = icon('arrowR');
  const dots = [...dotsWrap.querySelectorAll('button')];
  let current = 0;
  let timer = null;
  const delay = 3400;

  function show(index, userAction = false){
    slides[current].classList.remove('active');
    slides[current].setAttribute('aria-hidden', 'true');
    slides[current].setAttribute('tabindex', '-1');
    dots[current]?.classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    slides[current].setAttribute('aria-hidden', 'false');
    slides[current].removeAttribute('tabindex');
    dots[current]?.classList.add('active');
    if(userAction) trackEvent('campaign_carousel_change', { product_index: current, item_name: slides[current].querySelector('strong')?.textContent || '' });
  }
  function stop(){ if(timer) clearInterval(timer); }
  function start(){ stop(); timer = setInterval(() => show(current + 1), delay); }

  prev.addEventListener('click', () => { show(current - 1, true); start(); });
  next.addEventListener('click', () => { show(current + 1, true); start(); });
  dots.forEach(dot => dot.addEventListener('click', () => { show(+dot.dataset.i, true); start(); }));
  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', start);
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  start();
}
function initCampaignParallax(){
  const glow = document.querySelector('.campaign__art .glow');
  if(!glow) return;
  window.addEventListener('scroll', () => {
    const r = glow.parentElement.getBoundingClientRect();
    const center = r.top + r.height / 2 - window.innerHeight / 2;
    const p = Math.max(-1, Math.min(1, center / (window.innerHeight / 2)));
    glow.style.transform = `translateY(${p * 14}px)`;
  }, { passive: true });
}
function initDiscountToast(){ const toast = document.querySelector('.discount-toast'); if(!toast) return; toast.querySelector('button')?.addEventListener('click', () => toast.classList.add('hidden')); }
function initNewsletter(){ const form = document.getElementById('newsletterForm'); if(!form) return; const feedback = document.getElementById('newsletterFeedback'); const emailInput = form.querySelector('input[type="email"]'); let saved = ''; try{ saved = localStorage.getItem('suppet_newsletter_email') || ''; } catch(e){} if(saved && feedback){ feedback.innerHTML = `${icon('check')} E-mail já cadastrado. Seu cupom continua ativo: <strong>${SITE_CONFIG.couponCode}</strong>.`; feedback.classList.add('show'); } form.addEventListener('submit', e => { e.preventDefault(); if(!emailInput?.value) return; try{ localStorage.setItem('suppet_newsletter_email', emailInput.value.trim()); localStorage.setItem('suppet_coupon_code', SITE_CONFIG.couponCode); } catch(err){} feedback.innerHTML = `${icon('mail')} Cadastro recebido! Use o cupom <strong>${SITE_CONFIG.couponCode}</strong> na sua primeira compra e finalize pelo WhatsApp.`; feedback.classList.add('show'); emailInput.value = ''; trackEvent('newsletter_signup', { coupon: SITE_CONFIG.couponCode }); }); }
function initFooterLinks(){ document.querySelectorAll('.footer-social a').forEach((a, i) => { const map = [{ icon: 'instagram', href: SITE_CONFIG.instagramUrl, label: 'Instagram' },{ icon: 'facebook', href: SITE_CONFIG.facebookUrl, label: 'Facebook' },{ icon: 'whatsapp', href: `https://wa.me/${SITE_CONFIG.whatsappNumber}`, label: 'WhatsApp' }]; const item = map[i]; if(!item) return; a.innerHTML = icon(item.icon); a.href = item.href; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.setAttribute('aria-label', item.label); }); }
function initHeaderIcons(){ const icons = document.querySelectorAll('.header-actions .icon-btn'); if(icons[0]) icons[0].innerHTML = icon('user'); if(icons[1]) icons[1].innerHTML = icon('cart'); }
function initGlobalTracking(){ document.querySelectorAll('[data-track-product]').forEach(el => { el.addEventListener('click', () => trackEvent('select_product', { item_slug: el.dataset.trackProduct, source: el.dataset.trackSource || 'grid' })); }); document.querySelectorAll('a[href^="https://wa.me/"]').forEach(el => { el.addEventListener('click', () => trackEvent('click_whatsapp', { source: el.dataset.trackSource || 'link' })); }); }
function scrollTrack(track, dir){ if(!track) return; const card = track.querySelector('.prod-card'); const dist = card ? card.getBoundingClientRect().width + 26 : 320; track.scrollBy({ left: dir * dist, behavior: 'smooth' }); }
document.addEventListener('DOMContentLoaded', () => { document.body.classList.add('page-fade'); initTicker(); initHeader(); initReveal(); initParallaxHero(); initHeroShowcase(); initDiscountToast(); initCampaignCarousel(); initCampaignParallax(); initHeaderIcons(); initFooterLinks(); initModals(); initNewsletter(); initGlobalTracking(); updateCartBadge(); renderCartModal(); requestAnimationFrame(() => document.body.classList.remove('pre-load')); });
