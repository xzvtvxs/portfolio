import { Project } from "@/types/item";
import css from "./ProjectItem.module.css";
import Link from "next/link";
interface ProjectItemProps {
  project: Project;
}
const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <div className={css["projectItem"]}>
      <img src={project.image} alt="project image" />
      <p>{project.title}</p>
      <p>{project.description}</p>
      <Link href={project.gitrepo}>GitHub</Link>
      <Link href={project.livedemo}>Live Demo</Link>
    </div>
  );
};

export default ProjectItem;
