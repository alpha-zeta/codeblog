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
    <Link href={`/articles/${props.link}`} as={`/articles/${props.link}`}>
      <a className={style1.anchor}>
        <div className={style.card + " " + style1.big + " " + props.className}>
          <div className={style1.cover}>
            <Topic type="Big">{props.topic}</Topic>
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
            <Tag type="Big" tags={props.tags} />
            <Header weight="h2" type="Big" className="my-0.5 sm:my-2">
              {props.head}
            </Header>
            <Desc className="text-gray-500 dark:text-gray-400">
              {props.children.slice(0, 199)}
            </Desc>
            <PostDet author={props.author} id={props.id}></PostDet>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default BigPost;
