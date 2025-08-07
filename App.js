import React, { useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [step, setStep] = useState("home");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      {step === "home" && <Home setStep={setStep} />}
      {step === "quiz" && <Quiz setStep={setStep} setScore={setScore} />}
      {step === "result" && <Result score={score} setStep={setStep} />}
    </div>
  );
}

export default App;


