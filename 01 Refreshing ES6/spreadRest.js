// spread operator

const a = { name: 'Salar', age: 27 };

const b = { ...a, hair: 'brown' }; 

// console.log(b);

const test = ['t1', 't2', 1, 2]; // index starts from zero
console.log(test[3]);
const test2 = [...test, true];
console.log(test2)

// Rest Operator 

// const test = (value1, value2, value3) => {
const test = (...args) => { // an array of parameters
    //   return 'hello world!';
        return args;
    }
    
console.log(test('arg1', 'arg2', 'arg3'));