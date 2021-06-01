import styles from "../../styles/article.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../Misc/Header.components";
import PostDet from "../Misc/PostDet.component";
import META from "../Layout/Meta.components";
import commentList from "../../assets/Comments/comments";
import Comments from "../Posts/Comments.component";
import SocialShare from "../Misc/SocialShare.component";
import AuthorCard from "../Misc/AuthorCard.component";
import ShareIcon from "@material-ui/icons/Share";
import ImageComp from "../Misc/ImageComp.component";
import Searchbar from "../Forms/Searchbar.component";
import { useEffect, useState } from "react";
import { firestore } from "./../../utils/firebase";
function ArticlePage({ children, frontMatter, user }) {
  const router = useRouter();
  const tPath = router.asPath;
  const pathName = `https://codeblog-alpha-zeta.vercel.app${tPath}`;
  const [social, setSocial] = useState(null);
  useEffect(() => {
    let res = null;
    const cleanUp = firestore
      .collection("posts")
      .where("pid", "==", frontMatter.pid)
      .onSnapshot(async (snapshot) => {
        res = snapshot.docs.map((docu) => {
          setSocial({ id: docu.id, ...docu.data() });
        });
      });
    return () => cleanUp();
  }, [frontMatter.pid]);
  return (
    <div className={styles.cage + " my-8 grid grid-cols-10 gap-0"}>
      <META
        title={frontMatter.title}
        description={frontMatter.summary}
        keywords={frontMatter.keywords}
        imageLink={frontMatter.imageID}
      ></META>
      <div
        className={
          styles.left +
          " m-auto mt-2 col-span-0 sm:col-span-1 lg:col-span-2 hidden sm:block "
        }
      >
        <div
          className={
            styles.share +
            " bg-gray-500 dark:bg-gray-700 text-gray-200 p-2 cursor-default hidden lg:block rounded-full mr-2 lg:mb-2"
          }
        >
          <ShareIcon />
        </div>
        <SocialShare
          url={pathName}
          title={frontMatter.title}
          quote={frontMatter.summary}
          hashtag={frontMatter.hashtag}
          className="hidden lg:block"
        />
      </div>
      <div className={styles.post + " col-span-10 sm:col-span-8 lg:col-span-6"}>
        <Header weight="h1" type="Large">
          {frontMatter.title}
        </Header>
        <div
          className={
            styles.summary +
            " my-4 text-gray-800 dark:text-gray-200 lg:text-lg md:text-base sm:text-sm text-sm"
          }
        >
          <p>{frontMatter.summary}</p>
        </div>

        <PostDet type="Large" author={"Anish Majhi"} pid={frontMatter.pid} />
        <div className={styles.heroImage}>
          <ImageComp
            type="hero"
            width={1200}
            height={627}
            className="hero"
            imageLink={frontMatter.imageID}
            show="fill"
          />
        </div>
        <div
          className={
            styles.postBody +
            " " +
            "prose dark:prose-dark max-w-none w-full dark:bg-gray-800"
          }
        >
          {children}
        </div>
        <SocialShare
          url={pathName}
          title={frontMatter.title}
          quote={frontMatter.summary}
          hashtag={frontMatter.hashtag}
          className="block lg:hidden m-auto mt-4"
          url={pathName}
        />
        <Comments
          pid={frontMatter.pid}
          id={social.id}
          comments={commentList}
          like={social != null ? social.like : 0}
          dlike={social != null ? social.dislike : 0}
        />
      </div>
      <div
        className={
          styles.right + " lg:pl-8 col-span-10 lg:col-span-2 block lg:m-auto"
        }
      >
        <Searchbar
          className="hidden sm:inline-flex"
          zonespec="justify-between"
        />
        <AuthorCard className="my-4" />
      </div>
    </div>
  );
}

export default ArticlePage;
