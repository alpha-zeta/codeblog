import Image from "next/image";
import Desc from "../Misc/Desc.components";
import Header from "../Misc/Header.components";
import style from "../../styles/Layout.module.scss";
import style1 from "../../styles/BigPost.module.scss";
import PostDet from "../Misc/PostDet.component";
import Tag from "../Tag_Topics/Tag.component";
import Topic from "../Tag_Topics/Topic.component";
function BigPost(props) {
  return (
    <div className={style.card + " " + style1.big}>
      <div className={style1.cover}>
        <Topic type="Big">Javascript</Topic>
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
        <Tag type="Big" tags={props.tags} />
        <Header type="Big">{props.head}</Header>
        <Desc>{props.children.slice(0, 199)}</Desc>
        <PostDet author={props.author} id={props.id}></PostDet>
      </div>
    </div>
  );
}

export default BigPost;
