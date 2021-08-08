// const arrays = ['a', true, 'c', 'd']; // NOTE: array's index starts from zero.
const arrays = ['a', 'aa', 'c', 'd'];
const arrays2 = ['e', 'd'];

// arrays.map((a) => {  
//   console.log(a + ' is read!');
// });

// let result = arrays.find((a) => {
//   return a === true;
// });
// console.log(result);

// let result = arrays.findIndex((a) => {
//   return a === true;
// });
// console.log(result);

// let result = arrays.filter((array) => { // returns a new array
//   return array.length > 1;
// });
// console.log(result)

// let arrays3 = arrays.concat(arrays2);
// // let arrays3 = [ ...arrays, arrays2 ] // xxx not valid
// console.log(arrays3);

// let result = arrays.slice(1); // .slice(start, end) | returns a new array
// console.log(result);

// arrays.splice(0, 0, 'x ;)'); // doesn't return a new array. It modifies the original array.
arrays.splice(0, 1, 'x ;)');
console.log(arrays);

// .reduce()

const exams = [
    { name: 'Salar', point: 20 }, 
    { name: 'John', point: 11 },
    { name: 'Julia', point: 9 }
  ]; // Array of objects (Object array)
  
  // console.log(person[1].name)
  
  let sumOfPoints = exams.reduce((acc, exam) => {
    return acc + exam.point
  }, 0);
  console.log(sumOfPoints);