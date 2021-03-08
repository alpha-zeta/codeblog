import Layout from "../components/Layout.components";
import styles from "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout
      title="Get-coded"
      keywords="web-development discussion solution coding code"
      description="website for coding soltions and demistification"
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
