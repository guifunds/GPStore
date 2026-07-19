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
    // Páginas de amostra (deixe [] para não mostrar o botão "Ver amostra")
    sample: [
      "assets/amostra/pag-02.jpg",
      "assets/amostra/pag-23.jpg",
      "assets/amostra/pag-24.jpg",
      "assets/amostra/pag-25.jpg",
      "assets/amostra/pag-26.jpg",
      "assets/amostra/pag-27.jpg",
    ],
    price: "R$ 24,99",
    priceNote: "pagamento único",
    checkoutUrl: "https://pay.kiwify.com.br/S0zc5tr",
  },
  {
    id: "entrevistas-tecnicas",
    badge: "Livro-Curso · PDF · Vol. 02",
    title: "Entrevistas Técnicas",
    subtitle:
      "Os exercícios e testes que realmente caem nos processos seletivos de hoje.",
    description:
      "Seis partes, do jogo da entrevista à referência de consulta rápida: os padrões por trás das questões, soluções comentadas em Python, Java, C e PHP, e uma trilha de preparação completa, da fundação ao simulado.",
    features: [
      "49 páginas em formato de curso",
      "3 laboratórios cronometrados + simulados completos",
      "Caderno com 8 questões e soluções comentadas",
      "SQL, debugging, code review e system design",
      "Trilha de 12 etapas + banco de perguntas de screening",
    ],
    image: "assets/capa-entrevistas-tecnicas.png",
    sample: [
      "assets/amostra-entrevistas/pag-02.jpg",
      "assets/amostra-entrevistas/pag-16.jpg",
      "assets/amostra-entrevistas/pag-17.jpg",
      "assets/amostra-entrevistas/pag-18.jpg",
      "assets/amostra-entrevistas/pag-19.jpg",
      "assets/amostra-entrevistas/pag-20.jpg",
    ],
    price: "R$ 24,99",
    priceNote: "pagamento único",
    // Produto ainda sem checkout: botão vira "Em breve".
    // Quando lançar, troque para false e cole o link do Kiwify abaixo.
    comingSoon: true,
    checkoutUrl: "https://pay.kiwify.com.br/SEU-LINK-AQUI",
  },
];
