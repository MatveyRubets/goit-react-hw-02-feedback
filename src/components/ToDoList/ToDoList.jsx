import React from 'react';

const ToDoList = ({ todos, removeTodo }) => (
  <ul>
    {todos.map(({ id, text }) => (
      <li key={id}>
        {text}
        <button onClick={() => removeTodo(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ToDoList;
