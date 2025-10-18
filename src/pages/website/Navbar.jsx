import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li className="menu-item dropdown">
          <span>About Us</span>
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
        <li className="menu-item">Admissions</li>
        <li className="menu-item">Academics</li>
        <li className="menu-item">Student Support Services</li>
        <li className="menu-item">Student Life</li>
        <li className="menu-item">Community</li>
        <li className="menu-item">Jobs</li>
      </ul>
    </nav>
  );
};

export default Navbar;
