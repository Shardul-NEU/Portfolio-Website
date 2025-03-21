import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     // Check for saved preference or use system preference
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       return savedTheme === 'dark';
//     } else {
//       return window.matchMedia('(prefers-color-scheme: dark)').matches;
//     }
    const [isDarkMode, setIsDarkMode] = useState(() => {
    // Only check for saved preference, default to light otherwise
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark'; // This will be false if savedTheme is null or 'light'
  });

  // Update localStorage and apply theme when isDarkMode changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Add or remove dark class from body
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};