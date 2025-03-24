// components/ExperienceTimeline.js
import React from 'react';
import '../css/Timeline.css';
import humanitarians from '../assets/humanitarians_ai_logo.png';
import hexaware from '../assets/hexaware-logo.png';
import signalx from '../assets/signalx-logo.png';
import alnylam from '../assets/alnylam-logo.png';
import northeastern from '../assets/Northeastern-logo.png';

const experienceData = [
  {
    year: 'Feb 2024 - Present',
    title: 'Cloud Software Engineer',
    company: 'Humanitarians AI Inc',
    details: 'Improved provisioning with Terraform, reduced S3 storage costs by 40%.',
    badgeImage: 'https://media.licdn.com/dms/image/v2/D560BAQGxK7wro1qZGg/company-logo_200_200/company-logo_200_200/0/1733595907747/humanitarians_ai_logo?e=2147483647&v=beta&t=NSYp7XVrWZBXBLrgCIWuuRgovOux6q22o8rzpsqxKXQ',
    backupImage: humanitarians,
  },
  {
    year: 'Jan 2024 - Sep 2024',
    title: 'Cloud Developer',
    company: 'Alnylam Pharmaceuticals',
    details: 'Migrated to AWS microservices; built CI/CD pipelines using Docker & Jenkins.',
    badgeImage: 'https://jobconnector.mit.edu/sites/default/files/styles/max_325x325/public/2023-01/81fa258a-6126-47ec-adca-df638a975a81.png?itok=hccxOhQx',
    backupImage: alnylam,
  },
  {
    year: 'Oct 2023 - Dec 2024',
    title: 'Full Stack Engineer',
    company: 'Northeastern ITS',
    details: 'Built student course dashboard, automated AWS resource tagging.',
    badgeImage: northeastern,
    backupImage: northeastern,
  },
  {
    year: 'Jun 2021 - Aug 2022',
    title: 'Associate Software Engineer',
    company: 'Hexaware Technologies',
    details: 'Maintained e-commerce service, improved latency with ElasticSearch.',
    badgeImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh5m33zAqV3VMlscIqbDjvD1SmRQdJJZ7FY_6Smd6ek-9Ib0vg6LOGDP0z5djharL0Luo&usqp=CAU',
    backupImage: hexaware,
  },
  {
    year: 'Apr 2019 - Jun 2019',
    title: 'Software Developer Intern',
    company: 'SignalX',
    details: 'Developed Spark ML models, set up real-time alerts using SNS.',
    badgeImage: signalx,
    backupImage: signalx,
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
              <div className="timeline-box timeline-flex">
                {item.badgeImage && (
                  <div className="badge-container">
                    <a
                      href="https://www.northeastern.edu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="badge-img"
                        src={item.badgeImage}
                        alt={item.title}
                        onError={(e) => {
                          if (item.backupImage) {
                            // Remove the error handler to prevent an infinite loop
                            e.target.onerror = null;
                            e.target.src = item.backupImage;
                          }
                        }}
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

export default ExperienceTimeline;
