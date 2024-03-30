import React, { useContext } from 'react'
import './Chats.css'
import Messages from './Messages'
import Inputfield from './Inputfield'
import { Chatcontext2 } from './Chatcontext2';
import { Avatar } from "@chakra-ui/react";

const Openchat = ({ user }) => {
  const { firstId, setFirstId } = useContext(Chatcontext2);
  return (
    <div className="openchat flex flex-col">
      <div className="openchatinfo border-b px-3 border-[#BBBFC6] h-16">
        <Avatar
          size="sm"
          name="Prosper Otemuyiwa"
          src="https://bit.ly/prosper-baba"
        />
        <span className="openchatspan">{firstId?.firstUserName || ""}</span>
      </div>
      <div className="flex flex-col">
        <Messages user={user} />
        <Inputfield user={user} />
      </div>
    </div>
    // <div className='openchat flex flex-col justify-center items-center bg-[#EBEAF2]'>
    //   <img src={chatsel} alt="" />
    //   <div className='text-[#696975]'>Start new conversation with Investors & other members</div>
    // </div>
  );
};

export default Openchat