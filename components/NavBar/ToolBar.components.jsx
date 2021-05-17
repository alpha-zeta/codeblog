import Link from "next/link";
import style from "../../styles/ToolBar.module.scss";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { useTheme } from "next-themes";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.context";
function ToolBar(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("DEFAULT");
  const [expanded, setExp] = useState(false);
  const { status, user } = useContext(AuthContext);
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
      <div className="pageLinks hidden sm:inline-block divide-x-2 divide-gray-400 dark:divide-gray-200">
        <Link href="/">
          <a className="pl-8 pr-8">Home</a>
        </Link>
        <Link href="/about">
          <a className="pl-8 pr-8">About</a>
        </Link>
        {mounted ? (
          status.logged ? (
            <button
              className="bg-transparent focus:outline-none pl-8"
              onClick={status.logOut}
            >
              Sign Out
            </button>
          ) : (
            <button
              className="bg-transparent focus:outline-none pl-8"
              onClick={status.logIn}
            >
              Sign In
            </button>
          )
        ) : null}
      </div>
    </div>
  );
}

export default ToolBar;
