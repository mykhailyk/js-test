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
// function findMatches(...args) {
//   const matches = []; // Don't change this line
//   let array1 = args.shift();

//   for (let i = 0; i < array1.length; i += 1) {
//     if (args.includes(array1[i])) matches.push(array1[i]);
//     // Change code above this li  ne
//   }
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

// 35________ Доповни метод updateBook(oldName, newName) таким чином,
//   щоб він змінював назву книги з oldName на newName у властивості
// books. Використовуй indexOf() для того, щоб знайти потрібний
// елемент масиву, і splice() для того, щоб замінити цей елемент
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     console.log(this.books.splice(bookIndex, 1));
//     this.books.splice(bookIndex, 0, newName);
//   },
// };
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
// console.log(bookShelf);

// 40_____
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionsIndex = this.potions.indexOf(oldName);
//     // console.log(this.potions.splice(potionsIndex, 0));
//     this.potions.splice(potionsIndex, 1, newName);
//     console.log(this.potions);
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// 41_________________41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === oldName) {
//         return (potion.name = newName);
//       }
//       return `Potion ${oldName} is not in inventory!`;
//     }
//   },

//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = this.potions[i];
//       if (name === potionName) {
//         return potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (let potion of potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());

// 6_____4
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(function (number, index) {
//     if (numbers[index] > value) {
//       filteredNumbers.push(numbers[index]);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 10], 3));

// 7_______4
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(function (array, index) {
//     if (secondArray.includes(firstArray[index])) {
//       commonElements.push(firstArray[index]);
//     }
//   });
//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));

// 10_____4
// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// };
// // Change code above this line
// console.log(calculateTotalPrice([164, 48, 291]));

// 13______4
// function changeEven(numbers, value) {
//   const newArray = [];
//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     } else {
//       newArray.push(element);
//     }
//   });
//   return newArray;
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// 14_____4
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

// 17______4
// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };
// console.log(
//   getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ])
// );

// 25______4
// Change code below this line
// const getFriends = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);
//   return allFriends.filter(
//     (user, index, array) => array.indexOf(user) === index
//   );
// };

// console.log(
//   getFriends(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37,
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34,
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24,
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21,
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27,
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38,
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39,
//       },
//     ],
//     "Briana Decker"
//   )
// );

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortByDescendingFriendCount = (users) =>
//   [...users].sort(
//     (first, second) => first.friends.length - second.friends.length
//   );
// Change code below this line

// 10_______5
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     for (let item of this.items) {
//       return this.items.splice(this.items.indexOf(itemToRemove), 1);
//     }
//   }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class Car {
//   // Change code below this line
//   #price;
//   constructor({ price }) {
//     this.#price = price;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     const MAX_PRICE = 50000;
//     if (this.#price < MAX_PRICE) {
//       this.#price = newPrice;
//     }
//     // Change code above this line
//   }
// }
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000
// audi.price = 49000;
// console.log(audi.price); // 49000
// audi.price = 51000;
// console.log(audi.price); // 49000

class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
  static checkPrice(price) {
    if (price > Car.MAX_PRICE) {
      return "Error! Price exceeds the maximum";
    } else {
      return "Success! Price is within acceptable limits";
    }
  }
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
