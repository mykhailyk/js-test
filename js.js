let count = 0;

function cc(card) {
  // Змініть код лише під цим рядком
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  console.log(count);
  let holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }

  return count + " " + holdbet;
  // Змініть код лише над цим рядком
}
console.log(cc(2, 3, 4, 5, 6));
console.log(cc(10, J, Q, K, A));
console.log(cc(3, 2, A, 10, K));
console.log(cc(7, 8, 9));
