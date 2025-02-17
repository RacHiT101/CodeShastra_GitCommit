/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  Avatar,
  Button,
  InputGroup,
  Input,
  ModalFooter,
  Box,
} from "@chakra-ui/react";
import { CiMenuKebab } from "react-icons/ci";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import Job1 from "../../assets/Job1.png";
import Job2 from "../../assets/Job2.png";
import Job3 from "../../assets/Job3.png";
import Job4 from "../../assets/Job4.png";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import { BsStars } from "react-icons/bs";
import VideoApp from "../../VideoApp";
import { NavLink } from "react-router-dom";
// import VideoApp from "../../VideoApp";
import ReactMarkdown from "react-markdown";

const Dashboard = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const [showVideoApp, setShowVideoApp] = useState(false);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const [showJobType, setShowJobType] = useState("recommended");

  const toast = useToast();

  const [analysis, setAnalysis] = useState("");

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
    const formData = new FormData();
    formData.append("file", event.target.files[0]);

    // You can add additional fields to the form data if needed
    formData.append("jd", "Your job description here");

    axios
      .post("http://localhost:5000/process", formData)
      .then((response) => {
        console.log(response.data);
        setAnalysis(response.data);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  const handleButtonClick = () => {
    // Trigger click event on file input
    fileInputRef.current.click();
  };

  const getRandomImage = () => {
    const images = [Job1, Job2, Job3, Job4];
    return images[Math.floor(Math.random() * images.length)];
  };

  const getAllJobs = () => {
    axios
      .get("http://localhost:5001/api/jobs")
      .then((res) => {
        setAllJobs(res.data.jobs);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const getRecommendedJobs = async () => {
    const skills = JSON.parse(localStorage.getItem("user"))?.skills;
    await fetch("http://localhost:5000/recommend", {
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
        setRecommendedJobs(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const data = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    views: Math.floor(Math.random() * 100),
  }));

  const applyJob = async (jobId, recruiterId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    await axios
      .post("http://localhost:5001/api/applications", {
        jobId,
        userId: user._id,
        additionalDoc: description,
        recruiterId,
      })
      .then((res) => {
        console.log(res.data);
        toast({
          title: "Applied Successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        toast({
          title: "Failed to apply",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    getAllJobs();
    getRecommendedJobs();
  }, []);

  const [jobToDisplay, setJobToDisplay] = useState([]);
  const [description, setDescription] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(jobToDisplay);

  return (
    <div className="flex justify-evenly h-full w-full p-10 gap-5">
      <div className="flex flex-col gap-4 justify-evenly w-full h-full">
        <div className="statschild h-full w-full p-4 bg-white rounded-xl">
          <div className="text-lg">Profile View</div>
          <div
            style={{
              fontWeight: "medium",
              fontSize: "0.8rem",
              color: "grey",
            }}
          >
            (This Month)
          </div>
          <AreaChart width={500} height={200} data={data} className="mt-3">
            <defs>
              <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              interval={5}
              tickLine={false}
              tickFormatter={(value) =>
                value === 1 ? "" : `${value >= 10 ? value : `0${value}`}/03`
              }
            />
            <YAxis
              tickLine={false}
              tickFormatter={(value) => (value === 0 ? "" : value)}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="views"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorViews)"
            />
          </AreaChart>
        </div>
        <div className="stats h-full w-full grid grid-cols-2 gap-4">
          <div style={{height:"8rem"}} className="statschild w-full p-4 bg-white rounded-xl">
            <div className="text-lg">Potential Jobs</div>
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
                fontSize: "1.75rem",
                fontWeight: "bolder",
                padding: "1rem 1rem 0rem 0rem",
              }}
            >
              13
            </div>
          </div>
          <div style={{height:"8rem"}} className="statschild w-full p-4 bg-white rounded-xl ">
            <div className="text-lg">Matched Jobs</div>
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
                fontSize: "1.75rem",
                fontWeight: "bolder",
                padding: "1rem 1rem 0rem 0rem",
              }}
            >
              9
            </div>
          </div>
          <div style={{height:"8rem"}} className="statschild w-full p-4 bg-white rounded-xl">
            <div className="text-lg">Search Appearance</div>
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
                fontSize: "1.75rem",
                fontWeight: "bolder",
                padding: "1rem 1rem 0rem 0rem",
              }}
            >
              329
            </div>
          </div>
          <div style={{height:"8rem"}} className="statschild w-full p-4 bg-white rounded-xl">
            <div className="text-lg">Applied Jobs</div>
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
                fontSize: "1.75rem",
                fontWeight: "bolder",
                padding: "1rem 1rem 0rem 0rem",
              }}
            >
              8
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col h-full overflow-y-auto rounded-xl shadow-md shadow-gray-200 bg-white p-4">
        <div className="flex mb-4 w-full px-3 items-center justify-between">
          <div className="text-xl font-semibold">Jobs for you</div>
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
              <div
                key={index}
                className="statschild shadow-lg hover:shadow-[#57575760] cursor-pointer w-full p-4 bg-white flex items-center justify-between rounded-xl"
              >
                <div className="flex w-full items-center ">
                  <img src={getRandomImage()} className="mr-10 h-12" />
                  <div className="flex w-full flex-col">
                    <div className="text-lg font-bold w-full">{job.title}</div>
                    <div className="text-sm font-bold w-full">
                      {job.company || "Amazon"}
                      <span className="ms-3 text-xs font-normal text-gray-500">
                        {job.location}
                      </span>
                    </div>
                    <div className="w-full flex mt-3 justify-between items-center">
                      <div
                        className="font-bold text-[#0049FC] text-sm cursor-pointer"
                        onClick={() => {
                          setJobToDisplay(job);
                          console.log(job);
                          onOpen();
                        }}
                      >
                        View Job
                      </div>
                      <div className="text-sm font-bold">{job.salary}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {showJobType === "all" && (
          <div className="flex flex-col gap-5 w-full">
            {allJobs?.map((job, index) => (
              <div
                key={index}
                className="statschild shadow-lg hover:shadow-[#57575760] cursor-pointer w-full p-4 bg-white flex items-center justify-between rounded-xl"
              >
                <div className="flex w-full items-center ">
                  <img src={getRandomImage()} className="mr-10 h-12" />
                  <div className="flex w-full flex-col">
                    <div className="text-lg font-bold w-full">{job.title}</div>
                    <div className="text-sm font-bold w-full">
                      {job.company || "Amazon"}
                      <span className="ms-3 text-xs font-normal text-gray-500">
                        {job.location}
                      </span>
                    </div>
                    <div className="w-full flex mt-3 justify-between items-center">
                      <div
                        className="font-bold text-[#0049FC] text-sm cursor-pointer"
                        onClick={() => {
                          setJobToDisplay(job);
                          console.log(job);
                          onOpen();
                        }}
                      >
                        View Job
                      </div>
                      <div className="text-sm font-bold">{job.salary}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Modal
        blockScrollOnMount={false}
        size={"2xl"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div className="flex flex-col w-full">
              <div className="text-2xl font-bold">{jobToDisplay?.title}</div>
              <div className="w-full mt-2 text-gray-700 flex gap-2 items-center justify-center">
                <img src={getRandomImage()} className=" h-7" />
                <div className="flex justify-between w-full items-center">
                  <NavLink
                    to={`/${jobToDisplay?.recruiter}`}
                    className="text-lg"
                  >
                    {jobToDisplay?.recruiterName}
                  </NavLink>
                  <div className="text-gray-500 ms-3 text-sm">
                    {jobToDisplay?.location}
                  </div>
                </div>
              </div>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex mb-2 flex-col w-full">
              <div className="font-semibold text-sm">Skills Required</div>
              <div className="flex flex-wrap gap-2 mb-2">
                {jobToDisplay?.skillsReqd?.map((skill) => {
                  return (
                    <div className="px-2 py-1 text-sm rounded-3xl border-[#0049fc] border-2">
                      {skill}
                    </div>
                  );
                })}
              </div>
              <div className="flex font-bold flex-col w-full">Salary</div>
              <div className="mb-2 text-sm">{jobToDisplay?.salary}</div>
              <div className="flex font-bold flex-col w-full">Type</div>
              <div className="mb-2 text-sm">{jobToDisplay?.duration}</div>
              <div className="flex font-bold flex-col w-full">
                Job Description
              </div>
              <div className="mb-2 text-sm">{jobToDisplay?.jobDescription}</div>
              <div className="mb-2 flex flex-col w-full">
                <div className="flex font-bold flex-col w-full">
                  Describe yourself
                </div>
                <div className="text-sm">
                  To help recuiters know more about you
                </div>
              </div>
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Enter your description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </InputGroup>
            </div>
            {analysis && (
              <div className="">
                <ReactMarkdown>{analysis}</ReactMarkdown>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <input
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            <Button colorScheme="blue" mr={3} onClick={handleButtonClick}>
              <BsStars className="mr-2"  />
              Check my chances
            </Button>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                applyJob(jobToDisplay._id, jobToDisplay.recruiter);
              }}
            >
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* <Box container sx={{ width: "60%", height: "60%" }}>
                  <VideoApp />
      </Box> */}
      {/* <button onClick={() => setShowVideoApp(true)}>Show Video App</button> */}
    </div>
  );
};

export default Dashboard;
