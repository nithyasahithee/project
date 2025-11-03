import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Career Guidance</h1>
      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/counseling">Counseling</Link>
        <Link to="/quiz">Quiz</Link>
      </div>
    </nav>
  );
}

export default Navbar;