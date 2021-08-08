// let and const
// Life scopes:
// let, const: block level scope
// var: global and function level scope

// ES5
var test = 'Jane';
// ES6
const a = 'Salar';
const b = 'John';

// a = 'x';

let c = 10;
c = 'Jane Doe';

console.log(a);
console.log(c);

// JavaScript variables:
// String
// Number
// Boolean
// Falsy values: null, undefined, NaN, false 


let a = '1';
let b = true;
let c = 'd';
let d = undefined;
let e = null;


console.log(typeof a === 'string');

if (d || e) {
  console.log('not called!');
}