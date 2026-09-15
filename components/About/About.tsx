import css from "./About.module.css";
interface AboutProps {}
const About = ({}: AboutProps) => {
  return <div className={css["about"]}>About</div>;
};

export default About;
