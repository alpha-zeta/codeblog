import Link from "next/link";
import style from "../styles/ToolBar.module.scss";
function ToolBar(props) {
  return (
    <div className={style.tools}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact us</a>
      </Link>
    </div>
  );
}

export default ToolBar;
