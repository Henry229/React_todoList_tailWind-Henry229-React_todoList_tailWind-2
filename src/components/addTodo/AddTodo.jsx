import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({ onAdd }) => {
  const [item, setItem] = useState('');
  const handleInput = (e) => setItem(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), item, status: 'active' });
    setItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={item} onChange={handleInput} />
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
