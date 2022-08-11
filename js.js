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
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let total = 0;
//   const product = Object.keys(products);
//   for (let prod of product) {
//     if (productName === products[prod].name) {
//       total = products[prod].price * products[prod].quantity;
//     }
//   }
//   return total;
//   // Change code above this line
// }
// console.log(calculateTotalPrice("Radar"));

// 22________У прогнозі максимальних температур також може бути необов'язкова
// властивість icon - іконка погоди.Заміни оголошення змінних
// yesterday, today, tomorrow і icon однією операцією
// деструктуризації властивостей об'єкта highTemperatures.
// Задай значення за замовчуванням для icon - рядок
// "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;
// // Change code above this line
// const ALL = (yesterday + today + tomorrow) / 3;
// console.log(ALL);
// console.log(icon);

// 25_______Ми отримали прогноз погоди на два дні,
//   з мінімальними і максимальними температурами, а також
// необов'язковими іконками. Заміни оголошення всіх змінних
// однією операцією деструктуризації властивостей об'єкта
// forecast.Задай значення за замовчуванням для іконок,
//   змінних todayIcon і tomorrowIcon - рядок
// "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;
// Change code below this line

// 31___________Використовуючи операцію rest,
//доповни код функції add() таким чином,
//щоб вона приймала будь - яку кількість аргументів,
//рахувала і повертала їх суму.
// function add(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }
//   return total;
//   // Change code above this line
// }
// console.log(add(12, 4, 11, 48));

// 32_________Функція addOverNum() рахує суму всіх аргументів.
//Зміни параметри і тіло функції addOverNum() таким чином,
//щоб вона рахувала суму тільки тих аргументів, які більші
//за задане число.Це число повинно бути першим параметром функції.
// Change code below this line
// function addOverNum(...args) {
//   let total = 0;
//   let first = args.shift();
//   for (const arg of args) {
//     if (first < arg) {
//       total += arg;
//     }
//   }
//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); //93 -51

//33__________Функція findMatches() приймає довільну кількість аргументів.
//Першим аргументом завжди буде масив чисел, а решта аргументів
//будуть просто числами.
//Доповни код функції таким чином, щоб вона повертала новий масив matches,
//в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві
//першого аргументу.
// Change code below this line
function findMatches(...args) {
  const matches = []; // Don't change this line
  let array1 = args.shift();

  for (let i = 0; i < array1.length; i += 1) {
    if (args.includes(array1[i])) matches.push(array1[i]);
    // Change code above this li  ne
  }

  return matches;
}
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
