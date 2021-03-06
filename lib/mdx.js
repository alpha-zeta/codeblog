import fs from "fs";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import path from "path";
import readingTime from "reading-time";
import renderToString from "next-mdx-remote/render-to-string";

import MDXComponents from "../components/MDX/MDXComponenets";

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "assets", type));
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "assets", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "assets", `${type}.mdx`), "utf8");

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require("remark-autolink-headings"),
        require("remark-slug"),
        require("remark-code-titles"),
      ],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, "assets", type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "assets", type, postSlug),
      "utf8"
    );
    const { data, content } = matter(source);

    return [
      {
        ...data,
        readingTime: readingTime(content),
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
