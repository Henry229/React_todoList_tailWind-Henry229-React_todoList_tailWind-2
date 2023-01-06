import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), text, status: 'Active' });
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
