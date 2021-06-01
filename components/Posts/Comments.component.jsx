import Header from "../Misc/Header.components";
import CommentForm from "../Forms/commentForm.component";
import Comment from "./Comment.componenet";
import { useContext, useEffect, useState } from "react";
import { firestore } from "./../../utils/firebase";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { AuthContext } from "../../context/AuthProvider.context";
import Replies from "./Replies.component";
function Comments(props) {
  const [comments, setComments] = useState([]);
  const { status, user } = useContext(AuthContext);
  useEffect(() => {
    const cleanUp = firestore
      .collection("comments")
      .where("pid", "==", props.pid)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const res = snapshot.docs.map((docu) => {
          return { cid: docu.id, ...docu.data() };
        });
        setComments(res);
      });
    return () => cleanUp();
  }, [props.pid]);

  return (
    <div className="block m-auto w-full my-8">
      {status.logged ? null : (
        <div className="text-center text-lg text-gray-700 bg-yellow-300 my-4 py-4 rounded">
          <p>Please login to comment, reply and react.</p>
        </div>
      )}
      <div className="justify-center">
        <div className="inline-block">
          <AiFillLike className="text-5xl mb-2 mr-2 block cursor-pointer text-red-500" />
          <p>{props.like == null ? 0 : props.like}</p>
        </div>
        <div className="inline-block">
          <AiFillDislike className="text-5xl mt-2 ml-2 block cursor-pointer" />
          <p>{props.dlike == null ? 0 : props.dlike}</p>
        </div>
      </div>
      <Header weight="h3" type="Big">
        Comments
      </Header>
      <CommentForm pid={props.pid} type="comment" />
      {comments.length ? (
        <div className="overflow-y-scroll max-h-96 mt-4 pr-2">
          {comments.map((obj, i) => {
            return (
              <div key={i}>
                <div className="my-4 mb-8 bg-gray-200 dark:bg-gray-800 rounded overflow-hidden">
                  <Comment
                    {...obj}
                    {...status}
                    userId={status.logged ? user.userDet.id : null}
                  />
                </div>
                <div>
                  <Replies
                    cid={obj.cid}
                    {...status}
                    userId={status.logged ? user.userDet.id : null}
                  />
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
