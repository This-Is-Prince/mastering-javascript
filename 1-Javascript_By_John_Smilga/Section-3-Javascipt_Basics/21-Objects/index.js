// Objects - key/value pairs methods
// dot notation

const person = {
  firstName: "Prince",
  lastName: "Kumar",
  age: 40,
  education: false,
  married: true,
  siblings: ["anna", "susan", "peter"],
  greeting: function () {
    console.log("hello " + this.firstName);
  },
  greeting2() {
    console.log("this is shorthand for object functions");
  },
};

const age = person.age;
console.log(age);
person.firstName = "Prince Kumar ";

console.log(person.firstName);
console.log(person.siblings[2]);
person.greeting();
person.greeting2();
