import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

function App() { // REACT: I re-render the dom only and only when props and states changed!

  const [todos, setTodos] = useState([ // right answer
  // const [todos, setTodos] = useState( // wrong answer (ERROR)
    { task: 'Finish the javascript course' },
    { task: 'Finish the python course' },
    { task: 'Finish the React.js course' },
    { task: 'Finish the styled-components course' },
  ]);

  // const [ value, setValue ] = React.useState('1');
  const [ value, setValue ] = React.useState(1);

  const addTodoHandler = () => {
      setTodos([
        { task: 'Task1' },
        { task: 'Task2' },
        { task: 'Task3' },
        { task: 'Task4' },
      ]);
  }

  const calculations = () => {
    const x = value + 20; // 21
    
    // if (x === 21) { // type and value
    //   throw new Error('x is equal to 21!'); // best practice
    // }

    return x;
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} />

      <table>
        <thead>
          {/* <th>header#1</th> */}
          <tr>
            <th>header#1</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>simple data</td>
            {/* <td>{todoss}</td> */}
            <td>{calculations()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
