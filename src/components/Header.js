import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get("http://localhost:8000/auth/logout")
      .then((res) => {
        if (res.data.status) {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
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
        <li>
          <button
            onClick={handleLogout}
            className="bg-blue-500 px-2 py-1 rounded text-white"
          >
            Logout
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
