import Image from "next/image";
import { buildUrl } from "cloudinary-build-url";

function test(props) {
  const src = buildUrl("Blog_images/Blog_pics/maxresdefault_puud3a", {
    cloud: {
      cloudName: "nerdbard",
    },
    transformations: {
      resize: {
        type: "fill",
        width: "500",
        height: "500",
      },
      gravity: "face",
    },
  });
  return (
    <div
      className="overflow-hidden relative bg-gray-200"
      style={{
        width: "500px",
        height: "500px",
      }}
    >
      <Image src={src} objectFit="cover" layout="fill" alt="test image" />
    </div>
  );
}

export default test;
