import { Button, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";

const Jobs = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.name);
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        console.log("hii");
        const response = await axios.get(
          `http://localhost:5001/api/recruiters/${user._id}/jobs`
        );
        setJobs(response.data.jobs);
        // setLoading(false);
      } catch (error) {
        // setError(error.response.data.message);
        // setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [job, setJob] = useState({
    title: "",
    location: "",
    salary: "",
    duration: "",
    skillsReqd: [],
    jobDescription: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`http://localhost:5001/api/jobs`, {
        ...job,
        recruiter: user._id,
        recruiterName: user.name,
      });
      console.log(response.data);
      setJobs([...jobs, response.data.job]);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full pt-10 p-5 flex items-center justify-center">
      <div className="w-full p-6 bg-white rounded-2xl shadow-md shadow-gray-400 h-full flex flex-col gap-5">
        <div className="w-full justify-between items-center flex">
          <h1 className="text-2xl font-bold">Jobs</h1>
          <Button color="white" onClick={onOpen} backgroundColor="#0049FC">
            Create Job Posting
          </Button>
        </div>
        <div className="text-xl font-semibold">Job Created</div>
        <div className="w-full h-full overflow-y-auto gap-5 px-2 py-1 flex flex-col">
          {jobs?.map((job) => (
            <div className="flex flex-col gap-2 rounded-xl statschild p-3">
              <div className="flex justify-between">
                <div className="font-semibold">{job.title}</div>
                <div className="font-semibold text-sm">{job.salary}</div>
              </div>
              <div className="flex justify-between">
                <div className="w-2/3 text-sm">{job.jobDescription}</div>
                <div>{job.location}</div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div className="text-sm font-semibold">Posted on</div>
                  <div className="w-full text-xs">
                    {new Date(job.dateOfPosting).toDateString()}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sm font-semibold">Expires on</div>
                  <div className="w-full text-xs">
                    {new Date(job.deadline).toDateString()}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sm font-semibold">Type</div>
                  <div className="w-full text-xs">{job.duration}</div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div className="text-sm font-semibold">Skills Required</div>
                  <div className="w-[50%] gap-x-2 gap-y-1 flex flex-wrap text-xs">
                    {job.skillsReqd.map((j) => (
                      <div className="w-fit min-w-16 justify-center px-3 flex gap-2 items-center py-1 rounded-3xl border-2 border-[#0049FC] cursor-pointer">
                        {j}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-full flex flex-col justify-end">
                  <Button
                    color="white"
                    backgroundColor="#0049FC"
                    fontSize={12}
                    onClick={() => {
                      navigate("/recruiter/applications", {
                        state: { jobId: job._id },
                      });
                    }}
                  >
                    View Applicants
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Job Posting</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col gap-3">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<IoLocationSharp color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Job Title"
                  onChange={(e) => setJob({ ...job, title: e.target.value })}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<IoLocationSharp color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Location"
                  onChange={(e) => setJob({ ...job, location: e.target.value })}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<IoLocationSharp color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Salary"
                  onChange={(e) => setJob({ ...job, salary: e.target.value })}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<IoLocationSharp color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Duration"
                  onChange={(e) => setJob({ ...job, duration: e.target.value })}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<IoLocationSharp color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Skills Required"
                  onChange={(e) =>
                    setJob({
                      ...job,
                      skillsReqd: e.target.value
                        .split(",")
                        .map((skill) => skill.trim()),
                    })
                  }
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<IoLocationSharp color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Job Description"
                  onChange={(e) =>
                    setJob({ ...job, jobDescription: e.target.value })
                  }
                />
              </InputGroup>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                handleSubmit();
              }}
            >
              Save
            </Button>
            <Button variant="ghost">Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Jobs;
