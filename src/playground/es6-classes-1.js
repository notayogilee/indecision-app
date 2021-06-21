class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, I am ${this.name}.`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
};

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }
    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Student('Lee Castelani', 44, 'Computer Science');
// console.log(me.getDescription());
// console.log(me.getGreeting())
// console.log(me.hasMajor())

const you = new Student();
// console.log(you.getDescription())

const jeff = new Person('Jeff McNaley', 30)
// console.log(jeff.getGreeting())

const mark = new Traveler('Mark Deppy', 56, 'Iceland')
console.log(mark.getGreeting())

const lee = new Traveler('Lee Castelani', 44)
console.log(lee.getGreeting())