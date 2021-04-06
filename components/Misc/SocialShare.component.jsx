import LinkIcon from "@material-ui/icons/Link";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
function SocialShare(props) {
  const handleCopy = (e) => {
    navigator.clipboard.writeText(props.url);
  };

  return (
    <div className={props.className + " text-gray-200"}>
      <FacebookShareButton
        url={props.url}
        quote={props.quote}
        hashtag={props.hashtag}
        className="social fb m-auto focus:outline-none lg:block mr-2 lg:mb-2"
      >
        <div className="bg-blue-500 hover:bg-blue-600 w-9 h-9 flex align-middle rounded-full">
          <FacebookIcon className="m-auto" />
        </div>
      </FacebookShareButton>
      <WhatsappShareButton
        url={props.url}
        title={props.title}
        className="social fb m-auto focus:outline-none lg:block mr-2 lg:mb-2"
      >
        <div className="bg-green-500 hover:bg-green-600 w-9 h-9 flex align-middle rounded-full">
          <WhatsAppIcon className="m-auto" />
        </div>
      </WhatsappShareButton>
      <TwitterShareButton
        url={props.url}
        title={props.title}
        via={props.via}
        hashtags={props.Twhastags}
        related={props.related}
        className="social fb m-auto focus:outline-none lg:block mr-2 lg:mb-2"
      >
        <div className="w-9 h-9 bg-blue-400 hover:bg-blue-500 flex align-middle rounded-full">
          <TwitterIcon className="m-auto" />
        </div>
      </TwitterShareButton>
      <button onClick={handleCopy} className="m-auto lg:block mr-2 lg:mb-2">
        <div className="bg-gray-300 hover:bg-gray-400 h-9 w-9 flex align-middle rounded-full">
          <LinkIcon className="m-auto text-gray-700" />
        </div>
      </button>
    </div>
  );
}

export default SocialShare;
