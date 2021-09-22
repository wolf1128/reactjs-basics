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

  const addPhoneHandler = (fname, lname, num) => {
    setNumbers((prevNumbers) => [...prevNumbers, { firstName: fname, lastName: lname, number: num }]);
  }

  const removePhoneHandler = (ItemIndex) => {
    setNumbers((prevNumbers) => prevNumbers.filter(n => n !== prevNumbers[ItemIndex]));
  }

  return (
    <div className="App">
      <NewPhone onAddNumber={addPhoneHandler} />
      <PhonesList onRemovePhone={removePhoneHandler} phoneNumbers={numbers} />
    </div>
  );
}

export default App;
