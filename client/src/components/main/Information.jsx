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

        <div className='bg-white rounded-xl mt-5 p-5'>
            <div className='flex items-center justify-between mt-5 mb-5'>
                <div className='flex gap-5'>
                    <img style={{height:"5rem",width:"5rem",borderRadius:"2.5rem"}} src='./static/images/default.jpeg'></img>
                    <div>
                        <p className='pb-1' style={{fontWeight:"600",fontSize:"1.85rem"}}>Experiences</p>
                        <div style={{fontSize:"0.9rem",fontWeight:"medium",color:"grey"}}>Add experience to increase the chance of hiring</div>
                    </div>
                </div>
                <button className='rounded-xl' style={{border:"1.5px solid blue",padding:"1rem 1.5rem 1rem 1.5rem",color:"blue",fontWeight:"bold"}}>Add Experience</button>
            </div>

            <div className='flex items-center justify-between pl-5 pt-2 mt-5 mb-5'>
                <div className='flex gap-5'>
                    <img style={{height:"5rem",width:"5rem",borderRadius:"2.5rem"}} src='./static/images/default.jpeg'></img>
                    <div>
                        <p className='pb-1' style={{fontWeight:"600",fontSize:"1.85rem"}}>Sr. Product Designer</p>
                        <div style={{fontSize:"0.9rem",fontWeight:"medium",color:"black"}}>ShartTrip Inc.</div>
                        <div style={{fontSize:"0.9rem",fontWeight:"medium",color:"grey"}}>Dhaka, Bangladesh     January 2022 to Present</div>
                    </div>
                </div>
                <div>
                    <button className='rounded-xl' style={{padding:"1rem 1.5rem 1rem 1.5rem",color:"grey",fontWeight:"bold"}}>Delete</button>
                    <button className='rounded-xl' style={{padding:"1rem 1.5rem 1rem 1.5rem",color:"blue",fontWeight:"bold"}}>Edit</button>
                </div>
            </div>
            <div className='pl-5 pr-4 mb-5' style={{color:"dark-grey"}}>
            ShareTrip is the country’s first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...<span style={{color:"blue",fontWeight:"500"}}>See More</span>
            </div>

            <div className='flex items-center justify-between pl-5 pt-2 mt-5 mb-5'>
                <div className='flex gap-5'>
                    <img style={{height:"5rem",width:"5rem",borderRadius:"2.5rem"}} src='./static/images/default.jpeg'></img>
                    <div>
                        <p className='pb-1' style={{fontWeight:"600",fontSize:"1.85rem"}}>Product Designer</p>
                        <div style={{fontSize:"0.9rem",fontWeight:"medium",color:"black"}}>Grameenphone</div>
                        <div style={{fontSize:"0.9rem",fontWeight:"medium",color:"grey"}}>Dhaka, Bangladesh     January 2022 to Present</div>
                    </div>
                </div>
                <div>
                    <button className='rounded-xl' style={{padding:"1rem 1.5rem 1rem 1.5rem",color:"grey",fontWeight:"bold"}}>Delete</button>
                    <button className='rounded-xl' style={{padding:"1rem 1.5rem 1rem 1.5rem",color:"blue",fontWeight:"bold"}}>Edit</button>
                </div>
            </div>
            <div className='pl-5 pr-4 mb-5' style={{color:"dark-grey"}}>
            ShareTrip is the country’s first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...<span style={{color:"blue",fontWeight:"500"}}>See More</span>
            </div>
        </div>

        <div className='bg-white rounded-xl mt-5 p-5'>
            <div className='flex items-center justify-between pl-5 pt-2 mt-5 mb-5'>
                <div className='flex gap-5'>
                    <img style={{height:"5rem",width:"5rem",borderRadius:"2.5rem"}} src='./static/images/default.jpeg'></img>
                    <div>
                        <p className='pb-1' style={{fontWeight:"600",fontSize:"1.85rem"}}>Education & Certifications</p>
                        <div style={{fontSize:"0.9rem",fontWeight:"medium",color:"grey"}}>Add education to increase the chance of hiring</div>
                    </div>
                </div>
                <button className='rounded-xl' style={{border:"1.5px solid blue",padding:"1rem 1.5rem 1rem 1.5rem",color:"blue",fontWeight:"bold"}}>Add Education</button>
            </div>

            <div className='flex items-center justify-between pl-5 pt-2 mt-5 mb-5'>
                <div className='flex gap-5'>
                    <img style={{height:"5rem",width:"5rem",borderRadius:"2.5rem"}} src='./static/images/default.jpeg'></img>
                    <div>
                        <p className='pb-1' style={{fontWeight:"600",fontSize:"1.85rem"}}>California Institute of the Arts</p>
                        <div style={{fontSize:"0.9rem",fontWeight:"medium",color:"black"}}>UX Design Fundamentals  UX Design</div>
                        <div style={{fontSize:"0.9rem",fontWeight:"medium",color:"grey"}}>Grade: A+    2020 - 2021</div>
                    </div>
                </div>
                <div>
                    <button className='rounded-xl' style={{padding:"1rem 1.5rem 1rem 1.5rem",color:"grey",fontWeight:"bold"}}>Delete</button>
                    <button className='rounded-xl' style={{padding:"1rem 1.5rem 1rem 1.5rem",color:"blue",fontWeight:"bold"}}>Edit</button>
                </div>
            </div>
            <div className='pl-5 pr-4 mb-5' style={{color:"dark-grey"}}>
            This hands-on course examines how content is organized and structured to create an experience for a user, and what role the designer plays in creating and shaping user experience. You will be led through a condensed...<span style={{color:"blue",fontWeight:"500"}}>See More</span>
            </div>

            <div className='flex items-center justify-between pl-5 pt-2 mt-5 mb-5'>
                <div className='flex gap-5'>
                    <img style={{height:"5rem",width:"5rem",borderRadius:"2.5rem"}} src='./static/images/default.jpeg'></img>
                    <div>
                        <p className='pb-1' style={{fontWeight:"600",fontSize:"1.85rem"}}>University of Pennsylvania</p>
                        <div style={{fontSize:"0.9rem",fontWeight:"medium",color:"black"}}>Gamification   Game and Interactive Media Design</div>
                        <div style={{fontSize:"0.9rem",fontWeight:"medium",color:"grey"}}>Grade: A+    2019 - 2020</div>
                    </div>
                </div>
                <div>
                    <button className='rounded-xl' style={{padding:"1rem 1.5rem 1rem 1.5rem",color:"grey",fontWeight:"bold"}}>Delete</button>
                    <button className='rounded-xl' style={{padding:"1rem 1.5rem 1rem 1.5rem",color:"blue",fontWeight:"bold"}}>Edit</button>
                </div>
            </div>
            <div className='pl-5 pr-4' style={{color:"dark-grey"}}>
            Gamification is the application of game elements and digital game design techniques to non-game problems, such as business and social impact challenges. This course will teach you the mechanisms of gamification...<span style={{color:"blue",fontWeight:"500"}}>See More</span>
            </div>
        </div>

        <div className='bg-white rounded-xl mt-5 p-5'>
            <div className='flex items-center justify-between pl-5 pt-2 mt-5 mb-5'>
                <div className='flex gap-5'>
                    <img style={{height:"5rem",width:"5rem",borderRadius:"2.5rem"}} src='./static/images/default.jpeg'></img>
                    <div>
                        <p className='pb-1' style={{fontWeight:"600",fontSize:"1.85rem"}}>Skills</p>
                        <div style={{fontSize:"0.9rem",fontWeight:"medium",color:"grey"}}>Add skills to increase the chance of hiring</div>
                    </div>
                </div>
                <button className='rounded-xl' style={{border:"1.5px solid blue",padding:"1rem 1.5rem 1rem 1.5rem",color:"blue",fontWeight:"bold"}}>Add Skills</button>
            </div>

            <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:"2rem",paddingLeft:"1.5rem"}}>
            <div style={{height:"6rem",width:"50%"}}>
                <div className='flex items-center justify-between pl-5 pt-2'>
                    <div className='flex gap-5'>
                        <div>
                            <p className='pb-1' style={{fontWeight:"600",fontSize:"1.5rem"}}>UX Design</p>
                            <div style={{fontSize:"0.9rem",fontWeight:"medium",color:"black"}}>Expert</div>
                        </div>
                    </div>
                    <div>
                        <button className='rounded-xl' style={{color:"grey",fontWeight:"bold",fontSize:"1.5rem"}}><RiDeleteBinLine></RiDeleteBinLine></button>
                        <button className='rounded-xl' style={{padding:"1rem 1.5rem 1rem 1.5rem",color:"blue",fontSize:"1.5rem"}}><FaSquarePen /></button>
                    </div>
                </div>
            </div>
            <div style={{height:"6rem",width:"50%"}}>
                <div className='flex items-center justify-between pl-5 pt-2'>
                    <div className='flex gap-5'>
                        <div>
                            <p className='pb-1' style={{fontWeight:"600",fontSize:"1.5rem"}}>UI Design</p>
                            <div style={{fontSize:"0.9rem",fontWeight:"medium",color:"black"}}>Expert</div>
                        </div>
                    </div>
                    <div>
                        <button className='rounded-xl' style={{color:"grey",fontWeight:"bold",fontSize:"1.5rem"}}><RiDeleteBinLine></RiDeleteBinLine></button>
                        <button className='rounded-xl' style={{padding:"1rem 1.5rem 1rem 1.5rem",color:"blue",fontSize:"1.5rem"}}><FaSquarePen /></button>
                    </div>
                </div>
            </div>
            <div style={{height:"6rem",width:"50%"}}>
                <div className='flex items-center justify-between pl-5 pt-2'>
                    <div className='flex gap-5'>
                        <div>
                            <p className='pb-1' style={{fontWeight:"600",fontSize:"1.5rem"}}>User Research</p>
                            <div style={{fontSize:"0.9rem",fontWeight:"medium",color:"black"}}>Expert</div>
                        </div>
                    </div>
                    <div>
                        <button className='rounded-xl' style={{color:"grey",fontWeight:"bold",fontSize:"1.5rem"}}><RiDeleteBinLine></RiDeleteBinLine></button>
                        <button className='rounded-xl' style={{padding:"1rem 1.5rem 1rem 1.5rem",color:"blue",fontSize:"1.5rem"}}><FaSquarePen /></button>
                    </div>
                </div>
            </div>
            <div style={{height:"6rem",width:"50%"}}>
                <div className='flex items-center justify-between pl-5 pt-2'>
                    <div className='flex gap-5'>
                        <div>
                            <p className='pb-1' style={{fontWeight:"600",fontSize:"1.5rem"}}>Design System</p>
                            <div style={{fontSize:"0.9rem",fontWeight:"medium",color:"black"}}>Expert</div>
                        </div>
                    </div>
                    <div>
                        <button className='rounded-xl' style={{color:"grey",fontWeight:"bold",fontSize:"1.5rem"}}><RiDeleteBinLine></RiDeleteBinLine></button>
                        <button className='rounded-xl' style={{padding:"1rem 1.5rem 1rem 1.5rem",color:"blue",fontSize:"1.5rem"}}><FaSquarePen /></button>
                    </div>
                </div>
            </div>
        </div>

        </div>

        
    </>
  )
}

export default Information
