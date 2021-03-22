import style from "../../styles/Logo.module.scss";
function Logo(props) {
  return (
    <div>
      <h2 className={style.logo + " text-gray-900 dark:text-gray-100"}>
        Blog.
      </h2>
    </div>
  );
}

export default Logo;
