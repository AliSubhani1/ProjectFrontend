let bill = 275;

let tip = 0;

bill >= 50 && bill <= 300 ? (tip = 0.15 * bill) : (tip = 0.2 * bill);
let totalAmount = bill + tip;
console.log(
  `The bill was (${bill}), the tip was (${tip}) and the total value was (${totalAmount})`
);
