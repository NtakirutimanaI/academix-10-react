import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
     <>
    <div className="landing-container">
      <h1>Welcome to Academix-10</h1>
      <p>Your school management system</p>
      <div className="buttons">
        <Link to="/register" className="btn">Register</Link>
        <Link to="/login" className="btn">Login</Link>
      </div>
    </div>
     </>
  );
};

export default Landing;
