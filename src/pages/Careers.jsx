import React from "react";
import Card from "../components/Card.jsx";

function Careers() {
  const careersList = [
    { title: "Software Engineer", description: "Build software and applications." },
    { title: "Data Scientist", description: "Analyze data for insights." },
    { title: "Cybersecurity Analyst", description: "Protect digital assets." },
    { title: "UI/UX Designer", description: "Design user-friendly interfaces." }
  ];

  return (
    <div className="page careers">
      <h2>Careers</h2>
      <div className="cards-container">
        {careersList.map((career, idx) => (
          <Card key={idx} title={career.title} description={career.description} />
        ))}
      </div>
    </div>
  );
}

export default Careers;