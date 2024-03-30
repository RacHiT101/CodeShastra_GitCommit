import React, { useState } from "react";
import axios from "axios";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    // try {
    //   const response = await axios.get(`https://serpapi.com/search.json?engine=google&q=${placeName}&location=${addressName}&google_domain=google.com&gl=us&hl=en&api_key=your_api_key`);
    //   setSearchResults(response.data.images_results);
    // } catch (error) {
    //   console.error("Error fetching search results:", error);
    // }
    console.log("hiii");
  };

  return (
    <div className="pt-10 h-full w-full">
      <div className="w-full">
        {/* Search bar */}
        <div className="relative ml-4 max-w-lg">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-0 top-0 mt-2 mr-2" onClick={handleSearch}>
            {/* Search icon (you can replace it with your own icon) */}
            <svg
              className="h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-5.2-5.2M15 11a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </button>
        </div>
        
        {/* Display search results */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {searchResults.map((result, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-64 object-cover"
                src={result.original}
                alt={result.title}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{result.title}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <button className="text-sm text-blue-500 hover:underline">View Image</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
