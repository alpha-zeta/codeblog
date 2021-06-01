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
            id={articles[0].pid}
            tags={articles[0].tags}
            topic={articles[0].topic}
            link={articles[0].slug}
            className="border-b sm:border-0 border-gray-300 dark:border-gray-700"
            load="true"
          >
            {articles[0].summary}
          </BigPost>
        </div>
        <div
          className={
            styles.half +
            " border-0 sm:border-l border-gray-300 dark:border-gray-700"
          }
        >
          {articles.map(function (object, i) {
            return i > 0 && i < 5 ? (
              <SmallPost
                key={i}
                head={object.title}
                author={"Anish Majhi"}
                id={object.pid}
                tags={object.tags}
                topic={object.topic}
                link={object.slug}
                className="border-b border-gray-300 dark:border-gray-700"
                load="true"
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
