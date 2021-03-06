import { firestore } from "./firebase";

const createUser = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      const rand = Math.random().toString(36).substring(7);
      await userRef.set({
        displayName,
        email,
        createdAt,
        img: "https://robohash.org/" + displayName + rand + ".png?size=256x256",
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
export default createUser;
