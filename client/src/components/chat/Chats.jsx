import React, { useState, useEffect } from 'react'
import Openchat from './Openchat';
import Sidebar from './Sidebar';
import './Chats.css'
import Navbar from './Navbar'

const Chats = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [imagesrc, setimagesrc] = useState("https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png")
  useEffect(() => {
    console.log(user);
  }, [])

  return (
    <div className="flex pt-6 h-full w-full">
      <div className="flex flex-col h-full w-full">
        <div className="w-full flex overflow-hidden flex-1">
          <div className="w-full h-full flex justify-center items-center bg-gray-100">
            <div id="chatcont">
              <Sidebar user={user} imagesrc={imagesrc} />
              <Openchat user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats