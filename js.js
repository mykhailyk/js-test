// Перебери об'єкт apartment, використовуючи цикл for...in,
// і запиши в масив keys всі його ключі, а в масив values
// всі значення його властивостей.
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (let key in apartment) {
//   console.log(key);
//   console.log("_________");
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// Напиши функцію calculateTotalPrice(productName),
//   яка приймає один параметр productName - назва товару.
//  Функція повинна повернути загальну
// вартість(ціна * кількість) товару з таким ім'ям з
// масиву products.
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line
  const total = 0;

  for (const key of products) {
    console.log(key[productName]);
    if (key[productName]) {
      total = products.price * products.quantity;
    }
  }
  return total;
  // Change code above this line
}
console.log(calculateTotalPrice("Radar"));
