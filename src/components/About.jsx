// components/About.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../css/about.css';
import aboutPic from '../assets/about-pic.png';
import experienceIcon from '../assets/experience.png';
import educationIcon from '../assets/education.png';
import arrowIcon from '../assets/arrow.png';
import ExperienceTimeline from './ExperienceTimeline';
import EducationTimeline from './EducationTimeline';
import CertificationTimeline from './CertificationTimeline';

const About = () => {
  const [activeContainer, setActiveContainer] = useState(null);

  const openModal = (type) => {
    setActiveContainer(type);
  };

  const closeModal = () => {
    setActiveContainer(null);
  };

  return (
    <>
      {/* Main section (blur when modal is open) */}
      <section id="about" className={activeContainer ? 'blur-background' : ''}>
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>

        <div className="section-container">
          <div className="section__pic-container">
            <img
              src={aboutPic}
              alt="Profile"
              className="about-pic"
            />
          </div>

          <div className="about-details-container">
            <div className="text-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                reprehenderit et laborum, rem, dolore eum quod voluptate
                exercitationem nobis...
              </p>
            </div>

            <div className="about-containers">
              <div className="details-container" onClick={() => openModal('experience')}>
                <img src={experienceIcon} alt="Experience icon" className="icon" />
                <h3>Experience</h3>
                <p>Cloud and Full Stack Development<br />3+ years </p>
              </div>

              <div className="details-container" onClick={() => openModal('education1')}>
                <img src={educationIcon} alt="Education icon" className="icon" />
                <h3>Education</h3>
                <p>M.S. in Information Systems <br />B.Tech in Computer Science</p>
              </div>

              <div className="details-container" onClick={() => openModal('education2')}>
                <img src={educationIcon} alt="Education icon" className="icon" />
                <h3>Education</h3>
                <p>M.S. in Computer Software Engineering <br />B.Tech in Computer Science</p>
              </div>
            </div>
          </div>
        </div>

        <Link to="experience" smooth={true} duration={500}>
          <img src={arrowIcon} alt="Arrow icon" className="icon arrow" />
        </Link>
      </section>

      {/* Modal Overlay */}
      {activeContainer && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>

            {activeContainer === 'experience' && (
              <>
                <h2>Experience</h2>
                <ExperienceTimeline />
              </>
            )}
            {activeContainer === 'education1' && (
              <>
                <h2>Education</h2>
                <EducationTimeline />
              </>
            )}
            {activeContainer === 'education2' && (
              <>
                <h2>Certification</h2>
                <CertificationTimeline />
                
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default About;
