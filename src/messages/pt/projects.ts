export default {
  wbShop: {
    title: "WB Shop",
    description:
      "Esse projeto foi feito em Next.js utilizando o Shadcn/UI para biblioteca de componentes e o Tailwind CSS para estilização. Além disso, foi utilizado uma integração via API com o Stripe para exibir os produtos cadastrados na plataforma e também, criar links de pagamento através da API. Para gerenciamento do estado do carrinho de compras, foi utilizado o Zustand que através desse projeto, pude validar meus conhecimentos nessa poderosa biblioteca.<br></br><br></br><i>OBS: O link de pagamento está em modo teste, para finalizá-lo utilize um cartão de teste que o Stripe disponibiliza em sua documentação: <stripedoc>https://docs.stripe.com/testing</stripedoc></i>",
  },
  myWebsite: {
    title: "Meu Website",
    description:
      "A proposta deste projeto é centralizar e apresentar o meu portfólio de forma organizada. No front-end, utilizei o Next.js 14 em conjunto com Shadcn/UI para uma interface moderna e responsiva. No back-end, optei pelas API Routes do Next.js, integradas ao Prisma, com um banco de dados PostgreSQL para armazenar os feedbacks dos usuários. Além disso, implementei a internacionalização do site, aproveitando as rotas do Next.js para oferecer suporte a múltiplos idiomas.",
  },
  dictionary: {
    title: "Dicionário com web scraping",
    description:
      "Este projeto foi desenvolvido como parte de um estudo prático sobre web scraping, também conhecido como raspagem de dados, com o objetivo de consolidar os conhecimentos adquiridos por meio de uma implementação ágil e funcional. A aplicação permite a pesquisa de palavras em português, centralizando os resultados e disponibilizando-os de forma rápida e intuitiva, criando uma experiência de busca eficiente e completa.<br></br><br></br>Quando o usuário realiza uma pesquisa, o sistema utiliza as API Routes do Next.js para realizar uma requisição ao backend, que, por sua vez, consulta dois dicionários online de português. Esses dicionários retornam o conteúdo HTML das páginas relacionadas, que é então processado com o auxílio da biblioteca Cheerio para facilitar a extração das informações relevantes. Após essa etapa, os dados estruturados são retornados ao frontend, onde são exibidos ao usuário de forma organizada.",
  },
  repo: "Repositório",
  website: "Site",
} as const;
