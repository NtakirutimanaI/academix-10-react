import React from 'react';
import './TopBar.css';
import { Link } from "react-router-dom";
import { MdEmail, MdPhone, MdAccessTime } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-left">
        <div className="info-item">
          <MdEmail className="icon" />
          <span>academix@gmail.com</span>
        </div>
        <div className="info-item">
          <MdPhone className="icon" />
          <span>+250787832490</span>
        </div>
        <div className="info-item">
          <MdAccessTime className="icon" />
          <span>Open: 7AM - 5PM</span>
        </div>
      </div>

      <div className="top-right">
        <div className="social-icons">
          <FaFacebookF className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaTwitter className="social-icon" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
