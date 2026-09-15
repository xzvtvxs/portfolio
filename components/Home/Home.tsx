import css from "./Home.module.css";
interface HomeProps {}
const Home = ({}: HomeProps) => {
  return <div className={css["home"]}>Home</div>;
};

export default Home;
