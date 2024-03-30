import React, { useState, useContext, useRef } from 'react';
import axios from 'axios';
import { Chatcontext2 } from './Chatcontext2';

const Inputfield = ({user}) => {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);
  const { firstId,setSent,sent } = useContext(Chatcontext2);
  const inputRef = useRef();

  const handleSend = async () => {
    try {
      const uid = user._id; // Assuming user._id is available in scope
      const name = user.name; // Assuming user.name is available in scope

      const requestBody = {
        cid: firstId?._id,
        content: text,
        uid: uid,
        name: name
      };

      await axios.post('http://localhost:5001/api/chats/send-message', requestBody);

      // Clear input fields after sending
      setSent(!sent)
      setText('');
      setImg(null);
      inputRef.current.value = '';
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className='Inputfield w-full'>
      <div className="send">
        <img src="" alt="" />
        <input type="file" name="" id="file" style={{ display: "none" }} onChange={(e) => setImg(e.target.files[0])} ref={inputRef} />
        <label htmlFor="file">
          <img src="" alt="" className='w-11 h-11' style={{ cursor: "pointer" }} />
        </label>
      </div>
      {!img ? <input type="text" id='sendinput' label='Type Something...' multiline onChange={(e) => setText(e.target.value)} value={text} className="px-4 ml-4 h-[5.5vh] w-[85%] border rounded-lg border-[#BBBFC6]" onKeyPress={(e) => { e.key === 'Enter' && handleSend() }} placeholder="Type a message" /> :
        <div className='px-10 w-full flex items-start'>
          <div className='w-[45%] border rounded-lg border-[#BBBFC6] h-[5.5vh]'>
            <div className='h-full flex items-center justify-between px-2'>
              <div className='flex'>
                <img src="" alt="" className='w-6' />
                <p className='ml-4'>{img?.name?.slice(0, 15)}</p>
              </div>
              <div className='flex'>
                <p className='mr-4'>{img?.type.slice(0, 15)}</p>
                <img src="" alt="" onClick={() => { setImg(null); inputRef.current.value = ''; }} />
              </div>
            </div>
          </div>
          <input type="text" id='sendinput' label='Type Something...' multiline onChange={(e) => setText(e.target.value)} value={text} className="px-4 ml-4 h-[5.5vh] w-[45%] border rounded-lg border-[#BBBFC6]" onKeyPress={(e) => { e.key === 'Enter' && handleSend() }} placeholder="Type a message" />
        </div>}
      <button variant="contained" id='send' onClick={handleSend}>Send</button>
    </div>
  );
};

export default Inputfield;
