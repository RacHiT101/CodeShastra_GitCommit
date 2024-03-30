import React, { useState } from "react";
import Sidebar from "../components/main/Sidebar";
import Navbar from "../components/main/Navbar";
import Chats from "../components/chat/Chats";
import Jobs from "../components/recruiterMain/Jobs";

const RecruiterMainModule = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const getSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <div>Dash</div>;
      case "jobs":
        return <Jobs />;
      case "profile":
        return <div>Profile</div>;
      case "settings":
        return <div>settings</div>;
      case "courses":
        return <div>Courses</div>;
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

export default RecruiterMainModule;
