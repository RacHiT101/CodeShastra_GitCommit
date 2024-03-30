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
    <div className="flex justify-evenly h-full w-full p-10 gap-5">
      <div className="stats h-64 w-full grid grid-cols-2 gap-5">
        {/* <Stat className="statschild h-50 w-full p-4 bg-white flex items-center justify-between rounded-xl">
                <div className="flex items-center justify-between "> 
                    <StatLabel className="text-2xl pr-20" style={{ fontSize: "1.3rem" }}>Potential Jobs</StatLabel>
                    <span><CiMenuKebab style={{ color: "blue", transform: "rotate(90deg)",fontSize:"2rem" }} /></span>
                </div>
                <StatHelpText>(This Month)</StatHelpText>
                <StatNumber className="font-bold" style={{ fontSize: "2.5rem" }}>13</StatNumber> 
            </Stat> */}

        <div className="statschild h-50 w-full p-4 bg-white rounded-xl">
          <div className="flex items-center justify-between">
            <div
              className="text-2xl pr-20"
              style={{ fontSize: "1.5rem", fontWeight: "500" }}
            >
              Potential Jobs
            </div>
            <span>
              <CiMenuKebab
                style={{
                  color: "blue",
                  transform: "rotate(90deg)",
                  fontSize: "2rem",
                }}
              />
            </span>
          </div>
          <div
            style={{ fontWeight: "medium", fontSize: "0.8rem", color: "grey" }}
          >
            (This Month)
          </div>
          <div
            style={{
              fontSize: "2.3rem",
              fontWeight: "bolder",
              padding: "1rem 1rem 0rem 0rem",
            }}
          >
            13
          </div>
        </div>

        <div className="statschild h-50 w-full p-4 bg-white rounded-xl">
          <div className="flex items-center justify-between">
            <div
              className="text-2xl pr-20"
              style={{ fontSize: "1.5rem", fontWeight: "500" }}
            >
              Matched Jobs
            </div>
            <span>
              <CiMenuKebab
                style={{
                  color: "blue",
                  transform: "rotate(90deg)",
                  fontSize: "2rem",
                }}
              />
            </span>
          </div>
          <div
            style={{ fontWeight: "medium", fontSize: "0.8rem", color: "grey" }}
          >
            (This Month)
          </div>
          <div
            style={{
              fontSize: "2.3rem",
              fontWeight: "bolder",
              padding: "1rem 1rem 0rem 0rem",
            }}
          >
            9
          </div>
        </div>

        <div className="statschild h-50 w-full p-4 bg-white rounded-xl">
          <div className="flex items-center justify-between">
            <div
              className="text-2xl pr-20"
              style={{ fontSize: "1.5rem", fontWeight: "500" }}
            >
              Search Appearance
            </div>
            <span>
              <CiMenuKebab
                style={{
                  color: "blue",
                  transform: "rotate(90deg)",
                  fontSize: "2rem",
                }}
              />
            </span>
          </div>
          <div
            style={{ fontWeight: "medium", fontSize: "0.8rem", color: "grey" }}
          >
            (This Month)
          </div>
          <div
            style={{
              fontSize: "2.3rem",
              fontWeight: "bolder",
              padding: "1rem 1rem 0rem 0rem",
            }}
          >
            329
          </div>
        </div>

        <div className="statschild h-50 w-full p-4 bg-white rounded-xl">
          <div className="flex items-center justify-between">
            <div
              className="text-2xl pr-20"
              style={{ fontSize: "1.5rem", fontWeight: "500" }}
            >
              Applied Jobs
            </div>
            <span>
              <CiMenuKebab
                style={{
                  color: "blue",
                  transform: "rotate(90deg)",
                  fontSize: "2rem",
                }}
              />
            </span>
          </div>
          <div
            style={{ fontWeight: "medium", fontSize: "0.8rem", color: "grey" }}
          >
            (This Month)
          </div>
          <div
            style={{
              fontSize: "2.3rem",
              fontWeight: "bolder",
              padding: "1rem 1rem 0rem 0rem",
            }}
          >
            8
          </div>
        </div>
      </div>

      <div className="w-1/2 h-full bg-white p-4">
        <div className="flex items-center justify-between">
          <div className="pl-3">Jobs for you</div>
          <span style={{ color: "blue", fontWeight: "600" }} className="pr-7">
            All Jobs
          </span>
        </div>
        <Stat className="statschild w-full p-4 bg-white flex items-center justify-between rounded-xl">
          <div className="flex items-center justify-around ">
            <img
              src="./static/images/grameenphone.jpeg"
              className="mr-10"
              style={{ height: "3.5rem" }}
            ></img>
            <div>
              <StatLabel
                className="text-2xl pr-20"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Product Designer
              </StatLabel>
              <StatHelpText style={{ color: "black", fontWeight: "500" }}>
                Grameenphone{" "}
                <span style={{ color: "grey" }}>Dhaka,Bangladesh</span>
              </StatHelpText>
              <StatNumber
                className="font-bold"
                style={{ fontSize: "1rem", color: "blue" }}
              >
                View Jobs
              </StatNumber>
            </div>
          </div>
        </Stat>
        <Stat className="statschild w-full p-4 bg-white flex items-center justify-between rounded-xl">
          <div className="flex items-center justify-around ">
            <img
              src="./static/images/grameenphone.jpeg"
              className="mr-10"
              style={{ height: "3.5rem" }}
            ></img>
            <div>
              <StatLabel
                className="text-2xl pr-20"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Product Designer
              </StatLabel>
              <StatHelpText style={{ color: "black", fontWeight: "500" }}>
                Grameenphone{" "}
                <span style={{ color: "grey" }}>Dhaka,Bangladesh</span>
              </StatHelpText>
              <StatNumber
                className="font-bold"
                style={{ fontSize: "1rem", color: "blue" }}
              >
                View Jobs
              </StatNumber>
            </div>
          </div>
        </Stat>
        <Stat className="statschild w-full p-4 bg-white flex items-center justify-between rounded-xl">
          <div className="flex items-center justify-around ">
            <img
              src="./static/images/grameenphone.jpeg"
              className="mr-10"
              style={{ height: "3.5rem" }}
            ></img>
            <div>
              <StatLabel
                className="text-2xl pr-20"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Product Designer
              </StatLabel>
              <StatHelpText style={{ color: "black", fontWeight: "500" }}>
                Grameenphone{" "}
                <span style={{ color: "grey" }}>Dhaka,Bangladesh</span>
              </StatHelpText>
              <StatNumber
                className="font-bold"
                style={{ fontSize: "1rem", color: "blue" }}
              >
                View Jobs
              </StatNumber>
            </div>
          </div>
        </Stat>
        <Stat className="statschild w-full p-4 bg-white flex items-center justify-between rounded-xl">
          <div className="flex items-center justify-around ">
            <img
              src="./static/images/grameenphone.jpeg"
              className="mr-10"
              style={{ height: "3.5rem" }}
            ></img>
            <div>
              <StatLabel
                className="text-2xl pr-20"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Product Designer
              </StatLabel>
              <StatHelpText style={{ color: "black", fontWeight: "500" }}>
                Grameenphone{" "}
                <span style={{ color: "grey" }}>Dhaka,Bangladesh</span>
              </StatHelpText>
              <StatNumber
                className="font-bold"
                style={{ fontSize: "1rem", color: "blue" }}
              >
                View Jobs
              </StatNumber>
            </div>
          </div>
        </Stat>
        <Stat className="statschild w-full p-4 bg-white flex items-center justify-between rounded-xl">
          <div className="flex items-center justify-around ">
            <img
              src="./static/images/grameenphone.jpeg"
              className="mr-10"
              style={{ height: "3.5rem" }}
            ></img>
            <div>
              <StatLabel
                className="text-2xl pr-20"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Product Designer
              </StatLabel>
              {/* <span><CiMenuKebab style={{ color: "blue", transform: "rotate(90deg)",fontSize:"1rem" }} /></span> */}
              <StatHelpText style={{ color: "black", fontWeight: "500" }}>
                Grameenphone{" "}
                <span style={{ color: "grey" }}>Dhaka,Bangladesh</span>
              </StatHelpText>
              <StatNumber
                className="font-bold"
                style={{ fontSize: "1rem", color: "blue" }}
              >
                View Jobs
              </StatNumber>
            </div>
          </div>
        </Stat>
      </div>
    </div>
  );
}

export default Dashboard
