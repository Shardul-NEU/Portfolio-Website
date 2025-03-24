// components/ExperienceTimeline.js
import React from 'react';
import '../css/Timeline.css';

const experienceData = [
  {
    year: 'AWS',
    title: 'Solutions Architect Associate(SAA-003)',
    company: 'Validation Number : 66HREWSK82B4QZKZ',
    badgeId: '9b720383-1c99-486d-b87c-0d6c94861c27',
    badgeImage: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
  },
  {
    year: '',
    title: 'Certified Cloud Practitioner',
    company: 'Validation Number : MCDQM91LJ1BQ1Z9N',
    badgeId: 'beebce4b-e820-4a3f-b95d-8c9cc886acb8',
    badgeImage: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png'
  },
  {
    year: 'HashiCorp Cloud Certifications',
    title: 'Terraform Associate (HCTAO-003)',
    company: 'Certificate Number : 2e7797ba-b78b-4695-9260-e389b5ca7328',
    badgeId: '2e7797ba-b78b-4695-9260-e389b5ca7328',
    badgeImage: 'https://images.credly.com/size/340x340/images/99289602-861e-4929-8277-773e63a2fa6f/image.png',
  },
  {
    year: 'Microsoft',
    title: 'Azure Fundamentals',
    company: 'Certification Number : I791-6335',
    badgeId: '115ab97f-a350-481f-a808-b6fa33ed0288',
    badgeImage: 'https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png',
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
              <div className="timeline-box timeline-flex">
                {item.badgeId && item.badgeImage && (
                  <div className="credly-badge">
                    <a
                      href={`https://www.credly.com/badges/${item.badgeId}/public_url`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="badge-img" 
                        src={item.badgeImage}
                        alt={item.title}
                      />
                    </a>
                  </div>
                )}
                <div className="badge-text">
                  <h3>{item.title}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.details}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationTimeline;
