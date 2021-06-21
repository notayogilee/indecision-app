// arguments object - no longer bound with arrow functions

// const add = function (a, b) {
//   console.log(arguments)
//   return a + b
// }

const add = (a, b) => {
  // console.log(arguments)
  return a + b
}

// console.log(add(55, 1, 1001))

// this keyword - no longer bound 

const user = {
  name: 'Lee',
  cities: ['Pincourt', 'Montreal', 'Beaconsfield'],
  printPlacesLived() {
    return this.cities.map((city) => `${this.name} has lived in ${city}`)
  }
}

// console.log(user.printPlacesLived())

const multiplier = {
  // numbers -array of numbers 
  numbers: [1, 2, 3],
  // multiplyBy - single number
  multiplyBy: 2,
  // multiply - return new array where the numbers have been multiplied
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  }

}

console.log(multiplier.multiply())