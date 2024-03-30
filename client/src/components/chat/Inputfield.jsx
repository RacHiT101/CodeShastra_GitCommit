import React, { useState, useContext, useRef } from 'react';
import axios from 'axios';
import { Chatcontext2 } from './Chatcontext2';
import { ImAttachment } from "react-icons/im";
const Inputfield = ({ user }) => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { firstId, setSent, sent } = useContext(Chatcontext2);
  const inputRef = useRef();

  const handleSend = async () => {
    try {
      const uid = user._id; // Assuming user._id is available in scope
      const name = user.name; // Assuming user.name is available in scope

      const requestBody = {
        cid: firstId?._id,
        content: text,
        uid: uid,
        name: name,
      };

      await axios.post(
        "http://localhost:5001/api/chats/send-message",
        requestBody
      );

      // Clear input fields after sending
      setSent(!sent);
      setText("");
      setImg(null);
      inputRef.current.value = "";
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="Inputfield w-full">
      <div className="px-4 py-2 text-white mx-2 bg-gray-400 rounded-lg">
        <input
          type="file"
          name=""
          id="file"
          style={{ display: "none" }}
          onChange={(e) => setImg(e.target.files[0])}
          ref={inputRef}
        />
        <label htmlFor="file">
          <ImAttachment width={11} height={11} />
        </label>
      </div>
      {!img ? (
        <input
          type="text"
          id="sendinput"
          label="Type Something..."
          multiline
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="px-4 h-[5.5vh] w-[90%] border rounded-lg border-[#BBBFC6]"
          onKeyPress={(e) => {
            e.key === "Enter" && handleSend();
          }}
          placeholder="Type a message"
        />
      ) : (
        <div className="px-3 w-full flex items-start">
          <div className="w-full border rounded-lg border-[#BBBFC6] h-[5.5vh]">
            <div className="h-full flex items-center justify-between px-2">
              <div className="flex">
                <img src="" alt="" className="w-6" />
                <p className="ml-2">{img?.name?.slice(0, 15)}</p>
              </div>
              <div className="flex">
                <p className="mr-2">{img?.type.slice(0, 15)}</p>
                <img
                  src=""
                  alt=""
                  onClick={() => {
                    setImg(null);
                    inputRef.current.value = "";
                  }}
                />
              </div>
            </div>
          </div>
          <input
            type="text"
            id="sendinput"
            label="Type Something..."
            multiline
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="px-4 h-[5.5vh] w-[90%] border rounded-lg border-[#BBBFC6]"
            onKeyPress={(e) => {
              e.key === "Enter" && handleSend();
            }}
            placeholder="Type a message"
          />
        </div>
      )}
      <button
        variant="contained"
        className="ms-6 bg-[#0049fc] p-2 rounded-lg text-white"
        id="send"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default Inputfield;
