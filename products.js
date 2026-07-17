// ============================================================
// PRODUTOS DA LOJA
// Para adicionar um produto novo, copie um bloco { ... } e
// cole o link de checkout do Kiwify em "checkoutUrl".
// ============================================================

const PRODUCTS = [
  {
    id: "engenharia-software-ia",
    badge: "Livro-Curso · PDF",
    title: "Engenharia de Software na Era da IA",
    subtitle:
      "Como aprender a profissão de verdade quando a máquina escreve o código.",
    description:
      "Seis partes, cinco laboratórios de programação (Python, Java, C e PHP), um projeto guiado e um plano de estudo de seis meses. Com quizzes, checklists de autoavaliação e soluções comentadas no apêndice.",
    features: [
      "58 páginas em formato de curso",
      "5 laboratórios com critérios de aceitação",
      "Projeto guiado: marketplace completo",
      "Plano de ação de 30 dias + plano de 6 meses",
      "Acesso imediato após o pagamento",
    ],
    image: "assets/capa-engenharia-software-ia.png",
    price: "R$ 19,99",
    priceNote: "pagamento único",
    // >>> COLE AQUI O LINK DE CHECKOUT DO KIWIFY <<<
    checkoutUrl: "https://pay.kiwify.com.br/S0zc5tr",
  },

  // Exemplo de próximo produto (remova o comentário e edite):
  // {
  //   id: "meu-proximo-produto",
  //   badge: "E-book",
  //   title: "Título do produto",
  //   subtitle: "Frase curta de apoio.",
  //   description: "Descrição mais longa do produto.",
  //   features: ["Benefício 1", "Benefício 2"],
  //   image: "assets/imagem.png",
  //   priceOld: "",
  //   price: "R$ 29,90",
  //   priceNote: "pagamento único",
  //   checkoutUrl: "https://pay.kiwify.com.br/OUTRO-LINK",
  // },
];
