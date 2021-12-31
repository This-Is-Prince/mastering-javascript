// Arrays, Functions and Objects
// Arrays - [], 0 index based

const friend1 = "anna";
const friend2 = "hey";
const friend3 = "hi";
const friend4 = "ciri";

const friends = [
  "anna",
  "hey",
  "hi",
  "ciri",
  null,
  undefined,
  45,
  false,
  { hi: "hi" },
  [32, "w"],
  () => {
    return "hi";
  },
];
console.log(friends[friends.length - 1]());
