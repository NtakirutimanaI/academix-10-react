import React, { useState, useEffect } from 'react';
import './TopImg.css';

// Import images
import img1 from '../../assets/images/caursel1.png';
import img2 from '../../assets/images/caursel2.png';
import img3 from '../../assets/images/caursel3.png';
import img4 from '../../assets/images/caursel4.png';

const TopImg = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="top-img-container">
      {images.map((src, index) => (
        <div
          className={`top-img-wrapper ${index === currentIndex ? 'active' : ''}`}
          key={index}
        >
          <img src={src} alt={`Top ${index + 1}`} className="top-img" />
        </div>
      ))}
    </div>
  );
};

export default TopImg;
