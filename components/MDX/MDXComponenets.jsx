import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Misc/Header.components";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image: (props) => (
    <Image
      width={500}
      height={500}
      objectFit="cover"
      layout="fixed"
      {...props}
    />
  ),
  a: CustomLink,
  h1: (props) => <Header weight="h2" type="Large" {...props} />,
  h2: (props) => <Header weight="h3" type="Small" {...props} />,
};

export default MDXComponents;
