import style from "../styles/ToolBar.module.scss";
function Sign(props) {
  return (
    <div>
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
    </div>
  );
}

export default Sign;
