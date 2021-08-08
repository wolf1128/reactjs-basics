// Primitive and reference types

// Primitive Types // MEMORY (stack): |[   a    ][   a1    ]...           |
let a = 'Salar';   
const b = 1;
const c = true; // 0/1

let a1 = a;
// console.log(a1);
a1 = 1234;
// console.log(a1, a);

// Reference Types   // MEMORY:
                     // (stack): |[index1] [index2]...           |
                     // (heap): |[              ]                  |
const d = { name: 'Salar', age: 27 };
const e = ['num1', 'num2', 'num3'];
const f = {};

// Objects Problem:

f.name = 'test';
f.age = 30;
f.lastName = 'last name';
// console.log(f);

// let d1 = d;
// console.log(d1.name);
// d1.name = 'John';
// d1.age = 100;
// console.log(d1.name, d.name);

// solution(1):
let d2 = { ...d, skin: 'light' };
// console.log(d2);
d2.name = 'Julia';
console.log(d2.name, d.name);

// solution(2):
let d3 = Object.assign({}, d);
d3.name = 'Jane';
console.log(d3.name, d.name);

// Arrays Problem:

// let e1 = e;
// e1[0] = 'num x';
// console.log(e1[0], e[0]);

// solution(1):
let e2 = [ ...e ];
e2[0] = 'num x';
// console.log(e2[0], e[0]);

// solution(2):
let e3 = e.slice();
e3[0] = 'test';
console.log(e3[0], e[0]);