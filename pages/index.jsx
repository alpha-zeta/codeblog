import Head from "next/head";
import styles from "../styles/Layout.module.scss";
import { posts } from "../assets/posts";
import BigPost from "../components/Posts/BigPost.component";
import SmallPost from "../components/Posts/SmallPost.component";
import Header from "../components/Misc/Header.components";
export default function Home({ articles }) {
  return (
    <div className={styles.containerPadded}>
      <div className={styles.outer}>
        <div className={styles.rect}></div>
        <Header type="Large" className={styles.tag}>
          Latest
        </Header>
      </div>
      <div className={styles.main}>
        <div className={styles.giant}>
          <div className={styles.half}>
            <BigPost
              head={articles[0].title}
              author={"Anish Majhi"}
              id={articles[0].id}
              tags="javascript python c++ c solution"
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
                  tags="javascript python c++ c solution"
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
