import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

function App() { // REACT: I re-render the dom only and only when props and states changed!

  const [todos, setTodos] = useState([ // single source of truth
    { task: 'Finish the javascript course' },
    { task: 'Finish the python course' },
    { task: 'Finish the React.js course' },
    { task: 'Finish the styled-components course' },
  ]);


  // const addTodoHandler = () => {
  //     setTodos([
  //       { task: 'Task1' },
  //       { task: 'Task2' },
  //       { task: 'Task3' },
  //       { task: 'Task4' },
  //     ]);
  // }
  const addTodoHandler = (task) => {
    // console.log(task);
    // setTodos([...todos, { task: task }]); // xxx invalid
    // setTodos([...todos, { task }]); // xxx invalid way#2 ES6 feature
    // valid solution
    setTodos((prevTodos) => [...prevTodos, { task }]);
  };

  const removeTodoHandler = (ItemIndex) => {
    // console.log('removeTodoHandler called!');
    // console.log('index: ', ItemIndex);

    setTodos((prevTodos) => prevTodos.filter(t => t !== prevTodos[ItemIndex]));
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      {/* <TodoList items={todos} /> */}
      <TodoList onRemoveTodo={removeTodoHandler} items={todos} />
    </div>
  );
}

export default App;
