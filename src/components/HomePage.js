import React from "react";
import Header from "./Header";
import { RiRobot2Line } from "react-icons/ri";

function HomePage() {
  return (
    <main className="w-full">
      <Header />
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
              Login/Signup
            </li>
            <li className="hover:bg-[#f63366] flex-1 p-2 cursor-pointer rounded">
              Create Profile
            </li>
            <li className="hover:bg-[#f63366] flex-1 p-2 cursor-pointer rounded">
              Chat with AI
            </li>
            <li className="hover:bg-[#f63366] flex-1 p-2 cursor-pointer rounded">
              Agent Workflow
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}

export default HomePage;
