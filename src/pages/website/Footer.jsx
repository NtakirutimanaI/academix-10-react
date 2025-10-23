import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

import logo from "../../assets/images/logo.png"; // replace with your logo
import windowsBadge from "../../assets/images/windows-download.png"; // replace with your download badge

const Footer = () => {
  return (
    <footer className="footer">
      {/* ===== Top Section (4 Columns) ===== */}
      <div className="footer-top">
        {/* Column 1: Logo + Text + Download */}
        <div className="footer-col footer-about">
          <img src={logo} alt="Prokip" className="footer-logo" />
          <p className="footer-description">
           Academix is a modern platform providing digital tools to empower students, teachers,
            and institutions in achieving educational excellence.
          </p>
          <img src={windowsBadge} alt="Download for Windows" className="footer-download" />
        </div>

        {/* Column 2: Products */}
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li>Online Courses</li>
            <li>Library</li>
            <li>Academic Reports</li>
            <li>Storage</li>
            <li>Exhbitions</li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Download Desktop App</li>
            <li>
              Careers <span className="hiring-badge">We're hiring</span>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Help Centre</li>
            <li>Privacy Policy</li>
            <li>Data Protection</li>
            <li>Terms and Privacy</li>
            <li>Release Notes</li>
          </ul>
        </div>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="footer-bottom">
        <p>© Copyright 2025 Prokip. All rights reserved.</p>

        <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>

        <div className="footer-global">
          <FaGlobe />
          <span>Global</span>
        </div>

        <button
          className="footer-scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <IoIosArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
