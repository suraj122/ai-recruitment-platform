import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full py-4 px-16">
      <ul className="flex items-center justify-end space-x-8">
        <li>
          <Link to="/signin" className="text-white">
            Signin
          </Link>
        </li>
        <li className="text-white">
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
