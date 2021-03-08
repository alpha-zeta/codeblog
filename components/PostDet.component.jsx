import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import styles from "../styles/PostDet.module.scss";
function PostDet(props) {
  return (
    <div className={styles.icon}>
      <div className={styles.avatar}></div>
      <p>{props.author}</p>
      <ChatBubbleOutlineIcon className={styles.svg} />
    </div>
  );
}

export default PostDet;
