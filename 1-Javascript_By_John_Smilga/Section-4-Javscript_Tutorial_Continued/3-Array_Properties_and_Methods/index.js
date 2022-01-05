// Array Properties and Methods
let names = ["john", "bobo", "barry", "olga", "ben"];

// array length
console.log(names.length);
// last item
console.log(names[names.length - 1]);

// concat
const lastNames = ["pepper", "onion", "banana"];
const allNames = names.concat(lastNames);
console.log(allNames);

// reverse
console.log(allNames.reverse());

// unshift
allNames.unshift("suy");
allNames.unshift("anna");
console.log(allNames);

// shift
allNames.shift();
allNames.shift();
console.log(allNames);

// push
allNames.push("suy");
console.log(allNames);
// pop
allNames.pop();
allNames.pop();
allNames.pop();
allNames.pop();
console.log(allNames);

// Splice - mutates original array
const specificNames = allNames.splice(2, 2);
console.log(specificNames);
console.log(allNames);
