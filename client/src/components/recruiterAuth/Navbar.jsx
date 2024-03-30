import React from "react";
import Logo from "../../assets/Logo.svg";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-20 px-16 flex justify-between items-center">
      <div className="flex items-center justify-center">
        <div className="flex gap-3 items-center">
          <img src={Logo} alt="Logo" className="w-12 h-12" />
          <div className="text-2xl text-[#0049FC] font-semibold">
            Git<span className="text-[#00CBFE]">Hire</span>
          </div>
        </div>
        <div className="ms-32 flex items-center gap-1 hover:text-[#0049FC] cursor-pointer font-semibold">
          Jobs
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12.586l-4.293-4.293-1.414 1.414L10 15.414l5.707-5.707-1.414-1.414z"
            />
          </svg>
        </div>
        <div className="ms-16 flex items-center gap-1 hover:text-[#0049FC] cursor-pointer font-semibold">
          For Employees
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12.586l-4.293-4.293-1.414 1.414L10 15.414l5.707-5.707-1.414-1.414z"
            />
          </svg>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="bg-[#0049FC] text-white text-sm px-3 py-2 rounded-lg cursor-pointer transition-all duration-100">
          Login
        </div>
        <div className="border-[#0049FC] border-2 bg-transparent text-[#0049FC] hover:bg-[#0049FC20] text-sm px-3 py-2 rounded-lg cursor-pointer transition-all duration-100">
          Candidate Signup
        </div>
      </div>
    </div>
  );
};

export default Navbar;
