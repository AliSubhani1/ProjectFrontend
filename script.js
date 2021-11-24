let marksWeight1 = 78;
let marksHeight1 = 1.69;
let johnsWeight1 = 92;
let johnsHeight1 = 1.95;

let marksWeight2 = 95;
let marksHeight2 = 1.88;
let johnsWeight2 = 85;
let johnsHeight2 = 1.76;

function calculateBmi(weight, height) {
  return weight / (height * height);
}
let marksFirstBmi = calculateBmi(marksWeight1, marksHeight1);
let johnsFirstBmi = calculateBmi(johnsWeight1, johnsHeight1);
let marksSecondBmi = calculateBmi(marksWeight2, marksHeight2);
let johnsSecondBmi = calculateBmi(johnsWeight2, johnsHeight2);
console.log("Test Data 1");
console.log("Marks BMI=", marksFirstBmi);
console.log("Johns BMI=", johnsFirstBmi);
console.log("Test Data 2");
console.log("Marks BMI=", marksSecondBmi);
console.log("Johns BMI=", johnsSecondBmi);
let markHigherBmi1 = marksFirstBmi > johnsFirstBmi;
console.log(markHigherBmi1);
let markHigherBmi2 = marksSecondBmi > johnsSecondBmi;
console.log(markHigherBmi2);
if (marksFirstBmi > johnsFirstBmi) {
  console.log(
    `Marks BMI is (${marksFirstBmi}) high than Johns(${johnsFirstBmi})`
  );
} else {
  console.log("Johns bmi is higher than marks");
}
