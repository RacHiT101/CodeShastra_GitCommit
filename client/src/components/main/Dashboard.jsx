import React from 'react';
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react';
  import { CiMenuKebab } from "react-icons/ci";


const Dashboard = () => {
  return (
    <div className='flex justify-evenly h-full w-full p-5 gap-5'>
        <div className="stats flex flex-wrap h-full w-full">
        <div className='w-full grid grid-cols-2 gap-5'>
            <Stat className="statschild w-full p-4 bg-white flex items-center justify-between rounded-xl">
                <div className="flex items-center justify-around "> 
                    <StatLabel className="text-2xl pr-20" style={{ fontSize: "1.3rem" }}>Potential Jobs</StatLabel>
                    <span><CiMenuKebab style={{ color: "blue", transform: "rotate(90deg)",fontSize:"2rem" }} /></span>
                </div>
                <StatHelpText>(This Month)</StatHelpText>
                <StatNumber className="font-bold" style={{ fontSize: "2.5rem" }}>13</StatNumber> 
            </Stat>

            <Stat className="statschild w-full p-4 bg-white flex items-center justify-between rounded-xl">
                <div className="flex items-center justify-around "> 
                    <StatLabel className="text-2xl pr-20" style={{ fontSize: "1.3rem" }}>Matched Jobs</StatLabel>
                    <span><CiMenuKebab style={{ color: "blue", transform: "rotate(90deg)",fontSize:"2rem" }} /></span>
                </div>
                <StatHelpText>(This Month)</StatHelpText>
                <StatNumber className="font-bold" style={{ fontSize: "2.5rem" }}>9</StatNumber> 
            </Stat>

            <Stat className="statschild w-full p-4 bg-white flex items-center justify-between rounded-xl">
                <div className="flex items-center justify-around "> 
                    <StatLabel className="text-2xl pr-20" style={{ fontSize: "1.3rem" }}>Search Appearance</StatLabel>
                    <span><CiMenuKebab style={{ color: "blue", transform: "rotate(90deg)",fontSize:"2rem" }} /></span>
                </div>
                <StatHelpText>(This Month)</StatHelpText>
                <StatNumber className="font-bold" style={{ fontSize: "2.5rem" }}>329</StatNumber> 
            </Stat>

            <Stat className="statschild w-full p-4 bg-white flex items-center justify-between rounded-xl">
                <div className="flex items-center justify-around "> 
                    <StatLabel className="text-2xl pr-20" style={{ fontSize: "1.3rem" }}>Applied Jobs</StatLabel>
                    <span><CiMenuKebab style={{ color: "blue", transform: "rotate(90deg)",fontSize:"2rem" }} /></span>
                </div>
                <StatHelpText>(This Month)</StatHelpText>
                <StatNumber className="font-bold" style={{ fontSize: "2.5rem" }}>8</StatNumber> 
            </Stat>
        </div>

        </div>
        <div className='w-1/2 h-full bg-white'>

        </div>
      
    </div>
  )
}

export default Dashboard
