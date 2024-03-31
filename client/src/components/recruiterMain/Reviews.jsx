import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactStars from "react-stars";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import "../styles/reviews.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [selectedYear, setSelectedYear] = useState(2024);
    const user = JSON.parse(localStorage.getItem("user"));

    const dummyData = {
      2022: [
        { month: 'Jan', appliers: 100 },
        { month: 'Feb', appliers: 200 },
        { month: 'Mar', appliers: 900 },
        { month: 'Apr', appliers: 600 },
        { month: 'May', appliers: 900 },
        { month: 'Jun', appliers: 1400 },
        { month: 'Jul', appliers: 900 },
        { month: 'Aug', appliers: 700 },
        { month: 'Sep', appliers: 1000 },
        { month: 'Oct', appliers: 1200 },
        { month: 'Nov', appliers: 1600 },
        { month: 'Dec', appliers: 1800 }
    ],
    2023: [
        { month: 'Jan', appliers: 250 },
        { month: 'Feb', appliers: 550 },
        { month: 'Mar', appliers: 850 },
        { month: 'Apr', appliers: 650 },
        { month: 'May', appliers: 1100 },
        { month: 'Jun', appliers: 1700 },
        { month: 'Jul', appliers: 1300 },
        { month: 'Aug', appliers: 950 },
        { month: 'Sep', appliers: 1150 },
        { month: 'Oct', appliers: 1500 },
        { month: 'Nov', appliers: 1900 },
        { month: 'Dec', appliers: 2100 }
    ],
    2024: [
        { month: 'Jan', appliers: 300 },
        { month: 'Feb', appliers: 600 },
        { month: 'Mar', appliers: 1200 },
        ]
    };

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/reviews`);
                console.log("Reviews fetched successfully:", response.data);
                
                const filteredReviews = response.data.reviews.filter(
                    (review) => review.recruiterId === user._id
                );
                
                setReviews(filteredReviews);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchReviews();
    }, [user._id]);

    const handleYearFilter = (year) => {
        setSelectedYear(year);
    };

    return (
      <>
      
        <div className="flex justify-evenly h-full w-full p-10 gap-5">
            <div className="flex flex-col gap-4 justify-evenly w-full h-full">
            <div className="flex justify-around mb-4">
                        <button className={selectedYear === 2022 ? "button active" : "button"} onClick={() => handleYearFilter(2022)}>2022</button>
                        <button className={selectedYear === 2023 ? "button active" : "button"} onClick={() => handleYearFilter(2023)}>2023</button>
                        <button className={selectedYear === 2024 ? "button active" : "button"} onClick={() => handleYearFilter(2024)}>2024</button>
                    </div>
                <LineChart width={600} height={300} data={selectedYear ? dummyData[selectedYear] : []} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="appliers" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" label={{ value: "Month", position: "bottom" }} />
                    <YAxis label={{ value: "No. of Appliers", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                </LineChart>
            </div>
            <div className="w-full flex flex-col h-full overflow-y-auto overflow-x-hidden rounded-xl shadow-md shadow-gray-200 bg-white p-4">
                <div className="mx-4 w-full bg-white p-4 rounded-lg">
                    
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-gray-300 p-4 rounded-lg mt-4">
                            {/* Review text */}
                            <p className="text-lg font-bold text-gray-800 mb-2">{review.review || `Review ${index + 1}`}</p>

                            {/* Reviewer name */}
                            <p className="text-gray-600 text-sm">By: {review.reviewerName || `User ${index + 1}`}</p>

                            {/* Review date */}
                            <p className="text-gray-600 text-sm">
                                {new Date(review.createdAt).toLocaleString() || "Date Unavailable"}
                            </p>

                            {/* Rating stars */}
                            <ReactStars
                                size={24}
                                value={review.rating || 0}
                                half={true}
                                edit={false}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default Reviews;
