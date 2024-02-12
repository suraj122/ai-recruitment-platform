import React from "react";
import { IoClose } from "react-icons/io5";

function Sidebar() {
  return (
    <aside className="max-w max-w-sm w-full bg-gray-600 h-screen p-4">
      <header className="text-right text-white flex justify-end">
        <IoClose className="text-xl" />
      </header>
      <ul className="mt-12">
        <li className="my-4">
          <a
            className="p-2 bg-gray-500 text-white w-full block rounded-md"
            href="#"
          >
            Homepage
          </a>
        </li>
        <li className="my-4">
          <a
            className="p-2 text-gray-300 w-full block rounded-md hover:bg-gray-500 hover:text-white"
            href="#"
          >
            Profile
          </a>
        </li>
        <li className="my-4">
          <a
            className="p-2 text-gray-300 w-full block rounded-md hover:bg-gray-500 hover:text-white"
            href="#"
          >
            Chat
          </a>
        </li>
        <li className="my-4">
          <a
            className="p-2 text-gray-300 w-full block rounded-md hover:bg-gray-500 hover:text-white"
            href="#"
          >
            Agent Workflow
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
