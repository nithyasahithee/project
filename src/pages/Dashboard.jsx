import React from "react";
import Card from "../components/Card.jsx";

function Dashboard() {
  return (
    <div className="page dashboard">
      <h2>Welcome to Career Guidance</h2>
      <div className="cards-container">
        <Card title="Careers" description="Explore career paths and opportunities." />
        <Card title="Counseling" description="Get professional career advice." />
        <Card title="Quiz" description="Test your skills and knowledge." />
      </div>
    </div>
  );
}

export default Dashboard;