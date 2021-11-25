const jonas = [
  "Jonas",
  "schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];
const types = [];
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  types[i] = typeof jonas[i];
}
console.log(types);

console.log("----ONLY STRINGS------");

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("----BREAK WITH NUMBER------");

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] == "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
