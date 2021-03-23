import style from "../../styles/Logo.module.scss";
import Link from "next/link";
function Logo(props) {
  return (
    <Link href="/">
      <a>
        <div>
          <h2 className={style.logo + " text-gray-900 dark:text-gray-100"}>
            Blog.
          </h2>
        </div>
      </a>
    </Link>
  );
}

export default Logo;
