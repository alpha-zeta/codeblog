import Layout from "../components/Layout/Layout.components";
import MDXComponents from "../components/MDX/MDXComponenets";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";
import "../styles/tailwind/globalTheme.css";
import "../styles/globals.scss";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Layout
          title="Get-coded"
          keywords="web-development discussion solution coding code"
          description="website for coding soltions and demistification"
        >
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
