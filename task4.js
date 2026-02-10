function findAveragePhonePrice(phones) {
  let count = 0;
  let total = 0;
  for (const phone of phones) {
    total += phone.price;
    count++;
  }
  return (total / count).toFixed(2);
}

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

const result = parseFloat(findAveragePhonePrice(phones));
console.log("Average Price of Phones:", result);
