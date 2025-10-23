// src/components/NewsletterSection.jsx

import React from "react";
import "./NewsletterSection.css";

// Import images using relative paths
import rebLogo from "../../assets/images/reb.png";
import wdaLogo from "../../assets/images/wda.png";
import mtnLogo from "../../assets/images/mtn.png";
import airtelLogo from "../../assets/images/airtelmoney.png";

const NewsletterSection = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2 className="newsletter-title">Join Our Newsletter</h2>
        <p className="newsletter-subtitle">
          SIGN UP TO OUR NEWSLETTER and be first to know about new features:
          <br />
          Enter your email - Subscribe
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Email here"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-btn">
            Subscribe
          </button>
        </form>
      </div>

      <div className="partner-logos">
        <img src={rebLogo} alt="REB" />
        <img src={wdaLogo} alt="WDA" />
        <img src={mtnLogo} alt="MTN" />
        <img src={airtelLogo} alt="Airtel Money" />
      </div>
    </section>
  );
};

export default NewsletterSection;
