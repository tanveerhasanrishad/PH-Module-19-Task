function smallestName(arr) {
  let name = arr[0];

  for (const word of arr) {
    if (name.length > word.length) {
      name = word;
    }
  }
  return name;
}

const names = ["rahim", "robin", "rafi", "ron", "rashed"];

const result = smallestName(names);

console.log(result);
