import React, { useState } from "react";

const Banner = ({ message, type = "success" }) => {
  const [hiddenBanner, setBanner] = useState();

  function CloseBtn() {
    setBanner("hidden");
  }

  const isError = type === "error";

  return (
    <div
      id="toast-default"
      className={`flex items-center w-full max-w-xs p-4 rounded-lg shadow absolute top-20 right-10 ${
        hiddenBanner || ""
      } ${
        isError
          ? "text-red-700 bg-red-50 border border-red-200"
          : "text-gray-700 bg-white border border-gray-200"
      }`}
      role="alert"
    >
      <div className="text-sm font-normal">{message}</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#toast-default"
        aria-label="Close"
        onClick={CloseBtn}
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Banner;
