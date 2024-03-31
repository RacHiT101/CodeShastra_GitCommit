import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/main/Sidebar";
import Navbar from "../components/main/Navbar";
import ReactStars from "react-stars";
import { IoIosArrowBack } from "react-icons/io";

const RecruiterPage = () => {
  const { id } = useParams();
  console.log(id);
  const [recruiter, setRecruiter] = useState(null);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(0);
  const [form, setform] = useState("");
  const [data, setdata] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [ReviewLoading, setReviewLoading] = useState(false);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchRecruiter = async () => {
      try {
        // console.log("joo");
        const response = await axios.get(
          `http://localhost:5001/api/recruiters/${id}`
        );
        setRecruiter(response.data);
      } catch (error) {
        setError(error.response.data.error);
      }
    };

    fetchRecruiter();
  }, [id]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/recruiters/${id}/jobs`
        );
        setJobs(response.data.jobs);
        // setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        // setLoading(false);
      }
    };

    fetchJobs();
  }, [id]);

  const addReview = async () => {
    try {
      const response = await axios.post("http://localhost:5001/reviews", {
        recruiterId: id,
        review: form,
        rating,
      });

      console.log("Review added successfully:", response.data);
      setform("");
      // window.location.reload();
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  const getReview = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/reviews`);

      console.log("Review fetched successfully:", response.data);
      const filteredReviews = response.data.reviews.filter(
        (review) => review.recruiterId === id
      );
      setdata(filteredReviews);
    } catch (error) {
      console.error("Error fetching review:", error);
    }
  };

  useEffect(() => {
    getReview();
  }, [id, addReview]);

  console.log(data);

  // console.log(recruiter);
  //   console.log(jobs);
  return (
    <div className="h-full w-full flex">
      <Sidebar />
      <div className="w-full h-screen overflow-y-auto relative flex flex-col items-center justify-center ">
      <Navbar />
      <br></br>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem",color:"transparent"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem"}}>i</div>
      <div style={{height:"20rem",color:"transparent"}}>i</div>
      
      
        <Box className="p-5 rounded-xl" style={{}}  >
        <img classname="p-5 m-5 rounder-xl" src=".\static\images\profile.png"></img>
          <Box mt="4" style={{fontSize:"2rem",fontWeight:"600",paddingLeft:"2rem"}}>
            <Text>{recruiter?.companyName}</Text>
          </Box>
          <Box mt="4" style={{paddingLeft:"2rem"}}>
            <Text fontSize="lg">Email:</Text>
            <Text>{recruiter?.email}</Text>
          </Box>
          <Box mt="4" style={{paddingLeft:"2rem"}}>
            <Text fontSize="lg">Contact:</Text>
            <Text>{recruiter?.contact}</Text>
          </Box>
          <Box mt="4" style={{paddingLeft:"2rem",paddingRight:"2rem"}}>
            <Text fontSize="lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            </Text>
            {/* <Text>{recruiter?.name}</Text> */}
          </Box>
        </Box>

        <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.history.back()}
          >
            <IoIosArrowBack />
            <div className="text-sm text-gray-500">Back</div>
          </div>

          
      
        <div style={{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"space-evenly"}}>

            {/* Review input */}
            <div className="w-1/3 px-10">
              <div>
                <div className="px-2 border-gray-600 self-stretch flex flex-col items-start justify-start">
                {/* Rating input */}
                <p style={{fontSize:"1.1rem"}}>Rate the company:</p>
                <ReactStars
                  size={40}
                  value={rating}
                  half={true}
                  className=" mb-4"
                  onChange={(rate) => setRating(rate)}
                />
                </div>
              </div>

              <div >
              <input
                value={form}
                onChange={(e) => setform(e.target.value)}
                placeholder="Share your thoughts..."
                className=" px-8 text-black rounded outline-none mr-2 header bg-gray/50 flex-grow h-20"
              />
              <br></br>
              <button
              style={{fontWeight:"500",background:"lightblue",padding:"1rem 2rem",borderRadius:"1rem",marginTop:"1rem"}}
                onClick={addReview}
                className=""
              >
                {Loading ? "loading..." : "Share"}
              </button>
              </div>
            </div>


              <div className="w-2/3 px-20">
              {/* Loading indicator */}
              {ReviewLoading ? (
                <div className="w-full flex justify-center mt-4">Loading...</div>
              ) : (
                // Display reviews
                <div className="mx-4 w-full">
                  {data?.map((rev, index) => (
                    <div 
                      style={{width:"100%",background:"lightblue"}}
                      key={index}
                      className="py-2 px-4 w-full rounded-lg shadow-md shadow-gray-200 mt-2"
                    >
                      {/* Review text */}
                      <p className="text-lg font-bold text-accent">{rev.review}</p>

                      {/* Reviewer name */}
                      <p className="text-gray-600 text-sm">
                        By: {localStorage.user.name}
                      </p>

                      {/* Review date */}
                      <p className="text-gray-600 text-sm">
                        {new Date(rev.createdAt).toLocaleString()}
                      </p>

                      {/* Rating stars */}
                      <ReactStars
                        size={24}
                        value={rev.rating}
                        half={true}
                        edit={false}
                      />
                    </div>
                  ))}
                </div>
              )}
              </div>
      </div>
      
      </div>
    </div>
  );
};

export default RecruiterPage;
