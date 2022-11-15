class Animal {
  constructor(name, age, sound) {
    this.name = name;
    this.age = age;
    this.sound = sound;
    this.eyes = true;
    this.heart = true;
    this.legs = 4;
  }

  makeSound() {
    console.log(`${this.sound} ${this.sound}!!`)
  }

  sleep() {
    console.log('ZzzZzZ')
  }
}

const aria = new Animal('Aria', 5, 'woof woof')
const dolfy = new Animal('Dolfy', 11, 'guau')
// aria.sleep();

class Bird extends Animal { // Inheritance
  constructor(name = 'Piolin', age = 1, sound, meters, heart) { // Define default values if not given
    super(name, age, sound);
    this.meters = meters;
    this.legs = 2;
    this.heart = heart;
  }

  makeSound() {// Polimorfism => Same method name, different action. It is overwritten.
    console.log(`${this.sound}`)
  }
}

// Mini game

const piolin = new Bird(undefined, undefined, 'pio', 200, true);
const donald = new Bird('Donald', 5, 'pio pio', 200, 2);
const arr = [piolin, donald];

class User {
  constructor(name) {
    this.name = name
  }
  sayHello() {
    console.log(`Hello, I'm ${this.name}`)
  }
}

class Person extends User {
  constructor(name, money) {
    super(name);
    this.money = money;
  }

  beStolen(money) {
    this.money = this.money - money;
    console.log(`${this.name}, you have been stolen and now have ${this.money}$`);
    this.checkBankAccount();
  }

  checkBankAccount() {
    if (this.money <= 0) {
      console.log("OH MY GAD, I'm poor")
    } else {
      console.log(`Still good, I have ${this.money}$!`)
    }
  }
}

class Robber extends User {
  constructor(name) {
    super(name);
    this.stolenQuantity = 0;
    this.stealingPowers = 1;
    this.bullets = 10;
    this.shootingInterval = undefined;
    this.stealingInterval = undefined;
  }

  steal(money) {
    this.stolenQuantity = this.stolenQuantity + money;
    this.stealingPowers = this.stealingPowers + 1;
    return money;
  }

  shoot() {
    this.shootingInterval = setInterval(() => {
      if (this.bullets > 0) {
        this.bullets = this.bullets - 1;
        console.log('Bullets left: ', this.bullets)
      }
    }, 1000)
  }

  stopShooting() {
    clearInterval(this.shootingInterval);
    console.log('Stopped shooting. Bullets left: ', this.bullets)
  }

  reload(num) {
    this.bullets = this.bullets + num;
    console.log(`Reloaded. Bullets now: ${this.bullets}`)
  }
}

const pepe = new Person('Pepe', 150);
const manolo = new Robber('Manolo');

// manolo.shoot();
// setTimeout(() => { manolo.stopShooting() }, 3000);
// setTimeout(() => { manolo.reload(30) }, 5000);

// pepe.beStolen(manolo.steal(50));
// pepe.beStolen(manolo.steal(105));
// pepe.sayHello()
// manolo.sayHello()
// console.log(manolo)


















