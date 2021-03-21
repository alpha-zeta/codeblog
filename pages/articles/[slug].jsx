import hydrate from "next-mdx-remote/hydrate";

import { getFiles, getFileBySlug } from "../../lib/mdx";
import MDXComponents from "../../components/MDX/MDXComponenets";
import ArticlePage from "../../components/Layout/ArticlePage.component";

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <ArticlePage frontMatter={frontMatter}>{content}</ArticlePage>;
}
export async function getStaticPaths() {
  const posts = await getFiles("Blog");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("Blog", params.slug);

  return { props: post };
}
