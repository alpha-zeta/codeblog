import style from "../../styles/Header.module.scss";
function Header(props) {
  return (
    <div
      className={
        "text-gray-900 dark:text-gray-100" +
        " " +
        props.className +
        " " +
        props.weight
      }
    >
      {props.weight == "h1" ? (
        <h1
          className={style.genHead + " " + props.type + " " + props.className}
        >
          {props.children}
        </h1>
      ) : props.weight == "h2" ? (
        <h2
          className={style.genHead + " " + props.type + " " + props.className}
        >
          {props.children}
        </h2>
      ) : props.weight == "h3" ? (
        <h3
          className={style.genHead + " " + props.type + " " + props.className}
        >
          {props.children}
        </h3>
      ) : null}
    </div>
  );
}

export default Header;
