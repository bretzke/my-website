import about from "./about";
import feedbacks from "./feedbacks";
import general from "./general";
import projects from "./projects";

export default { about, projects, feedbacks, ...general } as const;
