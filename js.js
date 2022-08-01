function calculateTotal(number) {
  // Change code below this line
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    // Change this line
    sum += i;
  }
  return sum;
  // Change code above this line
}
console.log(calculateTotal(3));
