// Завдання 5. Напишіть функцію removeDuplicates(arr), яка повертає масив, у якому видалено
// повторювані елементи з масиву arr.

// var arr = [
//   "pHp",
//   "php",
//   "Css",
//   "css",
//   "css",
//   "script",
//   "script",
//   "html",
//   "html",
//   "java",
// ];
// // 1_________
// function removeDuplicates(arr) {
//   const normalize = arr.map((item) => item.toUpperCase());
//   return arr.filter((item, index, array) => {
//     return normalize.indexOf(item.toUpperCase()) === index;
//   });
// }

// 2_________
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// 3______
// function removeDuplicates(arr) {
//   const normalize = arr.map((item) => item.toUpperCase());
//   const notDuplicated = [];
//   for (let item of arr) {
//     if (normalize.includes(item.toUpperCase())) {
//       notDuplicated.push(item);
//     }
//   }
//   return notDuplicated;
// }

// console.log(removeDuplicates(arr));
