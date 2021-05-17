import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import style from "../../styles/ToolBar.module.scss";
function Searchbar(props) {
  const [active, setActive] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
  };
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  const showMenu = (e) => {
    setActive(true);
  };
  const removeMenu = (e) => {
    setActive(false);
    setQuery("");
  };
  const outputs = ["apple", "nokia", "sony"];
  let inputs = [];
  if (query != "") {
    inputs = outputs.filter((output) => output.includes(query));
  } else {
    inputs = [];
  }

  return (
    <div className={"relative justify-end " + props.className}>
      <div
        className={
          props.zonespec +
          " inline-flex flex-row items-center text-right w-full relative"
        }
      >
        <input
          type="search"
          onChange={handleQuery}
          onFocus={showMenu}
          onBlur={removeMenu}
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
        <div className="block w-full bg-white text-black rounded mt-4 px-2 absolute top-full z-10 text-left">
          {inputs.length && active > 0
            ? inputs.map((val, key) => {
                return (
                  <div className="block">
                    <p key={key}>{val}</p>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
