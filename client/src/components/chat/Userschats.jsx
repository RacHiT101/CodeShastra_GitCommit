import { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { Chatcontext2 } from './Chatcontext2';
import { Avatar } from "@chakra-ui/react";

const Userschats = (props) => {
  const [chats, setChats] = useState([]);
  const { firstId,setFirstId } = useContext(Chatcontext2);
  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    const fetchUserChats = async () => {
      console.log(typeof(user._id));
      try {
        const response = await axios.get(
          `http://localhost:5001/api/chats/conversation-list?id=${user._id}`
        );
        setChats(response.data.list);
      } catch (error) {
        console.error("Error fetching user chats:", error);
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
    <div className=" flex flex-col gap-2 p-2">
      {!chats.length ? (
        <div className="flex justify-center items-center ">
          <img src="" alt="" className="mt-16" />
        </div>
      ) : (
        chats.map((chat) => (
          <div
            className="userchat h-[4.3rem] w-full bg-white rounded-2xl"
            key={chat._id}
            onClick={() => handleSelect(chat)}
          >
            <Avatar
              size="sm"
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <div className="w-full">
              <span className="">{chats[0]?.firstId===user._id?chat?.secondUserName:chat?.firstUserName}</span>
              <div className="w-full flex justify-between">
                <p className="">
                  {chat.lastMessage.slice(0, 20)}
                  {chat.lastMessage.length > 20 && "..."}
                </p>
                {chat.__v ? (
                  <p className="w-5 h-5 bg-[#E35131] rounded-full flex justify-center items-center text-white">
                    {chat.__v === 0 ? "" : chat.__v}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Userschats;
