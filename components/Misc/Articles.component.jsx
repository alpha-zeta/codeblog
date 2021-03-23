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
            className="border-b-2 sm:border-0 border-gray-300 dark:border-gray-700"
          >
            {articles[0].summary}
          </BigPost>
        </div>
        <div
          className={
            styles.half +
            " border-0 sm:border-l-2 border-gray-300 dark:border-gray-700"
          }
        >
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
                className="border-b-2 border-gray-300 dark:border-gray-700"
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
