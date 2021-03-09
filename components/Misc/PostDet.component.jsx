import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import styles from "../../styles/PostDet.module.scss";
function PostDet(props) {
  return (
    <div
      className={
        props.type == "Small" ? styles.icon + " " + styles.small : styles.icon
      }
    >
      <div className={styles.avatar}></div>
      <p>{props.author}</p>
      <div className={styles.cmt}>
        <ChatBubbleOutlineIcon className={styles.svg} />
        <p>{props.id}</p>
      </div>
    </div>
  );
}

export default PostDet;
