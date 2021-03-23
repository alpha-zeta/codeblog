import Image from "next/image";
import style1 from "../../styles/SmallPost.module.scss";
import style from "../../styles/Layout.module.scss";
import Header from "../Misc/Header.components";
import PostDet from "../Misc/PostDet.component";
import Tag from "../Tag_Topics/Tag.component";
import Topic from "../Tag_Topics/Topic.component";
import Link from "next/link";
function SmallPost(props) {
  return (
    <Link href={`/articles/${props.link}`} as={`/articles/${props.link}`}>
      <a className={style1.anchor}>
        <div
          className={style.card + " " + style1.small + " " + props.className}
        >
          <div className={style1.cover}>
            <Image
              src="/images/img1.jpg"
              layout="responsive"
              width={2}
              height={1}
              priority={props.load}
              alt="placeholder random image"
              objectFit="cover"
            />
          </div>
          <div className={style1.text}>
            <Header weight="h2" type="Small">
              {props.head.slice(0, 99)}
            </Header>
            <Topic type="Small">{props.topic}</Topic>
            <Tag type="Small" tags={props.tags} />
            <PostDet type="Small" author={props.author} id={props.id}></PostDet>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default SmallPost;
