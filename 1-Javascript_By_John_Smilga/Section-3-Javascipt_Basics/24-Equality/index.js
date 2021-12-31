// == checks only value
// === checks value and type

const num1 = 6;
const num2 = 6;

const value1 = num1 == num2;
console.log("num1 == num2", value1);
const value2 = num1 === num2;
console.log("num1 === num2", value2);

const num3 = 6;
const num4 = "6";

const value3 = num3 == num4;
console.log("num3 == num4", value3);
const value4 = num3 === num4;
console.log("num3 === num4", value4);
