import style from "../styles/Desc.module.scss";
function Desc(props) {
  return (
    <div className={style.desc}>
      <p>{props.children}</p>
    </div>
  );
}

export default Desc;
