function filterArray(numbers, value) {
  // Change code below this line
  numbers.sort(function (a, b) {
    return a - b;
  });
  const num = [];
  let end = numbers[numbers.length - 1];
  for (let i = value + 1; i <= end; i += 1) {
    num.push(i);
  }
  return num;
  // Change code above this line
}

console.log(filterArray([12, 24, 8, 41, 76], 38));
