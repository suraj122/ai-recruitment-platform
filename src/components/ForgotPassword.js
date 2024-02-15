import React, { useState, useRef } from "react";
import Header from "./Header";
// import { checkValidation } from "../utils/validate";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const email = useRef("");
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleSumbit = async (e) => {
    e.preventDefault();
    const userEmail = email.current.value;
    // const message = checkValidation(userEmail);
    // setErrorMessage(message);

    axios
      .post("http://localhost:8000/auth/forgot-password", {
        userEmail,
      })
      .then((res) => {
        if (!res.data.status) {
          setErrorMessage(res.data.message);
        } else {
          setErrorMessage(res.data.message);
          alert("Check your email for link to reset your password");
          navigate("/chat");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="w-full">
      <Header />
      <section className="max-w-sm w-full m-auto mt-24 text-white bg-gray-700 py-8 px-12 rounded-md">
        <form onSubmit={(e) => handleSumbit(e)}>
          <legend className="text-xl font-semibold mb-6">
            Forgot Password
          </legend>
          <input
            ref={email}
            className="block w-full py-2 mt-4 px-4 rounded bg-gray-800 placeholder:text-sm"
            type="text"
            placeholder="Email Address"
          />

          <p className="mt-4 text-red-600 font-semibold">{errorMessage}</p>
          <button className="mt-6 w-full py-2 bg-blue-600 px-6 rounded">
            Send
          </button>
        </form>
      </section>
    </main>
  );
};

export default ForgotPassword;
