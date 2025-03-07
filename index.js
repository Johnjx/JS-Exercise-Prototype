/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (string) {
  if (this.stomach.length < 10) {
    return this.stomach.push(string);
  } else {
    return 'This person is full!';
  }
  
};

Person.prototype.poop = function () {
  return this.stomach = [];
};

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};
 

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account. 
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
  
}

Car.prototype.fill = function (gallons) {
  return this.tank += gallons;
};

Car.prototype.drive = function (distance) {
  const totalDistance = this.tank * this.milesPerGallon;
  if (distance <= totalDistance) {
    this.odometer += distance;
    this.tank -= (distance/this.milesPerGallon);
  } else {
    this.odometer += totalDistance;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`;
  }

}

const car1 = new Car('BMW', 20);

//console.log(car1);
car1.fill(5);
console.log('start tank',car1.tank);
console.log('start odo',car1.odometer);
//console.log(car1.drive(120));
car1.drive(80);
console.log('next tank',car1.tank);
console.log('next odo',car1.odometer);
console.log(car1.drive(30));
console.log('current odo',car1.odometer);
console.log('finish tank',car1.tank);



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;

}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};




/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window Binding - When you call this in a context not enclosed inside an object, you will receive the global scope/ window back.
  2. Implicit Binding - When you use dot notation to call a method, the preceding object takes on the context of this. 
  3. New Binding - When you create an instance of an object through a constructor function you need to use the keyword 'new' to let your
  program know that the context of this will include the contents of the parent constructor. 
  4. Explicit Binding - Linking different objects together through the use of .bind, .call, or .apply, in order to pass the context of this
  where it is needed.
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
