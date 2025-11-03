import React from "react";
import Card from "../components/Card.jsx";

function Counseling() {
  const counselingList = [
    { title: "Resume Building", description: "Learn how to create a professional resume." },
    { title: "Interview Tips", description: "Prepare for job interviews." },
    { title: "Career Planning", description: "Plan your career growth effectively." }
  ];

  return (
    <div className="page counseling">
      <h2>Counseling</h2>
      <div className="cards-container">
        {counselingList.map((counsel, idx) => (
          <Card key={idx} title={counsel.title} description={counsel.description} />
        ))}
      </div>
    </div>
  );
}

export default Counseling;