import React, { useState } from 'react';
// import { BiEditAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidBriefcase } from "react-icons/bi";
import { GiTrophy } from "react-icons/gi";
import { PiCrownFill } from "react-icons/pi";
import { IoDocumentText } from "react-icons/io5";
import "../styles/profile.css";
import Information from './Information';
import { ImShare2 } from "react-icons/im";
import { HiDotsHorizontal } from "react-icons/hi";

const Profile = () => {
  const [selectedOption, setSelectedOption] = useState('Information');

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Information':
        return <div><Information></Information></div> 
      case 'Experiences':
        return <div>Experiences content</div>;
      case 'Education':
        return <div>Education content</div>;
      case 'Skills':
        return <div>Skills content</div>;
      case 'Attachments':
        return <div>Attachments content</div>;
      default:
        return <Information></Information>;
    }
  };

  return (
    <>
      <img className='p-10' src='.\static\images\profile.png' style={{ zIndex: "0" }} alt="Profile" />
      <div className='flex pr-6 pl-20'>
        <img style={{ height: "8rem", width: "8rem", boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.5)", borderRadius: "50%", zIndex: "1", marginRight: "2rem" }} src='./static/images/prof.jpg' alt="Profile Image" />
        <div className='w-full flex' style={{justifyContent:"space-between", alignContent:"space-around"}}>
            <div>
                <p style={{ color: "transparent", paddingBottom: "0.5rem" }}>A</p>
                <p style={{ fontSize: "2rem", fontWeight: "600" }}>Anamoul Rouf</p>
                <div style={{ color: "grey", fontWeight: "medium" }}>Product Designer</div>
            </div>
            <div style={{paddingRight:"5%",display:"flex"}}>
                <ImShare2 style={{color:"blue",fontSize:"1.8rem",marginRight:"2rem",cursor:"pointer"}} />
                <HiDotsHorizontal style={{color:"blue",fontSize:"1.8rem",cursor:"pointer"}}/>
            </div>
        </div>
      </div>

      <div className="flex justify-evenly w-full p-10 gap-5 rounder-xl">
        <div className="stats w-1/5  flex flex-col justify-start items-start rounded-xl">
        <div className={`p-1 w-full rounded-xl ${selectedOption === 'Information' ? 'bg-blue-100' : 'hover:bg-blue-100'}`} style={{ cursor: "pointer" }} onClick={() => handleClick('Information')}>
            <div className="option flex items-center m-5 rounded-xl " style={{ paddingLeft: "1%" }}>
              <span className='pr-3'><BsFillPersonFill style={{ fontSize: "1.5rem" }} /></span>
              <span style={{ fontWeight: "bold" }}>Information</span>
            </div>
          </div>
          <div className={`p-1 w-full rounded-xl ${selectedOption === 'Experiences' ? 'bg-blue-100' : 'hover:bg-blue-100'}`} style={{ cursor: "pointer" }} onClick={() => handleClick('Experiences')}>
            <div className="option flex items-center m-5 rounded-xl" style={{ paddingLeft: "1%" }}>
              <span className='pr-3'><BiSolidBriefcase style={{ fontSize: "1.5rem" }} /></span>
              <span style={{ fontWeight: "bold" }}>Experiences</span>
            </div>
          </div>
          <div className={`p-1 w-full rounded-xl ${selectedOption === 'Education' ? 'bg-blue-100' : 'hover:bg-blue-100'}`} style={{ cursor: "pointer" }} onClick={() => handleClick('Education')}>
            <div className="option flex items-center m-5 rounded-xl" style={{ paddingLeft: "1%" }}>
              <span className='pr-3'><GiTrophy style={{ fontSize: "1.5rem" }} /></span>
              <span style={{ fontWeight: "bold" }}>Education</span>
            </div>
          </div>
          <div className={`p-1 w-full rounded-xl ${selectedOption === 'Skills' ? 'bg-blue-100' : 'hover:bg-blue-100'}`} style={{ cursor: "pointer" }} onClick={() => handleClick('Skills')}>
            <div className="option flex items-center m-5 rounded-xl" style={{ paddingLeft: "1%" }}>
              <span className='pr-3'><PiCrownFill style={{ fontSize: "1.5rem" }} /></span>
              <span style={{ fontWeight: "bold" }}>Skills</span>
            </div>
          </div>
          <div className={`p-1 w-full rounded-xl ${selectedOption === 'Attachments' ? 'bg-blue-100' : 'hover:bg-blue-100'}`} style={{ cursor: "pointer" }} onClick={() => handleClick('Attachments')}>
            <div className="option flex items-center m-5 rounded-xl" style={{ paddingLeft: "1%" }}>
              <span className='pr-3'><IoDocumentText style={{ fontSize: "1.5rem" }} /></span>
              <span style={{ fontWeight: "bold" }}>Attachments</span>
            </div>
          </div>
        </div>
        <div className="w-4/5 h-full  p-4 rounded-xl" style={{  }}>
        {/* boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.3)" */}
          {renderContent()}
        </div>
      </div>
    </>
  )
}

export default Profile;
