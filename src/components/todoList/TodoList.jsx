import React, { useState } from 'react';
import AddTodo from '../addTodo/AddTodo';
import Todo from '../todo/Todo';

const TodoList = ({ filter }) => {
  const [toDos, setToDos] = useState([
    { id: '1', text: 'Studying', status: 'Active' },
    { id: '2', text: 'Buying Milk', status: 'Active' },
  ]);

  const handleAddTodo = (todo) => {
    setToDos([...toDos, todo]);
  };

  const handleUpdate = (updated) => {
    setToDos(toDos.map((item) => (item.id === updated.id ? updated : item)));
  };

  const handleDelete = (deleted) => {
    setToDos(toDos.filter((item) => item.id !== deleted.id));
  };

  const filtered = getFilteredTodos(toDos, filter);

  return (
    <section>
      <ul>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAddTodo} />
    </section>
  );
};

function getFilteredTodos(toDos, filter) {
  if (filter === 'All') {
    return toDos;
  }
  return toDos.filter((todo) => todo.status === filter);
}
export default TodoList;
