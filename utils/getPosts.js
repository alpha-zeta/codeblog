import { firestore } from "./firebase";

const getPosts = async () => {
  return await firestore.collection("posts").onSnapshot((snapshot) => {
    const posts = snapshot.docs.map((doc) => {
      return { ...doc.data() };
    });
    return posts;
  });
};
export default getPosts;
