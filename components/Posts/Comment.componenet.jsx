import CommentForm from "../Forms/commentForm.component";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "../Misc/Header.components";
import { firestore } from "./../../utils/firebase";
function Comment(props) {
  const node = useRef();
  const [showReply, setReply] = useState(false);
  const [writer, setWriter] = useState(null);
  const openReply = (e) => {
    setReply(true);
  };
  useEffect(() => {
    firestore
      .collection("users")
      .doc(props.uid)
      .get()
      .then((snapshot) => {
        setWriter({ ...snapshot.data() });
      });
  }, [props.uid]);
  const closeReply = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setReply(false);
  };
  useEffect(() => {
    if (showReply) {
      document.addEventListener("mousedown", closeReply);
    } else {
      document.removeEventListener("mousedown", closeReply);
    }
    return () => {
      document.removeEventListener("mousedown", closeReply);
    };
  }, [showReply]);
  return (
    <div>
      {writer != null ? (
        <div>
          <div className="flex items-center bg-gray-300 dark:bg-gray-600 px-4 py-2 tracking-wider">
            <div className="avatar overflow-hidden bg-purple-accent inline-block mr-2 relative">
              <Image src={writer.img} layout="fill" objectFit="cover" />
            </div>
            <Header
              weight="h3"
              type="Small"
              className="text-gray-800 dark:text-gray-200 inline-block"
            >
              {writer.displayName}
            </Header>
          </div>
          <div className="px-4 py-2 text-md sm:text-base text-gray-800 dark:text-gray-300">
            <p>{props.comment}</p>
          </div>
          {props.type == "comment" ? (
            <div className="reply px-4 pb-4" ref={node}>
              {showReply ? (
                <div>
                  <CommentForm />
                </div>
              ) : (
                <button
                  className="focus:outline-none font-bold"
                  onClick={openReply}
                >
                  &#60; REPLY &#62;
                </button>
              )}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default Comment;
