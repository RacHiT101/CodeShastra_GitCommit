import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactStars from "react-stars";

const Reviews = () => {

    const [data, setdata] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    const getReview = async () => {
        try {
          const response = await axios.get(`http://localhost:5001/reviews`);
    
          console.log("Review fetched successfully:", response.data);
          const filteredReviews = response.data.reviews.filter(
            (review) => review.recruiterId === user._id
          );
          setdata(filteredReviews);
        } catch (error) {
          console.error("Error fetching review:", error);
        }
      };
    
      useEffect(() => {
        getReview();
      }, []);
    
      console.log(data);

  return (
    <div className="flex justify-evenly h-full w-full p-10 gap-5">
      <div className="flex flex-col gap-4 justify-evenly w-full h-full">hiii</div>
      <div className="w-full flex flex-col h-full overflow-y-auto overflow-x-hidden rounded-xl shadow-md shadow-gray-200 bg-white p-4">
      <div className="mx-4 w-full bg-white p-4 rounded-lg ">
  {data?.map((rev, index) => (
    <div
      key={index}
      className="bg-gray-300 p-4 rounded-lg mt-4"
    >
      {/* Review text */}
      <p className="text-lg font-bold text-gray-800 mb-2">{rev.review}</p>

      {/* Reviewer name */}
      <p className="text-gray-600 text-sm">By: User</p>

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

      </div>
    </div>
  );
};

export default Reviews;
