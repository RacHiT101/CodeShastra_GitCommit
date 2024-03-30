import React, { useEffect, useState } from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { CiMenuKebab } from "react-icons/ci";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import Job1 from "../../assets/Job1.png";
import Job2 from "../../assets/Job2.png";
import Job3 from "../../assets/Job3.png";
import Job4 from "../../assets/Job4.png";

const Dashboard = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [recommendedJobs, setRecommendedJobs] = useState([]);

  const [showJobType, setShowJobType] = useState("recommended");

  const toast = useToast();

  const getRandomImage = () => {
    const images = [Job1, Job2, Job3, Job4];
    return images[Math.floor(Math.random() * images.length)];
  };

  const getAllJobs = () => {
    axios
      .get("http://localhost:5001/api/jobs")
      .then((res) => {
        console.log(res.data.jobs);
        setAllJobs(res.data.jobs);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const getRecommendedJobs = async () => {
    const skills = JSON.parse(localStorage.getItem("user"))?.skills;
    //   axios
    //     .post("http://localhost:5000/recommended", {
    //       skills,
    //       jobroleinterest: [""],
    //     })
    //     .then((res) => {
    //       console.log(res.data);
    //       setRecommendedJobs(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err.response.data);
    //     });
    await fetch("http://localhost:5000/recommended", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        skills,
        jobroleinterest: [""],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecommendedJobs(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllJobs();
    getRecommendedJobs();
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex justify-evenly h-full w-full p-10 gap-5">
      <div className="stats h-64 w-full grid grid-cols-2 gap-5">
        <div className="statschild h-50 w-full p-4 bg-white rounded-xl">
          <div className="flex items-center justify-between">
            <div
              className="text-2xl pr-20"
              style={{ fontSize: "1.5rem", fontWeight: "500" }}
            >
              Potential Jobs
            </div>
            <span>
              <CiMenuKebab
                style={{
                  color: "blue",
                  transform: "rotate(90deg)",
                  fontSize: "2rem",
                }}
              />
            </span>
          </div>
          <div
            style={{
              fontWeight: "medium",
              fontSize: "0.8rem",
              color: "grey",
            }}
          >
            (This Month)
          </div>
          <div
            style={{
              fontSize: "2.3rem",
              fontWeight: "bolder",
              padding: "1rem 1rem 0rem 0rem",
            }}
          >
            13
          </div>
        </div>

        <div className="statschild h-50 w-full p-4 bg-white rounded-xl">
          <div className="flex items-center justify-between">
            <div
              className="text-2xl pr-20"
              style={{ fontSize: "1.5rem", fontWeight: "500" }}
            >
              Matched Jobs
            </div>
            <span>
              <CiMenuKebab
                style={{
                  color: "blue",
                  transform: "rotate(90deg)",
                  fontSize: "2rem",
                }}
              />
            </span>
          </div>
          <div
            style={{
              fontWeight: "medium",
              fontSize: "0.8rem",
              color: "grey",
            }}
          >
            (This Month)
          </div>
          <div
            style={{
              fontSize: "2.3rem",
              fontWeight: "bolder",
              padding: "1rem 1rem 0rem 0rem",
            }}
          >
            9
          </div>
        </div>

        <div className="statschild h-50 w-full p-4 bg-white rounded-xl">
          <div className="flex items-center justify-between">
            <div
              className="text-2xl pr-20"
              style={{ fontSize: "1.5rem", fontWeight: "500" }}
            >
              Search Appearance
            </div>
            <span>
              <CiMenuKebab
                style={{
                  color: "blue",
                  transform: "rotate(90deg)",
                  fontSize: "2rem",
                }}
              />
            </span>
          </div>
          <div
            style={{
              fontWeight: "medium",
              fontSize: "0.8rem",
              color: "grey",
            }}
          >
            (This Month)
          </div>
          <div
            style={{
              fontSize: "2.3rem",
              fontWeight: "bolder",
              padding: "1rem 1rem 0rem 0rem",
            }}
          >
            329
          </div>
        </div>

        <div className="statschild h-50 w-full p-4 bg-white rounded-xl">
          <div className="flex items-center justify-between">
            <div
              className="text-2xl pr-20"
              style={{ fontSize: "1.5rem", fontWeight: "500" }}
            >
              Applied Jobs
            </div>
            <span>
              <CiMenuKebab
                style={{
                  color: "blue",
                  transform: "rotate(90deg)",
                  fontSize: "2rem",
                }}
              />
            </span>
          </div>
          <div
            style={{
              fontWeight: "medium",
              fontSize: "0.8rem",
              color: "grey",
            }}
          >
            (This Month)
          </div>
          <div
            style={{
              fontSize: "2.3rem",
              fontWeight: "bolder",
              padding: "1rem 1rem 0rem 0rem",
            }}
          >
            8
          </div>
        </div>
      </div>

      <div className="w-1/2 flex flex-col h-full overflow-y-auto rounded-xl shadow-md shadow-gray-200 bg-white p-4">
        <div className="flex mb-4 items-center justify-between">
          <div className="">Jobs for you</div>
          <span
            className="text-sm font-bold text-[#0049FC] cursor-pointer"
            onClick={() => {
              setShowJobType(
                showJobType === "recommended" ? "all" : "recommended"
              );
            }}
          >
            {showJobType === "recommended" ? "Show All" : "Show Recommended"}
          </span>
        </div>

        {showJobType === "recommended" && (
          <div className="flex flex-col gap-5">
            {recommendedJobs?.map((job, index) => (
              <Stat
                key={index}
                className="statschild shadow-lg hover:shadow-[#57575760] cursor-pointer w-full p-4 bg-white flex items-center justify-between rounded-xl"
              >
                <div className="flex w-full items-center ">
                  <img src={getRandomImage()} className="mr-10 h-12" />
                  <div className="flex w-full flex-col">
                    <div className="text-lg font-bold">{job.title}</div>
                    <div className="text-sm font-bold w-full">
                      {job.company || "Amazon"}
                      <span className="ms-10 text-xs font-normal text-gray-500">
                        {job.location}
                      </span>
                    </div>
                    <div className="w-full flex mt-3 justify-between items-center">
                      <div className="font-bold text-[#0049FC] text-sm cursor-pointer">
                        View Job
                      </div>
                      <div className="text-lg font-bold">{job.salary}</div>
                    </div>
                  </div>
                </div>
              </Stat>
            ))}
          </div>
        )}
        {showJobType === "all" && (
          <div className="flex flex-col gap-5 w-full">
            {allJobs?.map((job, index) => (
              <Stat
                key={index}
                className="statschild shadow-lg hover:shadow-[#57575760] cursor-pointer w-full p-4 bg-white flex items-center justify-between rounded-xl"
              >
                <div className="flex w-full items-center ">
                  <img src={getRandomImage()} className="mr-10 h-12" />
                  <div className="flex w-full flex-col">
                    <div className="text-lg font-bold">
                      {job.title || "Hello"}
                    </div>
                    <div className="text-sm font-bold w-full">
                      {job.company || "Amazon"}
                      <span className="ms-10 text-xs font-normal text-gray-500">
                        {job.location}
                      </span>
                    </div>
                    <div className="w-full flex mt-3 justify-between items-center">
                      <div className="font-bold text-[#0049FC] text-sm cursor-pointer">
                        View Job
                      </div>
                      <div className="text-lg font-bold">{job.salary}</div>
                    </div>
                  </div>
                </div>
              </Stat>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
