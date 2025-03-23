// components/ExperienceTimeline.js
import React from 'react';
import '../css/Timeline.css';

const experienceData = [
  {
    year: '2022 - 2024',
    title: 'M.S. in Computer Software Engineering - Information Systems',
    company: 'Northeastern University',
    details: 'Coursework : Lorem Ispum Jager Lavel iphor gbler',
  },
  {
    year: '2017 - 2021',
    title: 'B.Tech in Computer Science',
    company: 'GITAM University',
    details: 'Coursework : Lorem Ispum Jager Lavel iphor gbler',
  },
];

const EducationTimeline = () => {
  return (
    <div className="timeline-scroll-wrapper">
      <div className="timeline-container">
        {experienceData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <div className="timeline-box">
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <p>{item.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
