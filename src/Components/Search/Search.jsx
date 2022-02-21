import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
const Search = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const [searchEngine, setSearchEngine] = useState(
    "https://duckduckgo.com/?q="
  );

  const handleSelectChange = (e) => {
    if (e.target.value === "Duck Duck Go") {
      setSearchEngine("https://duckduckgo.com/?q=");
    }
    if (e.target.value === "Google") {
      setSearchEngine("https://google.com/search?q=");
    }
    if (e.target.value === "Reddit") {
      setSearchEngine("https://www.reddit.com/search/?q=");
    }
    if (e.target.value === "Indie Hackers") {
      setSearchEngine("https://www.indiehackers.com/search?q=");
    }
    if (e.target.value === "Hacker News") {
      setSearchEngine("https://hn.algolia.com/?q=");
    }
    if (e.target.value === "Stack overflow") {
      setSearchEngine("https://stackoverflow.com/search?q=");
    }
  };

  // const handleOnChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // const url = "https://google.com/search?q=" + e.target.value;
      const url = searchEngine + e.target.value;
      window.open(url, "__blank");
    }
  };

  return (
    <div
      className="
      grid grid-cols-2 
      relative w-full sm:w-11/12 py-2 rounded-full 
      border-2 border-gray-400 focus-within:border-white dark:focus-within:border-gray-800 dark:hover:border-gray-800
    focus-within:bg-gray-100 dark:bg-gray-700
    hover:shadow-lg
    "
    >
      <div
        className=" flex flex-row items-center justify-center"
        style={{ gridColumn: "" }}
      >
        <SearchIcon className="ml-4 w-6 h-6 text-gray-400" />
        <input
          type="search"
          name=""
          id=""
          width="110%"
          className="
          mx-2 place-self-stretch	
          rounded-full w-full bg-transparent dark:text-gray-100 outline-none"
          placeholder=""
          // onChange={handleOnChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <select
        className="
         place-self-end pr-2
        outline-none border-none bg-transparent rounded p-2 m-2 w-auto 
         dark:text-gray-100  dark:bg-gray-700
        focus:ring-2 ring-gray-400"
        onChange={handleSelectChange}
      >
        <option defaultValue="Duck Duck Go">Duck Duck Go</option>
        <option value="Google">Google</option>
        <option value="Reddit">Reddit</option>
        <option value="Indie Hackers">Indie Hackers</option>
        <option value="Hacker News">Hacker News</option>
        <option value="Stack overflow">Stack overflow</option>
      </select>
    </div>
  );
};

export default Search;
