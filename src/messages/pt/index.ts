import about from "./about";
import feedbacks from "./feedbacks";
import general from "./general";
import posts from "./posts";
import projects from "./projects";

export default { about, projects, feedbacks, posts, ...general } as const;
