// components/ExperienceTimeline.js
import React from 'react';
import '../css/Timeline.css';

const experienceData = [
  {
    year: 'AWS',
    title: 'Solutions Architect Associate(SAA-003)',
    company: 'Validation Number : 66HREWSK82B4QZKZ',
    details: 'Validate At : https://aws.amazon.com/verification',
  },
  {
    year: '',
    title: 'Certified Cloud Practitioner',
    company: 'Validation Number : MCDQM91LJ1BQ1Z9N',
    details: 'Validate At : https://aws.amazon.com/verification',
  },
  {
    year: 'HashiCorp Cloud Certifications',
    title: 'Terraform Associate (HCTAO-003)',
    company: 'Certificate Number : 2e7797ba-b78b-4695-9260-e389b5ca7328',
    details: 'Validate At : https://www.credly.com/badges/2e7797ba-b78b-4695-9260-e389b5ca7328/public_url',
  },
  {
    year: 'Microsoft',
    title: 'Azure Fundamentals',
    company: 'Certification Number : I791-6335',
    details: 'Validate At : https://www.credly.com/badges/115ab97f-a350-481f-a808-b6fa33ed0288/public_url',
  },
];

const CertificationTimeline = () => {
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

export default CertificationTimeline;
