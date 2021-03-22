import Link from "next/link";
import style from "../../styles/ToolBar.module.scss";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

function ToolBar(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("DEFAULT");
  useEffect(() => setMounted(true), []);
  const handleTheme = (e) => {
    if (mounted) {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };
  return (
    <div className={style.tools + " text-gray-900 dark:text-gray-100"}>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className={
          style.button + " bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
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
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact us</a>
      </Link>
    </div>
  );
}

export default ToolBar;
