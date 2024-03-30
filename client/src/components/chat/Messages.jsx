import React, { useContext, useState, useEffect } from 'react';
import Message from './Message';
import { Chatcontext } from './Chatcontext';
import { Chatcontext2 } from './Chatcontext2';
import './Chats.css';
import axios from 'axios';

const Messages = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const { firstId,sent } = useContext(Chatcontext2);

  const fetchMessages = async () => {
    try {
      console.log(firstId);
      const response = await axios.get(`http://localhost:5001/api/chats/conversation?id1=${user._id}&id2=${firstId.firstId}`);
      setMessages(response.data.conversation.messages);
      console.log(response.data.conversation.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [user._id, firstId,sent]);

  return (
    <div className="relative">
      <img src="" alt="" className="absolute inset-0 w-full h-full object-cover bg-[#EBEAF2]" />
      <div className="h-[77vh] overflow-scroll pt-1">
        {messages.map(m => <Message msg={m} key={m._id} user={user}/>)}
      </div>
    </div>
  );
};

export default Messages;
