import React from "react";
import Logo from "../../assets/Logo.svg";
import { Avatar, Card, CardBody } from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";


const Sidebar = ({ activeSection, setActiveSection }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="h-full w-80 shadow-sm shadow-gray-300 py-6 bg-white flex flex-col justify-center items-center">
      <div className="flex gap-3 items-center">
        <img src={Logo} alt="Logo" className="w-12 h-12" />
        <div className="text-2xl text-[#0049FC] font-semibold">
          Git<span className="text-[#00CBFE]">Hire</span>
        </div>
      </div>
      <Avatar
        size="2xl"
        name="Prosper Otemuyiwa"
        src="https://bit.ly/prosper-baba"
        className="mt-5"
      />
      <div className="text-lg font-semibold mt-3">Hello {user?.name}</div>
      <div className="w-full px-5 h-full  overflow-y-auto mt-5 flex flex-col gap-2">
        <Card
          className={`transition-all duration-200 cursor-pointer active:translate-y-0`}
          onClick={() => setActiveSection("jobs")}
        >
          <CardBody>
            <div
              className={`flex gap-2 items-center justify-start ${
                activeSection === "jobs" ? "text-[#0049FC]" : ""
              }`}
            >
              <PiSuitcaseSimpleFill className="text-2xl" />
              Jobs
            </div>
          </CardBody>
        </Card>
        <Card
          className={`transition-all duration-200 cursor-pointer active:translate-y-0`}
          onClick={() => setActiveSection("reviews")}
        >
          <CardBody>
            <div
              className={`flex gap-2 items-center justify-start ${
                activeSection === "reviews" ? "text-[#0049FC]" : ""
              }`}
            >
              <FaRegBookmark className="text-2xl" />
              Reviews
            </div>
          </CardBody>
        </Card>
        <Card
          className={`transition-all duration-200 cursor-pointer active:translate-y-0`}
          onClick={() => setActiveSection("chat")}
        >
          <CardBody>
            <div
              className={`flex gap-2 items-center justify-start ${
                activeSection === "chat" ? "text-[#0049FC]" : ""
              }`}
            >
              <IoChatboxEllipsesOutline className="text-2xl" />
              Chat
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Sidebar;
