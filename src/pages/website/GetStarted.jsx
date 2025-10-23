import React from "react";
import "./GetStarted.css";
import startImg from "../../assets/images/getstarted.png"; // ✅ replace with your actual image path

export default function GetStarted() {
  return (
    <section className="get-started-section">
      <div className="get-started-container">
        {/* Left side - text */}
        <div className="get-started-content">
          <h2 className="get-started-title">Enjoy Education</h2>
          <p className="get-started-text">
            Welcome to our platform! Get started quickly and explore all the features
            designed to make your experience seamless and productive.
          </p>
          <button className="get-started-btn">Get Started ⇗</button>
          <button className="get-started-btn2">Book Demo ⇗</button>
        </div>

       
      </div>
       {/* Right side - image */}
        <div className="get-started-image">
          <img src={startImg} alt="Get Started" />
        </div>
    </section>
  );
}
