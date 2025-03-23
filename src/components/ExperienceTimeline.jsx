// components/ExperienceTimeline.js
import React from 'react';
import '../css/Timeline.css';

const experienceData = [
  {
    year: '2024',
    title: 'Cloud Software Engineer',
    company: 'Humanitarians AI Inc',
    details: 'Improved provisioning with Terraform, reduced S3 storage costs by 40%.',
  },
  {
    year: '2024',
    title: 'Cloud Developer',
    company: 'Alnylam Pharmaceuticals',
    details: 'Migrated to AWS microservices; built CI/CD pipelines using Docker & Jenkins.',
  },
  {
    year: '2023',
    title: 'Full Stack Engineer',
    company: 'Northeastern ITS',
    details: 'Built student course dashboard, automated AWS resource tagging.',
  },
  {
    year: '2021',
    title: 'Associate Software Engineer',
    company: 'Hexaware Technologies',
    details: 'Maintained e-commerce service, improved latency with ElasticSearch.',
  },
  {
    year: '2019',
    title: 'Software Developer Intern',
    company: 'SignalX',
    details: 'Developed Spark ML models, set up real-time alerts using SNS.',
  },
];

const ExperienceTimeline = () => {
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

export default ExperienceTimeline;
