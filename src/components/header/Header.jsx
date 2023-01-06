import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useDarkMode } from '../../context/DarkModeContext';

const Header = ({ filters, onFilteredTodo }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <nav>
      <button onClick={toggleDarkMode}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilteredTodo(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
