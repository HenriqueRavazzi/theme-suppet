# Débitos técnicos — theme-suppet

Levantamento feito em 2026-08-03, comparando as seções `suppet-*` do tema
Shopify com a LP estática de referência (`Suppet/index.html`,
`Suppet/produto.html` e `Suppet/css/style.css`). Preços não entram nessa
lista (já resolvidos e conferidos à parte).

Cada item abaixo é uma decisão consciente de deixar pra depois, não um bug.

## Animações

1. **Scroll-reveal (fade/scale ao rolar a página)**
   A referência usa `.reveal` / `.reveal-scale` / `.stagger` em quase toda
   seção (11× na home, 6× na página de produto) — elementos aparecem com
   fade-in + leve translateY (ou scale) ao entrar na viewport, via
   `IntersectionObserver` (`initReveal()` em `Suppet/js/main.js`).
   Nenhuma das nossas seções (`sections/suppet-*.liquid`) implementa isso
   hoje — tudo aparece direto, sem animação de entrada.

2. **Hero (`sections/suppet-hero.liquid`)**
   O código de carrossel automático (troca de produto), giro do anel
   decorativo (`.sh-ring`) e selo flutuante (`.sh-badge`) existe, mas está
   **desligado** (`enable_motion: false` em `templates/index.json`). Pode
   ser reativado a qualquer momento pelo personalizador (bloco "Ativar
   animações").

3. **Campanha (`sections/suppet-campaign.liquid`)**
   Os selos flutuantes ("+ disposição", "+ mobilidade", "+ equilíbrio")
   não têm a animação de flutuar da referência — removida a pedido,
   junto com o carrossel de produtos da seção (deixamos só um produto
   fixo, sem sistema de troca automática).

4. **Sanfona do produto (`sections/suppet-product-accordion.liquid`)**
   Abre/fecha instantâneo (`display: none/block`), sem a transição suave
   de altura (`max-height`) nem a rotação do ícone da referência —
   removido a pedido.

5. **Cabeçalho (`sections/suppet-header-skin.liquid`)**
   Sem o efeito de encolher/ficar translúcido ao rolar a página
   (`.site-header.shrink` na referência) — já estava assim antes desta
   rodada de trabalho, documentado no próprio arquivo.

6. **Hover inconsistente entre cards de produto**
   - **Com hover** (igual à referência: sobe + zoom na imagem):
     `sections/suppet-products.liquid` ("Os 4 superpoderes", home) e
     `sections/suppet-benefits.liquid` ("Universo Suppet").
   - **Sem hover** (diferente da referência):
     `sections/suppet-product-related.liquid` ("Outros superpoderes",
     página de produto) e `sections/suppet-product-unique.liquid`
     (petals de "O que torna único").
   Essa divergência não foi intencional — nas seções mais recentes,
   priorizamos "sem animação" de forma mais rígida e isso quebrou a
   consistência visual entre partes que deveriam se comportar igual.
   Ainda não decidimos se a solução é adicionar hover nas que faltam ou
   remover das que têm.

## Outras diferenças (não são animação)

7. **Galeria do produto não é sticky**
   Na referência, a imagem do produto (`.gallery`) fica fixa na tela
   (`position: sticky; top: 110px`) enquanto a coluna de texto ao lado
   rola. Em `sections/suppet-product-hero.liquid` a imagem rola junto
   com o resto da página.

8. **Mensagem de sucesso da newsletter sem ícone**
   Na referência, o aviso de cadastro confirmado tem um ícone (check/mail)
   junto do texto. Em `sections/suppet-newsletter.liquid` a mensagem de
   sucesso é só texto.
