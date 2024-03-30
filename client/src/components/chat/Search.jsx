import React, { useState, useEffect } from 'react';
// import './Chats.css';
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [username, setusername] = useState("");
  const [users, setUsers] = useState([]);
  const [err, seterr] = useState(false);

  const handleSelect = async (user) => {
    setUsers([]);
    setusername("");
    // Handle user selection
  };

  return (
    <div className="h-16">
      <div className="w-full h-full searchform flex px-2 justify-between items-center">
        <div className="relative w-full">
          <InputGroup>
            <InputLeftElement>
              <FaSearch color="#D8E0E8" />
            </InputLeftElement>
            <Input
              type="text"
              id="searchinput"
              placeholder="Search Name"
              onChange={(e) => setusername(e.target.value)}
            />
          </InputGroup>
          <img
            src=""
            alt=""
            className="w-4 absolute left-4 top-[50%] transform -translate-y-1/2 text-gray-600"
          />
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Search;
