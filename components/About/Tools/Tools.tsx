import css from "./Tools.module.css";
interface ToolsProps {}
const Tools = ({}: ToolsProps) => {
  const toolsArr = [
    {
      descr: "Figma",
      descColor: "FFFFFF",
      logo: "figma",
      logoColor: "F24E1E",
      background: "8B5CF6",
    },
    {
      descr: "Google Chrome",
      descColor: "FFFFFF",
      logo: "googlechrome",
      logoColor: "4285F4",
      background: "8B5CF6",
    },
    {
      descr: "Postman",
      descColor: "FFFFFF",
      logo: "postman",
      logoColor: "FF6C37",
      background: "8B5CF6",
    },
    {
      descr: "VSCode",
      descColor: "FFFFFF",
      logo: "codecrafters",
      logoColor: "007ACC",
      background: "8B5CF6",
    },
  ];
  return (
    <div className={css["tools"]}>
      <h2>Professional Skillset</h2>
      <ul>
        {toolsArr.map((tool) => (
          <li key={tool.descr}>
            <img
              src={`https://img.shields.io/badge/${tool.descr}-${tool.background}?logo=${tool.logo}&logoColor=${tool.logoColor}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tools;
