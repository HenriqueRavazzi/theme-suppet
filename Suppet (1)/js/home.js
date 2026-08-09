(function(){
  const benefitIconMap = {
    paw: 'paw',
    heart: 'heart',
    shield: 'shield'
  };

  document.querySelectorAll('[data-benefit-icon]').forEach(el => {
    el.innerHTML = icon(benefitIconMap[el.dataset.benefitIcon] || 'paw');
  });

  const prevButton = document.getElementById('prodPrev');
  const nextButton = document.getElementById('prodNext');
  if(prevButton) prevButton.innerHTML = icon('arrowL');
  if(nextButton) nextButton.innerHTML = icon('arrowR');

  const campaignItems = [
    'Fórmulas super premium para cada necessidade',
    'Compra guiada com carrinho e finalização pelo WhatsApp',
    'Linha desenvolvida por especialistas DrogaVET'
  ];
  document.querySelectorAll('.campaign__list li').forEach((item, index) => {
    item.innerHTML = `${icon('check')}${campaignItems[index] || ''}`;
  });

  const track = document.getElementById('prodTrack');
  if(track){
    track.innerHTML = PRODUCT_ORDER.map(slug => {
      const p = PRODUCTS[slug];
      return `
        <article class="prod-card prod-card--${p.slug}">
          <a href="produto.html?linha=${p.slug}" class="prod-card__media" data-track-product="${p.slug}" data-track-source="product_grid">
            <img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" decoding="async">
          </a>
          <div class="prod-card__body">
            <span class="tagline" style="color:${p.color}">${escapeHtml(p.tagline)}</span>
            <h3>${escapeHtml(p.name)}</h3>
            <p class="prod-card__campaign-line">${escapeHtml(p.campaignLine)}.</p>
            <div class="prod-card__mission">
              <b>Missão</b>
              <p>${escapeHtml(p.mission)}</p>
            </div>
            <div class="prod-card__powers">
              <b>Superpoderes ativados</b>
              <ul>${p.powers.map(power => `<li>${escapeHtml(power)}</li>`).join('')}</ul>
            </div>
            <div class="prod-card__allies">
              <b>Aliados da missão</b>
              <p>${escapeHtml(p.allies)}</p>
            </div>
            <div class="prod-card__foot">
              <div class="prod-card__price">${formatCurrency(p.price)} <span>${escapeHtml(p.packageText)}</span></div>
              <a href="produto.html?linha=${p.slug}" class="prod-card__go" style="background:${p.color}" data-track-product="${p.slug}" data-track-source="product_card_cta" aria-label="Conhecer ${escapeHtml(p.name)}">${icon('arrowR')}</a>
            </div>
          </div>
        </article>`;
    }).join('');

    prevButton?.addEventListener('click', () => scrollTrack(track, -1));
    nextButton?.addEventListener('click', () => scrollTrack(track, 1));

    const prodArrows = document.querySelector('.prod-arrows');
    function toggleProdArrows(){
      if(!prodArrows) return;
      const desktop = window.innerWidth >= 1200;
      const hasOverflow = track.scrollWidth > track.clientWidth + 4;
      prodArrows.style.display = hasOverflow && !desktop ? 'flex' : 'none';
    }
    toggleProdArrows();
    window.addEventListener('resize', toggleProdArrows);
  }

})();
