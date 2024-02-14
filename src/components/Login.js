import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const email = useRef("");
  const password = useRef("");
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  axios.defaults.withCredentials = true;
  const handleSumbit = async (e) => {
    e.preventDefault();
    const userEmail = email.current.value;
    const userPassword = password.current.value;
    const message = checkValidation(userEmail, userPassword);
    setErrorMessage(message);

    if (!message) {
      axios
        .post("http://localhost:8000/auth/signin", {
          userEmail,
          userPassword,
        })
        .then((res) => {
          if (res.data.status) {
            navigate("/chat");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <main className="w-full">
      <Header />
      <section className="max-w-sm w-full m-auto mt-24 text-white bg-gray-700 py-8 px-12 rounded-md">
        <form onSubmit={(e) => handleSumbit(e)}>
          <legend className="text-xl font-semibold mb-6">Signin</legend>
          <input
            ref={email}
            className="block w-full py-2 mt-4 px-4 rounded bg-gray-800 placeholder:text-sm"
            type="text"
            placeholder="Email Address"
          />
          <input
            ref={password}
            className="block w-full py-2 px-4 mt-4 rounded bg-gray-800 placeholder:text-sm"
            type="password"
            placeholder="Password"
          />
          <p className="mt-4 text-red-600 font-semibold">{errorMessage}</p>
          <button className="mt-6 w-full py-2 bg-blue-600 px-6 rounded">
            Signin
          </button>
        </form>

        <div>
          <p className="text-right text-sm text-gray-300 mt-4">
            New to platform?{" "}
            <Link to="/signup" className="font-semibold text-white">
              Signup Now
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
