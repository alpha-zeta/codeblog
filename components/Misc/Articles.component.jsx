import styles from "../../styles/Layout.module.scss";
import BigPost from "../Posts/BigPost.component";
import SmallPost from "../Posts/SmallPost.component";
function Articles(props) {
  const articles = props.articles;
  return (
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
                tags="javascript python c++ c"
              >
                {object.body}
              </SmallPost>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}

export default Articles;
