import about from "./about";
import general from "./general";
import projects from "./projects";

export default { about, projects, ...general } as const;
