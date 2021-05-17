import Head from "next/head";
import styles from "../styles/Layout.module.scss";
import BigPost from "../components/Posts/BigPost.component";
import SmallPost from "../components/Posts/SmallPost.component";
import Header from "../components/Misc/Header.components";
import Articles from "../components/Misc/Articles.component";
import { getAllFilesFrontMatter } from "../lib/mdx";
import getPosts from "../utils/getPosts";
import META from "../components/Layout/Meta.components";
import Searchbar from "../components/Forms/Searchbar.component";

export default function Home({ posts, user }) {
  console.log(user);
  return (
    <div>
      <META
        title="Get-coded"
        keywords="web-development discussion solution coding code"
        description="website for coding soltions and demistification"
        imageLink="img1_vusmzz"
      ></META>
      <div
        className={
          styles.outer + " w-full inline-flex justify-between items-center"
        }
      >
        <div className="w-1/2">
          <div className={styles.rect + " inline-block"}></div>
          <Header
            weight="h1"
            type="Big"
            className={styles.tag + " inline-block"}
          >
            Latest
          </Header>
        </div>
        <Searchbar
          className="w-1/2 hidden sm:inline-flex"
          zonespec="justify-end"
        />
      </div>
      <Articles articles={posts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllFilesFrontMatter("Blog");

  return { props: { posts } };
};
