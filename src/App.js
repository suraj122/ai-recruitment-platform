import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Chat from "./components/Chat";

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
        { path: "/chat", element: <Chat /> },
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
