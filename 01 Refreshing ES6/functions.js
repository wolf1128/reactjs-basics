// Function types:
// 1. Named functions
// 2. Arrow functions
// 3. Anonymous functions
// 4. Sel-executing (invokeable) functions

let a;
const reversed = true;

function fullName(fName, lName) {
  if (reversed) return lName + ' ' + fName;
  return fName + ' ' + lName;
}

// console.log(fullName('Salar', 'Farahmand'));

const fullNameFunc = (fName, lName) => {
  if (reversed) return lName + ' ' + fName;

  return fName + ' ' + lName;
}

const fullNameFunc2 = fName => {
    return fName;
}

console.log(fullNameFunc('Salar', 'Farahmand'));

// Part#2

console.log('synchronously called!');// synchronous operation in javascript

setTimeout(() => { // asyncronous operation in javascript
   console.log('test1 called')
}, 1000); // ms

setTimeout(function() { 
   console.log('test2 called')
}, 2000); // ms

const a = function() {
  console.log('asonymous function called');
};

a();

// part#3

(function() {
    console.log('self-executing func called');
  })();