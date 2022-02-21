import React, { useEffect, useState } from "react";
import axios from "axios";
import Searchbox from "./Components/Search/Search";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

import "./App.css";
import { Navbar } from "./Components/Nav/Navbar";
import Footer from "./Components/Footer/Footer";

export const DataContext = React.createContext([]);

function App() {
  const [data, setData] = useState([]);
  const SpreadSheetConnection = process.env.REACT_APP_SHEET_BEST_CONNECTION_URL;

  useEffect(() => {
    axios.get(SpreadSheetConnection).then((response) => {
      setData(response.data);
    });
  }, [SpreadSheetConnection]);

  return (
    <DataContext.Provider value={data}>
      <div className="relative  h-screen max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        <Navbar className="" />
        <div className="flex flex-col justify-center items-center h-full transition duration-500">
          <Searchbox />
          <Bookmarks />
          <Footer />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
