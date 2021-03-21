import styles from "../../styles/article.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../Misc/Header.components";
import PostDet from "../Misc/PostDet.component";
import META from "../Layout/Meta.components";
function ArticlePage({ children, frontMatter }) {
  const router = useRouter();
  const query = router.query;
  return (
    <div className={styles.cage + " my-8"}>
      <META
        title={frontMatter.title}
        description={frontMatter.summary}
        keywords={frontMatter.keywords}
      ></META>
      <div className={styles.left}></div>
      <div className={styles.post}>
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
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default ArticlePage;
