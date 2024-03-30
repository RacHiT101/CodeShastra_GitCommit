import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaPhoenixFramework } from "react-icons/fa";
import { StarIcon } from '@chakra-ui/icons';

const RoadMap = ({ selectedCourse, courses }) => {
    const roadmapData = {
        Mathematics: [
          { topic: "Introduction to Algebra", description: "Basic concepts of algebra", time: "2 weeks" },
          { topic: "Linear Equations and Inequalities", description: "Solving linear equations and inequalities", time: "2 weeks" },
          { topic: "Polynomials and Factoring", description: "Understanding polynomials and factoring techniques", time: "2 weeks" },
          { topic: "Introduction to Calculus", description: "Basic concepts of calculus", time: "2 weeks" },
          { topic: "Limits and Continuity", description: "Understanding limits and continuity", time: "2 weeks" },
          { topic: "Derivatives", description: "Calculus derivatives", time: "2 weeks" },
          { topic: "Integration", description: "Integral calculus", time: "2 weeks" },
          { topic: "Applications of Integration", description: "Applications of integral calculus", time: "2 weeks" },
          { topic: "Differential Equations", description: "Solving differential equations", time: "2 weeks" },
        ],
        "Computer Science": [
          { topic: "Introduction to Programming Concepts", description: "Basic programming concepts and terminology", time: "2 weeks" },
          { topic: "Variables and Data Types", description: "Understanding variables and data types in programming", time: "2 weeks" },
          { topic: "Control Structures", description: "Conditional statements and loops", time: "2 weeks" },
          { topic: "Functions and Modules", description: "Defining and using functions, modular programming", time: "2 weeks" },
          { topic: "Data Structures", description: "Introduction to common data structures", time: "2 weeks" },
          { topic: "Algorithms", description: "Basic algorithms and algorithm analysis", time: "2 weeks" },
          { topic: "Object-Oriented Programming", description: "OOP principles and concepts", time: "2 weeks" },
          { topic: "Database Management", description: "Database fundamentals and management systems", time: "2 weeks" },
          { topic: "Web Development Fundamentals", description: "Basic concepts of web development", time: "2 weeks" },
        ],
        Literature: [
          { topic: "Introduction to Literary Analysis", description: "Basic concepts of literary analysis", time: "2 weeks" },
          { topic: "American Literature", description: "Study of American literary works", time: "2 weeks" },
          { topic: "British Literature", description: "Study of British literary works", time: "2 weeks" },
          { topic: "World Literature", description: "Study of literature from around the world", time: "2 weeks" },
          { topic: "Poetry and Poetic Forms", description: "Understanding poetry and poetic forms", time: "2 weeks" },
          { topic: "Drama and Playwriting", description: "Study of drama and playwriting techniques", time: "2 weeks" },
          { topic: "Fiction and Prose", description: "Study of fiction and prose literature", time: "2 weeks" },
          { topic: "Literary Criticism", description: "Critique and analysis of literary works", time: "2 weeks" },
          { topic: "Comparative Literature", description: "Comparison of literary works from different cultures", time: "2 weeks" },
        ],
        "Web Development": [
          { topic: "HTML Fundamentals", description: "Basic HTML structure and tags", time: "2 weeks" },
          { topic: "CSS Styling", description: "Styling web pages using CSS", time: "2 weeks" },
          { topic: "Responsive Design", description: "Designing responsive websites", time: "2 weeks" },
          { topic: "JavaScript Basics", description: "Basic concepts of JavaScript programming language", time: "2 weeks" },
          { topic: "DOM Manipulation", description: "Manipulating HTML document structure using JavaScript", time: "2 weeks" },
          { topic: "AJAX and APIs", description: "Using AJAX for asynchronous data retrieval, interacting with APIs", time: "2 weeks" },
          { topic: "Frontend Frameworks (React, Angular, Vue)", description: "Introduction to popular frontend frameworks", time: "2 weeks" },
          { topic: "Backend Fundamentals (Node.js, Express)", description: "Basic backend development concepts using Node.js and Express", time: "2 weeks" },
          { topic: "Database Integration (MongoDB, MySQL)", description: "Integrating databases with web applications", time: "2 weeks" },
        ],
        "Data Analytics": [
          { topic: "Introduction to Data Science", description: "Basic concepts and principles of data science", time: "2 weeks" },
          { topic: "Data Collection and Cleaning", description: "Collecting and preprocessing data for analysis", time: "2 weeks" },
          { topic: "Data Exploration and Visualization", description: "Exploring and visualizing data using tools like Matplotlib, Seaborn", time: "2 weeks" },
          { topic: "Statistical Analysis", description: "Basic statistical analysis techniques", time: "2 weeks" },
          { topic: "Machine Learning Basics", description: "Introduction to machine learning algorithms and techniques", time: "2 weeks" },
          { topic: "Supervised Learning Algorithms", description: "Supervised learning algorithms such as regression and classification", time: "2 weeks" },
          { topic: "Unsupervised Learning Algorithms", description: "Unsupervised learning algorithms such as clustering and dimensionality reduction", time: "2 weeks" },
          { topic: "Deep Learning", description: "Introduction to deep learning concepts and neural networks", time: "2 weeks" },
          { topic: "Big Data Technologies", description: "Technologies for handling and analyzing big data", time: "2 weeks" },
        ],
      };
    
      
    
      

  // Define different background colors for each milestone
  const milestoneColors = [
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
    <VerticalTimeline>
      {selectedCourse && roadmapData[selectedCourse] ? (
        roadmapData[selectedCourse].map((milestone, index) => (
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
  );
};

export default RoadMap;
