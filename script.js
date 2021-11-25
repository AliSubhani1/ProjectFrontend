const bills = [125, 555, 44];
calculateTips = (bills) => {
  let tips = [];
  for (i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 300) {
      tips.push(bills[i] * 0.15);
    } else {
      tips.push(bills[i] * 0.2);
    }
  }
  return tips;
};

console.log(calculateTips(bills));
