import React, { useState, useRef } from "react";
import Header from "./Header";
// import { checkValidation } from "../utils/validate";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { RESET_PASSWORD_URL } from "../utils/constant";

const ResetPassword = () => {
  const password = useRef("");
  const navigate = useNavigate();
  const { token } = useParams();

  const [errorMessage, setErrorMessage] = useState("");

  const handleSumbit = async (e) => {
    e.preventDefault();
    const userPassword = password.current.value;

    axios
      .post(RESET_PASSWORD_URL + token, {
        userPassword,
      })
      .then((res) => {
        if (!res.data.status) {
          setErrorMessage(res.data.message);
        } else {
          navigate("/signin");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="w-full">
      <Header />
      <section className="max-w-sm w-full m-auto mt-24 text-white bg-gray-700 py-8 px-12 rounded-md">
        <form onSubmit={(e) => handleSumbit(e)}>
          <legend className="text-xl font-semibold mb-6">Reset Password</legend>
          <label className="font-semibold text-sm">New Password:</label>
          <input
            ref={password}
            className="block w-full py-2 mt-1 px-4 rounded bg-gray-800 placeholder:text-sm"
            type="password"
            placeholder="New Password"
          />

          <p className="mt-4 text-red-600 font-semibold">{errorMessage}</p>
          <button className="mt-6 w-full py-2 bg-blue-600 px-6 rounded">
            Reset
          </button>
        </form>
      </section>
    </main>
  );
};

export default ResetPassword;
