import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/recruiterMain/Sidebar";
import Navbar from "../components/recruiterMain/Navbar";
import { IoIosArrowBack } from "react-icons/io";

const RecruiterApplications = () => {
  const location = useLocation();
  const jobId = location.state?.jobId;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Sidebar />
      <div className="w-full relative h-full pt-20 p-5 flex flex-col justify-center items-center">
        <Navbar />
        <div className="w-full h-full p-5 flex flex-col bg-white rounded-xl statschild">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.history.back()}
          >
            <IoIosArrowBack />
            <div className="text-sm text-gray-500">Back</div>
          </div>
          {jobId ? (
            <div>Applications for job {jobId}</div>
          ) : (
            <div>No job selected</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecruiterApplications;
