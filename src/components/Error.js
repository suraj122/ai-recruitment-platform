import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Header from "./Header";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <main className="w-full">
      <Header />
      <section className="max-w-3xl w-full mx-auto mt-12 text-white text-center py-24">
        <h1 className="text-4xl font-bold text-center">404: Page Not Found</h1>
        <Link
          to="/"
          className="border border-blue-500 rounded bg-blue-500 px-4 py-2 inline-block mt-8"
        >
          Go to HomePage
        </Link>
      </section>
    </main>
  );
};

export default Error;
