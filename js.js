function getEvenNumbers(start, end) {
  // Change code below this line
  const numbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      numbers.push(i);
    }
  }
  return numbers;
  // Change code above this line
}
console.log(getEvenNumbers(3, 11));
