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

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState("Computer Science");

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
          // Add more questions for Data Structures and Algorithms
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

  return (
    <div className="flex h-full w-full p-10 gap-5">
      <Tabs isFitted variant="enclosed" className="w-full">
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
           <Quizz selectedCourse={selectedCourse} courses={courses}/>
          </TabPanel>
          <TabPanel>
           <RoadMap selectedCourse={selectedCourse} courses={courses}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
      
      <div className="w-1/3 h-full flex gap-3 flex-col">
        <div className="w-full flex flex-col h-full rounded-xl shadow-xl shadow-gray-300 bg-white p-4">
          <div className="flex h-12 mb-4 items-center">
            <div style={{fontSize:"1.5rem",fontWeight:"500"}}>Courses For you</div>
          </div>
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="flex flex-col gap-5">
              {courseNames.map((course) => (
                <div style={{fontWeight:"medium",fontSize:"1.15rem",background: selectedCourse === course ? "#add8e6" : "inherit",}}
                  className={`text-center p-4 cursor-pointer rounded-xl ${
                    selectedCourse === course ? "text-blue-500" : "inherit"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
