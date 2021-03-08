import Image from "next/image";
import Desc from "./Desc.components";
import Header from "./Header.components";
import style from "../styles/Layout.module.scss";
import style1 from "../styles/BigPost.module.scss";
import PostDet from "./PostDet.component";
function BigPost(props) {
  return (
    <div className={style.card + " " + style1.big}>
      <div className={style1.cover}>
        <Image
          src="/images/img1.jpg"
          alt={props.alt}
          layout="responsive"
          width={500 * 2}
          height={500}
          priority
        />
      </div>
      <div className={style1.text}>
        <Header type="Big">{props.head}</Header>
        <Desc>{props.children.slice(0, 199)}</Desc>
        <PostDet author={props.author} id={props.id}></PostDet>
      </div>
    </div>
  );
}

export default BigPost;
