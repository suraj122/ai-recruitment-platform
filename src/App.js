import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Chat from "./components/Chat";
import Workflow from "./components/Workflow";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

const AppLayout = () => (
  <>
    <Sidebar />
    <>
      <Outlet />
    </>
  </>
);

function App() {
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
      ],
    },
  ]);
  return (
    <div className="bg-gray-900 flex">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
