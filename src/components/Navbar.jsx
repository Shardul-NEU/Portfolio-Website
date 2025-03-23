// Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav id="desktop-nav">
      <div className="logo">Shardul Deshmukh</div>
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link to="about" smooth={true} duration={500} offset={-110}>About</Link></li>
          <li><Link to="experience" smooth={true} duration={500} offset={-150}>Experience</Link></li>
          <li><Link to="projects" smooth={true} duration={500} offset={-120}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} offset={-110}>Contact</Link></li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;