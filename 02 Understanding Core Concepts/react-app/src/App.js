import React from 'react';
import './App.css';
// import HelloWorld from './components/HelloWorld';
// import Student from './components/class-based/Student';
// import StudentTitle from './components/class-based/StudentInfo';

import Student from './components/functional/Stundet';


function App() {

  return (
    <div>
      {/* Class-based Component */}
      {/* <h1>New React App ;)</h1> */}
      {/* <h2 className="App-logo">Welcome</h2> */}
      {/* <HelloWorld /> Reusable */}
      {/* <Student /> */}

      {/* Functional Component */}
      <Student />


    </div>
  );
}

export default App;
