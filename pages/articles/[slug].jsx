import hydrate from "next-mdx-remote/hydrate";
import firebase from "./../../utils/firebase";
import { getFiles, getFileBySlug, getAllFilesFrontMatter } from "../../lib/mdx";
import MDXComponents from "../../components/MDX/MDXComponenets";
import ArticlePage from "../../components/Layout/ArticlePage.component";
import { firestore } from "../../utils/firebase";

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <ArticlePage frontMatter={frontMatter}>{content}</ArticlePage>;
}
export async function getStaticPaths() {
  const posts = await getFiles("Blog");
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("Blog", params.slug);
  const postFull = await getAllFilesFrontMatter("Blog");
  const posts = await (await getFiles("Blog")).reverse();
  for (let i = 0; i < postFull.length; i++) {
    let data = null;
    const doc = await firestore
      .collection("posts")
      .where("pid", "==", postFull[i].pid)
      .get()
      .then((snap) => {
        snap.forEach((docu) => {
          data = { id: docu.id, ...docu.data() };
        });
      });
    if (data != null) {
      await firestore
        .collection("posts")
        .doc(data.id)
        .set({
          ...postFull[i],
          slug: posts[i].replace(/\.mdx/, ""),
          like: data.like,
          dislike: data.dislike,
        })
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    } else {
      await firestore
        .collection("posts")
        .add({
          ...postFull[i],
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          slug: posts[i].replace(/\.mdx/, ""),
          like: 0,
          dislike: 0,
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }
  }
  return { props: post };
}
