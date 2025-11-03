import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Careers from "./pages/Careers.jsx";
import Counseling from "./pages/Counseling.jsx";
import Quiz from "./pages/Quiz.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/counseling" element={<Counseling />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;