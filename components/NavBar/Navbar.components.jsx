import style1 from "../../styles/Navbar.module.scss";
import style2 from "../../styles/Layout.module.scss";
import Logo from "./Logo.component";
import ToolBar from "./ToolBar.components";
function Navbar(props) {
  return (
    <div
      className={
        style2.container +
        " " +
        style1.nav +
        " shadow-customLight dark:shadow-customDark"
      }
    >
      <Logo />
      <ToolBar />
    </div>
  );
}

export default Navbar;
