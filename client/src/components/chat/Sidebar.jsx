import React from 'react'
import './Chats.css'
import Search from './Search'
import Userschats from './Userschats'

const Sidebar = (props) => {
  const {user,imagesrc}=props
  return (
    <div className="sidebar border-r border-[#BBBFC6]">
      <Search curuser={user} imagesrc={imagesrc} />
      <Userschats curuser={user} />
    </div>
  );
}

export default Sidebar