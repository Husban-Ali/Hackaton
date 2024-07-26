import React from "react";
import img from "../assets/logo.png";
const Homepage = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={img} alt="SMIT Logo" className="logo-image" />
      </div>
      <h2 className="title">Assignment Portal</h2>
      <div className="button-container">
        <button type="submit" className="login-button">
          Continue As Teacher
        </button>

        <button type="submit" className="login-button">
          Continue As Student
        </button>
      </div>
      
    </div>
  );
};

export default Homepage;
