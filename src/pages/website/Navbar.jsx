import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul>
          <li className="dropdown">
            <a href="#"><i className="fas fa-info-circle"></i> About Us</a>
            <div className="dropdown-content">
              <div>
                <a href="#">Mission & Vision</a>
                <a href="#">Our Story</a>
                <a href="#">Accreditation</a>
              </div>
              <div>
                <a href="#">School Board</a>
                <a href="#">School Calendar</a>
                <a href="#">Global Citizenship / Service-Learning</a>
              </div>
            </div>
          </li>

          <li className="dropdown">
            <a href="#"><i className="fas fa-user-graduate"></i> Admissions</a>
            <div className="dropdown-content">
              <div>
                <a href="#">Apply Now</a>
                <a href="#">Tuition & Fees</a>
                <a href="#">Visit Us</a>
              </div>
              <div>
                <a href="#">Scholarships</a>
                <a href="#">FAQs</a>
                <a href="#">Contact Admissions</a>
              </div>
            </div>
          </li>

          <li className="dropdown">
            <a href="#"><i className="fas fa-book"></i> Academics</a>
            <div className="dropdown-content">
              <div>
                <a href="#">Primary School</a>
                <a href="#">Middle School</a>
                <a href="#">High School</a>
              </div>
              <div>
                <a href="#">Curriculum</a>
                <a href="#">Academic Calendar</a>
                <a href="#">Examinations</a>
              </div>
              <div>
                <a href="#">Internships</a>
                <a href="#">Debate Club</a>
              </div>
            </div>
          </li>

          <li className="dropdown">
            <a href="#"><i className="fas fa-hands-helping"></i> Student Support Services</a>
            <div className="dropdown-content">
              <div>
                <a href="#">Learning Support</a>
                <a href="#">Counceling</a>
              </div>
              <div>
                <a href="#">Advisory Program</a>
                <a href="#">Rest Rooms</a>
              </div>
            </div>
          </li>

          <li className="dropdown">
            <a href="#"><i className="fas fa-users"></i> Student Life</a>
            <div className="dropdown-content">
              <div>
                <a href="#">Activities & Athletics</a>
                <a href="#">Health Services</a>
              </div>
              <div>
                <a href="#">Student Council</a>
                <a href="#">Service Learning</a>
              </div>
            </div>
          </li>

          <li className="dropdown">
            <a href="#"><i className="fas fa-handshake"></i> Community</a>
            <div className="dropdown-content">
              <div>
                <a href="#">Contact Us</a>
                <a href="#">Visitors</a>
              </div>
              <div>
                <a href="#">Outreaches</a>
                <a href="#">Trips</a>
              </div>
            </div>
          </li>

          <li className="dropdown jobs-dropdown">
            <a href="#"><i className="fas fa-briefcase"></i> Jobs</a>
            <div className="dropdown-content">
              <div>
                <a href="#">Employment</a>
                <a href="#">Tenders</a>
              </div>
              <div>
                <a href="#">Others</a>
                <a href="#">Support Team</a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
