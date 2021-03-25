import styles from "../../styles/Tag.module.scss";
function Tag(props) {
  const list = props.tags.split(" ");
  return (
    <div className={styles.tagBucket + " colorCl"}>
      {list.map(function (object, i) {
        return (
          <p
            key={i}
            className={
              (props.type == "Big"
                ? styles.Big + " " + styles.tag
                : props.type == "Large"
                ? styles.Large + " " + styles.tag
                : styles.Small + " " + styles.tag) + " font-serif"
            }
          >
            {object}
          </p>
        );
      })}
    </div>
  );
}

export default Tag;
