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
        <li className="menu-item dropdown">
          <span><i className="fas fa-info-circle top-icon"></i> About Us</span>
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
          <span><i className="fas fa-user-graduate top-icon"></i> Admissions</span>
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
          <span><i className="fas fa-book top-icon"></i> Academics</span>
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

        <li className="menu-item dropdown">
          <span><i className="fas fa-hands-helping top-icon"></i> Student Support Services</span>
          <div className="dropdown-menu">
            <div className="dropdown-column">
              <a href="#"><i className="fas fa-user-check"></i> Learning Support</a>
              <a href="#"><i className="fas fa-hands"></i> Counseling</a>
            </div>
            <div className="dropdown-column">
              <a href="#"><i className="fas fa-chalkboard-teacher"></i> Advisory Programs</a>
              <a href="#"><i className="fas fa-restroom"></i> Rest Rooms</a>
            </div>
          </div>
        </li>

        <li className="menu-item dropdown">
          <span><i className="fas fa-grin-stars top-icon"></i> Student Life</span>
          <div className="dropdown-menu">
            <div className="dropdown-column">
              <a href="#"><i className="fas fa-futbol"></i> Activities & Athletics</a>
              <a href="#"><i className="fas fa-notes-medical"></i> Health Services</a>
            </div>
            <div className="dropdown-column">
              <a href="#"><i className="fas fa-users-cog"></i> Student Council</a>
              <a href="#"><i className="fas fa-hands-helping"></i> Service Learning</a>
            </div>
          </div>
        </li>

        <li className="menu-item dropdown">
          <span><i className="fas fa-people-carry top-icon"></i> Community</span>
          <div className="dropdown-menu">
            <div className="dropdown-column">
              <a href="#"><i className="fas fa-phone"></i> Contact Us</a>
              <a href="#"><i className="fas fa-user-friends"></i> Visitors</a>
            </div>
            <div className="dropdown-column">
              <a href="#"><i className="fas fa-hand-holding-heart"></i> Outreaches</a>
              <a href="#"><i className="fas fa-plane"></i> Trips</a>
            </div>
          </div>
        </li>

        <li className="menu-item dropdown">
          <span><i className="fas fa-briefcase top-icon"></i> Jobs</span>
          <div className="dropdown-menu">
            <div className="dropdown-column">
              <a href="#"><i className="fas fa-user-tie"></i> Employment</a>
              <a href="#"><i className="fas fa-file-contract"></i> Tenders</a>
            </div>
            <div className="dropdown-column">
              <a href="#"><i className="fas fa-ellipsis-h"></i> Others</a>
              <a href="#"><i className="fas fa-users-cog"></i> Support Team</a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
