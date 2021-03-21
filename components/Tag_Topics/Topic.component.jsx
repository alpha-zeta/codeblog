import styles from "../../styles/Topic.module.scss";

function Topic(props) {
  return (
    <div
      className={
        (props.type == "Big"
          ? styles.Big + " " + styles.topic
          : props.type == "Large"
          ? styles.Large + " " + styles.topic
          : styles.Small + " " + styles.topic) + " font-serif"
      }
    >
      <p>{props.children}</p>
    </div>
  );
}

export default Topic;
