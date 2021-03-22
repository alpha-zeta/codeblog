import styles from "../../styles/Layout.module.scss";
import React, { Children } from "react";
import META from "./Meta.components";
import Navbar from "../NavBar/Navbar.components";
import Footer from "./Footer.component";

const Layout = ({ children, title, description, keywords }) => {
  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 relative">
      <META title={title} description={description} keywords={keywords}></META>
      <Navbar />
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
