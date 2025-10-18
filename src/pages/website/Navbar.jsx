import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">ACADEMIX</div>

      <ul className="menu">
        <li className="menu-item dropdown">
          <span><i class="fas fa-info-circle"></i>About Us</span>
          <div className="dropdown-menu">
            <div className="dropdown-column">
              <a href="#">Mission & Vision</a>
              <a href="#">Our Story</a>
              <a href="#">Accreditation</a>
            </div>
            <div className="dropdown-column">
              <a href="#">School Board</a>
              <a href="#">School Calendar</a>
              <a href="#">Global Citizenship / Service-Learning</a>
            </div>
          </div>
        </li>
        <li className="menu-item dropdown">
          <span><i class="fas fa-info-circle"></i>Admissions</span>
          <div className="dropdown-menu">
            <div className="dropdown-column">
              <a href="#">Apply Now</a>
              <a href="#">Tuition & Fees</a>
              <a href="#">Visit Us</a>
            </div>
            <div className="dropdown-column">
              <a href="#">Scholarships</a>
              <a href="#">FAQs</a>
              <a href="#">Contact Admissions</a>
            </div>
          </div>
        </li>
         <li className="menu-item dropdown">
          <span><i class="fas fa-info-circle"></i>Academics</span>
          <div className="dropdown-menu">
            <div className="dropdown-column">
              <a href="#">Middle School</a>
              <a href="#">Primary School</a>
              <a href="#">High School</a>
            </div>
            <div className="dropdown-column">
              <a href="#">Carriculum</a>
              <a href="#">Academic Calendar</a>
              <a href="#">Examinations</a>
            </div>
             <div className="dropdown-column">
              <a href="#">Internships</a>
              <a href="#">Debate Club</a>
              <a href="#">Others</a>
            </div>
          </div>
        </li>
         <li className="menu-item dropdown">
          <span><i class="fas fa-info-circle"></i>Student Support Services</span>
          <div className="dropdown-menu">
            <div className="dropdown-column">
              <a href="#">Learning Support</a>
              <a href="#">Counceling</a>
            </div>
            <div className="dropdown-column">
              <a href="#">Advisory Programs</a>
              <a href="#">Rest Rooms</a>
            </div>
          </div>
        </li>
        <li className="menu-item dropdown">
          <span><i class="fas fa-info-circle"></i>Student Life</span>
          <div className="dropdown-menu">
            <div className="dropdown-column">
              <a href="#">Activities & Athletics</a>
              <a href="#">Health Services</a>
            </div>
            <div className="dropdown-column">
              <a href="#">Student Council</a>
              <a href="#">Service Learning</a>
            </div>
          </div>
        </li>
         <li className="menu-item dropdown">
          <span><i class="fas fa-info-circle"></i>Community</span>
          <div className="dropdown-menu">
            <div className="dropdown-column">
              <a href="#">Contact Us</a>
              <a href="#">Visitors</a>
            </div>
            <div className="dropdown-column">
              <a href="#">Outreaches</a>
              <a href="#">Trips</a>
            </div>
          </div>
        </li>
        <li className="menu-item dropdown">
          <span><i class="fas fa-info-circle"></i>Jobs</span>
          <div className="dropdown-menu">
            <div className="dropdown-column">
              <a href="#">Employment</a>
              <a href="#">Tenders</a>
            </div>
            <div className="dropdown-column">
              <a href="#">Others</a>
              <a href="#">Support Team</a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
