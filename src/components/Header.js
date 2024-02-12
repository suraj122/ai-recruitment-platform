import React from "react";

function Header() {
  return (
    <header className="w-full py-4 px-16">
      <ul className="flex items-center justify-end space-x-8">
        <li>
          <a className="text-white" href="#">
            Signin
          </a>
        </li>
        <li className="text-white">
          <a href="#">Signup</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
