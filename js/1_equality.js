console.log("Equality vs Strict Equality");
// == (double equal) vs === (triple equal) operator
// In JS == and === are both comparision operators used to compare 2 values

// 1. Equality Operator (==)
// The == operator checks the equality after performing type conversion if necessary
// this means it tries to convert the operands to the same type before making the comparision
// if the types are different, JS attempts to convert them to a common tye using a set of rules known as "type coercion"
// after type coercion , it checks if the values are equal
console.log(5 == "5"); // true
console.log(1 == true); // true
console.log(0 == false); // true

// 2. Strict equality operator
// the === operator also known as strick equality operator, checks for equality without performing type conversion
// it requires both value and type to be the same for the comparision to be true
// if the types are different, the comparision immediately returns false without attempting any type coercion

console.log(5 === "5"); // false
console.log(1 === true); // false
console.log(0 === false); // flase

// generally it's recommended to use === for most comparisions to avoid unexpected behaviour and ensures code quality and readability
