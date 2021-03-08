import Head from "next/head";
import styles from "../styles/Layout.module.scss";
import { posts } from "../assets/posts";
import BigPost from "../components/BigPost.component";
import SmallPost from "../components/SmallPost.component";
export default function Home({ articles }) {
  return (
    <div className={styles.containerPadded}>
      <div className={styles.outer}>
        <div className={styles.rect}></div>
        <h1 className={styles.tag}>Latest</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.giant}>
          <div className={styles.half}>
            <BigPost
              head={articles[0].title}
              author={"Anish Majhi"}
              id={articles[0].id}
            >
              {articles[0].body}
            </BigPost>
          </div>
          <div className={styles.half}>
            {articles.map(function (object, i) {
              return i > 0 && i < 5 ? (
                <SmallPost
                  key={object.id}
                  head={object.title}
                  author={"Anish Majhi"}
                  id={object.id}
                >
                  {object.body}
                </SmallPost>
              ) : null;
            })}
          </div>
        </div>
      </div>
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
