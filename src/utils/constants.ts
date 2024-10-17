export const defaultAvatarImage = "/images/default-avatar.png";

export const companiesLogo = {
  blip: "/images/companies/blip.png",
  adsomos: "/images/companies/adsomos.jpeg",
  litoralcar: "/images/companies/litoralcar.webp",
  fam: "/images/companies/fam.png",
};

export const projectsInfo = {
  wbShop: {
    logo: "/images/projects/wb-shop.png",
    repo: "https://github.com/bretzke/wb-shop",
    site: "https://wb-shop-seven.vercel.app/",
  },
  myWebsite: {
    logo: "/images/projects/my-website.png",
  },
};

export const apiPaths = {
  feedbacks: "/api/feedbacks",
};

export const myUserInfo = {
  name: "Will",
  avatarUrl: "/images/profile.jpg",
};

export const publishedDate = new Date("2024-09-23 12:00:00");

export interface StaticPageProps {
  params: {
    locale: "en" | "pt";
  };
}

export const mySocialMedias = {
  email: {
    label: "Email",
    link: "mailto:willian.bretzke@gmail.com",
  },
  github: {
    link: "https://github.com/bretzke",
    image: "/images/social-medias/github.svg",
    label: "GitHub",
  },
  linkedin: {
    link: "https://www.linkedin.com/in/willian-bretzke/",
    label: "LinkedIn",
  },
};

export const skillsLogo = {
  cSharp: "/images/skills/c-sharp.svg",
  php: "/images/skills/php.svg",
  typescript: "/images/skills/typescript.svg",
  // DB
  mysql: "/images/skills/mysql.svg",
  postgresql: "/images/skills/postgresql.svg",
  cassandra: "/images/skills/cassandra.svg",
  mongodb: "/images/skills/mongodb.svg",
  firebase: "/images/skills/firebase.svg",
  // Frameworks
  react: "/images/skills/react.svg",
  angular: "/images/skills/angular.svg",
  next: "/images/skills/next.svg",
  nest: "/images/skills/nest.svg",
  // Tools
  git: "/images/skills/git.svg",
  docker: "/images/skills/docker.svg",
  azure: "/images/skills/azure.svg",
  figma: "/images/skills/figma.svg",
  // Others
  node: "/images/skills/node.svg",
  html: "/images/skills/html.svg",
  css: "/images/skills/css.svg",
  sass: "/images/skills/sass.svg",
  tailwind: "/images/skills/tailwind.svg",
};
