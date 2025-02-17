import React, { useState } from 'react';
// import { BiEditAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidBriefcase } from "react-icons/bi";
import { GiTrophy } from "react-icons/gi";
import { PiCrownFill } from "react-icons/pi";
import { IoDocumentText } from "react-icons/io5";
import "../styles/profile.css";
import Information from './Information';
import { ImShare2 } from "react-icons/im";
import { HiDotsHorizontal } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaSquarePen } from "react-icons/fa6";
import { Avatar } from "@chakra-ui/react";

const Profile = () => {
  const [selectedOption, setSelectedOption] = useState("Information");

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "Information":
        return (
          <div>
            <Information></Information>
          </div>
        );
      case "Experiences":
        return (
          <div>
            <div className="bg-white rounded-xl mt-5 p-5">
              <div className="flex items-center justify-between mt-5 mb-5">
                <div className="flex gap-5">
                  <img
                    style={{
                      height: "5rem",
                      width: "5rem",
                      borderRadius: "2.5rem",
                    }}
                    src="./static/images/default.jpeg"
                  ></img>
                  <div>
                    <p
                      className="pb-1"
                      style={{ fontWeight: "600", fontSize: "1.85rem" }}
                    >
                      Experiences
                    </p>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "medium",
                        color: "grey",
                      }}
                    >
                      Add experience to increase the chance of hiring
                    </div>
                  </div>
                </div>
                <button
                  className="rounded-xl"
                  style={{
                    border: "1.5px solid blue",
                    padding: "1rem 1.5rem 1rem 1.5rem",
                    color: "blue",
                    fontWeight: "bold",
                  }}
                >
                  Add Experience
                </button>
              </div>

              <div className="flex items-center justify-between pl-5 pt-2 mt-5 mb-5">
                <div className="flex gap-5">
                  <img
                    style={{
                      height: "5rem",
                      width: "5rem",
                      borderRadius: "2.5rem",
                    }}
                    src="./static/images/default.jpeg"
                  ></img>
                  <div>
                    <p
                      className="pb-1"
                      style={{ fontWeight: "600", fontSize: "1.35rem" }}
                    >
                      Sr. Product Designer
                    </p>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "medium",
                        color: "black",
                      }}
                    >
                      ShartTrip Inc.
                    </div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "medium",
                        color: "grey",
                      }}
                    >
                      Dhaka, Bangladesh January 2022 to Present
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="rounded-xl"
                    style={{
                      padding: "1rem 1.5rem 1rem 1.5rem",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="rounded-xl"
                    style={{
                      padding: "1rem 1.5rem 1rem 1.5rem",
                      color: "blue",
                      fontWeight: "bold",
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div className="pl-5 pr-4 mb-5" style={{ color: "dark-grey" }}>
                ShareTrip is the country’s first and pioneer online travel
                aggregator (OTA). My goal was to craft a functional and
                delightful experience through web and mobile apps currently
                consisting of 1.2M+ & future billion users...
                <span style={{ color: "blue", fontWeight: "500" }}>
                  See More
                </span>
              </div>

              <div className="flex items-center justify-between pl-5 pt-2 mt-5 mb-5">
                <div className="flex gap-5">
                  <img
                    style={{
                      height: "5rem",
                      width: "5rem",
                      borderRadius: "2.5rem",
                    }}
                    src="./static/images/default.jpeg"
                  ></img>
                  <div>
                    <p
                      className="pb-1"
                      style={{ fontWeight: "600", fontSize: "1.35rem" }}
                    >
                      Product Designer
                    </p>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "medium",
                        color: "black",
                      }}
                    >
                      Grameenphone
                    </div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "medium",
                        color: "grey",
                      }}
                    >
                      Dhaka, Bangladesh January 2022 to Present
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="rounded-xl"
                    style={{
                      padding: "1rem 1.5rem 1rem 1.5rem",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="rounded-xl"
                    style={{
                      padding: "1rem 1.5rem 1rem 1.5rem",
                      color: "blue",
                      fontWeight: "bold",
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div className="pl-5 pr-4 mb-5" style={{ color: "dark-grey" }}>
                ShareTrip is the country’s first and pioneer online travel
                aggregator (OTA). My goal was to craft a functional and
                delightful experience through web and mobile apps currently
                consisting of 1.2M+ & future billion users...
                <span style={{ color: "blue", fontWeight: "500" }}>
                  See More
                </span>
              </div>
            </div>
          </div>
        );
      case "Education":
        return (
          <div>
            {" "}
            <div className="bg-white rounded-xl mt-5 p-5">
              <div className="flex items-center justify-between pl-5 pt-2 mt-5 mb-5">
                <div className="flex gap-5">
                  <img
                    style={{
                      height: "5rem",
                      width: "5rem",
                      borderRadius: "2.5rem",
                    }}
                    src="./static/images/default.jpeg"
                  ></img>
                  <div>
                    <p
                      className="pb-1"
                      style={{ fontWeight: "600", fontSize: "1.85rem" }}
                    >
                      Education & Certifications
                    </p>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "medium",
                        color: "grey",
                      }}
                    >
                      Add education to increase the chance of hiring
                    </div>
                  </div>
                </div>
                <button
                  className="rounded-xl"
                  style={{
                    border: "1.5px solid blue",
                    padding: "1rem 1.5rem 1rem 1.5rem",
                    color: "blue",
                    fontWeight: "bold",
                  }}
                >
                  Add Education
                </button>
              </div>

              <div className="flex items-center justify-between pl-5 pt-2 mt-5 mb-5">
                <div className="flex gap-5">
                  <img
                    style={{
                      height: "5rem",
                      width: "5rem",
                      borderRadius: "2.5rem",
                    }}
                    src="./static/images/default.jpeg"
                  ></img>
                  <div>
                    <p
                      className="pb-1"
                      style={{ fontWeight: "600", fontSize: "1.35rem" }}
                    >
                      California Institute of the Arts
                    </p>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "medium",
                        color: "black",
                      }}
                    >
                      UX Design Fundamentals UX Design
                    </div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "medium",
                        color: "grey",
                      }}
                    >
                      Grade: A+ 2020 - 2021
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="rounded-xl"
                    style={{
                      padding: "1rem 1.5rem 1rem 1.5rem",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="rounded-xl"
                    style={{
                      padding: "1rem 1.5rem 1rem 1.5rem",
                      color: "blue",
                      fontWeight: "bold",
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div className="pl-5 pr-4 mb-5" style={{ color: "dark-grey" }}>
                This hands-on course examines how content is organized and
                structured to create an experience for a user, and what role the
                designer plays in creating and shaping user experience. You will
                be led through a condensed...
                <span style={{ color: "blue", fontWeight: "500" }}>
                  See More
                </span>
              </div>

              <div className="flex items-center justify-between pl-5 pt-2 mt-5 mb-5">
                <div className="flex gap-5">
                  <img
                    style={{
                      height: "5rem",
                      width: "5rem",
                      borderRadius: "2.5rem",
                    }}
                    src="./static/images/default.jpeg"
                  ></img>
                  <div>
                    <p
                      className="pb-1"
                      style={{ fontWeight: "600", fontSize: "1.35rem" }}
                    >
                      University of Pennsylvania
                    </p>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "medium",
                        color: "black",
                      }}
                    >
                      Gamification Game and Interactive Media Design
                    </div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "medium",
                        color: "grey",
                      }}
                    >
                      Grade: A+ 2019 - 2020
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="rounded-xl"
                    style={{
                      padding: "1rem 1.5rem 1rem 1.5rem",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="rounded-xl"
                    style={{
                      padding: "1rem 1.5rem 1rem 1.5rem",
                      color: "blue",
                      fontWeight: "bold",
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div className="pl-5 pr-4" style={{ color: "dark-grey" }}>
                Gamification is the application of game elements and digital
                game design techniques to non-game problems, such as business
                and social impact challenges. This course will teach you the
                mechanisms of gamification...
                <span style={{ color: "blue", fontWeight: "500" }}>
                  See More
                </span>
              </div>
            </div>
          </div>
        );
      case "Skills":
        return (
          <div>
            {" "}
            <div className="bg-white rounded-xl mt-5 p-5">
              <div className="flex items-center justify-between pl-5 pt-2 mt-5 mb-5">
                <div className="flex gap-5">
                  <img
                    style={{
                      height: "5rem",
                      width: "5rem",
                      borderRadius: "2.5rem",
                    }}
                    src="./static/images/default.jpeg"
                  ></img>
                  <div>
                    <p
                      className="pb-1"
                      style={{ fontWeight: "600", fontSize: "1.85rem" }}
                    >
                      Skills
                    </p>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "medium",
                        color: "grey",
                      }}
                    >
                      Add skills to increase the chance of hiring
                    </div>
                  </div>
                </div>
                <button
                  className="rounded-xl"
                  style={{
                    border: "1.5px solid blue",
                    padding: "1rem 1.5rem 1rem 1.5rem",
                    color: "blue",
                    fontWeight: "bold",
                  }}
                >
                  Add Skills
                </button>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginTop: "2rem",
                  paddingLeft: "1.5rem",
                }}
              >
                <div style={{ height: "6rem", width: "50%" }}>
                  <div className="flex items-center justify-between pl-5 pt-2">
                    <div className="flex gap-5">
                      <div>
                        <p
                          className="pb-1"
                          style={{ fontWeight: "600", fontSize: "1.5rem" }}
                        >
                          UX Design
                        </p>
                        <div
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: "medium",
                            color: "black",
                          }}
                        >
                          Expert
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        className="rounded-xl"
                        style={{
                          color: "grey",
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                        }}
                      >
                        <RiDeleteBinLine></RiDeleteBinLine>
                      </button>
                      <button
                        className="rounded-xl"
                        style={{
                          padding: "1rem 1.5rem 1rem 1.5rem",
                          color: "blue",
                          fontSize: "1.5rem",
                        }}
                      >
                        <FaSquarePen />
                      </button>
                    </div>
                  </div>
                </div>
                <div style={{ height: "6rem", width: "50%" }}>
                  <div className="flex items-center justify-between pl-5 pt-2">
                    <div className="flex gap-5">
                      <div>
                        <p
                          className="pb-1"
                          style={{ fontWeight: "600", fontSize: "1.5rem" }}
                        >
                          UI Design
                        </p>
                        <div
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: "medium",
                            color: "black",
                          }}
                        >
                          Expert
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        className="rounded-xl"
                        style={{
                          color: "grey",
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                        }}
                      >
                        <RiDeleteBinLine></RiDeleteBinLine>
                      </button>
                      <button
                        className="rounded-xl"
                        style={{
                          padding: "1rem 1.5rem 1rem 1.5rem",
                          color: "blue",
                          fontSize: "1.5rem",
                        }}
                      >
                        <FaSquarePen />
                      </button>
                    </div>
                  </div>
                </div>
                <div style={{ height: "6rem", width: "50%" }}>
                  <div className="flex items-center justify-between pl-5 pt-2">
                    <div className="flex gap-5">
                      <div>
                        <p
                          className="pb-1"
                          style={{ fontWeight: "600", fontSize: "1.5rem" }}
                        >
                          User Research
                        </p>
                        <div
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: "medium",
                            color: "black",
                          }}
                        >
                          Expert
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        className="rounded-xl"
                        style={{
                          color: "grey",
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                        }}
                      >
                        <RiDeleteBinLine></RiDeleteBinLine>
                      </button>
                      <button
                        className="rounded-xl"
                        style={{
                          padding: "1rem 1.5rem 1rem 1.5rem",
                          color: "blue",
                          fontSize: "1.5rem",
                        }}
                      >
                        <FaSquarePen />
                      </button>
                    </div>
                  </div>
                </div>
                <div style={{ height: "6rem", width: "50%" }}>
                  <div className="flex items-center justify-between pl-5 pt-2">
                    <div className="flex gap-5">
                      <div>
                        <p
                          className="pb-1"
                          style={{ fontWeight: "600", fontSize: "1.5rem" }}
                        >
                          Design System
                        </p>
                        <div
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: "medium",
                            color: "black",
                          }}
                        >
                          Expert
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        className="rounded-xl"
                        style={{
                          color: "grey",
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                        }}
                      >
                        <RiDeleteBinLine></RiDeleteBinLine>
                      </button>
                      <button
                        className="rounded-xl"
                        style={{
                          padding: "1rem 1.5rem 1rem 1.5rem",
                          color: "blue",
                          fontSize: "1.5rem",
                        }}
                      >
                        <FaSquarePen />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Attachments":
        return <div>Attachments content</div>;
      default:
        return <Information></Information>;
    }
  };

  return (
    <>
      <img
        className="p-10"
        src=".\static\images\profile.png"
        style={{ zIndex: "0" }}
        alt="Profile"
      />
      <div className="flex pr-6 pl-20">
        <Avatar
          size="2xl"
          name="Prosper Otemuyiwa"
          src="https://bit.ly/prosper-baba"
          className="mt-5 me-10"
        />
        <div
          className="w-full flex"
          style={{
            justifyContent: "space-between",
            alignContent: "space-around",
          }}
        >
          <div>
            <p style={{ color: "transparent", paddingBottom: "0.5rem" }}>A</p>
            <p style={{ fontSize: "2rem", fontWeight: "600" }}>Anamoul Rouf</p>
            <div style={{ color: "grey", fontWeight: "medium" }}>
              Product Designer
            </div>
          </div>
          <div style={{ paddingRight: "5%", display: "flex" }}>
            <ImShare2
              style={{
                color: "blue",
                fontSize: "1.8rem",
                marginRight: "2rem",
                cursor: "pointer",
              }}
            />
            <HiDotsHorizontal
              style={{ color: "blue", fontSize: "1.8rem", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-evenly w-full p-10 gap-5 rounder-xl">
        <div className="stats w-1/5  flex flex-col justify-start items-start rounded-xl">
          <div
            className={`p-1 w-full rounded-xl ${
              selectedOption === "Information"
                ? "bg-blue-100"
                : "hover:bg-blue-100"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => handleClick("Information")}
          >
            <div
              className="option flex items-center m-5 rounded-xl "
              style={{ paddingLeft: "1%" }}
            >
              <span className="pr-3">
                <BsFillPersonFill style={{ fontSize: "1.5rem" }} />
              </span>
              <span style={{ fontWeight: "bold" }}>Information</span>
            </div>
          </div>
          <div
            className={`p-1 w-full rounded-xl ${
              selectedOption === "Experiences"
                ? "bg-blue-100"
                : "hover:bg-blue-100"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => handleClick("Experiences")}
          >
            <div
              className="option flex items-center m-5 rounded-xl"
              style={{ paddingLeft: "1%" }}
            >
              <span className="pr-3">
                <BiSolidBriefcase style={{ fontSize: "1.5rem" }} />
              </span>
              <span style={{ fontWeight: "bold" }}>Experiences</span>
            </div>
          </div>
          <div
            className={`p-1 w-full rounded-xl ${
              selectedOption === "Education"
                ? "bg-blue-100"
                : "hover:bg-blue-100"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => handleClick("Education")}
          >
            <div
              className="option flex items-center m-5 rounded-xl"
              style={{ paddingLeft: "1%" }}
            >
              <span className="pr-3">
                <GiTrophy style={{ fontSize: "1.5rem" }} />
              </span>
              <span style={{ fontWeight: "bold" }}>Education</span>
            </div>
          </div>
          <div
            className={`p-1 w-full rounded-xl ${
              selectedOption === "Skills" ? "bg-blue-100" : "hover:bg-blue-100"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => handleClick("Skills")}
          >
            <div
              className="option flex items-center m-5 rounded-xl"
              style={{ paddingLeft: "1%" }}
            >
              <span className="pr-3">
                <PiCrownFill style={{ fontSize: "1.5rem" }} />
              </span>
              <span style={{ fontWeight: "bold" }}>Skills</span>
            </div>
          </div>
          <div
            className={`p-1 w-full rounded-xl ${
              selectedOption === "Attachments"
                ? "bg-blue-100"
                : "hover:bg-blue-100"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => handleClick("Attachments")}
          >
            <div
              className="option flex items-center m-5 rounded-xl"
              style={{ paddingLeft: "1%" }}
            >
              <span className="pr-3">
                <IoDocumentText style={{ fontSize: "1.5rem" }} />
              </span>
              <span style={{ fontWeight: "bold" }}>Attachments</span>
            </div>
          </div>
        </div>
        <div className="w-4/5 h-full  p-4 rounded-xl" style={{}}>
          {/* boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.3)" */}
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default Profile;
