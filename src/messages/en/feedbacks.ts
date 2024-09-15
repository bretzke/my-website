export default {
  title: "Want to leave me a message?",
  cta: "Click here",
  formFeedback: {
    title: "Your opinion matters!",
    body: "Leave your feedback about the website. If we have worked together before, feel free to share your experience!",
    fields: {
      name: {
        label: "Full Name",
        placeholder: "Enter your full name",
        requiredError: "Full name is required",
      },
      siteUrl: {
        label: "Website URL",
        placeholder: "Enter a URL of your site/LinkedIn/GitHub",
      },
      avatarUrl: {
        label: "Profile picture URL",
        placeholder: "Enter the URL of your profile picture",
      },
      message: {
        label: "Message",
        placeholder:
          "Leave your message about the website and/or our professional experience together :)",
        requiredError: "Message is required",
      },
      successToast: {
        title: "Feedback sent!",
        description:
          "Your feedback has been submitted and is pending review. Thank you for contributing!",
      },
      errorToast: {
        title: "Error sending feedback!",
        description:
          "There was an issue submitting your feedback. Please try again later.",
      },
    },
    btnSendFeedback: "Send feedback",
    btnSendingFeedback: "Sending...",
  },
} as const;
