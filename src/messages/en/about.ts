export default {
  experiences: {
    title: "Experiences",
    iob: {
      company: "Grupo IOB",
      startDate: "January 2025",
      endDate: "PRESENT",
      roles: {
        devSenior: {
          title: "Senior Full Stack Developer",
          description: "",
        },
      },
    },
    blip: {
      company: "Blip",
      startDate: "December 2021",
      endDate: "December 2024",
      roles: {
        senior: {
          title: "Senior Software Engineer",
          startDate: "January 2024",
          endDate: "PRESENT",
          description:
            "<list><item>Conducted significant optimizations on the micro front-end, resulting in improvements in application loading from 20 seconds to 3 seconds or less;</item><item>Led and actively participated in the continuous evolution of the product;</item><item>Carried out detailed code reviews to ensure the quality and performance of the system;</item><item>Delivered demands with a high standard of quality within the established deadlines.</item></list>",
        },
        midLevel: {
          title: "Mid-level Software Engineer",
          startDate: "September 2022",
          endDate: "December 2023",
          description:
            "<list><item>I made continuous improvements to an application that was already processing more than 50 million database read and write operations per hour;</item><item>Used Redis to improve the application's performance;</item><item>Used Grafana for observability and monitoring of the back-end application;</item><item>I carried out load tests to validate improvements from one release to the next.</item></list>",
        },
        chatbot: {
          title: "Chatbot Developer",
          startDate: "December 2021",
          endDate: "August 2022",
          description:
            "<list><item>Created conversation flows using a low code tool;</item><item>Developed Javascript scripts for the flow;</item><item>I integrated APIs in C# to connect to the low code tool;</item><item>Implemented chatbots and APIs.</item></list>",
        },
      },
    },
    adsomos: {
      company: "Adsomos",
      startDate: "January 2021",
      endDate: "November 2021",
      roles: {
        backend: {
          title: "Back-end Developer",
          description:
            "<list><item>I developed an asynchronous freight calculation logic in JavaScript that reduced the processing time from 15-20 seconds to 3 seconds or less;</item><item>I eliminated the manual deployment process and standardized automatic deployment using a GitLab trigger tool;</item><item>Made integrations with marketplaces, payment platforms, carriers and ERPs;</item><item>I integrated with PIX using the Central Bank manual.</item></list>",
        },
      },
    },
    litoralcar: {
      company: "Litoralcar",
      startDate: "July 2020",
      endDate: "January 2021",
      roles: {
        web: {
          title: "Web Developer",
          description:
            "<list><item>Developed responsive websites with Bootstrap;</item><item>Delivered on client demands within the stipulated timeframe;</item><item>I maintained legacy websites with versions prior to HTML5.</item></list>",
        },
      },
    },
  },
  education: {
    title: "Academic background",
    fam: {
      course: "Bachelor's degree in Information Systems.",
      description:
        "<list><item>Programming Fundamentals;</item><item>Web Development;</item><item>Databases;</item><item>Artificial Intelligence;</item><item>Software Engineering;</item><item>Others.</item></list>",
      startDate: "March 2020",
      endDate: "June 2024",
    },
    ftr: {
      course: "Postgraduate Degree – Specialization in Full Stack Development and Artificial Intelligence",
      description:
        "<list><item>Design Patterns;</item><item>Software Architecture;</item><item>Microservices;</item><item>Docker & Docker Compose;</item><item>CI/CD with GitHub Actions;</item><item>Observability (Prometheus/Grafana);</item><item>Artificial Intelligence and Language Models;</item><item>Chatbots;</item><item>Fine-tuning;</item><item>Others.</item></list>",
      startDate: "January 2025",
      endDate: "PRESENT",
    },
  },
  skills: {
    title: "Skills",
    programmingLanguage: "Programming language",
    database: "Database",
    frameworks: "Frameworks",
    tools: "Tools",
    others: "Others",
  },
} as const;
