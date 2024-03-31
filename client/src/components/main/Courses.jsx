import { useState } from "react";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import CoursesName from "../Courses/CoursesName";
import Quizz from "../Courses/Quizz";
import RoadMap from "../Courses/RoadMap";
import { BsStars } from "react-icons/bs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaPhoenixFramework } from "react-icons/fa";
import { StarIcon } from '@chakra-ui/icons';
import axios from 'axios';

const Courses = () => {
  const genAI = new GoogleGenerativeAI("AIzaSyAJW_Q8F8dnfcMry56jNf1u2DNYJi2oGUs");
  const [selectedCourse, setSelectedCourse] = useState("Computer Science");
  const [searchCourse, setSearchCourse] = useState([]);
  const [Personalized, setPersonalized] = useState(false);
  const [learning, setLearning] = useState('');
  const [duration, setDuration] = useState('');

  const [imageResults, setImageResults] = useState([]);

  const fetchImageResults = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/serp', { query: `${learning} roadmap` });
      setImageResults(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching image results:', error);
    }
  };

  const handleSearch = async () => {

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `give me ${learning} roadmap course for ${duration} in array of strings

    example output array strictly in this format only
     [
              { "topic": "Introduction to Algebra", "description": "Basic concepts of algebra", "time": "2 weeks" },
              { "topic": "Linear Equations and Inequalities", "description": "Solving linear equations and inequalities", "time": "2 weeks" },,
            ]`;

    // const result = await model.generateContent(prompt);
    // const response = await result.response;
    // const text = response.text();

    const text = `[
      {
      "topic": "Web Development Fundamentals",
      "description": "Learn the basics of HTML, CSS, and JavaScript.",
      "time": "4 weeks"
      },
      {
      "topic": "HTML & CSS Deep Dive",
      "description": "Master building web pages with structure, styling, and responsiveness.",
      "time": "3 weeks"
      },
      {
      "topic": "JavaScript Fundamentals",
      "description": "Understand core JavaScript concepts, variables, functions, and DOM manipulation.",
      "time": "2 weeks"
      },
      {
      "topic": "Introduction to Frameworks",
      "description": "Explore popular front-end frameworks like React or Vue.js (choose one).",
      "time": "2 weeks"
      },
      {
      "topic": "Building a Simple Web App",
      "description": "Put your skills together by creating a small project using your chosen framework.",
      "time": "3 weeks"
      },
      {
      "topic": "Version Control & Git",
      "description": "Learn Git for version control and collaboration on projects.",
      "time": "2 weeks"
      }
      ]`;
    console.log(JSON.parse(text));
    setSearchCourse(JSON.parse(text))
    fetchImageResults()
  };


  const courses = {
    Mathematics: [
      {
        name: "Algebra",
        questions: [
          {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "4",
            image: "https://example.com/algebra_image.jpg", // Optional: Add an image URL for the question
          },
          {
            question: "What is the square root of 25?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "5",
            image: "https://example.com/squareroot_image.jpg", // Optional: Add an image URL for the question
          },
          // Add more questions for Algebra
        ]
      },
      {
        name: "Calculus",
        questions: [
          {
            question: "What is the derivative of x^2?",
            options: ["2x", "3x", "x", "0"],
            correctAnswer: "2x",
            image: "https://example.com/calculus_image.jpg", // Optional: Add an image URL for the question
          },
          {
            question: "What is the integral of sin(x)?",
            options: ["cos(x)", "tan(x)", "sin(x)", "csc(x)"],
            correctAnswer: "cos(x)",
            image: "https://example.com/integral_image.jpg", // Optional: Add an image URL for the question
          },
          // Add more questions for Calculus
        ]
      },
    ],
    "Computer Science": [
      {
        name: "Introduction to Programming",
        questions: [
          {
            question: "What is a variable?",
            options: [
              "A data structure",
              "A programming language",
              "A memory location",
              "A file type",
            ],
            correctAnswer: "A memory location",
            image: "https://example.com/variable_image.jpg", // Optional: Add an image URL for the question
          },
          {
            question: "What is a function?",
            options: [
              "A data structure",
              "A programming language",
              "A memory location",
              "A code block that performs a specific task",
            ],
            correctAnswer: "A code block that performs a specific task",
            image: "https://example.com/function_image.jpg", // Optional: Add an image URL for the question
          },
          // Add more questions for Introduction to Programming
        ]
      },
      {
        name: "Data Structures and Algorithms",
        questions: [
          {
            question: "What is a linked list?",
            options: [
              "A data structure",
              "A programming language",
              "A sorting algorithm",
              "A file type",
            ],
            correctAnswer: "A data structure",
            image: "https://example.com/linkedlist_image.jpg", // Optional: Add an image URL for the question
          },
          {
            question: "What is a stack?",
            options: [
              "A data structure",
              "A programming language",
              "A sorting algorithm",
              "A file type",
            ],
            correctAnswer: "A data structure",
            image: "https://example.com/stack_image.jpg", // Optional: Add an image URL for the question
          },
        ]
      },
    ],
    Literature: [
      {
        name: "American Literature",
        questions: [
          {
            question: "Who wrote 'The Great Gatsby'?",
            options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
            correctAnswer: "F. Scott Fitzgerald",
            image: "https://example.com/greatgatsby_image.jpg", // Optional: Add an image URL for the question
          },
          {
            question: "What is 'To Kill a Mockingbird' about?",
            options: [
              "A courtroom drama",
              "A coming-of-age story",
              "A fantasy adventure",
              "A historical biography",
            ],
            correctAnswer: "A coming-of-age story",
            image: "https://example.com/tokillamockingbird_image.jpg", // Optional: Add an image URL for the question
          },
          // Add more questions for American Literature
        ]
      },
      {
        name: "World Literature",
        questions: [
          {
            question: "Who wrote 'Don Quixote'?",
            options: ["Miguel de Cervantes", "Leo Tolstoy", "Fyodor Dostoevsky", "Charles Dickens"],
            correctAnswer: "Miguel de Cervantes",
            image: "https://example.com/donquixote_image.jpg", // Optional: Add an image URL for the question
          },
          {
            question: "What is 'War and Peace' about?",
            options: [
              "A love story",
              "A war epic",
              "A political thriller",
              "A philosophical novel",
            ],
            correctAnswer: "A war epic",
            image: "https://example.com/warandpeace_image.jpg", // Optional: Add an image URL for the question
          },
          // Add more questions for World Literature
        ]
      },
    ],
    "Web Development": [
      {
        name: "HTML & CSS",
        questions: [
          {
            question: "What does HTML stand for?",
            options: [
              "Hypertext Markup Language",
              "Hyper Text Manipulation Language",
              "Home Tool Markup Language",
              "Hyperlink and Text Markup Language",
            ],
            correctAnswer: "Hypertext Markup Language",
            image: "https://example.com/html_image.jpg", // Optional: Add an image URL for the question
          },
          {
            question: "Which of the following is a CSS property for text alignment?",
            options: ["text-align", "font-style", "padding", "background-color"],
            correctAnswer: "text-align",
            image: "https://example.com/css_image.jpg", // Optional: Add an image URL for the question
          },
          // Add more questions for HTML & CSS
        ]
      },
      {
        name: "JavaScript Fundamentals",
        questions: [
          {
            question: "What is JavaScript primarily used for?",
            options: [
              "Styling web pages",
              "Manipulating data",
              "Creating database queries",
              "Calculating mathematical equations",
            ],
            correctAnswer: "Manipulating data",
            image: "https://example.com/javascript_image.jpg", // Optional: Add an image URL for the question
          },
          {
            question: "Which of the following is NOT a JavaScript data type?",
            options: ["string", "boolean", "integer", "object"],
            correctAnswer: "integer",
            image: "https://example.com/jsdatatypes_image.jpg", // Optional: Add an image URL for the question
          },
          // Add more questions for JavaScript Fundamentals
        ]
      },
    ],
    "Data Analytics": [
      {
        name: "Introduction to Data Analytics",
        questions: [
          {
            question: "What is data analytics?",
            options: [
              "The process of analyzing data to make conclusions",
              "The process of storing data in databases",
              "The process of creating data visualizations",
              "The process of designing algorithms",
            ],
            correctAnswer: "The process of analyzing data to make conclusions",
            image: "https://example.com/dataanalytics_image.jpg", // Optional: Add an image URL for the question
          },
          {
            question: "Which programming language is commonly used for data analysis?",
            options: ["Java", "C++", "Python", "PHP"],
            correctAnswer: "Python",
            image: "https://example.com/python_image.jpg", // Optional: Add an image URL for the question
          },
          // Add more questions for Introduction to Data Analytics
        ]
      },
      {
        name: "Python for Data Analysis",
        questions: [
          {
            question: "What is Pandas?",
            options: [
              "A data visualization library",
              "A web development framework",
              "A machine learning algorithm",
              "A data manipulation library",
            ],
            correctAnswer: "A data manipulation library",
            image: "https://example.com/pandas_image.jpg", // Optional: Add an image URL for the question
          },
          {
            question: "What is NumPy?",
            options: [
              "A data visualization library",
              "A web development framework",
              "A machine learning algorithm",
              "A numerical computing library",
            ],
            correctAnswer: "A numerical computing library",
            image: "https://example.com/numpy_image.jpg", // Optional: Add an image URL for the question
          },
          // Add more questions for Python for Data Analysis
        ]
      },
    ],
  };


  const courseNames = Object.keys(courses);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const milestoneColors = [
    'rgb(33, 150, 243)',
    'rgb(63, 81, 181)',
    'rgb(156, 39, 176)',
    'rgb(76, 175, 80)',
    'rgb(255, 152, 0)',
    'rgb(255, 87, 34)',
    'rgb(233, 30, 99)',
    'rgb(0, 188, 212)',
    'rgb(255, 235, 59)',
    'rgb(33, 150, 243)',
    'rgb(63, 81, 181)',
    'rgb(156, 39, 176)',
    'rgb(76, 175, 80)',
    'rgb(255, 152, 0)',
    'rgb(255, 87, 34)',
    'rgb(233, 30, 99)',
    'rgb(0, 188, 212)',
    'rgb(255, 235, 59)'
  ];

  return (
    <div className="flex h-full w-full p-10 gap-5">
      {!Personalized ? <Tabs isFitted variant="enclosed" className="w-full">
        <TabList mb="1em">
          <Tab>Courses</Tab>
          <Tab>Quizes</Tab>
          <Tab>RoadMap</Tab>
        </TabList>
        <TabPanels className="overflow-auto h-full">
          <TabPanel>
            <CoursesName selectedCourse={selectedCourse} courses={courses} />
          </TabPanel>
          <TabPanel>
            <Quizz selectedCourse={selectedCourse} courses={courses} />
          </TabPanel>
          <TabPanel>
            <RoadMap selectedCourse={selectedCourse} courses={courses} />
          </TabPanel>
          <TabPanel>
            <RoadMap selectedCourse={selectedCourse} courses={courses} />
          </TabPanel>
        </TabPanels>
      </Tabs> :
        <div className="w-full">
          <div className="w-full flex items-start justify-center gap-4">
            <div className="flex flex-col mb-6 w-[60%] relative">
              <label htmlFor="learning" className="text-sm font-semibold mb-2">What You Want to Learn</label>
              <input
                type="text"
                id="learning"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="E.g., Web Development, Data Science"
                value={learning}
                onChange={(e) => setLearning(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-6 w-[30%]">
              <label htmlFor="duration" className="text-sm font-semibold mb-2">Duration of Course</label>
              <input
                type="text"
                id="duration"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="E.g., 6 months"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <button
              className="px-6 py-2 mt-7 h-10 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {
            <Tabs isFitted variant="enclosed" className="w-full">
              <TabList mb="1em">

                <Tab>RoadMap</Tab>
                <Tab>Surf the web</Tab>
              </TabList>
              <TabPanels className="overflow-auto h-full">
                <TabPanel>
                  <VerticalTimeline>
                    {searchCourse ? (
                      searchCourse.map((milestone, index) => (
                        <VerticalTimelineElement
                          key={index}
                          iconStyle={{ background: milestoneColors[index], color: '#fff' }}
                          icon={<FaPhoenixFramework />}
                          contentStyle={{ background: milestoneColors[index], color: '#fff' }}
                          contentArrowStyle={{ borderRight: `7px solid ${milestoneColors[index]}` }}
                        >
                          <h3 className="vertical-timeline-element-title">{milestone.topic}</h3>
                          <p>{milestone.description}</p>
                          <p>Time: {milestone.time}</p>
                        </VerticalTimelineElement>
                      ))
                    ) : (
                      <p>No roadmap available for the selected course</p>
                    )}
                    <VerticalTimelineElement
                      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                      icon={<StarIcon />}
                    />
                  </VerticalTimeline>
                </TabPanel>
                <TabPanel>
                  <div className="w-full grid grid-cols-3 gap-4">
                    {/* Mapping inline_videos */}
                    {imageResults?.inline_videos && imageResults?.inline_videos?.map((result, index) => (
                      <a key={index} href={result?.link} target="_blank" rel="noopener noreferrer" className="bg-white p-4 shadow-md rounded-md h-48 w-auto cursor-pointer block">
                        <img src={result?.thumbnail} alt={`Image ${index}`} className="w-full h-[80%] rounded-md" />
                        <div className="overflow-hidden truncate hover:underline">{result?.title}</div>
                      </a>
                    ))}

                    {imageResults?.inline_images && imageResults?.inline_images.map((result, index) => (
                      <a key={index} href={result?.link} target="_blank" rel="noopener noreferrer" className="bg-white p-4 shadow-md rounded-md h-48 w-auto cursor-pointer block">
                        <img src={result?.thumbnail} alt={`Image ${index}`} className="w-full h-[80%] rounded-md" />
                        <div>{result?.title}</div>
                      </a>
                    ))}

                    {/* Mapping organic_results */}
                    {imageResults?.organic_results && imageResults?.organic_results.map((result, index) => (
                      <a key={index} href={result?.link} target="_blank" rel="noopener noreferrer" className="bg-white p-4 shadow-md rounded-md h-48 w-auto cursor-pointer block">
                        <div className="flex w-full gap-2 border-b-[1px] py-2 border-gray-400">
                          <img src={result?.favicon} alt={`Favicon ${index}`} className="w-7 h-7 inline-block mr-2" />
                          <div className="w-full text-sm">{result?.title}</div>
                        </div>
                        <p className="hover:underline text-sm">{result?.snippet}</p>
                      </a>
                    ))}
                  </div>

                </TabPanel>
              </TabPanels>
            </Tabs>
          }

        </div>}

      <div className="w-1/3 h-full flex gap-3 flex-col">
        <div className="w-full flex flex-col h-full rounded-xl shadow-xl shadow-gray-300 bg-white p-4">
          <div className="flex h-12 mb-4 items-center">
            <div style={{ fontSize: "1.5rem", fontWeight: "500" }}>Courses For you</div>
          </div>
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="flex flex-col gap-5">
              {courseNames.map((course) => (
                <div style={{ fontWeight: "medium", fontSize: "1.15rem", background: selectedCourse === course ? "#add8e6" : "inherit" }}
                  className={`text-center p-4 cursor-pointer rounded-xl ${selectedCourse === course ? "text-blue-500" : "inherit"
                    }`}
                  key={course}
                  onClick={() => handleCourseClick(course)}
                  onMouseEnter={() => {
                    if (!selectedCourse) {
                      setSelectedCourse(course);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!selectedCourse) {
                      setSelectedCourse(null);
                    }
                  }}
                >
                  {course}
                </div>
              ))}
              <div style={{ fontWeight: "medium", fontSize: "1rem" }}
                className="text-center p-4 cursor-pointer flex justify-center items-center rounded-xl text-white font-bold bg-blue-900" onClick={() => setPersonalized(true)}>

                Personalized Roadmap
                <BsStars className="mr-2" size={39} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
