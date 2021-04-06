import Head from "next/head";
import { buildUrl } from "cloudinary-build-url";
const META = ({
  title,
  keywords,
  description,
  imageLink,
  type,
  twImageAlt,
}) => {
  let fb_id = process.env.NEXT_PUBLIC_FB_APP_ID;
  const src = buildUrl(`Blog_images/Blog_pics/${imageLink}`, {
    cloud: {
      cloudName: "nerdbard",
    },
    transformations: {
      resize: {
        type: "fill",
        width: "1200",
        height: "627",
      },
      gravity: "face",
    },
  });
  return (
    <Head>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={src} />
      <meta property="og:type" content="article" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="How to create your first npm package and publish it."
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content="@nerbard2" />
      <meta name="twitter:image" content={src} />
      <meta name="twitter:creator" content="@nerdbard2" />
      <meta property="og:site_name" content="nerdbard" />
      <meta property="twitter:image:alt" content={twImageAlt} />
      <meta property="fb:app_id" content={fb_id} />
    </Head>
  );
};
export default META;
