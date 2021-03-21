import style from "../../styles/Header.module.scss";
function Header(props) {
  return (
    <div>
      {props.weight == "h1" ? (
        <h1
          className={
            props.type == "Big"
              ? style.Big + " " + style.genHead
              : props.type == "Large"
              ? style.genHead +
                " " +
                style.Large +
                " lg:text-5xl md:text-5xl sm:text-3xl text-5xl"
              : style.Small + " " + style.genHead
          }
        >
          {props.children}
        </h1>
      ) : props.weight == "h2" ? (
        <h2
          className={
            props.type == "Big"
              ? style.Big + " " + style.genHead
              : props.type == "Large"
              ? style.genHead + " " + style.Large
              : style.Small + " " + style.genHead
          }
        >
          {props.children}
        </h2>
      ) : props.weight == "h3" ? (
        <h3
          className={
            props.type == "Big"
              ? style.Big + " " + style.genHead
              : props.type == "Large"
              ? style.Large + " " + style.genHead
              : style.Small + " " + style.genHead
          }
        >
          {props.children}
        </h3>
      ) : null}
    </div>
  );
}

export default Header;
