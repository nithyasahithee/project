import React from "react";

function Button({ text, onClick }) {
  return (
    <button className="gradient-btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;