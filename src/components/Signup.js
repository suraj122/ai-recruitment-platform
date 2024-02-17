import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { SIGNUP_URL } from "../utils/constant";

const Signup = () => {
  const user = useRef("");
  const email = useRef("");
  const password = useRef("");
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleSumbit = async (e) => {
    e.preventDefault();
    const userName = user.current.value;
    const userEmail = email.current.value;
    const userPassword = password.current.value;
    const message = checkValidation(userEmail, userPassword, userName);
    setErrorMessage(message);
    if (!message) {
      axios
        .post(SIGNUP_URL, {
          userEmail,
          userPassword,
          userName,
        })
        .then((res) => {
          if (res.data.status) {
            navigate("/signin");
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
          <legend className="text-xl font-semibold mb-6">Signup</legend>

          <input
            ref={user}
            className="block w-full py-2 px-4 rounded bg-gray-800 placeholder:text-sm"
            type="text"
            placeholder="Full Name"
          />

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
            Signup
          </button>
        </form>

        <div>
          <p className="text-right text-sm text-gray-300 mt-4">
            Already registered?{" "}
            <Link to="/signin" className="font-semibold text-white">
              Signin now
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Signup;
