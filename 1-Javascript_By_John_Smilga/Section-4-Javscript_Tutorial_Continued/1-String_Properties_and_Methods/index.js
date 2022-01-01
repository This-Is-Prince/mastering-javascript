// String properties and methods
// wrapper String Object, don't memorize methods
let text = " Peter Jordan";
let lenOfText = text.length;

console.log(lenOfText); // 13
console.log(text); //  Peter Jordan
console.log(text.toLowerCase()); //  peter jordan
console.log(text.toUpperCase()); //  PETER JORDAN
console.log(text[1]); // P
console.log(text.charAt(lenOfText - 1)); // n
console.log(text.charAt(1)); // P
console.log(text.indexOf("c")); // -1
console.log(text.indexOf("J")); // 7
console.log(text); //  Peter Jordan
console.log(text.startsWith("Peter")); // false
console.log(text.trim()); // Peter Jordan
console.log(text.trim().startsWith("Peter")); // true
console.log(text.includes("P")); // true
console.log(text.includes("Jor")); // true
console.log(text.includes("jor")); // false
console.log(text.slice(0, 2)); //  P
console.log(text.slice(1, 3)); // Pe
console.log(text.slice(-3)); // dan
