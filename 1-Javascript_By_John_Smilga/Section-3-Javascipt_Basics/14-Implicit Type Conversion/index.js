// Implicit Type Conversion

// const number1 = "10";
// const number2 = "23";

// const result1 = number1 - number2;
// console.log("subtract =", typeof result1, result1);
// const result2 = number1 * number2;
// console.log("multiply =", typeof result2, result2);
// const result3 = number1 / number2;
// console.log("divide =", typeof result3, result3);
// const result4 = number1 % number2;
// console.log("modulus =", typeof result4, result4);
// const result5 = number1 + number2;
// console.log("add", typeof result5, result5);

const randomNumber = 13;

document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  let value = document.getElementById("amount").value;
  console.log(typeof value, value);
  value = parseInt(value);
  console.log(typeof value, value);
  console.log("Input Value Type");
  console.log(value);
  console.log("Sum of Two Values");
  console.log(randomNumber + value);
});
