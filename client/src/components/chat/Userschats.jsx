import { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { Chatcontext2 } from './Chatcontext2';

const Userschats = (props) => {
  const [chats, setChats] = useState([]);
  const { setFirstId } = useContext(Chatcontext2);

  useEffect(() => {
    const fetchUserChats = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/chats/conversation-list?id=6607afd4e03d1e75f9fdffe9');
        setChats(response.data.list);
      } catch (error) {
        console.error('Error fetching user chats:', error);
      }
    };

    fetchUserChats();
  }, []);
  const handleSelect = (selectedChat) => {
    // Store the firstId in chatcontext2
    setFirstId(selectedChat);
    console.log(selectedChat);
  };

  return (
    <div>
      {!chats.length ? (
        <div className="flex justify-center items-center ">
          <img src="" alt="" className='mt-16'/>
        </div>
      ) : (
        chats.map((chat) => (
          <div className="userchat h-[4.3rem] border-b border-[#BBBFC6]" key={chat._id} onClick={() => handleSelect(chat)}>
            <img src={chat.secondUserName} alt="" id='searchimage' /> 
            <div className="w-full">
              <span className=''>{chat.firstUserName}</span>
              <div className='w-full flex justify-between'>
                <p className=''>{chat.lastMessage.slice(0, 20)}{chat.lastMessage.length > 20 && "..."}</p>
                {chat.__v ? <p className='w-5 h-5 bg-[#E35131] rounded-full flex justify-center items-center text-white'>{chat.__v === 0 ? "" : chat.__v}</p> : ""}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Userschats;
