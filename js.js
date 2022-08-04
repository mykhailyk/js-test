function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  // for (let i = 0; i < numbers.length; i += 1) {
  //   const number = numbers[i];
  for (let number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}
console.log(filterArray([12, 24, 8, 41, 76], 20));
