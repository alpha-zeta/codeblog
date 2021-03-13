import Head from "next/head";
import styles from "../styles/Layout.module.scss";
import { posts } from "../assets/posts";
import BigPost from "../components/Posts/BigPost.component";
import SmallPost from "../components/Posts/SmallPost.component";
import Header from "../components/Misc/Header.components";
import Articles from "../components/Misc/Articles.component";
export default function Home({ articles }) {
  return (
    <div>
      <div className={styles.outer}>
        <div className={styles.rect}></div>
        <Header weight="h1" type="Large" className={styles.tag}>
          Latest
        </Header>
      </div>
      <Articles articles={articles} />
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();
  return {
    props: {
      articles: articles,
    },
  };
};
