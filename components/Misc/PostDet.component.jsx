import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import styles from "../../styles/PostDet.module.scss";
import Link from "next/link";
import DateComp from "./DateComp.componenet";
function PostDet(props) {
  return (
    <div
      className={
        props.type == "Small"
          ? styles.icon + " " + styles.small
          : props.type == "Large"
          ? styles.Large + " " + styles.icon
          : styles.icon
      }
    >
      <div className={styles.avatar}></div>
      <p>{props.author}</p>
      {props.type == "Large" ? (
        <Link href="https://www.instagram.com/anish_and_majhi/">
          <a className={styles.insta}>
            <p>@anish_and_majhi</p>
          </a>
        </Link>
      ) : null}
      <DateComp />

      <div className={styles.cmt}>
        <ChatBubbleOutlineIcon className={styles.svg} />
        <p>{props.id}</p>
      </div>
    </div>
  );
}

export default PostDet;
