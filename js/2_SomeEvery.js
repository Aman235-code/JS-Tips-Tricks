// arr.some() -> returns true if at least one of the items in the array statisfies the condition.
const isEven = (val) => {
  return val % 2 == 0;
};
const isPositive = (value) => {
  return value > 0;
};

const arr = [2, 3, 4, 5, 7];

console.log(arr.some(isEven)); // true
console.log(arr.some(isPositive)); // true

// arr.every() -> returns true only if all the items in the array satisfies the condition.
console.log(arr.every(isEven)); // false
console.log(arr.every(isPositive)); // true
