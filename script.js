//VARIABLES

//'var' keyword
var age = 23;
age = 28;
console.log(age); //28

//'const' keyword
const age1 = 30;
age1 = 32;
console.log(age1); //Uncaught TypeError: Assignment to constant variable.
//Note: with const, you can't reassigned the value of a variable

//using const in obect naming
const person = {
  name: 'abc',
}

person.age = 23;
console.log(person);

