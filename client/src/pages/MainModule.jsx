import React, { useState } from "react";
import Sidebar from "../components/main/Sidebar";
import Navbar from "../components/main/Navbar";

const MainModule = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const getSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <div>dashboard</div>;
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

      <div className="flex flex-col h-full w-full">
        <Navbar />
        {getSection()}
      </div>
    </div>
  );
};

export default MainModule;
