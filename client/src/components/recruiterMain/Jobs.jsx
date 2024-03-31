import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  console.log(user._id);
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

  console.log(jobs);
  return (
    <div className="w-full h-full pt-10 p-5 flex items-center justify-center">
      <div className="w-full p-6 bg-white rounded-2xl shadow-md shadow-gray-400 h-full flex flex-col gap-5">
        <div className="w-full justify-between items-center flex">
          <h1 className="text-2xl font-bold">Jobs</h1>
          <Button color="white" backgroundColor="#0049FC">
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
                        state: { jobId: job },
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
    </div>
  );
};

export default Jobs;
