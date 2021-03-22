import styles from "../../styles/Layout.module.scss";
import BigPost from "../Posts/BigPost.component";
import SmallPost from "../Posts/SmallPost.component";
function Articles(props) {
  var articles = props.articles;
  return (
    <div className={styles.main}>
      <div className={styles.giant}>
        <div className={styles.half}>
          <BigPost
            head={articles[0].title}
            author={"Anish Majhi"}
            id="1"
            tags={articles[0].tags}
            topic={articles[0].topic}
            link={articles[0].slug}
          >
            {articles[0].summary}
          </BigPost>
        </div>
        <div className={styles.half}>
          {articles.map(function (object, i) {
            return i > 0 && i < 5 ? (
              <SmallPost
                key={i}
                head={object.title}
                author={"Anish Majhi"}
                id={1}
                tags={articles[0].tags}
                topic={articles[0].topic}
                link={object.slug}
              >
                {object.summary}
              </SmallPost>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}

export default Articles;
