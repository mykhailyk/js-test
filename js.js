const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  const mass = [];
  const product = Object.keys(products);
  for (let prod of product) {
    console.log(products[prod].name);
    console.log(propName);
    if (products[prod].name === propName) {
      mass.push(apartment[key]);
    }
    // console.log(products[prod].propName);
  }

  // Change code above this line
}

console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity"));

// for (const key of keys) {
//   // keys.push(key);
//   values.push(apartment[key].name);
