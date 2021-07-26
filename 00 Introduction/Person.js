// Add react, react-dom and Badel
// PART#1
function Person (props) {
    return (
      <div class='person'>
        <h1>Name: {props.name}</h1>
        <p>Age: {props.age}</p>
       </div>
    );
  }
  
ReactDOM.render(<Person name="Salar" age="27" />, document.getElementById('p1'));

// PART#2 
function Person (props) {
  return (
    <div class='person'>
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
     </div>
  );
}

ReactDOM.render(<Person name="Salar" age="27" />, document.getElementById('p1'));
ReactDOM.render(<Person name="Jane" age="25" />, document.getElementById('p2'));

// PART#3
function Person (props) {
    return (
      <div class='person'>
        <h1>Name: {props.name}</h1>
        <p>Age: {props.age}</p>
       </div>
    );
  }
  
  var App = function() {
    return (
      <div>
        <Person name='Salar' age='27' />
        <Person name='Jane' age='25' />
      </div>
    )
  }
  
  
  ReactDOM.render(<App />, document.getElementById('app'));
  