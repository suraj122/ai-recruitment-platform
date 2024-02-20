import React from "react";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div className="">
      <button
        onClick={() => setIsSidebarOpen(true)}
        className={`text-white p-2 hover:bg-gray-500 rounded ${
          isSidebarOpen ? "hidden" : "inline-block absolute z-10 left-2 top-2"
        }`}
      >
        <IoIosArrowForward />
      </button>
      <aside
        className={`max-w max-w-sm w-full bg-gray-800 h-screen p-4 ${
          isSidebarOpen ? "sidebar-open" : "sidebar-close"
        }`}
      >
        <header className="text-right text-white flex justify-end">
          <IoClose
            onClick={() => setIsSidebarOpen(false)}
            className="text-xl cursor-pointer "
          />
        </header>
        <ul className={`mt-12 ${isSidebarOpen ? "" : "hidden"}`}>
          <li className="my-4 nav-active">
            <NavLink
              className="p-2 text-gray-300 w-full block rounded-md"
              to="/"
            >
              Homepage
            </NavLink>
          </li>
          <li className="my-4 nav-active">
            <NavLink
              className="p-2 text-gray-300 w-full block rounded-md hover:bg-gray-500 hover:text-white"
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
          <li className="my-4 nav-active">
            <NavLink
              to="/chat"
              className="p-2 text-gray-300 w-full block rounded-md hover:bg-gray-500 hover:text-white"
            >
              Chat
            </NavLink>
          </li>
          <li className="my-4 nav-active">
            <NavLink
              className="p-2 text-gray-300 w-full block rounded-md hover:bg-gray-500 hover:text-white"
              to="/workflow"
            >
              Agent Workflow
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
