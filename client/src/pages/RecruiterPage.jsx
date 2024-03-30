import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/recruiterMain/Sidebar";
import Navbar from "../components/recruiterMain/Navbar";
import ReactStars from "react-stars";

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
      <div className="w-full h-full relative flex flex-col items-center justify-center">
      <Navbar />
        <Box
          borderWidth="1px"
          borderRadius="lg"
          p="4"
          maxWidth="xl"
          margin="auto"
        >
          <Text fontSize="xl" fontWeight="bold">
            Recruiter Details
          </Text>
          <Box mt="4">
            <Text fontSize="lg">Company Name:</Text>
            <Text>{recruiter?.companyName}</Text>
          </Box>
          <Box mt="4">
            <Text fontSize="lg">Email:</Text>
            <Text>{recruiter?.email}</Text>
          </Box>
          <Box mt="4">
            <Text fontSize="lg">Contact:</Text>
            <Text>{recruiter?.contact}</Text>
          </Box>
          <Box mt="4">
            <Text fontSize="lg">Name:</Text>
            <Text>{recruiter?.name}</Text>
          </Box>
        </Box>
      <div className="px-2 border-t-2 border-gray-600 self-stretch flex flex-col items-start justify-start">
        {/* Rating input */}
        <ReactStars
          size={40}
          value={rating}
          half={true}
          className="ml-3 mb-4"
          onChange={(rate) => setRating(rate)}
        />

        {/* Review input */}
        <div className="flex mx-auto justify-center items-center mb-4">
          <input
            value={form}
            onChange={(e) => setform(e.target.value)}
            placeholder="Share your thoughts..."
            className="p-3 px-8 text-black rounded outline-none mr-2 header bg-gray/50 flex-grow"
          />
          <button
            onClick={addReview}
            className="bg-accent font-bold text-lg text-black rounded p-3 px-8"
          >
            {Loading ? "loading..." : "Share"}
          </button>
        </div>

        {/* Loading indicator */}
        {ReviewLoading ? (
          <div className="w-full flex justify-center mt-4">Loading...</div>
        ) : (
          // Display reviews
          <div className="mx-4 w-full">
            {data?.map((rev, index) => (
              <div
                key={index}
                className="bg-gray-700 py-2 px-4 w-full rounded-lg shadow-md shadow-gray-200 mt-2"
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
  );
};

export default RecruiterPage;
