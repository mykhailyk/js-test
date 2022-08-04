function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (let ord of order) {
    // for (let i = 0; i < order.length; i += 1) {
    total += ord;
  }

  // Change code above this line
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
