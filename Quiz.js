import React, { useState } from "react";
import questions from "../data/questions";
import "../App.css";

const Quiz = ({ setStep, setScore }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [answers, setAnswers] = useState([]);

  const question = questions[currentQ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    const isCorrect = selectedOption === question.answer;
    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    }

    setAnswers([
      ...answers,
      {
        question: question.question,
        options: question.options,
        correctAnswer: question.answer,
        selected: selectedOption
      }
    ]);

    setSelectedOption(null);

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setScore({
        total: questions.length,
        correct: isCorrect ? correctCount + 1 : correctCount,
        answerList: [...answers, {
          question: question.question,
          options: question.options,
          correctAnswer: question.answer,
          selected: selectedOption
        }]
      });
      setStep("result");
    }
  };

  return (
    <div className="card">
      <h2>Question {currentQ + 1} of {questions.length}</h2>
      <p style={{ fontSize: "20px", marginBottom: "30px" }}>{question.question}</p>

      {question.options.map((option, idx) => (
        <div
          key={idx}
          className="option"
          style={{
            backgroundColor:
              selectedOption === option ? "#805ad5" : "#3b3d58",
            color: selectedOption === option ? "white" : "#fff"
          }}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </div>
      ))}

      <button
        onClick={handleNext}
        disabled={!selectedOption}
        style={{ marginTop: "30px" }}
      >
        {currentQ + 1 < questions.length ? "Next" : "Finish"}
      </button>
    </div>
  );
};

export default Quiz;
