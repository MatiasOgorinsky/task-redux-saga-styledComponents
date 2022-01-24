const arr = [
  {
    id: 1,
    name: "Tel Aviv",
  },
  {
    id: 2,
    name: "London",
  },
  {
    id: 3,
    name: "Moscow",
  },
];

// Write a function to that will get the array as an argument and
// return an object like the following

// const map = {
//   1: {
//     id: 1,
//     name: "Tel Aviv",
//   },
//   2: {
//     id: 2,
//     name: "London",
//   },
//   3: {
//     id: 3,
//     name: "Moscow",
//   },
// };

const map = [];
arr.forEach((elem) => {
  map[elem.id] = elem;
});

console.log(map, "displaying the new arrray of objects");
// Make the function as short as possible. Do not modify the original array.
