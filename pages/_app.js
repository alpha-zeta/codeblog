import Layout from "../components/Layout/Layout.components";
import MDXComponents from "../components/MDX/MDXComponenets";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";
import "../styles/tailwind/globalTheme.css";
import "../styles/globals.scss";
import { auth } from "../utils/firebase";
import { useEffect, useState } from "react";
import createUser from "../utils/createUser";
import AuthProvider from "./../context/AuthProvider.context";
import PostProvider from "../context/PostProvider.context";

function MyApp({ Component, pageProps }) {
  const [currUser, setUser] = useState(null);
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <AuthProvider>
        <PostProvider>
          <MDXProvider components={MDXComponents}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MDXProvider>
        </PostProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
