import React from "react";
import ReactDOM from "react-dom";
import "./Global-Styles/index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="dark:bg-gray-800 transition-all ease-in-out duration-75">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
