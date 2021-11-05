/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const Item = ({ name, link }) => {
  return (
    <a href={link} target="_blank">
      <div
        className="
    p-3 m-1 cursor-pointer rounded-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-100 
    focus:ring-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:ring-gray-100 
    
    "
      >
        {name}
      </div>
    </a>
  );
};

export default Item;
