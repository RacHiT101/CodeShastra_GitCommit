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
    <div className='flex pt-10 w-full'>
      <div className='flex flex-col h-screen w-full'>
        {/* <Navbar /> */}
        <div className="w-[93%] ml-auto flex overflow-hidden flex-1">
          <div style={{ width: "70vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div id='chatcont'>
              <Sidebar user={user} imagesrc={imagesrc} />
              <Openchat user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chats