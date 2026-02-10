function calculateElectronicsBudget(lapPrice, tabPrice, mblPrice) {
  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;

  let total = laptop * lapPrice + tablet * tabPrice + mobile * mblPrice;

  return total;
}

const result = calculateElectronicsBudget(2, 1, 4);

console.log(result);
