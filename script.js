"use strict";

const calcAge3 = (result) => 2021 - birthYear;
let birthYear = 1994;
const age = calcAge3(birthYear);
console.log(age);

const yearsUntillRetirement = (birth) => {
  const age = 2021 - birth;
  let retirementYears = 65 - age;
  return retirementYears;
};
console.log(yearsUntillRetirement(1994));
