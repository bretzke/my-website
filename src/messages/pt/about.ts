export default {
  experiences: {
    title: "Experiências",
    vellochat: {
      company: "Vellochat",
      startDate: "Outubro 202",
      endDate: "ATUALMENTE",
      roles: {
        founder: {
          title: "Fundador",
          description:
            "Como fundador da Vellochat, lidero tanto a arquitetura técnica quanto a estratégia de Go-to-Market da plataforma, focando em escalabilidade e automação via a API Oficial do WhatsApp Business (Meta).<br></br><br></br><h3>Estratégia de Negócios e Vendas:</h3><list><item>Modelo de Negócios SaaS: Estruturei um modelo de receita recorrente (baseado em assinatura) projetado para resolver os pontos de dor das empresas que buscam um atendimento ao cliente profissionalizado sem depender de soluções de terceiros instáveis.</item><item>Vendas e Sucesso do Cliente: Dirigi o prospecting ativo e a fechamento de novos contratos, identificando gargalos operacionais e entregando soluções de automação personalizadas.</item></list><br></br><h3>Engenharia e Produto:</h3><list><item>Arquitetura Multitenant: Desenvolvi uma plataforma escalável desde o zero para suportar múltiplas organizações com isolamento total de dados e segurança.</item><item>Motor de Fluxo Inteligente: Criei um sistema de gerenciamento de contexto que permite automações complexas, incluindo variáveis personalizadas, execução de scripts e requisições HTTP em tempo real.</item><item>Alta Disponibilidade: Implementei um sistema de processamento assíncrono baseado em eventos usando Node.js e RabbitMQ, garantindo resiliência ao lidar com milhares de mensagens concorrentes.</item></list>",
        },
      },
    },
    iob: {
      company: "Grupo IOB",
      startDate: "Janeiro 2025",
      endDate: "Dezembro 2025",
      roles: {
        devSenior: {
          title: "Desenvolvedor Full Stack Sênior",
          description:
            "<list><item>Mantive e evoluí uma aplicação worker crítica responsável pelo processamento de todos os documentos fiscais da plataforma, consumindo dados de forma assíncrona a partir de filas AWS SQS;</item><item>Mantive e otimizei fluxos que persistiam metadados não estruturados de notas fiscais no MongoDB, garantindo a integridade e a alta performance da camada de dados NoSQL;</item><item>Realizei a manutenção da aplicação de gerenciamento de documentos, utilizando AWS S3 para lidar com o ciclo de vida completo dos arquivos, garantindo upload otimizado e armazenamento seguro.</item></list>",
        },
      },
    },
    blip: {
      company: "Blip",
      startDate: "Dezembro 2021",
      endDate: "Dezembro 2024",
      roles: {
        senior: {
          title: "Engenheiro de Software Sênior",
          startDate: "Janeiro 2024",
          endDate: "Dezembro 2024",
          description:
            "<list><item>Conduzi otimizações significativas no micro front-end, resultando em melhorias no carregamento da aplicação de 20 segundos para 3 segundos;</item><item>Liderei e participei ativamente da evolução contínua do produto;</item><item>Realizei revisões de código detalhadas para garantir a qualidade e o desempenho do sistema;</item><item>Entreguei demandas com alto padrão de qualidade dentro dos prazos estabelecidos.</item></list>",
        },
        midLevel: {
          title: "Engenheiro de Software Pleno",
          startDate: "Setembro 2022",
          endDate: "Dezembro 2023",
          description:
            "<list><item>Realizei melhorias contínuas em uma aplicação que já processava mais de 50 milhões de operações de leitura e escrita no banco de dados por hora;</item><item>Utilizei Redis para melhorar a performance da aplicação;</item><item>Utilizei Grafana para observabilidade e monitoramento da aplicação back-end;</item><item>Realizei testes de carga para validar melhorias de uma release para outra.</item></list>",
        },
        chatbot: {
          title: "Desenvolvedor de Chatbot",
          startDate: "Dezembro 2021",
          endDate: "Agosto 2022",
          description:
            "<list><item>Criei fluxos de conversação utilizando uma ferramenta low code;</item><item>Desenvolvi scripts em Javascript para o fluxo;</item><item>Integrei APIs em C# para conexão com a ferramenta low code;</item><item>Realizei implantações de chatbots e APIs.</item></list>",
        },
      },
    },
    adsomos: {
      company: "Adsomos",
      startDate: "Janeiro 2021",
      endDate: "Novembro 2021",
      roles: {
        backend: {
          title: "Desenvolvedor back-end",
          description:
            "<list><item>Desenvolvi uma lógica de cálculo de frete assíncrona em JavaScript que reduziu o tempo de processamento de 15-20 segundos para 3 segundos ou menos;</item><item>Eliminei o processo de deploy manual e padronizei o deploy automático utilizando uma ferramenta de gatilho do GitLab;</item><item>Realizei integrações com marketplaces, plataformas de pagamento, transportadoras e ERPs;</item><item>Realizei integração com o PIX utilizando o manual do Banco Central.</item></list>",
        },
      },
    },
    litoralcar: {
      company: "Litoralcar",
      startDate: "Julho 2020",
      endDate: "Janeiro 2021",
      roles: {
        web: {
          title: "Desenvolvedor Web",
          description:
            "<list><item>Desenvolvi sites responsivos com Bootstrap;</item><item>Realizei entregas sobre demandas dos clientes dentro do prazo estipulado;</item><item>Dei manutenção a sites legados com versões anteriores ao HTML 5.</item></list>",
        },
      },
    },
  },
  education: {
    title: "Formação acadêmica",
    fam: {
      course: "Graduado em sistemas de informação",
      description:
        "<list><item>Fundamentos da programação;</item><item>Desenvolvimento web;</item><item>Banco de dados;</item><item>Inteligência artifical;</item><item>Engenharia de software;</item><item>Outros.</item></list>",
      startDate: "Março 2020",
      endDate: "Junho 2024",
    },
    ftr: {
      course:
        "Pós-graduação - Especialização em desenvolvimento full stack e inteligência artificial",
      description:
        "<list><item>Design Patterns;</item><item>Arquitetura de software;</item><item>Microsserviços;</item><item>Docker & Docker Compose;</item><item>CI/CD com GitHub Actions;</item><item>Observabilidade (Prometheus/Grafana);</item><item>Inteligência Artificial e Modelos de Linguagem;</item><item>Chatbots;</item><item>Fine-tuning;</item><item>Outros.</item></list>",
      startDate: "Janeiro 2025",
      endDate: "ATUALMENTE",
    },
  },
  skills: {
    title: "Habilidades",
    programmingLanguage: "Linguagem de programação",
    database: "Banco de dados",
    frameworks: "Frameworks",
    tools: "Ferramentas",
    others: "Outros",
  },
} as const;
