import React, { useState, useEffect } from 'react';

const Quizz = ({ selectedCourse, courses }) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // Timer in seconds
  const [showResults, setShowResults] = useState(false);

  // Start the quiz
  const handleStartQuiz = () => {
    setQuizStarted(true);
    setScore(0);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setTimeLeft(10); // Reset timer
    setShowResults(false);
    // Get questions for the selected course
    const course = courses[selectedCourse];
    if (course) {
      const combinedQuestions = course.reduce((acc, curr) => {
        return [...acc, ...curr.questions];
      }, []);
      setQuestions(combinedQuestions);
    } else {
      console.error('Course not found!');
    }
  };

  // Function to handle user's answer
  const handleAnswerSelected = (selectedOption) => {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const isCorrect = selectedOption === correctAnswer;

    setUserAnswers([...userAnswers, { question: questions[currentQuestionIndex].question, selectedOption, isCorrect }]);
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(10); // Reset timer for the next question
    } else {
      // End of quiz
      setQuizStarted(false);
      setShowResults(true);
    }
  };

  // Timer effect
  useEffect(() => {
    let timer;
    if (quizStarted && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (quizStarted && timeLeft === 0) {
      // Time's up, move to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(10); // Reset timer for the next question
    }
    return () => clearTimeout(timer);
  }, [quizStarted, timeLeft, currentQuestionIndex]);

  // Reset quiz
  const resetQuiz = () => {
    setQuizStarted(false);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setTimeLeft(10);
    setShowResults(false);
  };

  // Render quiz results
  const renderResults = () => {
    return (
      <div>
        <h2 style={{fontSize:"1.5rem",fontWeight:"500"}}>Quiz Results</h2>
        <p>Score: {score}/{questions.length}</p>
        <p>Celebration message or other result feedback goes here!</p>
        <button onClick={resetQuiz} style={{width:"50%",padding:"1rem 1rem 1rem 1rem",marginTop:"2rem",fontWeight:"500",fontSize:"1.2rem"}} className="bg-blue-400 hover:bg-blue-600 text-white rounded-xl">
          Take Quiz Again
        </button>
      </div>
    );
  };

  return (
    <div className="w-full h-80 flex justify-center items-center " style={{paddingTop:"10rem"}}>
      {quizStarted && questions.length > 0 && !showResults ? (
        <div>
          <h2 style={{fontSize:"1.3rem",fontWeight:"500",marginLeft:"1.5rem"}}>{questions[currentQuestionIndex].question}</h2>
          <p style={{fontSize:"1.1rem",fontWeight:"500",marginBottom:"2rem",marginLeft:"1.5rem"}}>Time left: {timeLeft} seconds</p>
          <div>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerSelected(option)} style={{width:"60%",padding:"1rem 1rem 1rem 1rem",gap:"3rem",margin:"1rem",fontWeight:"500",fontSize:"1.2rem"}} className="bg-blue-400 hover:bg-blue-600 text-white rounded-xl">
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : showResults ? (
        renderResults()
      ) : (
        <>
        <div className='flex' style={{flexDirection:"column",lineHeight:"2rem"}}>
          <div >
            <div style={{fontSize:"2rem",fontWeight:"600",marginTop:"10%",lineHeight:"3rem"}}>Rules</div>
            <br></br>
            <div style={{fontWeight:"500"}}>
            1. Duration: Each question will have a time limit of 10 seconds. The entire quiz will consist of 4 questions.
            <br></br>
            2. Number of Questions: There are 4 questions in this quiz.
            <br></br>
            3. Question Types: All questions will be multiple-choice.
            <br></br>
            4. Scoring System: The scoring system will be uniform, where each correct answer earns a fixed number of points.
            <br></br>
            5. Passing Grade: The passing grade for the quiz will be 50%. Participants must score at least 50% to pass the quiz.
            <br></br>
            6. Attempts: Participants will be allowed only 1 attempt to complete the quiz.
            <br></br>
            7. Cheating Policy: Any form of cheating, including using external resources or discussing answers with others, is strictly prohibited. Participants found cheating will be disqualified from the quiz.
            </div>
            <br></br>
            <br></br>
          </div>
          <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
          <button onClick={handleStartQuiz} style={{width:"20%",padding:"1rem 1rem 1rem 1rem",fontWeight:"500",fontSize:"1.2rem"}} className="bg-blue-400 hover:bg-blue-600 text-white rounded-xl">
            Start Quiz
          </button>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default Quizz;
