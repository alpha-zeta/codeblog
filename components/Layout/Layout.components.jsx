import styles from "../../styles/Layout.module.scss";
import React, { Children } from "react";
import META from "./Meta.components";
import Navbar from "../NavBar/Navbar.components";

const Layout = ({ children, title, description, keywords }) => {
  return (
    <div>
      <META title={title} description={description} keywords={keywords}></META>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.containerPadded}>{children}</div>
        <div className={styles.fog}></div>
      </main>
    </div>
  );
};
export default Layout;
