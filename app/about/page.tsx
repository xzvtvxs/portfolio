import AboutMe from "@/components/About/AboutMe/AboutMe";
import css from "./page.module.css";
import Skillset from "@/components/About/Skillset/Skillset";
import Tools from "@/components/About/Tools/Tools";
import GithubStatistics from "@/components/About/GithubStatistics/GithubStatistics";
interface PageProps {}
const Page = ({}: PageProps) => {
  return (
    <div className={css["page"]}>
      <AboutMe />
      <Skillset />
      <Tools />
      <GithubStatistics />
    </div>
  );
};

export default Page;
