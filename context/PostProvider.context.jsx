import { useState, createContext, useEffect } from "react";
import { firestore } from "../utils/firebase";

export const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const cleanUp = firestore
      .collection("posts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let g = posts;
          g.push(doc.data());
          setPost(g);
        });
      });
    return () => cleanUp();
  }, []);
  const context = {
    posts: posts,
  };
  return (
    <PostContext.Provider value={context}>{children}</PostContext.Provider>
  );
}
// export async function getStaticProps({ params }) {
//   let docs = [];
//   const posts = await firestore
//     .collection("posts")
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         docs.push(doc.data());
//       });
//     });
// }
export default PostProvider;
