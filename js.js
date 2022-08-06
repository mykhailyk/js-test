function checkTicket(number) {
  let leftSide = 0;
  let rightSide = 0;
  for (let i = 0; i < number.length; i += 1) {
    if (i < number.length / 2) {
      leftSide += Number(number[i]);
      continue;
    }
    rightSide += Number(number[i]);
  }
  console.log(leftSide);
  console.log(rightSide);
  // if (leftSide === rightSide) {
  //   return true;
  // }
  // return false;

  return leftSide === rightSide;
}

console.log(checkTicket("005212"));
console.log(checkTicket("133700"));
console.log(checkTicket("123032"));
