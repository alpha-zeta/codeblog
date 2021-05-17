import Image from "next/image";
import { buildUrl } from "cloudinary-build-url";
function ImageComp(props) {
  var src;
  if (props.show == "pad") {
    src = buildUrl(`Blog_images/Blog_pics/${props.imageLink}`, {
      cloud: {
        cloudName: "nerdbard",
      },
      transformations: {
        resize: {
          type: props.show,
          height: props.height,
          width: props.width,
        },
      },
    });
  } else {
    src = buildUrl(`Blog_images/Blog_pics/${props.imageLink}`, {
      cloud: {
        cloudName: "nerdbard",
      },
      transformations: {
        resize: {
          type: props.show,
          width: props.width,
          height: props.height,
        },
        gravity: "face",
      },
    });
  }
  return (
    <div className="relative">
      {props.type == "hero" ? (
        <div className="relative">
          <Image
            src={src}
            width={props.width}
            height={props.height}
            layout="responsive"
            priority
            alt={props.alt}
            className={props.className}
          />
        </div>
      ) : props.type == "display" ? (
        <div className="relative block w-full text-center">
          <Image
            src={src}
            width={props.width}
            height={props.height}
            layout="intrinsic"
            alt={props.alt}
            className={props.className}
          />
        </div>
      ) : null}
    </div>
  );
}

export default ImageComp;
