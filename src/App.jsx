import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import TodoList from './components/todoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['All', 'Active', 'Completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filters={filters} onFilteredTodo={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
