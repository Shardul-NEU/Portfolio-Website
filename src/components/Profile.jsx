// components/Profile.js
import React from 'react';
import { Link } from 'react-scroll';
import profilePic from '../assets/profile-pic.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profilePic} alt="Shardul Deshmukh profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Shardul Deshmukh</h1>
        <p className="section__text__p2">Full-Stack & Cloud Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open('/assets/resume-example.pdf')}
          >
            Download CV
          </button>
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn btn-color-1">Contact Info</button>
          </Link>
        </div>
        <div id="socials-container">
          <img
            src={linkedinIcon}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => window.open('https://www.linkedin.com/in/shardul99/')}
          />
          <img
            src={githubIcon}
            alt="My Github profile"
            className="icon"
            onClick={() => window.open('https://github.com/Shardul-NEU')}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;