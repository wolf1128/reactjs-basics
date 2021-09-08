import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

function App() { // REACT: I re-render the dom only and only when props and states changed!

  const [todos, setTodos] = useState([
    { task: 'Finish the javascript course' },
    { task: 'Finish the python course' },
    { task: 'Finish the React.js course' },
    { task: 'Finish the styled-components course' },
  ]);

  // ??? typical variable
  // let todos = [
  //   { task: 'Finish the javascript course' },
  //   { task: 'Finish the python course' },
  //   { task: 'Finish the React.js course' },
  //   { task: 'Finish the styled-components course' },
  // ];

const addTodoHandler = () => {
    // console.log('addTodoHandler');
    setTodos([
      { task: 'Task1' },
      { task: 'Task2' },
      { task: 'Task3' },
      { task: 'Task4' },
    ]);
    // todos = [
    //   { task: 'Finish1 the javascript course' },
    //   { task: 'Finish1 the python course' },
    //   { task: 'Finish1 the React.js course' },
    //   { task: 'Finish 1the styled-components course' },
    // ];
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
