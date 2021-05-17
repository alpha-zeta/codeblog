import { useState, createContext, useEffect } from "react";
import createUser from "../utils/createUser";
import { signInWithGoogle } from "../utils/firebase";
import { auth } from "../utils/firebase";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [logged, setLogged] = useState(false);
  const [userDet, setUserDet] = useState(null);
  useEffect(async () => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUser(userAuth);

        userRef.onSnapshot((snapShot) => {
          setUserDet({
            id: snapShot.id,
            ...snapShot.data(),
          });
          setLogged(true);
        });
      } else {
        setUserDet(userAuth);
        setLogged(false);
      }
    });
    return () => unsubscribeFromAuth();
  }, []);
  const logIn = () => {
    signInWithGoogle();
  };
  const logOut = () => {
    auth.signOut();
  };
  const context = {
    status: {
      logged,
      logIn,
      logOut,
    },
    user: {
      userDet,
      setUserDet,
    },
  };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
