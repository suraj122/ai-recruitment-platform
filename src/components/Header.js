import axios from "axios";
import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../utils/UserContext";

function Header() {
  const navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:8000/auth/verify")
      .then((res) => {
        if (res.data.status) {
          setIsLoggedIn(true);
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:8000/auth/logout")
      .then((res) => {
        if (res.data.status) {
          setIsLoggedIn(false);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <header className="w-full py-4 px-16">
      <ul className="flex items-center justify-end space-x-8">
        {isLoggedIn ? (
          <li>
            <button
              onClick={handleLogout}
              className="bg-blue-500 px-2 py-1 rounded text-white"
            >
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/signin" className="text-white">
                Signin
              </Link>
            </li>
            <li className="text-white">
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
