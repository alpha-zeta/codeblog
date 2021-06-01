import { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import style from "../../styles/ToolBar.module.scss";
import { PostContext } from "../../context/PostProvider.context";
import Link from "next/link";
function Searchbar(props) {
  const [active, setActive] = useState(false);
  const { posts } = useContext(PostContext);
  const [foc, setFoc] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
  };
  const [query, setQuery] = useState("");
  const handleFocus = (e) => {
    setFoc(true);
  };
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  const showMenu = (e) => {
    setActive(true);
  };
  const removeMenu = (e) => {
    if (foc != true) {
      setActive(false);
      setQuery("");
    }
  };
  let inputs = [];
  if (query != "") {
    inputs = posts.filter((post) => post.title.includes(query));
  } else {
    inputs = [];
  }

  return (
    <div
      className={"relative justify-end " + props.className}
      onFocus={showMenu}
    >
      <div
        className={
          props.zonespec +
          " inline-flex flex-row items-center text-right w-full relative"
        }
      >
        <input
          type="search"
          onChange={handleQuery}
          value={query}
          className=" mr-4 p-2 rounded bg-gray-200 dark:bg-gray-800 searchInput"
          placeholder="Put your query here..."
        />
        <button
          onClick={handleSearch}
          className={
            style.button +
            " bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded p-3 h-10 w-10 focus:outline-none "
          }
        >
          <BsSearch />
        </button>
        <div
          className={`${
            inputs.length == 0 ? "border-none " : ""
          } block w-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded mt-4 px-2 absolute top-full z-10 text-left border-2 border-gray-500`}
        >
          {inputs.length && active > 0
            ? inputs.map((val, key) => {
                return (
                  <Link href={"/articles/" + val.slug}>
                    <a onClick={removeMenu} key={key}>
                      <div className="block my-2 px-2 hover:bg-gray-300 dark:hover:bg-gray-700">
                        <p key={key}>{val.title}</p>
                      </div>
                      <hr />
                    </a>
                  </Link>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
