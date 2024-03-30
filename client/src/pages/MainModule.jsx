import React, { useState } from "react";
import Sidebar from "../components/main/Sidebar";
import Navbar from "../components/main/Navbar";
import Dashboard from "../components/main/Dashboard";

const MainModule = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const getSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "jobs":
        return <div>jobs</div>;
      case "profile":
        return <div>profile</div>;
      case "settings":
        return <div>settings</div>;
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden flex items-center justify-center">
      <Sidebar />

      <div className="flex flex-col relative pt-10  h-full w-full">
        <Navbar />
        <div className="h-full w-full overflow-y-auto">{getSection()}</div>
      </div>
    </div>
  );
};

export default MainModule;
