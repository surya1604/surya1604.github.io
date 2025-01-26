import React from "react";
import { useNavigate } from "react-router-dom";

const Work_navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 backdrop-blur-lg   h-20 flex items-center justify-center">
      <button
        onClick={() => navigate(-1)} // Navigates back to the previous page
        className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-600 shadow-sm bg-gray-950 hover:bg-gray-950 transition-colors duration-200"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-6 h-7 text-gray-100"
          fill="currentColor"
        >
          <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" />
        </svg>
      </button>
    </div>
  );
};

export default Work_navbar;
