import css from "./page.module.css";
interface PageProps {}
const Page = ({}: PageProps) => {
  return <div className={css["page"]}>Page</div>;
};

export default Page;
