import React, { useState } from "react";
import Button from "../components/Button.jsx";

function Quiz() {
  const questions = [
    { question: "Which field interests you the most?", options: ["Technology", "Design", "Business", "Science"] },
    { question: "Do you prefer working alone or in teams?", options: ["Alone", "Teams", "Depends", "Flexible"] }
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  return (
    <div className="page quiz">
      <h2>Quiz</h2>
      <div className="quiz-question">
        <p>{questions[current].question}</p>
        <div className="quiz-options">
          {questions[current].options.map((opt, idx) => (
            <Button key={idx} text={opt} onClick={() => {}} />
          ))}
        </div>
        {current < questions.length - 1 && <Button text="Next" onClick={handleNext} />}
      </div>
    </div>
  );
}

export default Quiz;