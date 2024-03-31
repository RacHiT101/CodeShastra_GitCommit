import React, { useContext, useState, useEffect } from 'react';
import Message from './Message';
import { Chatcontext } from './Chatcontext';
import { Chatcontext2 } from './Chatcontext2';
import './Chats.css';
import axios from 'axios';
import { Avatar } from "@chakra-ui/react";

const Messages = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const { firstId, sent } = useContext(Chatcontext2);

  const fetchMessages = async () => {
    try {
      console.log(firstId);
      let response={}
      if(user._id!==firstId.firstId)
     { response = await axios.get(
        `http://localhost:5001/api/chats/conversation?id1=${user._id}&id2=${firstId.firstId}`
      );}
      else{
        response = await axios.get(
          `http://localhost:5001/api/chats/conversation?id1=${user._id}&id2=${firstId.secondId}`
        );
      }
      setMessages(response.data.conversation.messages);
      console.log(response.data.conversation.messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [user._id, firstId, sent]);

  return (
    <div className="relative p-2 flex items-start">
      <Avatar
        size="xs"
        name="Prosper Otemuyiwa"
        src="https://bit.ly/prosper-baba"
      />
      <div className="h-[70vh] overflow-scroll pt-1">
        {messages.map((m) => (
          <Message msg={m} key={m._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Messages;
