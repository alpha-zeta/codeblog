import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import styles from "../../styles/PostDet.module.scss";
import Image from "next/image";
import Link from "next/link";
import DateComp from "./DateComp.componenet";
import SocialShare from "./SocialShare.component";
function PostDet(props) {
  return (
    <div
      className={
        (props.type == "Small"
          ? styles.icon + " " + styles.small
          : props.type == "Large"
          ? styles.Large + " " + styles.icon
          : styles.icon) + " my-4"
      }
    >
      <div
        className={styles.avatar + " bg-purple-accent relative overflow-hidden"}
      >
        <Image src="/images/profile.png" layout="fill" priority />
      </div>
      <p>{props.author}</p>
      {props.type == "Large" ? (
        <Link href="https://www.instagram.com/anish_and_majhi/">
          <a className={styles.insta}>
            <p className="colorCl">@anish_and_majhi</p>
          </a>
        </Link>
      ) : null}
      <DateComp className="colorCl" ms="1615465564417" bypass="false" />

      <div className={styles.cmt}>
        <ChatBubbleOutlineIcon className={styles.svg + " colorCl"} />
        <p>{props.pid}</p>
      </div>
    </div>
  );
}

export default PostDet;
