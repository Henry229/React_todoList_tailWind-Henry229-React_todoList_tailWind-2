import React, { useState } from 'react';
import AddTodo from '../addTodo/AddTodo';
import Todo from '../todo/Todo';

const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState([
    { id: '1', item: 'Studying', status: 'active' },
    { id: '2', item: 'WorkOut', status: 'active' },
  ]);

  const handleAddToDo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };

  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  const filtered = getFilteredItems(todos, filter);

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
      <AddTodo onAdd={handleAddToDo} />
    </section>
  );
};

function getFilteredItems(todos, filter) {
  if (filter === 'All') {
    return todos;
  }
  return todos.filter((t) => t.status === filter);
}

export default TodoList;
