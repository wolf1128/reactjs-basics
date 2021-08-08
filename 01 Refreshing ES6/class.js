// data structures: Object, Array

// const a = { name: 'Salar' };
// console.log(a.name);

// Object Vs. Class
// Class is a Machine. | Object (instance) is a BMW.

class Glass { // oop
    // Way(1)
  //   constructor() {
  //       this.glassName = 'fire-proof';
  //   }
    // Way(2)
    glassName = 'fire-proof';
  }
  
  class Machine extends Glass { // first letter uppercase. | properties || methods / inheritence
    
      constructor() {
        super();
        
        this.name = 's500'; // property
        this.color = 'black';
        this.feature1 = 'top speed';
        this.feature2 = 'auto diagnastic';
      }

      mySpeed() { // method
        return '100km/h under 10 seconds ....'
      }
      myFeatures = () => {
  //       return this.feature1 + ', ' + this.feature2;
        return this.feature1 + ', ' + this.feature2;
      }
  }
  const bmw = new Machine();
  
  // console.log(bmw.name);
  // console.log(bmw.mySpeed());
  // console.log(bmw.myFeatures());
  
  console.log(bmw.glassName);