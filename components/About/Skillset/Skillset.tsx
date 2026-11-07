import css from "./Skillset.module.css";
interface SkillsetProps {}
const Skillset = ({}: SkillsetProps) => {
  const skillsArr = [
    {
      descr: "React",
      descColor: "61DAFB",
      logo: "react",
      logoColor: "61DAFB",
      background: "8B5CF6",
    },
    {
      descr: "NextJS",
      descColor: "FFFFFF",
      logo: "nextdotjs",
      logoColor: "FFFFFF",
      background: "8B5CF6",
    },
    {
      descr: "JavaScript",
      descColor: "F7DF1E",
      logo: "javascript",
      logoColor: "F7DF1E",
      background: "8B5CF6",
    },
    {
      descr: "TypeScript",
      descColor: "3178C6",
      logo: "typescript",
      logoColor: "3178C6",
      background: "8B5CF6",
    },
    {
      descr: "HTML",
      descColor: "E34F26",
      logo: "html5",
      logoColor: "E34F26",
      background: "8B5CF6",
    },
    {
      descr: "CSS",
      descColor: "1572B6",
      logo: "css",
      logoColor: "1572B6",
      background: "8B5CF6",
    },
    {
      descr: "Vite",
      descColor: "646CFF",
      logo: "vite",
      logoColor: "646CFF",
      background: "8B5CF6",
    },
    {
      descr: "GitHub",
      descColor: "FFFFFF",
      logo: "github",
      logoColor: "FFFFFF",
      background: "8B5CF6",
    },
    {
      descr: "Git",
      descColor: "F05032",
      logo: "git",
      logoColor: "F05032",
      background: "8B5CF6",
    },
    {
      descr: "Vercel",
      descColor: "FFFFFF",
      logo: "vercel",
      logoColor: "FFFFFF",
      background: "8B5CF6",
    },
    {
      descr: "AWS",
      descColor: "FF9900",
      logo: "amazonwebservices",
      logoColor: "FF9900",
      background: "8B5CF6",
    },
    {
      descr: "Node.js",
      descColor: "5FA04E",
      logo: "nodedotjs",
      logoColor: "5FA04E",
      background: "8B5CF6",
    },
    {
      descr: "MongoDB",
      descColor: "47A248",
      logo: "mongodb",
      logoColor: "47A248",
      background: "8B5CF6",
    },
    {
      descr: "Supabase",
      descColor: "3ECF8E",
      logo: "supabase",
      logoColor: "3ECF8E",
      background: "8B5CF6",
    },
    {
      descr: "PostgreSQL",
      descColor: "4169E1",
      logo: "postgresql",
      logoColor: "4169E1",
      background: "8B5CF6",
    },
  ];

  return (
    <div className={css["skillset"]}>
      <h2>Professional Skillset</h2>
      <ul>
        {skillsArr.map((skill) => (
          <li
            key={skill.descr}
            style={{
              border: `1px solid #${skill.descColor}`,
            }}
            className={css.skillSetElem}
          >
            <img
              src={`https://img.shields.io/badge/${skill.descr}-${skill.background}?logo=${skill.logo}&logoColor=${skill.logoColor}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skillset;
