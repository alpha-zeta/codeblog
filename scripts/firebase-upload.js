const firestore = require("./../utils/firebase").firestore;
const fs = require("fs");
const matter = require("gray-matter");
const readingTime = require("reading-time");
const path = require("path");
const root = process.cwd();
async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, "assets", type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "assets", type, postSlug),
      "utf8"
    );
    const { data, content } = matter(source);

    return [
      {
        ...data,
        readingTime: readingTime(content),
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
(async () => {
  const posts = await getAllFilesFrontMatter("Blog");
  const postsRef = firestore.collection(`posts`);
  for (let i = 0; i < 2; i++) {
    const postRef = postsRef.where("id", "==", `${posts[i].id}`);
    const snap = await postRef.get();
    if (!snap.exists) {
      const createdAt = new Date();
      try {
        await postsRef
          .add({
            ...posts[i],
            createdAt,
          })
          .then((docRef) => {
            console.log(`created with id: ${docRef.id}`);
          });
      } catch (err) {
        console.log("error creating user", err.message);
      }
    }
  }
})();
