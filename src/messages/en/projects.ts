export default {
  wbShop: {
    title: "WB Shop",
    description:
      "This project was built with Next.js using Shadcn/UI for the component library and Tailwind CSS for styling. Additionally, an API integration with Stripe was implemented to display the products registered on the platform and to create payment links through the API. For managing the shopping cart state, Zustand was used, allowing me to validate my knowledge in this powerful library through this project.<br></br><br></br><i>Note: The payment link is in test mode, to complete it use a test card that Stripe provides in its documentation: <stripedoc>https://docs.stripe.com/testing</stripedoc></i>",
  },
  myWebsite: {
    title: "My Website",
    description:
      "The purpose of this project is to centralize and showcase my portfolio in an organized manner. For the front-end, I used Next.js 14 along with Shadcn/UI to create a modern and responsive interface. On the back-end, I opted for Next.js API Routes integrated with Prisma, using a PostgreSQL database to store user feedback. Additionally, I implemented site internationalization, utilizing Next.js routes to support multiple languages.",
  },
  dictionary: {
    title: "Web Scraping Dictionary",
    description:
      "This project was developed as part of a practical study on web scraping, with the goal of consolidating acquired knowledge through an agile and functional implementation. The application allows users to search for words in Portuguese, centralizing the results and providing them in a fast and intuitive way, creating an efficient and comprehensive search experience.<br></br><br></br>When a user performs a search, the system uses Next.js API Routes to send a request to the backend, which then queries two online Portuguese dictionaries. These dictionaries return the HTML content of the related pages, which is processed with the help of the Cheerio library to facilitate the extraction of relevant information. After this step, the structured data is sent back to the frontend, where it is displayed to the user in an organized manner.",
  },
  repo: "Repository",
  website: "Website",
} as const;
