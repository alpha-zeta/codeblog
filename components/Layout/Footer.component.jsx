import Desc from "../Misc/Desc.components";
import Header from "../Misc/Header.components";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import Newsletter from "../Misc/Newsletter.component";
function Footer(props) {
  return (
    <div className="px-6 py-8 bg-gray-200 dark:bg-gray-800  w-full text-gray-700 dark:text-gray-200">
      <div className="flex justify-between">
        <div>
          <Header weight="h2" type="Big">
            Get-coded
          </Header>
          <Desc>Copyright:2021</Desc>
        </div>
        <div className="text-left">
          <WhatsAppIcon className="mr-4 " />
          <FacebookIcon className="m-4" />
          <GitHubIcon className="m-4" />
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default Footer;
