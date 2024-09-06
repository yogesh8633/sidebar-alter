import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ThemeProvider } from "./context/ThemeContext";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleSidebarToggle = (collapse) => {
    setIsCollapsed(collapse);
  }
  return (
    <ThemeProvider>
      <div className="flex">
        <Sidebar isCollapsed={isCollapsed} onToggle={handleSidebarToggle}/>
        {/* <div className="flex-1 p-5 bg-gray-100 dark:bg-gray-800">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Main Content Area</h1>
        </div> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
