import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="brand">ACADEMIX</div>

      {/* Hamburger button for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li className="menu-item">Home</li>
        <li className="menu-item dropdown">
          <span><i className="fas fa-info-circle top-icon"></i> About academix</span>
          <div className="dropdown-menu">
            <div className="dropdown-column">
              <a href="#"><i className="fas fa-bullseye"></i> Mission & Vision</a>
              <a href="#"><i className="fas fa-book-open"></i> Our Story</a>
              <a href="#"><i className="fas fa-certificate"></i> Accreditation</a>
            </div>
            <div className="dropdown-column">
              <a href="#"><i className="fas fa-users"></i> School Board</a>
              <a href="#"><i className="fas fa-calendar-alt"></i> School Calendar</a>
              <a href="#"><i className="fas fa-globe"></i> Global Citizenship / Service-Learning</a>
            </div>
          </div>
        </li>

        <li className="menu-item dropdown">
          <span><i className="fas fa-user-graduate top-icon"></i>Packages</span>
          <div className="dropdown-menu">
            <div className="dropdown-column">
              <a href="#"><i className="fas fa-file-alt"></i> Apply Now</a>
              <a href="#"><i className="fas fa-dollar-sign"></i> Tuition & Fees</a>
              <a href="#"><i className="fas fa-map-marker-alt"></i> Visit Us</a>
            </div>
            <div className="dropdown-column">
              <a href="#"><i className="fas fa-graduation-cap"></i> Scholarships</a>
              <a href="#"><i className="fas fa-question-circle"></i> FAQs</a>
              <a href="#"><i className="fas fa-envelope"></i> Contact Admissions</a>
            </div>
          </div>
        </li>

        <li className="menu-item dropdown">
          <span><i className="fas fa-book top-icon"></i> Contact Us</span>
          <div className="dropdown-menu">
            <div className="dropdown-column">
              <a href="#"><i className="fas fa-school"></i> Middle School</a>
              <a href="#"><i className="fas fa-school"></i> Primary School</a>
              <a href="#"><i className="fas fa-school"></i> High School</a>
            </div>
            <div className="dropdown-column">
              <a href="#"><i className="fas fa-book-reader"></i> Curriculum</a>
              <a href="#"><i className="fas fa-calendar-alt"></i> Academic Calendar</a>
              <a href="#"><i className="fas fa-file-alt"></i> Examinations</a>
            </div>
            <div className="dropdown-column">
              <a href="#"><i className="fas fa-briefcase"></i> Internships</a>
              <a href="#"><i className="fas fa-comments"></i> Debate Club</a>
              <a href="#"><i className="fas fa-ellipsis-h"></i> Others</a>
            </div>
          </div>
        </li>

        <li className="menu-item-login dropdown">
          <span><i className="fas fa-hands-helping top-icon"></i><a href="/register"><i className="fas fa-hands"></i> Login</a></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
