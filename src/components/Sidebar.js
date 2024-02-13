import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="max-w max-w-sm w-full bg-gray-800 h-screen p-4">
      <header className="text-right text-white flex justify-end">
        <IoClose className="text-xl" />
      </header>
      <ul className="mt-12">
        <li className="my-4">
          <Link
            className="p-2 bg-gray-500 text-white w-full block rounded-md"
            to="/"
          >
            Homepage
          </Link>
        </li>
        <li className="my-4">
          <Link
            className="p-2 text-gray-300 w-full block rounded-md hover:bg-gray-500 hover:text-white"
            to="/profile"
          >
            Profile
          </Link>
        </li>
        <li className="my-4">
          <Link
            to="/chat"
            className="p-2 text-gray-300 w-full block rounded-md hover:bg-gray-500 hover:text-white"
          >
            Chat
          </Link>
        </li>
        <li className="my-4">
          <Link
            className="p-2 text-gray-300 w-full block rounded-md hover:bg-gray-500 hover:text-white"
            to="/workflow"
          >
            Agent Workflow
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
