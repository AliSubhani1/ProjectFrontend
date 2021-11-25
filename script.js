const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];
function calcTip(bills) {
  for (bill in bills) {
    if (bill >= 50 && bill <= 200) {
      tips.push(bills[bill] * 0.15);
      total.push(bills[bill] * 0.15 + bills[bill]);
    } else {
      tips.push(bills[bill] * 0.2);
      total.push(bills[bill] * 0.2 + bills[bill]);
    }
  }
}
calcTip(bills);
console.log("tips=", tips);
console.log("totals=", total);
