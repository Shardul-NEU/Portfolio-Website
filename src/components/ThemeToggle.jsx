import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import sunIcon from "../assets/sun.png";
import moonIcon from "../assets/moon.png";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle-wrapper">
      <label className="theme-toggle">
        <input 
          type="checkbox" 
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <div className="slider">
          <div className="icon-container">
            <img 
              src={isDarkMode ? moonIcon : sunIcon} 
              alt={isDarkMode ? "Dark mode" : "Light mode"} 
              className="theme-icon"
            />
          </div>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;