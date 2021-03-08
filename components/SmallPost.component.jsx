import Image from "next/image";
import style1 from "../styles/SmallPost.module.scss";
import style from "../styles/Layout.module.scss";
import Header from "./Header.components";
function SmallPost(props) {
  return (
    <div className={style.card + " " + style1.small}>
      <div className={style1.cover}>
        <Image
          src="/images/img1.jpg"
          alt={props.alt}
          layout="responsive"
          width={2}
          height={1}
          priority
        />
      </div>
      <div className={style1.text}>
        <Header type="Small">{props.head.slice(0, 99)}</Header>
      </div>
    </div>
  );
}

export default SmallPost;
