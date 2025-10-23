// src/components/PricingSection.jsx
import React from 'react';
import './PricingSection.css';

const plans = [
  {
    name: 'Essential',
    price: '$2.0/Semester',
    originalPrice: '$20.0',
    features: [
      'Enabled E-payment of schools fees.',
      'Fees management system.',
      'Fees collection reporting.',
      'Automated fees reminder and communication.',
      'Multi-school support.',
      'Student information Management with detailed profiles..',
      'Staff information Management with detailed profiles..',
      'Parent Mobile portal',
      'Payment BI reports.',
    ],
    trial: 'Try 30 days free',
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '$5.00/yr',
    originalPrice: '$40.00',
    features: [
      'School Activities and Events.',
      'Timetable management system.',
      'Grading and Transcript management.',
      'Standard Messaging and Communication.',
      'Student behavior management.',
      'Student attendance management.',
      'Staff attendance management.',
      'Upload course material.',
      'Teacher management and authority matrix.',
      'Academics BI reports.',
    ],
    trial: 'Try 30 days free',
    isPopular: true,
  },
  {
    name: 'Supreme',
    price: '$7.00/yr',
    originalPrice: '$60.00',
    features: [
      'Student Admission and registration management.',
      'Virtual classroom.',
      'Students health management.',
      'Full Messaging and Communication.',
      'HR and payroll management.',
      'Student pocket money management.',
      'Finance and Accounting management.',
      'Seating arrangement management.',
      'Dormitory management.',
      'Student extra-curricular activities management.',
      'Dining hall management.',
      'Library management.',
      'Digital archives.',
      'Transport management.',
    ],
    trial: 'Try 30 days free',
    isPopular: false,
  },
];

export default function PricingSection() {
  return (
    <div className="pricing-wrapper">
      <div className="pricing-header">
        <h2 className="pricing-title">Student Plan for Digital Learning Journey</h2>
        <p className="pricing-subtitle">Explore our student pricing plans designed to enhance your digital education experience.</p>

        <div className="pricing-toggle">
          <button className="pricing-toggle-btn active">Yearly</button>
          <button className="pricing-toggle-btn">Semester</button>

          <div className="pricing-select-group">
            <label className="pricing-select-label">EAcademic Institutions</label>
            <select className="pricing-select">
              <option>🇬🇧 FR</option>
              <option>🇺🇸 USD</option>
            </select>
          </div>
        </div>
      </div>

      <div className="pricing-cards">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`pricing-card ${plan.isPopular ? 'pricing-card-popular' : ''}`}
          >
            {plan.isPopular && <div className="pricing-badge">MOST POPULAR</div>}

            <h3 className="pricing-plan-name">{plan.name}</h3>

            <div className="pricing-price">
              <span className="pricing-original">{plan.originalPrice}</span>
              <span className="pricing-current">{plan.price}</span>
            </div>

            <ul className="pricing-features">
              {plan.features.map((feat, i) => (
                <li key={i} className="pricing-feature-item">✔ {feat}</li>
              ))}
            </ul>

            <button className="pricing-trial-btn">{plan.trial}</button>
            <button className="pricing-add-btn">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
