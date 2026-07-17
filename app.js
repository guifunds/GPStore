// Renderiza os cards de produto a partir de products.js
(function () {
  const grid = document.getElementById("product-grid");

  const cards = PRODUCTS.map(function (p) {
    const features = p.features
      .map(function (f) {
        return '<li><span class="check">✓</span>' + f + "</li>";
      })
      .join("");

    const priceOld = p.priceOld
      ? '<span class="price-old">' + p.priceOld + "</span>"
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
      '      <a class="btn btn-primary btn-buy" href="' + p.checkoutUrl + '" target="_blank" rel="noopener">' +
      "        Comprar agora" +
      "      </a>" +
      "    </div>" +
      "  </div>" +
      "</article>"
    );
  });

  grid.innerHTML = cards.join("");
})();
