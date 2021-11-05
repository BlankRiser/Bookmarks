import axios from "axios";
import React, { useState } from "react";

export default function AddBookmark() {
  const [showModal, setShowModal] = useState(false);
  const [appendName, setAppendName] = useState("");
  const [appendShorthand, setAppendShorthand] = useState("");
  const [appendLink, setAppendLink] = useState("");

  const ChangeHandler = (e) => {
    if (e.target.name === "Name") {
      setAppendName(e.target.value);
    }
    if (e.target.name === "Shorthand") {
      setAppendShorthand(e.target.value);
    }
    if (e.target.name === "Link") {
      setAppendLink(e.target.value);
    }
  };

  const submitHandler = (e) => {
    const appendData = {
      Name: appendName,
      Shorthand: appendShorthand,
      Link: appendLink,
    };
    axios
      .post(process.env.REACT_APP_SHEET_BEST_CONNECTION_URL, appendData)
      .then((response) => {
        console.log(response);
      });
    setShowModal(false);
  };
  //  p-3 m-1 cursor-pointer rounded-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-100
  // focus:ring-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:ring-gray-100

  return (
    <>
      <div
        className=" flex items-center justify-center 
    p-3 m-1 cursor-pointer rounded-sm bg-gray-200 dark:bg-gray-700 dark:text-gray-50 
    focus:ring-2 hover:bg-gray-300 dark:hover:bg-gray-600 ring-gray-100"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {showModal ? (
        <>
          <div className="m-11/12 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 dark:bg-gray-600 dark:text-gray-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">Add Bookmarks</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="mb-3 pt-0">
                    {/* <label htmlFor="Website">Enter Name of the website</label> */}
                    <input
                      name="Name"
                      type="text"
                      placeholder="Website"
                      onChange={ChangeHandler}
                      className="px-3 py-3 dark:placeholder-gray-400 dark:text-gray-800 relative rounded text-sm border outline-none focus:outline-none  w-11/12"
                    />
                    {/* <label htmlFor="Website-shorthand">
                      Enter Shorthand for the website
                    </label> */}
                    <input
                      name="Shorthand"
                      type="text"
                      placeholder="Website-shorthand"
                      onChange={ChangeHandler}
                      className="px-3 py-3 my-2 dark:placeholder-gray-400 dark:text-gray-800 relative rounded text-sm border outline-none focus:outline-none  w-11/12"
                    />
                    {/* <label htmlFor="Website-link">
                      Enter link of the website
                    </label> */}
                    <input
                      name="Link"
                      type="url"
                      placeholder="Website-link"
                      onChange={ChangeHandler}
                      className="px-3 py-3 dark:placeholder-gray-400 dark:text-gray-800  relative rounded text-sm border outline-none focus:outline-none  w-11/12"
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={submitHandler}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
