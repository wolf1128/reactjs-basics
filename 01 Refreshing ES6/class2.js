// ES3, ES6(EcmaScript2015), ES2016, ...., ES2021
class Human { // data modeling
    firstName = 'Salar'; // Properties => static
    lastName = 'Farahmand';
    age = 27;
  
    static skin = "white";
  
    constructor(fname?, lname?) { // optional operator
      if (fname && lname) {
        this.firstName = fname;
        this.lastName = lname;
      }
    }
  
    speak() { // Method => Behavior (dynamic)
      return 'I am speaking....';
    }
    greeting() {
      return 'Hi! My name is ' + this.firstName + ' ' + this.lastName;
    }
                
   // Getters & Setter           
    get fname() {
      return this.firstName;
    }             
    set setFname(fname) {
      this.firstName = fname;
    }
          
  
  }
  
// let salar = new Human('Salar', 'Farahmand');
let salar = new Human();              
console.log(salar.firstName);
console.log(salar.speak());
console.log(salar.greeting());
let john = new Human('John', 'Doe');
console.log(john.greeting());
// console.log(john.name('John', 'Doe x'));
console.log(john.fname);
john.setFname = 'John x';
console.log(john.fname);
  
console.log(Human.skin); // statically called without need to instantiate.