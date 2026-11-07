import css from "./GithubStatistics.module.css";
interface GithubStatisticsProps {}
const GithubStatistics = ({}: GithubStatisticsProps) => {
  return (
    <div className={css["githubStatistics"]}>
      <img
        src={
          "https://gh-heat.anishroy.com/api/xzvtvxs/svg?theme=purple&darkMode=true"
        }
      />
    </div>
  );
};

export default GithubStatistics;
