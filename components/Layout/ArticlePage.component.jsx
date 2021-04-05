import styles from "../../styles/article.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../Misc/Header.components";
import PostDet from "../Misc/PostDet.component";
import META from "../Layout/Meta.components";
import commentList from "../../assets/Comments/comments";
import Comments from "../Posts/Comments.component";
import SocialShare from "../Misc/SocialShare.component";
function ArticlePage({ children, frontMatter }) {
  const router = useRouter();
  const tPath = router.asPath;
  const pathName = `https://codeblog-alpha-zeta.vercel.app${tPath}`;
  return (
    <div className={styles.cage + " my-8 grid grid-cols-10 gap-0"}>
      <META
        title={frontMatter.title}
        description={frontMatter.summary}
        keywords={frontMatter.keywords}
        imageLink="https://codeblog-alpha-zeta.vercel.app/images/img1.jpg"
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
            " bg-gray-500 dark:bg-gray-700 text-gray-200 p-2 cursor-default hidden lg:block"
          }
        >
          <p className="m-auto text-center">Share</p>
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
        <PostDet type="Large" author={"Anish Majhi"} id={frontMatter.id} />
        <div className={styles.heroImage}>
          <Image
            className="hero"
            src="/images/img1.jpg"
            width={2}
            height={1}
            layout="responsive"
            priority
            alt="placeholder random image"
            objectFit="cover"
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
        <Comments comments={commentList} />
      </div>
      <div
        className={
          styles.right + " col-span-10 sm:col-span-1 lg:col-span-2 block"
        }
      >
        <SocialShare
          url={pathName}
          title={frontMatter.title}
          quote={frontMatter.summary}
          hashtag={frontMatter.hashtag}
          className="block lg:hidden"
        />
      </div>
    </div>
  );
}

export default ArticlePage;
