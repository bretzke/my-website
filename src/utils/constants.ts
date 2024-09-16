export const defaultAvatarImage = "/images/default-avatar.png";

export const companiesLogo = {
  blip: "/images/companies/blip.png",
  adsomos: "/images/companies/adsomos.jpeg",
  litoralcar: "/images/companies/litoralcar.webp",
};

export const projectsInfo = {
  wbShop: {
    logo: "/images/projects/wb-shop.png",
    repo: "https://github.com/bretzke/wb-shop",
    site: "https://wb-shop-seven.vercel.app/",
  },
};

export const apiPaths = {
  feedbacks: "/api/feedbacks",
};

export const myUserInfo = {
  name: "Will",
  avatarUrl: "/images/profile.jpg",
};

export const publishedDate = new Date("2024-09-15 12:00:00");

export interface StaticPageProps {
  params: {
    locale: string;
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
