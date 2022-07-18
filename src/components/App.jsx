import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Counter from './Counter/Counter';
import DropDown from './DropDown/DropDown';
import ToDoList from './ToDoList/ToDoList';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#606D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: [
      { id: '1', text: 'Walk dog', fini: true },
      { id: '2', text: 'Eat', fini: false },
      { id: '3', text: 'Piss', fini: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const completedTodos = todos.reduce(
      (total, todo) => (todo.fini ? total + 1 : total),
      0
    );

    const totalTodos = todos.length;

    return (
      <>
        {/* <Counter />f */}

        {/* <DropDown /> */}

        {/* <ColorPicker options={colorPickferOptions} /> */}

        <div>
          <p>Total: {totalTodos}</p>
          <p>Done: {completedTodos}</p>
        </div>

        <ToDoList todos={todos} removeTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
