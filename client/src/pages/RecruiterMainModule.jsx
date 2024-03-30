import React, { useState } from "react";
import Sidebar from "../components/recruiterMain/Sidebar";
import Navbar from "../components/recruiterMain/Navbar";
import Chats from "../components/chat/Chats";
import Jobs from "../components/recruiterMain/Jobs";

const RecruiterMainModule = () => {
  const [activeSection, setActiveSection] = useState("jobs");

  const getSection = () => {
    switch (activeSection) {
      case "jobs":
        return <Jobs />;
      case "reviews":
        return <div>Profile</div>;
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
