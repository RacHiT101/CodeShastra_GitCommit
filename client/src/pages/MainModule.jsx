import React, { useState } from "react";
import Sidebar from "../components/main/Sidebar";
import Navbar from "../components/main/Navbar";
import Dashboard from "../components/main/Dashboard";
import Profile from "../components/main/Profile";
import Courses from "../components/main/Courses";
import Jobs from "../components/main/Jobs";
import Chats from "../components/chat/Chats.jsx";

const MainModule = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const getSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "jobs":
        return <Jobs />;
      case "profile":
        return <Profile />;
      case "settings":
        return <div>settings</div>;
      case "courses":
        return <Courses />;
      case "chat":
        return <Chats />;
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden flex items-center justify-center">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="flex flex-col relative pt-10  h-full w-full">
        <Navbar />
        <div className="h-full w-full overflow-y-auto">{getSection()}</div>
      </div>
    </div>
  );
};

export default MainModule;
