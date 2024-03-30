/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalFooter,
  Button,
  useToast,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
} from "@chakra-ui/react";
import { FaMapLocation } from "react-icons/fa6";
import { ImOffice } from "react-icons/im";
import { FaUserTie } from "react-icons/fa";
import axios from "axios";
import Job1 from "../../assets/Job1.png";
import Job2 from "../../assets/Job2.png";
import Job3 from "../../assets/Job3.png";
import Job4 from "../../assets/Job4.png";
import { NavLink } from "react-router-dom";

const Jobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const getRandomImage = (index) => {
    const images = [Job1, Job2, Job3, Job4];
    return images[index % 4];
  };

  const getAppliedJobs = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    await axios
      .get(`http://localhost:5001/api/users/${user._id}/applications`)
      .then((res) => {
        setAppliedJobs(res.data.map((item) => item.jobId)); // This line sets appliedJobs state
        console.log(appliedJobs); // This line logs the appliedJobs state
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
        setAllJobs(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRecommendedJobs();
    getAppliedJobs();
  }, []);

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);

  const handleValuesChange = (values) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  const [filteredAllJobs, setFilteredAllJobs] = useState([]);
  const [filteredAppliedJobs, setFilteredAppliedJobs] = useState([]);

  const filterJobs = () => {
    setFilteredAllJobs(
      allJobs.filter(
        (job) =>
          job?.location?.toLowerCase().includes(location.toLowerCase()) &&
          job?.title?.toLowerCase().includes(title.toLowerCase()) &&
          job?.recruiterName?.toLowerCase().includes(company.toLowerCase())
      )
    );
    setFilteredAppliedJobs(
      appliedJobs.filter(
        (job) =>
          job?.location?.toLowerCase().includes(location.toLowerCase()) &&
          job?.title?.toLowerCase().includes(title.toLowerCase()) &&
          job?.recruiterName?.toLowerCase().includes(company.toLowerCase())
      )
    );
  };

  useEffect(() => {
    filterJobs();
  }, [location, title, company, allJobs, appliedJobs]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [jobToDisplay, setJobToDisplay] = useState([]);
  const [alreadyApplied, setAlreadyApplied] = useState(false);
  const [description, setDescription] = useState("");
  const toast = useToast();

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
        toast({
          title: "Applied Successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Failed to apply",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };
  console.log(filteredAllJobs);

  return (
    <div className="w-full h-full pt-10 p-5 flex items-center justify-center">
      <div className="w-full h-full bg-white rounded-xl shadow-md statschild p-5">
        <div className="text-2xl font-semibold">Jobs</div>
        <div className="flex flex-wrap w-full">
          <Stack spacing={4} className="mt-5 w-full">
            <div className="flex gap-3">
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaMapLocation />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Location"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <ImOffice />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Company"
                  onChange={(e) => setCompany(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaUserTie />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Job Role"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </InputGroup>
              <div className="w-full px-2">
                <div className="">Salary Range</div>
                <RangeSlider
                  w={"90%"}
                  aria-label={["min", "max"]}
                  defaultValue={[0, 30]}
                  onChange={handleValuesChange}
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
              </div>
            </div>
          </Stack>
        </div>
        <Tabs h={"80%"} w={"100%"} className="mt-4">
          <TabList>
            <Tab>Recommended Jobs</Tab>
            <Tab>Applied Jobs</Tab>
          </TabList>
          <TabPanels h={"100%"} w={"100%"}>
            <TabPanel h={"100%"} w={"100%"}>
              <div className="h-[90%] w-full flex p-3 flex-col gap-3 overflow-y-auto items-center justify-start">
                {filteredAllJobs?.map((job, index) => (
                  <div
                    key={index}
                    className="statschild shadow-lg hover:shadow-[#57575760]  w-full p-4 bg-white flex items-center justify-between rounded-xl"
                  >
                    <div className="flex w-full items-center ">
                      <img src={getRandomImage(index)} className="mr-10 h-12" />
                      <div className="flex w-full flex-col">
                        <div className="text-lg font-bold w-full">
                          {job.title}
                        </div>
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
                              setAlreadyApplied(false);
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
            </TabPanel>
            <TabPanel h={"100%"} w={"100%"}>
              <div className="h-[90%] w-full flex p-3 flex-col gap-3 overflow-y-auto items-center justify-start">
                {filteredAppliedJobs?.map((job, index) => (
                  <div
                    key={index}
                    className="statschild shadow-lg hover:shadow-[#57575760]  w-full p-4 bg-white flex items-center justify-between rounded-xl"
                  >
                    <div className="flex w-full items-center ">
                      <img src={getRandomImage(index)} className="mr-10 h-12" />
                      <div className="flex w-full flex-col">
                        <div className="text-lg font-bold w-full">
                          {job.title}
                        </div>
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
                              setAlreadyApplied(true);
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
            </TabPanel>
          </TabPanels>
        </Tabs>
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
                <img
                  src={getRandomImage(Math.floor(Math.random() * 100))}
                  className=" h-7"
                />
                <div className="flex justify-between w-full items-center">
                <NavLink to={`/${jobToDisplay?.recruiter}`} className="text-lg">
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
              {!alreadyApplied && (
                <>
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
                </>
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                if (alreadyApplied) {
                  onClose();
                  return;
                }
                applyJob(jobToDisplay._id, jobToDisplay.recruiter);
              }}
            >
              {alreadyApplied ? "Close" : "Apply"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Jobs;
