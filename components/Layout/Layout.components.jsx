import styles from "../../styles/Layout.module.scss";
import React, { Children, useEffect } from "react";
import META from "./Meta.components";
import Navbar from "../NavBar/Navbar.components";
import Footer from "./Footer.component";
import Head from "next/head";
import { useRouter } from "next/router";
const Layout = ({ children, title, description, keywords, user }) => {
  const router = useRouter();
  let tPath = router.asPath;
  const pathName = `https://codeblog-alpha-zeta.vercel.app${tPath}`;
  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 relative">
      <Head>
        <meta property="og:url" content={pathName} />
      </Head>
      <Navbar user={user} />
      <main className={styles.main}>
        <div className={styles.containerPadded}>{children}</div>
      </main>
      <div
        className={
          styles.fog +
          " bg-gradient-to-t from-gray-200 dark:bg-gradient-to-t dark:from-black"
        }
      ></div>
      <Footer />
    </div>
  );
};
export default Layout;
