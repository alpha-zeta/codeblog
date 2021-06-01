import { useState, useEffect, useRef } from "react";
import { firestore } from "../../utils/firebase";
import Reply from "./Reply.component";
function Replies(props) {
  const [replies, setReplies] = useState(null);
  useEffect(() => {
    const cleanUp = firestore
      .collection("replies")
      .where("cid", "==", props.cid)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const res = snapshot.docs.map((docu) => {
          return { rid: docu.id, ...docu.data() };
        });
        setReplies(res);
      });
    return () => cleanUp();
  }, [props.cid]);
  return (
    <div>
      {replies != null && replies.length > 0 ? (
        <div>
          {replies.map((obj, key) => (
            <div
              key={key}
              className="ml-24 my-2 bg-gray-200 dark:bg-gray-800 rounded overflow-hidden"
            >
              <Reply {...obj} userId={props.userId} {...props.status} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Replies;
