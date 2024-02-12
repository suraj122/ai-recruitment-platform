import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const user = useRef("");
  const email = useRef("");
  const password = useRef("");

  const [errorMessage, setErrorMessage] = useState(null);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrorMessage(null);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const message = checkValidation(
      user.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };

  return (
    <main className="w-full">
      <Header />
      <section className="max-w-sm w-full m-auto mt-24 text-white bg-gray-700 py-8 px-12 rounded-md">
        <form onSubmit={(e) => handleSumbit(e)}>
          <legend className="text-xl font-semibold mb-6">
            {isLogin ? "Signin" : "Signup"}
          </legend>
          {isLogin ? (
            ""
          ) : (
            <input
              ref={user}
              className="block w-full py-2 px-4 rounded bg-gray-800 placeholder:text-sm"
              type="text"
              placeholder="Full Name"
            />
          )}

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
            {isLogin ? "Signin" : "Signup"}
          </button>
        </form>

        <div>
          <p className="text-right text-sm text-gray-300 mt-4">
            {isLogin ? "New to platform? " : "Already registered? "}
            <button
              onClick={() => toggleForm()}
              className="font-semibold text-white"
            >
              {isLogin ? "Signup Now" : "Signin now"}
            </button>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
