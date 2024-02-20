import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Chat from "./components/Chat";
import Workflow from "./components/Workflow";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import { UserContext } from "./utils/UserContext";
import { useState } from "react";
import Error from "./components/Error";
import Header from "./components/Header";
import { IoIosArrowForward } from "react-icons/io";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      {isSidebarOpen ? (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      ) : (
        <div className="p-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="bg-gray-500 text-white p-2 rounded"
          >
            <IoIosArrowForward />
          </button>
        </div>
      )}
      <div className="w-full">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const appRouter = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        { path: "/signin", element: <Login /> },
        { path: "/signup", element: <Signup /> },
        { path: "/forgot-password", element: <ForgotPassword /> },
        { path: "/reset-password/:token", element: <ResetPassword /> },
        { path: "/chat", element: <Chat /> },
        { path: "/workflow", element: <Workflow /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);
  return (
    <div className="bg-gray-900 flex">
      <UserContext.Provider value={{ isLoggedIn: isLoggedIn, setIsLoggedIn }}>
        <RouterProvider router={appRouter} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
