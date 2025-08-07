import React from "react";
import "../App.css";

const Home = ({ setStep }) => {
  return (
    <div className="card">
      <h1>🧠 Ultimate Quiz Challenge</h1>
      <h2 style={{ color: "#f6ad55", marginBottom: "30px" }}>
        Test your knowledge and challenge your brain!
      </h2>
      <button onClick={() => setStep("quiz")}>
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
