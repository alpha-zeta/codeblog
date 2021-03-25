import styles from "../../styles/Topic.module.scss";

function Topic(props) {
  return (
    <div
      className={
        (props.type == "Big"
          ? styles.Big + " " + styles.topic
          : props.type == "Large"
          ? styles.Large + " " + styles.topic
          : styles.Small + " " + styles.topic) +
        " font-sans font-extrabold bg-indigo-200 dark:bg-gray-700 text-pink-500 dark:text-gray-200 tracking-widest"
      }
    >
      <p className="m-0">{props.children}</p>
    </div>
  );
}

export default Topic;
