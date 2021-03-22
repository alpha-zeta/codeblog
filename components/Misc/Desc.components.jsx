import style from "../../styles/Desc.module.scss";
function Desc(props) {
  return (
    <div className={style.desc + " " + props.className}>
      <p className="font-serif">{props.children}</p>
    </div>
  );
}

export default Desc;
