import React from "react";
import ReactDOM from "react-dom/client";

function Navbar() {
  return (
    <div>
      <ul className="flex flex-row flex-initial gap-60 justify-center top-20 h-10 text-blue-800 font-semibold px-0 py-2">
        <li className="px-10 py-5 pb-10 text-sm text-center rounded-full hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">
          Home
        </li>
        <li className="px-10 py-5 pb-10 text-sm text-center rounded-full hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">
          About
        </li>
        <li className="px-10 py-5 pb-10 text-sm text-center rounded-full hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">
          Receipe
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
