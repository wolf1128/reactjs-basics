import React , { useState } from 'react';
import PhonesList from './components/phonesList'
import NewPhone from './components/NewPhone'

function App() {

  const [numbers, setNumbers] = useState([
    {
      firstName: 'Salar',
      lastName: 'Farahmand',
      number: 9126755544
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      number: 9126755544
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      number: 9126755544
    },
    {
      firstName: 'Alexander',
      lastName: 'pukerface',
      number: 9126755544
    },
  ]);

  const addPhoneHandler = () => {
    // console.log('addTodoHandler');
    setNumbers([
      {
        firstName: 'New FName 1',
        lastName: 'New LName 1',
        number: 9126005544
      },
      {
        firstName: 'New FName 2',
        lastName: 'New LName 2',
        number: 9126005544
      },
      {
        firstName: 'New FName 3',
        lastName: 'New LName 3',
        number: 9126005544
      },
      {
        firstName: 'New FName 4',
        lastName: 'New LName 4',
        number: 9126005544
      },
    ]);
  }

  return (
    <div className="App">
      <NewPhone onAddTask={addPhoneHandler} />
      <PhonesList items={numbers} />
    </div>
  );
}

export default App;
