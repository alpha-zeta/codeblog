import Header from "../Misc/Header.components";
import Image from "next/image";
import CommentForm from "../Forms/commentForm.component";
import Comment from "./Comment.componenet";
import { useEffect, useState } from "react";
import { firestore } from "./../../utils/firebase";
function Comments(props) {
  const [comments, setComments] = useState([]);
  const [cmt, setCmt] = useState(0);
  useEffect(() => {
    const cleanUp = firestore
      .collection("comments")
      .where("id", "==", props.id)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const res = snapshot.docs.map((docu) => {
          return { id: docu.id, ...docu.data() };
        });
        setComments(res);
      });
    return () => cleanUp();
  }, [props.id]);

  return (
    <div className="block m-auto w-full my-8">
      <Header weight="h3" type="Big">
        Comments
      </Header>
      <CommentForm id={props.id} func={setCmt} cmt={cmt} />
      {comments.length ? (
        <div className="overflow-y-scroll max-h-96 mt-4 pr-2">
          {comments.map((obj, i) => {
            return (
              <div key={i}>
                <div className="my-4 mb-8 bg-gray-200 dark:bg-gray-800 rounded overflow-hidden">
                  <Comment {...obj} type="comment" />
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
export default Comments;
