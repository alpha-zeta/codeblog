import Image from "next/image";
import Desc from "../Misc/Desc.components";
import Header from "../Misc/Header.components";
import style from "../../styles/Layout.module.scss";
import style1 from "../../styles/BigPost.module.scss";
import PostDet from "../Misc/PostDet.component";
import Tag from "../Tag_Topics/Tag.component";
import Topic from "../Tag_Topics/Topic.component";
import Link from "next/link";
function BigPost(props) {
  return (
    <Link href="/articles/[id]" as={`/articles/${props.id}`}>
      <a className={style1.anchor}>
        <div className={style.card + " " + style1.big}>
          <div className={style1.cover}>
            <Topic type="Big">Javascript</Topic>
            <Image
              src="/images/img1.jpg"
              alt={props.alt}
              layout="responsive"
              width={2}
              height={1}
              priority
              alt="placeholder random image"
            />
          </div>
          <div className={style1.text}>
            <Tag type="Big" tags={props.tags} />
            <Header weight="h2" type="Big">
              {props.head}
            </Header>
            <Desc>{props.children.slice(0, 199)}</Desc>
            <PostDet author={props.author} id={props.id}></PostDet>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default BigPost;
