import { getProjects } from "@/services/projectsService";
import css from "./ProjectList.module.css";
import ProjectItem from "../ProjectItem/ProjectItem";

const ProjectList = async () => {
  const projects = await getProjects();
  return (
    <div className={css["projectList"]}>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <ProjectItem project={project} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectList;
