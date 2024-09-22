import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { skillsLogo } from "@/utils/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface SkillGroupProps {
  skills: SkillProps[];
  title: string;
}

interface SkillProps {
  name: string;
  image: string;
}

export default function ListStacks() {
  const translate = useTranslations("about");

  const skills: SkillGroupProps[] = [
    {
      title: translate("skills.programmingLanguage"),
      skills: [
        // {
        //   name: "Node.js",
        //   image: skillsLogo.node,
        // },
        { name: "C#", image: skillsLogo.cSharp },
        { name: "PHP", image: skillsLogo.php },
        { name: "TypeScript", image: skillsLogo.typescript },
      ],
    },
    {
      title: translate("skills.database"),
      skills: [
        {
          name: "MySQL",
          image: skillsLogo.mysql,
        },
        {
          name: "PostgreSQL",
          image: skillsLogo.postgresql,
        },
        {
          name: "Cassandra",
          image: skillsLogo.cassandra,
        },
        {
          name: "MongoDB",
          image: skillsLogo.mongodb,
        },
        {
          name: "Firebase",
          image: skillsLogo.firebase,
        },
      ],
    },
    {
      title: translate("skills.frameworks"),
      skills: [
        {
          name: "React.js",
          image: skillsLogo.react,
        },
        {
          name: "Angular.js",
          image: skillsLogo.angular,
        },
        {
          name: "Next.js",
          image: skillsLogo.next,
        },
        {
          name: "Nest.js",
          image: skillsLogo.nest,
        },
      ],
    },
    {
      title: translate("skills.tools"),
      skills: [
        {
          name: "Git",
          image: skillsLogo.git,
        },
        {
          name: "Docker",
          image: skillsLogo.docker,
        },
        {
          name: "Figma",
          image: skillsLogo.figma,
        },
        {
          name: "Azure",
          image: skillsLogo.azure,
        },
      ],
    },
    {
      title: translate("skills.others"),
      skills: [
        {
          name: "Node.js",
          image: skillsLogo.node,
        },
        {
          name: "HTML",
          image: skillsLogo.html,
        },
        {
          name: "CSS",
          image: skillsLogo.css,
        },
        {
          name: "SASS",
          image: skillsLogo.sass,
        },
        {
          name: "Tailwind CSS",
          image: skillsLogo.tailwind,
        },
      ],
    },
  ];

  return (
    <>
      <h1 className="font-bold text-3xl text-center">
        {translate("skills.title")}
      </h1>

      {skills.map((skillGroup) => (
        <div key={skillGroup.title} className="flex flex-col gap-2">
          <h3 className="font-semibold text-xl border-b-2 border-b-foreground w-fit">
            {skillGroup.title}
          </h3>

          <div className="flex items-start gap-4 flex-wrap">
            {skillGroup.skills.map((skill) => (
              <Card
                key={skill.name}
                className="p-2 flex flex-row max-sm:flex-col items-center gap-2"
              >
                <CardHeader className="p-0">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </CardHeader>
                <CardContent className="p-0">{skill.name}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
      <div className="flex"></div>
    </>
  );
}
