import css from "./Header.module.css";
import Link from "next/link";
interface HeaderProps {}
const Header = ({}: HeaderProps) => {
  return (
    <div className={css["header"]}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/resume">Resume</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
