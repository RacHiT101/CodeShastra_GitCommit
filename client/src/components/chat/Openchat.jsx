import React, { useContext } from 'react'
import './Chats.css'
import Messages from './Messages'
import Inputfield from './Inputfield'
import { Chatcontext2 } from './Chatcontext2';

const Openchat = ({ user }) => {
  const { firstId,setFirstId } = useContext(Chatcontext2);
  return (
  <div className='openchat flex flex-col'>
      <div className="openchatinfo border-b border-[#BBBFC6] h-16">
        <img src="" alt="" id='searchimage' className='ml-3'/>
        <span className='openchatspan'>{firstId?.firstUserName || ""}</span>
      </div>
      <div className='flex flex-col'>
      <Messages user={user} />
      <Inputfield user={user}/>
      </div>
    </div>
    // <div className='openchat flex flex-col justify-center items-center bg-[#EBEAF2]'>
    //   <img src={chatsel} alt="" />
    //   <div className='text-[#696975]'>Start new conversation with Investors & other members</div>
    // </div>
  )
}

export default Openchat