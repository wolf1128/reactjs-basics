// Destructuring

const a = { name: 'Salar', age: 27, hair: 'dark-brown' }; // key-value pair
// const name = a.name; // way(1)
// const hair = a.hair;
const { name, hair } = a; // way(2) ES6

const b = [1, 2, 3];
const [ num1, num2 ] = b;

// console.log(name)
console.log(name);
console.log(hair);

// console.log(b.length)
console.log(num1);
console.log(num2);