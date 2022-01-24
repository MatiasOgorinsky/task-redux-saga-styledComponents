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

const map = arr.reduce((next, element) => {
  return { ...next, [element.id]: element };
}, {});

document.getElementById("originalArray").innerHTML = JSON.stringify(arr);
document.getElementById("array").innerHTML = JSON.stringify(map);
