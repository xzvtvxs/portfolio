import Projects from "@/components/Projects/Projects";
import css from "./page.module.css";
interface PageProps {}
const Page = ({}: PageProps) => {
  return (
    <div className={css["page"]}>
      <Projects />
    </div>
  );
};

export default Page;
