import Image from "next/image";
import style1 from "../../styles/SmallPost.module.scss";
import style from "../../styles/Layout.module.scss";
import Header from "../Misc/Header.components";
import PostDet from "../Misc/PostDet.component";
import Tag from "../Tag_Topics/Tag.component";
import Topic from "../Tag_Topics/Topic.component";
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
        <Topic type="Small">Javascript</Topic>
        <Tag type="Small" tags={props.tags} />
        <PostDet type="Small" author={props.author} id={props.id}></PostDet>
      </div>
    </div>
  );
}

export default SmallPost;
