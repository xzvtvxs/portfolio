import css from "./AboutMe.module.css";
interface AboutMeProps {}
const AboutMe = ({}: AboutMeProps) => {
  return (
    <div className={css["aboutMe"]}>
      <div>
        <h2>Know Who I'M</h2>
        <p>
          Hello everyone! I’m Ivan Fotin from Kyiv, Ukraine. I am currently
          looking for a job in the field of software development.
        </p>
        <p>{'"Strive to build things that make a difference!" Ivan'}</p>
      </div>
      <div>
        <img
          src="https://soumyajit.vercel.app/static/media/about.aee0f771fbfc1e7b8fa8.png"
          alt="boy"
          width={517}
          height={356}
        />
      </div>
    </div>
  );
};

export default AboutMe;
