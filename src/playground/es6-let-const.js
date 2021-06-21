var nameVar = 'Lee'
var nameVar = 'Mikel'
console.log('nameVar', nameVar)

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

// Block scoping

var fullName = 'Lee Castelani'
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0]
  console.log(firstName)
}

console.log(firstName)