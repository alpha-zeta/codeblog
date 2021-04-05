import Link from "next/link";
import style from "../../styles/ToolBar.module.scss";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { signInWithGoogle } from "../../utils/firebase";
import { auth } from "../../utils/firebase";
function ToolBar(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("DEFAULT");
  const [expanded, setExp] = useState(false);
  // if (props.user) {
  //   console.log(props.user.displayName);
  // }
  useEffect(() => setMounted(true), []);
  const handleTheme = (e) => {
    if (mounted) {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };
  const handleSvg = (e) => {
    setExp(!expanded);
  };
  return (
    <div className={style.tools + " text-gray-900 dark:text-gray-100"}>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className={
          style.button +
          " bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded p-3 h-10 w-10 focus:outline-none "
        }
        onClick={handleTheme}
      >
        {mounted ? (
          theme === "dark" ? (
            <Brightness3Icon />
          ) : (
            <Brightness5Icon />
          )
        ) : null}
      </button>
      <div className="inline-block sm:hidden focus:outline-none">
        <button
          className={expanded ? "menu opened" : "menu"}
          aria-expanded={expanded}
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
      <div className="pageLinks hidden sm:inline-block divide-x-2 divide-gray-400 dark:divide-gray-200">
        <Link href="/">
          <a className="pl-8 pr-8">Home</a>
        </Link>
        <Link href="/about">
          <a className="pl-8 pr-8">About</a>
        </Link>
        {props.user && mounted ? (
          <button
            className="bg-transparent focus:outline-none pl-8"
            onClick={() => auth.signOut()}
          >
            Sign Out
          </button>
        ) : (
          <button
            className="bg-transparent focus:outline-none pl-8"
            onClick={signInWithGoogle}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}

export default ToolBar;
