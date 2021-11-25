Mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
John = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
higherBmi = (johnsBmi, marksBmi) => {
  if (johnsBmi > marksBmi) {
    console.log(`John's BMI (${johnsBmi}) is higher than Mark's (${marksBmi})`);
  } else {
    console.log(`Marks BMI(${marksBmi}) is higher than John's (${johnsBmi})`);
  }
};

higherBmi(John.calcBmi(), Mark.calcBmi());
