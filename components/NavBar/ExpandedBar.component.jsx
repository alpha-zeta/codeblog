import { useEffect, useState, useContext } from "react";
import navbarLinks from "../../assets/navbarLinks";
import Header from "../Misc/Header.components";
import Link from "next/link";
import Searchbar from "../Forms/Searchbar.component";
import { AuthContext } from "../../context/AuthProvider.context";

function ExpandedBar(props) {
  const links = navbarLinks;
  const { status, user } = useContext(AuthContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const handleExp = (e) => {
    props.setExp(!props.expanded);
  };
  return (
    <div
      className={
        props.className +
        (props.expanded ? " expandedActive" : " ") +
        " fixed inline-block w-full z-10 sidebar h-full"
      }
    >
      <div className="w-full h-full dark:bg-black bg-white m-auto sm:hidden">
        <Searchbar
          className="inline-flex sm:hidden w-full p-4"
          zonespec="justify-between"
        />
        <ul className="text-3xl h-full inline-flex flex-col w-full justify-center sideMenu">
          <Header weight="h3" type="Large" className="text-center mb-8">
            Menu
          </Header>
          {links.map((val, key) => {
            return (
              <Link href={val.link} key={key}>
                <a onClick={handleExp}>
                  <li className="hover:bg-gray-200 dark:hover:bg-gray-700 text-center pt-4 pb-4">
                    {val.title}
                  </li>
                </a>
              </Link>
            );
          })}
          <li
            className="hover:bg-gray-200 dark:hover:bg-gray-700 pt-4 pb-4"
            onClick={handleExp}
          >
            {mounted ? (
              status.logged ? (
                <button
                  className="bg-transparent focus:outline-none text-center block w-full"
                  onClick={status.logOut}
                >
                  Sign Out
                </button>
              ) : (
                <button
                  className="bg-transparent focus:outline-none text-center block w-full"
                  onClick={status.logIn}
                >
                  Sign In
                </button>
              )
            ) : null}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ExpandedBar;
