import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-gray-900 flex">
      <Sidebar />
      <HomePage />
    </div>
  );
}

export default App;
