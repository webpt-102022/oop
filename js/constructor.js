function Animal(name, age) {
  this.name = name;
  this.age = age;
  this.eyes = true;
}

Animal.prototype.greet = function () {
  console.log(`Hello, I am ${this.name}!`)
}

const maika = new Animal('Maika', 4);
maika.greet();