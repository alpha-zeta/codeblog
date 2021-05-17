import { useEffect, useState } from "react";
import style2 from "../../styles/Layout.module.scss";
import Searchbar from "../Forms/Searchbar.component";
import ExpandedBar from "./ExpandedBar.component";
import Logo from "./Logo.component";
import ToolBar from "./ToolBar.components";
function Navbar(props) {
  const handleSvg = (e) => {
    props.setExp(!props.expanded);
  };
  useEffect(() => {
    if (props.expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [props.expanded]);
  return (
    <nav
      className={
        style2.container +
        " nav shadow-customLight dark:shadow-customDark relative justify-between"
      }
    >
      <Logo />

      <ToolBar />
      <div className="inline-flex sm:hidden focus:outline-none">
        <button
          className={
            (props.expanded ? "menu opened" : "menu") + " items-center"
          }
          aria-expanded={props.expanded}
          onClick={handleSvg}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 100 100"
            className="text-gray-800 dark:text-gray-200"
          >
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
