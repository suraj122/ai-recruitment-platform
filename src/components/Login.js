import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <main className="w-full">
      <Header />
      <section className="max-w-sm w-full m-auto mt-24 text-white bg-gray-700 py-8 px-12 rounded-md">
        <form>
          <legend className="text-xl font-semibold mb-6">
            {isLogin ? "Signin" : "Signup"}
          </legend>
          {isLogin ? (
            ""
          ) : (
            <input
              className="block w-full py-2 px-4 rounded bg-gray-800 placeholder:text-sm"
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            className="block w-full py-2 mt-4 px-4 rounded bg-gray-800 placeholder:text-sm"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="block w-full py-2 px-4 mt-4 rounded bg-gray-800 placeholder:text-sm"
            type="password"
            placeholder="Password"
          />

          <button className="mt-6 w-full py-2 bg-blue-600 px-6 rounded">
            {isLogin ? "Signin" : "Signup"}
          </button>
        </form>
        <div>
          <p className="text-right text-sm text-gray-300 mt-4">
            {isLogin ? "New to platform? " : "Already registered? "}
            <button
              onClick={() => handleForm()}
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
