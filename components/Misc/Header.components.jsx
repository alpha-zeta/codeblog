import style from "../../styles/Header.module.scss";
function Header(props) {
  return (
    <div>
      <h1
        className={
          props.type == "Big"
            ? style.Big + " " + style.genHead
            : props.type == "Large"
            ? style.Large + " " + style.genHead
            : style.Small + " " + style.genHead
        }
      >
        {props.children}
      </h1>
    </div>
  );
}

export default Header;
