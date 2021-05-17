import styles from "../../styles/Layout.module.scss";
import React, { Children, useEffect, useState } from "react";
import META from "./Meta.components";
import Navbar from "../NavBar/Navbar.components";
import Footer from "./Footer.component";
import Head from "next/head";
import { useRouter } from "next/router";
import ExpandedBar from "../NavBar/ExpandedBar.component";
import { useContext } from "react";
import { AuthContext } from "./../../context/AuthProvider.context";
const Layout = ({ children, title, description, keywords }) => {
  const router = useRouter();
  let tPath = router.asPath;
  const pathName = `https://codeblog-alpha-zeta.vercel.app${tPath}`;
  const [expanded, setExp] = useState(false);
  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 relative">
      <Head>
        <meta property="og:url" content={pathName} />
      </Head>
      <Navbar expanded={expanded} setExp={setExp} />
      <ExpandedBar expanded={expanded} setExp={setExp} />
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
