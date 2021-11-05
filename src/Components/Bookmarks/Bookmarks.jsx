import React, { useContext } from "react";

import { DataContext } from "../../App";
import AddBookmark from "./AddBookmark.jsx";
import Item from "./Item";

const Bookmarks = () => {
  const data = useContext(DataContext);

  return (
    <div className="rounded  py-4">
      <div
        id="main"
        className="
        grid md:grid-cols-3 xl:grid-cols-5 2-xl:grif-cols-7 justify-evenly
        bg-gray-100 dark:bg-gray-400
        rounded-md
        "
      >
        {data.map((bookmark, index) => (
          <Item key={index} name={bookmark.Name} link={bookmark.Link} />
        ))}

        <AddBookmark />
      </div>
      <div className="w-full "></div>
    </div>
  );
};

export default Bookmarks;
