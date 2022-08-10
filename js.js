// 13_____ Перебери об'єкт apartment, використовуючи цикл for...in,
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

// 16______Напиши функцію countTotalSalary(salaries), яка приймає
// об'єкт зарплат, де ім'я властивості - це ім'я співробітника,
// а значення властивості - це зарплата.Функція повинна розраху
// вати загальну суму зарплат співробітників і повернути її.
// Використовуй змінну totalSalary для зберігання загальної
// суми зарплати.
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const keys = Object.values(salaries);
//   for (const key of keys) {
//     totalSalary += key;
//   }

//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

//20_____ Напиши функцію calculateTotalPrice(productName),
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
  let total = 0;
  const product = Object.keys(products);
  for (let prod of product) {
    if (productName === products[prod].name) {
      total = products[prod].price * products[prod].quantity;
    }
  }
  return total;
  // Change code above this line
}
console.log(calculateTotalPrice("Radar"));
