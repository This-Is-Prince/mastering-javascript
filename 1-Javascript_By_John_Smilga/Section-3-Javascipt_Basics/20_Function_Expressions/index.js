// expressions - another way define a function
// create a variable, assign to FUNCTION (not value), use var
// diff - hoisting, use - arrow func, libraries,

console.log(addValues(1, 3));
// console.log(add(1, 3)); //error
// console.log(add2(1, 3)); //error
// console.log(add3(1, 3)); //error

// function definition/declaration
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);
// function expression
const add = function (num1, num2) {
  return num1 + num2;
};

const add2 = function addValues(num1, num2) {
  return num1 + num2;
};

const add3 = addValues;
console.log(add3 === addValues);

const thirdValue = add(5, 6);
const fourthValue = add2(6, 6);
const values = [firstValue, secondValue, thirdValue, fourthValue];
console.log(values);

// arrow function
const multiply = (num1, num2) => num1 * num2;

console.log(multiply(1, 3));
