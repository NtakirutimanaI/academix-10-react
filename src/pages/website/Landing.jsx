import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="landing-container">
        <h1>Welcome to Academix-10</h1>
        <p>Your school management system</p>
        <div className="buttons">
          <Link to="/register" className="btn">Register</Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
