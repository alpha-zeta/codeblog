import Layout from "../components/Layout/Layout.components";
import MDXComponents from "../components/MDX/MDXComponenets";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";
import "../styles/tailwind/globalTheme.css";
import "../styles/globals.scss";
import { auth } from "../utils/firebase";
import { useEffect, useState } from "react";
import createUser from "../utils/createUser";
import { componentDidMount } from "react";

function MyApp({ Component, pageProps }) {
  const [currUser, setUser] = useState(null);
  let unsubscribeFromAuth = null;
  useEffect(async () => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUser(userAuth);

        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setUser(userAuth);
      }
    });
  }, []);

  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <MDXProvider components={MDXComponents}>
        <Layout user={currUser}>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
