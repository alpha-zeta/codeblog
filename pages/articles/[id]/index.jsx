import styles from "../../../styles/article.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../../../components/Misc/Header.components";
import PostDet from "../../../components/Misc/PostDet.component";
import META from "../../../components/Layout/Meta.components";
function index(props) {
  const router = useRouter();
  const query = router.query;
  return (
    <div className={styles.cage}>
      <META
        title={props.title}
        description={props.body}
        keywords="Get-coded about details"
      ></META>
      <div className={styles.left}></div>
      <div className={styles.post}>
        <Header weight="h1" type="Large">
          {props.title}
        </Header>
        <PostDet type="Large" author={"Anish Majhi"} id={props.id} />
        <div className={styles.heroImage}>
          <Image
            className="hero"
            src="/images/img1.jpg"
            width={2}
            height={1}
            layout="responsive"
            priority
            alt="placeholder random image"
            objectFit="cover"
          />
        </div>
        <div className={styles.postBody}>
          <p>{props.body}</p>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();
  return {
    props: article,
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default index;
