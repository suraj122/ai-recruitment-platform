import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    { path: "/signin", element: <Login /> },
  ]);
  return (
    <div className="bg-gray-900 flex">
      <Sidebar />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
