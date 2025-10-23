import React from "react";
import "./CardsSection.css";

import img1 from "../../assets/images/study.png";
import img2 from "../../assets/images/library.png";
import img3 from "../../assets/images/behaviour.png";
import img4 from "../../assets/images/reports.png";
import img5 from "../../assets/images/progress.png";
import img6 from "../../assets/images/communication.png";

const cards = [
  { id: 1, title: "Online Learning", text: "Interactive digital education platform online", image: img1 },
  { id: 2, title: "Library", text: "Digital hub for books and resources.", image: img2 },
  { id: 3, title: "Storage", text: "Secure system for academic records storage.", image: img3 },
  { id: 4, title: "Reports", text: "Comprehensive tracking of student academic performance.", image: img4 },
  { id: 5, title: "Art Exhibition", text: "Students showcase their creativity and talent.", image: img5 },
  { id: 6, title: "Communication", text: "Effective communication between school and parents.", image: img6 },
];

export default function CardsSection() {
  return (
    <section className="cards-section">
      <h2 className="cards-title">Explore our awesome Services</h2>
      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} className="card-img" />
            <h3 className="card-title">{card.title}</h3>
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
