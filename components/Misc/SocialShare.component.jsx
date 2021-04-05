import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
function SocialShare(props) {
  return (
    <div className={props.className}>
      <FacebookShareButton
        url={props.url}
        quote={props.quote}
        hashtag={props.hashtag}
        className="social fb m-auto focus:outline-none"
      >
        <FacebookIcon size={36} className="focus:outline-none" />
      </FacebookShareButton>
      <WhatsappShareButton
        url={props.url}
        title={props.title}
        className="social fb m-auto focus:outline-none"
      >
        <WhatsappIcon size={36} className="focus:outline-none" />
      </WhatsappShareButton>
      <TwitterShareButton
        url={props.url}
        title={props.title}
        via={props.via}
        hashtags={props.Twhastags}
        related={props.related}
        className="social fb m-auto focus:outline-none"
      >
        <TwitterIcon size={36} className="focus:outline-none" />
      </TwitterShareButton>
    </div>
  );
}

export default SocialShare;
