import Head from "next/head";
import styles from "../styles/Layout.module.scss";
import BigPost from "../components/Posts/BigPost.component";
import SmallPost from "../components/Posts/SmallPost.component";
import Header from "../components/Misc/Header.components";
import Articles from "../components/Misc/Articles.component";
import { getAllFilesFrontMatter } from "../lib/mdx";
export default function Home({ posts }) {
  return (
    <div>
      <div className={styles.outer}>
        <div className={styles.rect}></div>
        <Header weight="h1" type="Large" className={styles.tag}>
          Latest
        </Header>
      </div>
      <Articles articles={posts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllFilesFrontMatter("Blog");

  return { props: { posts } };
};
