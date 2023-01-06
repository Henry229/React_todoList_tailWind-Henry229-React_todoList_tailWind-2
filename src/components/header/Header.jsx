import React from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useDarkMode } from '../../context/DarkModeContext';

const Header = ({ filters, onFilteredClick }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <nav>
      <button onClick={toggleDarkMode}>
        {darkMode ? <HiMoon /> : <HiSun />}
      </button>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilteredClick(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
