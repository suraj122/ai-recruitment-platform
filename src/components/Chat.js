import React, { useState } from "react";
import Header from "./Header";

const Chat = () => {
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPlaceholder(false);
    setAnswer("");
  };

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
    setShowPlaceholder(true);
  };

  return (
    <main className="w-full">
      <Header />
      <section className="max-w-3xl w-full mx-auto mt-12 text-white">
        <h1 className="text-4xl font-bold">Hiring Requirements</h1>
        <article className="mt-8">
          <h2 className="text-lg font-medium">
            Assitant: What position are you hiring for?
          </h2>
          <form onSubmit={(e) => handleSubmit(e)} className="mt-4">
            <label htmlFor="">
              <span className="text-sm">Type your answer here:</span>
              <div className="relative">
                <input
                  onChange={(e) => handleAnswer(e)}
                  className="block mt-2 w-full py-2 px-4 rounded bg-gray-800 placeholder:text-sm"
                  type="text"
                  value={answer}
                />
                <span
                  className={`${
                    !showPlaceholder ? "hidden" : ""
                  } text-xs absolute right-4 text-gray-300 bottom-1`}
                >
                  Press enter to apply
                </span>
              </div>
            </label>

            <button className="py-2 px-4 border border-red-500 text-red-600 rounded hover:bg-red-500 hover:text-white mt-4">
              Send
            </button>
          </form>
        </article>
      </section>
    </main>
  );
};

export default Chat;
