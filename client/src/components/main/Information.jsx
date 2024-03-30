import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaSquarePen } from "react-icons/fa6";


const Information = () => {
  return (
    <>
    <div className='bg-white pl-5 pr-5 pt-5 rounded-xl'>
        <div className='flex items-center justify-between'>
            <div className='flex gap-5'>
                <img style={{height:"5rem",width:"5rem",borderRadius:"2.5rem"}} src='./static/images/default.jpeg'></img>
                <div>
                    <p className='pb-1' style={{fontWeight:"600",fontSize:"1.85rem"}}>Basic Information</p>
                    <div style={{fontSize:"0.9rem",fontWeight:"medium",color:"grey"}}>Update profile information</div>
                </div>
            </div>
            <button className='rounded-xl' style={{border:"1.5px solid blue",padding:"1rem 1.5rem 1rem 1.5rem",color:"blue",fontWeight:"bold"}}>Edit</button>
        </div>
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:"2rem",paddingLeft:"1.5rem"}}>
            <div style={{height:"5rem",width:"50%"}}>
                <div style={{fontSize:"0.9rem",color:"grey"}}>Email Address</div>
                <div style={{fontSize:"1.2rem",fontWeight:"500"}}>anamoulrouf.bd@gmail.com</div>
            </div>
            <div style={{height:"5rem",width:"50%"}}>
                <div style={{fontSize:"0.9rem",color:"grey"}}>Gender</div>
                <div style={{fontSize:"1.2rem", fontWeight:"500"}}>Male</div>
            </div>
            <div style={{height:"5rem",width:"50%"}}>
                <div style={{fontSize:"0.9rem",color:"grey"}}>Phone Number</div>
                <div style={{fontSize:"1.2rem", fontWeight:"500"}}>+8801759693045</div>
            </div>
            <div style={{height:"5rem",width:"50%"}}>
                <div style={{fontSize:"0.9rem",color:"grey"}}>Location</div>
                <div style={{fontSize:"1.2rem", fontWeight:"500"}}>Dhaka, Bangladesh</div>
            </div>
            <div style={{height:"5rem",width:"50%"}}>
                <div style={{fontSize:"0.9rem",color:"grey"}}>Website</div>
                <div style={{fontSize:"1.2rem", fontWeight:"500"}}>www.anamoulrouf.com</div>
            </div>
        </div>
        </div>
    
    </>
  )
}

export default Information
