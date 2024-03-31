import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/recruiterMain/Sidebar";
import Navbar from "../components/recruiterMain/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

const RecruiterApplications = () => {
  const location = useLocation();
  const jobId = location.state?.jobId;

  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get(`http://localhost:5001/api/application/job/${jobId}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [jobId]);
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
            <div className="">Applications for job {jobId}</div>
          ) : (
            <div>No job selected</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecruiterApplications;
