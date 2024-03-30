import React, { useState, useEffect } from 'react';
import './Chats.css';
// import { FaMapLocation } from "react-icons/fa";

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
    <div className="h-16 border-b border-[#BBBFC6]">
      <div className="w-full h-full searchform flex px-2 justify-between items-center">
        <div className="relative w-[80%]">
          {/* <input
                        type="text"
                        id='searchinput'
                        className='pl-10 bg-[#EBEAF2] w-full border border-[#BBBFC6] rounded-lg p-2.5 placeholder:font-light'
                        placeholder='Search Name'
                        onChange={e => setusername(e.target.value.toLowerCase())}
                        value={username}
                    /> */}
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaMapLocation />
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
      {err && <span> User not found!</span>}
      {users.map((user, index) => (
        <div
          className="userchat"
          key={index}
          onClick={() => handleSelect(user)}
        >
          <img src={user.logo} alt="" id="searchimage" />
          <div className="userchatinfo">
            <span className="span1">{user.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
