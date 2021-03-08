import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import styles from "../styles/PostDet.module.scss";
function PostDet(props) {
  return (
    <div className={styles.icon}>
      <p>{props.author}</p>
      <ChatBubbleOutlineIcon />
    </div>
  );
}

export default PostDet;
