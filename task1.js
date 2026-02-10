function lowestNumber(arr) {
  let lowest = arr[0];
  for (const num of arr) {
    if (lowest > num) {
      lowest = num;
    }
  }
  return lowest;
}

const heights2 = [167, 190, 120, 165, 137];

const result = lowestNumber(heights2);

console.log(result);
