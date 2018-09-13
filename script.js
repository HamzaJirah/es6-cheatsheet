//VARIABLES

//'var' keyword
// var age = 23;
// age = 28;
//console.log(age); //28

//'const' keyword
// const age1 = 30;
//age1 = 32;
//console.log(age1); //Uncaught TypeError: Assignment to constant variable.
//Note: with const, you can't reassigned the value of a variable

//using const in obect naming
// const person = {
//   name: 'abc',
// }
// person.age = 23;
// console.log(person);
//Note: with objects and arrays, you can declare an object/array an add properties/elements to it.

//Hoisting with 'var', const' and 'let'

//var
// addressOne = 'nigeria';
// console.log(addressOne); //nigeria
// var addressOne;

//const
// addressOne = 'nigeria';
// console.log(addressOne); //Uncaught SyntaxError: Missing initializer in const declaration
// const addressOne;

// const addressOne;
// addressOne = 'nigeria';
// console.log(addressOne); //SyntaxError: Missing initializer in const declaration

//let
// addressOne = 'nigeria';
// console.log(addressOne); //Uncaught ReferenceError: addressOne is not defined
// let addressOne;

// let addressOne;
// addressOne = 'nigeria';
// console.log(addressOne);

//Hoisting with 'let' in a function

/*function studentName(){
  //initialize variable
  studentOne = 'Omo Naija';
}
//declare variable
let studentOne;
//call function
studentName();
//log to console
console.log(studentOne);*/

//Hoisting with 'var' in a function
/*function studentName(){
  //initialize variable
  studentOne = 'Omo Naija';
}
//declare variable
var studentOne;
//call function
studentName();
//log to console
console.log(studentOne);*/

//Hoisting with 'const' in a function
/*function studentName(){
  //initialize variable
  studentOne = 'Omo Naija';
}
//declare variable
const studentOne;
//call function
studentName();
//log to console
console.log(studentOne);*/ //Uncaught SyntaxError: Missing initializer in const declaration

//Arrow function with one parameter
// const fncName = a => a - 6;
// console.log(fncName(8));

//Arrow function with two parameters
// const multNums = (x, y) => x * y;
// console.log(multNums(4, 9));

//Arrow function and 'this' in the context of the window object
// const thisOne = () => console.log(this);
// thisOne(); //prints the window object

//Arrow function and 'this' in the context of an HTML element 


