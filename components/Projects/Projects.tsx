import ProjectList from "./ProjectList/ProjectList";
import css from "./Projects.module.css";
interface ProjectsProps {}
const Projects = ({}: ProjectsProps) => {
  return (
    <div className={css["projects"]}>
      <ProjectList />
    </div>
  );
};

export default Projects;
