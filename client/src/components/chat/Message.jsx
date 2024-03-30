import React, { useContext, useEffect, useState, useRef } from 'react'
import './Chats.css'

import { Chatcontext2 } from './Chatcontext2';
const Message = (props) => {
  const { firstId } = useContext(Chatcontext2);
  const { msg,user } = props
  console.log(msg);

  const date = msg.date
  // const time = `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
  const utcString = date
  const [imagesrc, setimagesrc] = useState("https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png")
  const ref = useRef()

  useEffect(() => {
    // getImage();
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }, [msg])

  // const getImage=async()=>{
  //   const collectionRef = collection(database, 'users')
  //   const emailQuery=query(collectionRef,where("uid","==",user.uid))
  //   const querySnapshot = await getDocs(emailQuery);
  //   querySnapshot.forEach(async(doc) => {
  //       setimagesrc(doc.data().imageURL)
  //     });
  // }
console.log(msg.file);
  return (
    <div ref={ref} className={`Message ${msg.ofUser === user._id && "owner"} relative`}>
      <div className="messagecontowner px-3 mb-2">
        {msg.content != "" &&
          <div>
            <div className='flex justify-between items-center'>
              <div className='mr-1'>{msg.ofUser === user._id ? "Me" : firstId?.firstUserName}</div>
              <div className=' font-light text-sm'>{date}</div>
            </div>
            <p className={msg.ofUser === user._id ? "textowner" : "text"}>{msg.content}</p>
          </div>}
      </div>
    </div>
  )
}

export default Message