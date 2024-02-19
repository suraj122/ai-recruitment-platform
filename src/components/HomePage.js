import React, { useContext } from "react";
import { RiRobot2Line } from "react-icons/ri";
import { UserContext } from "../utils/UserContext";
import { Link } from "react-router-dom";

function HomePage() {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <main className="w-full">
      <section className="max-w-3xl w-full mx-auto mt-12 text-white">
        <div className="bg-white shadow-lg inline-block p-6 rounded-md">
          <RiRobot2Line className="text- text-5xl" />
        </div>
        <article>
          <h1 className="text-4xl font-bold  mt-4">AI Recruit Platform</h1>
          <p className="mt-4">
            Welcome to AI Interviewer! 👏 AI Interviewer is your personal
            interviewer powered by generative AI that conducts mock
            interviews.You can upload your resume and enter job descriptions,
            and AI Interviewer will ask you customized questions. Additionally,
            you can configure your own Interviewer!
          </p>
        </article>
        <article className="mt-12">
          <h2 className="text-2xl font-bold">Get Started</h2>
          <p className="mt-4">
            The following steps to get the recruitment process started:
          </p>
          <ul className="flex items-center justify-between bg-gray-600 p-2 px-6 text-center mt-8 rounded-md space-x-2">
            <li className="bg-[#f63366] flex-1 p-2 font-bold rounded cursor-pointer">
              {isLoggedIn ? "Logout" : "Login/Signup"}
            </li>
            <li className="hover:bg-[#f63366] flex-1 p-2 cursor-pointer rounded">
              <Link to="/profile">Go to profile</Link>
            </li>
            <li className="hover:bg-[#f63366] flex-1 p-2 cursor-pointer rounded">
              <Link to="/chat">Chat with AI</Link>
            </li>
            <li className="hover:bg-[#f63366] flex-1 p-2 cursor-pointer rounded">
              <Link to="/workflow">Agent Workflow</Link>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}

export default HomePage;
