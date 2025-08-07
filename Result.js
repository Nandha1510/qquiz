import React from "react";
import "../App.css";

const Result = ({ score, setStep }) => {
  const { correct, total, answerList } = score;

  const handleRestart = () => {
    setStep("home");
  };

  return (
    <div className="card" style={{ maxHeight: "90vh", overflowY: "auto" }}>
      <h1>🎉 Quiz Completed!</h1>
      <p className="result">Score: {correct} / {total}</p>

      <div style={{ textAlign: "left", marginTop: "30px" }}>
        {answerList.map((item, index) => (
          <div key={index} style={{ marginBottom: "20px", padding: "15px", backgroundColor: "#353752", borderRadius: "10px" }}>
            <p><strong>Q{index + 1}:</strong> {item.question}</p>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {item.options.map((opt, i) => {
                const isCorrect = opt === item.correctAnswer;
                const isSelected = opt === item.selected;

                let bgColor = "#3b3d58";
                if (isCorrect) bgColor = "#38b2ac"; // green
                if (isSelected && !isCorrect) bgColor = "#e53e3e"; // red

                return (
                  <li key={i} style={{
                    padding: "8px 12px",
                    margin: "5px 0",
                    borderRadius: "8px",
                    backgroundColor: bgColor,
                    color: "white"
                  }}>
                    {opt}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <button onClick={handleRestart} style={{ marginTop: "20px" }}>
        Try Again
      </button>
    </div>
  );
};

export default Result;
