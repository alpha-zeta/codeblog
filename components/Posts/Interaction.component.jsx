import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { useState } from "react";
import { firestore } from "./../../utils/firebase";
import firebase from "./../../utils/firebase";
import { useEffect } from "react";
function Interaction(props) {
  const fv = firebase.firestore.FieldValue;
  const [cnt, setCount] = useState([props.like, props.dlike]);
  const uid = props.uid;
  let userRef = null;
  let intStat = 0;
  const [like, setLike] = useState(0);
  const id = props.id;
  if (props.uid) {
    userRef = firestore.collection("users").doc(uid);
  }
  useEffect(() => {
    if (props.userDet) {
      const likedPosts = props.userDet.likedPosts;
      const dislikedPosts = props.userDet.dislikedPosts;
      if (likedPosts.includes(id)) {
        intStat = 1;
      } else if (dislikedPosts.includes(id)) {
        intStat = 2;
      }
      setLike(intStat);
    }
  }, [props.userDet]);
  const handleLike = (e) => {
    const docu = firestore.collection("posts").doc(id);
    if (like == 0 || like == 2) {
      if (like == 0) {
        docu.update({ like: cnt[0] + 1 });
        userRef.update({
          likedPosts: fv.arrayUnion(id),
        });
        setCount([cnt[0] + 1, cnt[1]]);
      } else {
        docu.update({ like: cnt[0] + 1, dislike: cnt[1] - 1 });
        userRef.update({
          likedPosts: fv.arrayUnion(id),
          dislikedPosts: fv.arrayRemove(id),
        });
        setCount([cnt[0] + 1, cnt[1] - 1]);
      }
      setLike(1);
    } else if (like == 1) {
      docu.update({ like: cnt[0] - 1 });
      userRef.update({ likedPosts: fv.arrayRemove(id) });
      setCount([cnt[0] - 1, cnt[1]]);
      setLike(0);
    }
  };
  const handleDislike = (e) => {
    const docu = firestore.collection("posts").doc(id);
    if (like == 0 || like == 1) {
      if (like == 0) {
        docu.update({ dislike: cnt[1] + 1 });
        userRef.update({ dislikedPosts: fv.arrayUnion(id) });
        setCount([cnt[0], cnt[1] + 1]);
      } else {
        docu.update({ like: cnt[0] - 1, dislike: cnt[1] + 1 });
        userRef.update({
          likedPosts: fv.arrayRemove(id),
          dislikedPosts: fv.arrayUnion(id),
        });
        setCount([cnt[0] - 1, cnt[1] + 1]);
      }
      setLike(2);
    } else if (like == 2) {
      docu.update({ dislike: cnt[0] - 1 });
      userRef.update({ dislikedPosts: fv.arrayRemove(id) });
      setCount([cnt[0], cnt[1] - 1]);
      setLike(0);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="inline-block">
        <AiFillLike
          onClick={uid ? handleLike : null}
          className={`${
            like == 1 ? "text-blue-600" : null
          } text-5xl mb-2 mr-2 block cursor-pointer`}
        />
        <p>{props.like == null ? 5 : cnt[0]}</p>
      </div>
      <div className="inline-block">
        <AiFillDislike
          onClick={uid ? handleDislike : null}
          className={`${
            like == 2 ? "text-red-600" : null
          } text-5xl mt-2 ml-2 block cursor-pointer`}
        />
        <p>{props.dlike == null ? 0 : cnt[1]}</p>
      </div>
    </div>
  );
}

export default Interaction;
