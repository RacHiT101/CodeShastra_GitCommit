import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/recruiterMain/Sidebar";
import Navbar from "../components/recruiterMain/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

const RecruiterApplications = () => {
  const location = useLocation();
  const jobId = location.state?.jobId;
  const [recommendations, setRecommendations] = useState([]);

  // useEffect(() => {
  //   if (jobId) {
  //     fetch("http://localhost:5000/recommend/users", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       // mode: "no-cors",
  //       body: JSON.stringify({ jobId }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Recommendations:", data);
  //         setRecommendations(data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching recommendations:", error);
  //       });
  //   }
  // }, [jobId]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/users");

        // console.log(response.data);
        const bottom3 = response.data.slice(-3);
        localStorage.setItem("bottom3", JSON.stringify(bottom3));
        setRecommendations(bottom3);
        // setRecommendations(data);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    fetchUsers();
  }, []);

  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("bottom3"))
  );

  const handleShortlist = async (userId, message) => {
    try {
      const updatedData = localData.map((user) => {
        if (user._id === userId) {
          return {
            ...user,
            status: message,
          };
        }
        return user;
      });
      localStorage.setItem("bottom3", JSON.stringify(updatedData));
      setLocalData(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  // const localData = JSON.parse(localStorage.getItem("bottom3"));

  console.log(recommendations);

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
          {!jobId ? (
            <div>
              Applications for job {jobId._id}
              {/* Render recommendations here */}
            </div>
          ) : (
            <div className="w-full h-full overflow-y-auto gap-5 px-2 py-1 flex flex-col">
              {localData?.map((user) => (
                <div className="flex flex-col gap-2 rounded-xl statschild p-3">
                  <div className="flex justify-between">
                    <div className="font-semibold">{user.name}</div>
                    <div className="font-semibold text-sm">{user.contact}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="w-2/3 text-sm">{user.about}</div>
                    <div>{user.location}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <div className="text-sm font-semibold">Course</div>
                      <div className="w-full text-xs">{user.course}</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-sm font-semibold">Degree</div>
                      <div className="w-full text-xs">{user.degree}</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-sm font-semibold">Status</div>
                      <div
                        className={`w-full px-2 py-1 rounded-lg text-xs ${
                          user.status === "shortlisted"
                            ? "bg-green-300 text-green-600"
                            : user.status === "rejected"
                            ? "bg-red-300 text-red-600"
                            : "bg-yellow-300 text-yellow-600"
                        }`}
                      >
                        {user.status
                          ? user.status === "shortlisted"
                            ? "Shortlisted"
                            : "Rejected"
                          : "Pending"}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <div className="text-sm font-semibold">Skills</div>
                      <div className="w-full gap-x-2 gap-y-1 flex flex-wrap text-xs">
                        {user.skills.map((j) => (
                          <div className="w-fit min-w-16 justify-center px-3 flex gap-2 items-center py-1 rounded-3xl border-2 border-[#0049FC] cursor-pointer">
                            {j}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="justify-end w-full flex gap-5">
                    <button
                      className="bg-green-500 w-24 h-12 text-white rounded-md p-2"
                      onClick={() => handleShortlist(user._id, "shortlisted")}
                    >
                      Shortlist
                    </button>
                    <button
                      className="bg-red-400 w-24 h-12 text-white rounded-md p-2"
                      onClick={() => handleShortlist(user._id, "rejected")}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecruiterApplications;
