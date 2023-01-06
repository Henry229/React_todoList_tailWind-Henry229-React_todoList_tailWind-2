import React from 'react';
import { BsTrashFill } from 'react-icons/bs';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { item, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'Complete' : 'Active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <section>
      <li>
        <input type='checkbox' id='checkbox' onChange={handleChange} />
        <label htmlFor='checkbox'>{item}</label>
        <button>
          <BsTrashFill onClick={handleDelete} />
        </button>
      </li>
    </section>
  );
};

export default Todo;
