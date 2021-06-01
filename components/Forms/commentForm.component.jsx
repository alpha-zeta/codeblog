import SendIcon from "@material-ui/icons/Send";
import { useState, useContext } from "react";
import { firestore } from "./../../utils/firebase";
import firebase from "./../../utils/firebase";
import { AuthContext } from "../../context/AuthProvider.context";

function CommentForm(props) {
  const { status, user } = useContext(AuthContext);
  const [input, setInput] = useState("");
  const handleComment = (e) => {
    e.preventDefault();
    if (input != "") {
      if (props.type == "comment") {
        firestore
          .collection("comments")
          .add({
            comment: input,
            uid: user.userDet.id,
            pid: props.pid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          })
          .then((docRef) => {
            console.log("comment added");
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (props.type == "reply") {
        firestore
          .collection("replies")
          .add({
            reply: input,
            uid: user.userDet.id,
            cid: props.cid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          })
          .then((docRef) => {
            console.log("comment added");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }

    setInput("");
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      {status.logged ? (
        <div className="flex mt-4 bg-gray-600 relative">
          <input
            type="text"
            className="dark:bg-gray-800 w-5/6"
            placeholder={
              props.type == "comment" ? "Comment here...." : "Reply here...."
            }
            onChange={handleInput}
            value={input}
          />
          <button
            className="m-auto bg-transparent focus:outline-none text-gray-200"
            onClick={handleComment}
          >
            <SendIcon />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default CommentForm;
