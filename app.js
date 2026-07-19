// Renderiza os cards de produto a partir de products.js
(function () {
  const grid = document.getElementById("product-grid");

  const cards = PRODUCTS.map(function (p, idx) {
    const features = p.features
      .map(function (f) {
        return '<li><span class="check">✓</span>' + f + "</li>";
      })
      .join("");

    const priceOld = p.priceOld
      ? '<span class="price-old">' + p.priceOld + "</span>"
      : "";

    const sampleBtn =
      p.sample && p.sample.length
        ? '<button class="btn btn-ghost btn-sample" data-product="' + idx + '">Ver amostra grátis</button>'
        : "";

    return (
      '<article class="product-card">' +
      '  <div class="product-media">' +
      '    <img src="' + p.image + '" alt="Capa de ' + p.title + '" />' +
      "  </div>" +
      '  <div class="product-body">' +
      '    <span class="product-badge">' + p.badge + "</span>" +
      '    <h3 class="product-title">' + p.title + "</h3>" +
      '    <p class="product-subtitle">' + p.subtitle + "</p>" +
      '    <p class="product-desc">' + p.description + "</p>" +
      '    <ul class="product-features">' + features + "</ul>" +
      '    <div class="product-buy">' +
      '      <div class="price-block">' +
      priceOld +
      '        <span class="price">' + p.price + "</span>" +
      '        <span class="price-note">' + p.priceNote + "</span>" +
      "      </div>" +
      '      <div class="buy-actions">' +
      sampleBtn +
      (p.comingSoon
        ? '        <span class="btn btn-disabled">Em breve</span>'
        : '        <a class="btn btn-primary btn-buy" href="' + p.checkoutUrl + '" target="_blank" rel="noopener">' +
          "          Comprar agora" +
          "        </a>") +
      "      </div>" +
      "    </div>" +
      "  </div>" +
      "</article>"
    );
  });

  grid.innerHTML = cards.join("");

  // ============ Modal de amostra ============
  const modal = document.createElement("div");
  modal.className = "sample-modal";
  modal.hidden = true;
  modal.innerHTML =
    '<div class="sample-backdrop"></div>' +
    '<div class="sample-dialog" role="dialog" aria-label="Amostra do produto">' +
    '  <div class="sample-topbar">' +
    '    <span class="sample-counter"></span>' +
    '    <button class="sample-close" aria-label="Fechar">✕</button>' +
    "  </div>" +
    '  <div class="sample-stage">' +
    '    <button class="sample-nav sample-prev" aria-label="Página anterior">‹</button>' +
    '    <div class="sample-page-wrap">' +
    '      <img class="sample-page" alt="Página de amostra" />' +
    '      <span class="sample-watermark">AMOSTRA</span>' +
    "    </div>" +
    '    <button class="sample-nav sample-next" aria-label="Próxima página">›</button>' +
    "  </div>" +
    '  <div class="sample-footer">' +
    '    <a class="btn btn-primary sample-buy" href="#" target="_blank" rel="noopener">Gostou? Comprar agora</a>' +
    "  </div>" +
    "</div>";
  document.body.appendChild(modal);

  const img = modal.querySelector(".sample-page");
  const counter = modal.querySelector(".sample-counter");
  const buyLink = modal.querySelector(".sample-buy");
  let pages = [];
  let current = 0;

  function show(i) {
    current = (i + pages.length) % pages.length;
    img.src = pages[current];
    counter.textContent = "Página " + (current + 1) + " de " + pages.length;
  }

  function open(product) {
    pages = product.sample;
    if (product.comingSoon) {
      buyLink.textContent = "Em breve";
      buyLink.classList.add("btn-disabled");
      buyLink.classList.remove("btn-primary");
      buyLink.removeAttribute("href");
    } else {
      buyLink.textContent = "Gostou? Comprar agora";
      buyLink.classList.add("btn-primary");
      buyLink.classList.remove("btn-disabled");
      buyLink.href = product.checkoutUrl;
    }
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    show(0);
  }

  function close() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  grid.addEventListener("click", function (e) {
    const btn = e.target.closest(".btn-sample");
    if (btn) open(PRODUCTS[Number(btn.dataset.product)]);
  });

  modal.querySelector(".sample-close").addEventListener("click", close);
  modal.querySelector(".sample-backdrop").addEventListener("click", close);
  modal.querySelector(".sample-prev").addEventListener("click", function () { show(current - 1); });
  modal.querySelector(".sample-next").addEventListener("click", function () { show(current + 1); });

  document.addEventListener("keydown", function (e) {
    if (modal.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
})();
