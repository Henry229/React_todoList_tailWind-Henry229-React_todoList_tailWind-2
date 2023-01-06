import React from 'react';
import { BsTrashFill } from 'react-icons/bs';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? 'Completed' : 'Active';
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    // <section>
    <li>
      <input
        type='checkbox'
        id='checkbox'
        checked={status === 'Completed'}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>{text}</label>
      <span>
        <button onClick={handleDelete}>
          <BsTrashFill />
        </button>
      </span>
    </li>
    // </section>
  );
};

export default Todo;
