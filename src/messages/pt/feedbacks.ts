export default {
  title: "Quer me deixar uma mensagem?",
  cta: "Clique aqui",
  formFeedback: {
    title: "Sua opinião é importante!",
    body: "Deixe seu feedback sobre o site. Caso já tenhamos trabalhado juntos, compartilhe sua experiência!",
    fields: {
      name: {
        label: "Nome completo",
        placeholder: "Informe seu nome completo",
        requiredError: "Nome completo é obrigatório",
      },
      siteUrl: {
        label: "URL do site",
        placeholder: "Informe uma url do seu site/Linkedin/Github",
      },
      avatarUrl: {
        label: "URL foto de perfil",
        placeholder: "Informe a url da sua foto de perfil",
      },
      message: {
        label: "Mensagem",
        placeholder:
          "Deixe aqui a sua mensagem sobre o site e/ou experiência profissional que já tivemos juntos :)",
        requiredError: "Mensagem é obrigatória",
      },
      successToast: {
        title: "Feedback enviado!",
        description:
          "Seu feedback foi enviado e está pendente de avaliação. Obrigado por contribuir!",
      },
      errorToast: {
        title: "Erro ao enviar feedback!",
        description:
          "Ocorreu um problema ao enviar seu feedback. Por favor, tente novamente mais tarde.",
      },
    },
    btnSendFeedback: "Enviar feedback",
    btnSendingFeedback: "Enviando...",
  },
  optional: "Opcional",
} as const;
