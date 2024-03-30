import React from 'react';
import { BiEditAlt } from "react-icons/bi";


const Profile = () => {
  return (
    <>
    <img className='p-10' src='.\static\images\profile.png' style={{zIndex:"0"}}></img>
    <div className='flex pr-6 pl-20'>
        <img style={{height:"8rem",width:"8rem",boxShadow:"0px 5px 8px rgba(0, 0, 0, 0.5)",borderRadius:"50%",zIndex:"1",marginRight:"2rem"}} src='./static/images/prof.jpg'></img>
        <div>
        <p style={{color:"transparent",paddingBottom:"0.5rem"}}>A</p>
        
            <p style={{fontSize:"2rem",fontWeight:"600"}}>Anamoul Rouf</p>
            <div style={{color:"grey",fontWeight:"medium"}}>Product Designer</div>
        </div>
    </div>
      
    </>
  )
}

export default Profile
