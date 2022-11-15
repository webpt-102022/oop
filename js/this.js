// THIS es una propiedad del contexto de ejecución
// Hace referencia al objeto al que pertenece la función en el momento de ser invocada (NO CREADA)

// THIS in the global scope:
// console.log(this); => siempre Window 


// THIS in a function will be "Window", because the window calls the function
function myFunction() {
  console.log(this);
}
// myFunction();


// THIS in a nested function is also Window, because the window calls the function
function outerFunction() {
  console.log('Outer function', this);
  function innerFunction() {
    console.log('Inner function', this);
    function secondLevelFunction() {
      console.log('Second level function', this);
    }
    secondLevelFunction()
  }
  innerFunction();
}
// outerFunction();


// THIS in arrow functions, also window
const anotherFunction = () => {
  const callMeMaybe = () => {
    console.log(this);
  }
  callMeMaybe()
}
// anotherFunction()



// THIS in object methods:
const user = {
  name: 'Marco Polo',
  age: 5,
  // Function methods => al objeto al que pertenece
  regularFunc: function () {
    console.log(this);
  },
  // Arrow function methods => pierde el this y coge el del contexto (Window / Global object)
  arrowFunc: () => {
    console.log(this);
  },
  address: {
    street: 'Fake Street',
    number: 3,
    // Nested objects => Al objeto al que pertenece el nested object
    nestedFunc: function () {
      console.log(this)
    }
  }
}

//user.regularFunc();
//user.arrowFunc();
//user.address.nestedFunc();


// THIS in CLASS method => apunta a cada una de las instancias de la clase
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this);
  }
  otherMethod() {
    this.sayHi()
  }
}

const pepe = new User('Pepe')
//pepe.sayHi()

const marina = new User('Marina')
//marina.sayHi();


// Exception - this in arrow functions
// If the function/method is an ES2015 arrow function, it receives this value of its surrounding scope at the time it is created.
const person = {
  name: 'Alberto',
  age: 41,

  regularMethod: function () {
    console.log('regularMethod  this', this)

    const arrowFunc = () => console.log('arrowFunc  this', this);
    arrowFunc();

    // arrow function will borrow `this` value from the surrounding scope
    // of `regularMethod` where it was created
  },

};

//person.regularMethod();


// THIS & setTimeout & setInterval
class Person {
  constructor(name) {
    this.name = name;
  }
  // With regular functions, it still takes the this value from the window because it binds with the object that calls the method
  printNameWithFunction() {
    setTimeout(function () { console.log(`Name: ${this.name}`) }, 500);
  }
  // Arrow functions allow us to use it because it takes the this from the scope (which is the instance of the class)
  printNameWithArrow() {
    setTimeout(() => { console.log(`Name: ${this.name}`) }, 500);
  }
}

const bob = new Person('Bob');
// bob.printNameWithFunction();
// bob.printNameWithArrow();