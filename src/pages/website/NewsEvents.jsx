import React, { useState, useEffect } from "react";
import "./NewsEvents.css";

// ✅ Importing all 4 images
import caursel1 from "../../assets/images/caursel1.png";
import caursel2 from "../../assets/images/caursel2.png";
import caursel3 from "../../assets/images/caursel3.png";
import caursel4 from "../../assets/images/caursel4.png";

// ✅ Slide data
const slides = [
  {
    title: "Celebrating Heritage Day",
    text: `Our Heritage Day celebrations were a testament to our inclusive community.
      The Nursery and Primary School Heritage Day was a wonderful celebration of
      our vibrant.`,
    image: caursel1,
  },
  {
    title: "STEM Fair 2025",
    text: `Our young innovators wowed everyone at the STEM Fair with their creative projects.
      The energy was electric as learners presented their ideas in science, robotics, and sustainability.`,
    image: caursel2,
  },
  {
    title: "International Literacy Week",
    text: `Students embraced the joy of reading through storytelling competitions and author visits.
      A great initiative to build a lifelong love for books among young learners.`,
    image: caursel3,
  },
  {
    title: "Annual Sports Day",
    text: `What an amazing display of sportsmanship, team spirit, and endurance!
      Our learners competed in various activities, making it a day full of excitement and fun.`,
    image: caursel4,
  },
];

export default function NewsEvents() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () =>
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));

  // ✅ Auto-slide every 20 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="news-events">
      <h2 className="title">News & Events</h2>

      <div className="slider">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="slide-wrapper">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide-content ${
                index === current ? "active" : ""
              }`}
            >
              <div className="text-section">
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
                <button className="view-btn">
                  View More <span className="arrow-symbol">⇗</span>
                </button>
              </div>
              <div className="image-section">
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
