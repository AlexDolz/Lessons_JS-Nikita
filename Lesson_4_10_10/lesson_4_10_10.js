// const obj = { a: 1, b: '123' };
// console.log(obj['b']); //'123'

// ************************ARRAYS******************************

// const arr = [1, '123', [2, 3], { a: 15 }];
// console.log(arr[1]); // '123'

// const copyArr = arr;
// copyArr[1] = '321';
// console.log(arr[1]); // 321

// //variant 1 to ze samoje cto snizu, novaja zapis, spread operator
// const shallowCopy = [...arr];
// // variant 2 to ze samoje cto sverhu
// const shallowCopy2 = [];
// for (let i = 0; i < arr.length; i++) {
//   shallowCopy2[i] = arr[i];
//   // i = 2
//   // shallowCopy2[2] = arr[2] = [2,3]
// }

// shallowCopy[1] = 'xyz';
// console.log(arr[1]);

// *************************ARRAYS.METHODS***********************

// [].forEach
// Variant 1
// ['A', 'B', 'C'].forEach((item, ind) => {
//   console.log(item, ind);
// });

// Variant 2
// for (let ind = 0; ind < ['A', 'B', 'C'].length; ind++) {
//   const item = ['A', 'B', 'C'][ind];
//   console.log(item, ind);
// }

// [].map

// const result = ['A', 'B', 'C'].map((item, ind) => {
//   return `Hello, ${item}`;
// });

// console.log(result);

// [].reduce

// const result2 = [1, 2, 5].reduce((accumulator, item) => {
//   return accumulator + item; // 1+2+5 = 8
// }, 0); // dobavit mozno startovoje znacenije, ukazat ne 0 dopustim a liuboje cislo, po umolcianiju 0
// console.log(result2);

// *************************ZADACKI********************************

// функция toObject принимает в себя массив arr состоящий из
// элементов вида { id: <строка>, value: <число> }, возвращает
// объект вида { "<строка>": число }

// 1 Variant s reduce
// function toObject(arr) {
//   return arr.reduce((accumulator, item) => {
//     accumulator[item.id] = item.value;
//     return accumulator;
//   }, {});
// }

// // 2 variant cerez for
// function toObject2(array) {
//   const res = {};
//   for (let i = 0; i < array[i].length; i++) {
//     const item = array[i];
//     res[item.id] = item.value;
//   }
//   return res;
// }

// console.log(toObject([
//   { id: 'One', value: 1 },
//   { id: 'two', value: 2 },
//   { id: 'three', value: 3 },
// ])); // {'One': 1, 'two': 2, 'three': 3}

// **************************************************************

// в функцию getMark передают массив объектов вида
// { name: "Студент", mark: 5 } и строку name
// задача - сказать какая оценка у студента с именем name

// function getMark(arr, name) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name === name) {
//       return arr[i].mark;
//     }
//   }
// }

// console.log(
//   getMark(
//     [
//       { name: 'Katia', mark: 5 },
//       { name: 'Nikita', mark: 100 },
//       { name: 'Boria', mark: 5 },
//     ],
//     'Boria'
//   )
// ); // 5

// const nums = [
//   { value: 1 },
//   { value: 2 },
//   { value: 3 },
//   { value: 4 },
//   { value: 5 },
// ];
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i].value);
// }

// *******************************************************************

// В функцию getMark2 передают объект, где ключ - это имя
// студента, а значение - его оценка + параметр name
// надо вернуть оценку студента с именем name

// function getMark2(obj, name) {
//   return obj[name];
// }

// console.log(
//   getMark2(
//     {
//       Katia: 5,
//       Boria: 5,
//       Nikita: 100,
//     },
//     'Boria'
//   )
// ); // 5

// *********************************************************************

// функция getMaxPower принимает массив arr состоящий из элементов
// { power: <число>, owner: <строка> }
// и возвращает владельца самой большой мощности
// если есть несколько максимальных мощностей - вернуть любого

// function getMaxPower(arr) {
//   const powers = arr.map(function (item) {
//     return item.power; // powers = [2, 10, 1] vsegda takoj ze dlinni massiv
//   });
//   console.log('powers: ', powers); // check
//   const maxPower = Math.max(...powers); //... oznaciajet cto nam nado vikinut granici(to est skobki) to ze samoje bilo bi tak const maxPower = Math.max(2,10,1);
//   console.log('maxPower', maxPower); // check
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].power === maxPower) {
//       return arr[i].owner;
//     }
//   }
// }

// console.log(
//   getMaxPower([
//     { power: 2, owner: 'Петя' },
//     { power: 10, owner: 'Рон' },
//     { power: 1, owner: 'Вова' },
//   ])
// ); // Рон

// ********************************************************************

// функция reverseArr принимает на вход массив и возвращает его
// копию развёрнутую задом наперёд

// function reverseArr(arr) {
// return arr.reverse(); mozno tak sdelat
//   const res = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     const j = arr.length - 1 - i;
//     res[j] = arr[i];
//   }
//   return res;
// }

// console.log(reverseArr([])); // []
// console.log(reverseArr([1, 2, 3])); // [3,2,1]
// console.log(reverseArr([{ a: 2 }, 1, '230'])); // ['230', 1, {a:2}]

// **********************************************************************

// функция getAbsoluteMax принимает на вход массив чисел и
// возвращает наибольшее по модулю число

// function getAbsoluteMax(arr) {
//   // arr = [0,1,-6]
//   // absArr = [0,1,6]
//   const absArr = arr.map(function (item) {
//     return Math.abs(item);
//   });
//   const maxNumber = Math.max(...absArr);
//   // 6 - naibolseje
//   if (arr.includes(maxNumber)) {
//     return maxNumber;
//   } else {
//     return -maxNumber;
//   }
// }

// 2 Variant
// function getAbsoluteMax2(arr) {
//   let currentMaximum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (Math.abs(arr[i]) > Math.abs(currentMaximum)) {
//       currentMaximum = arr[i];
//     }
//   }
//   return currentMaximum;
// }

// 3 Variant
// function getAbsoluteMax3(arr) {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   if (Math.abs(max) > Math.abs(min)) {
//     return max;
//   } else {
//     return min;
//   }
// }

// console.log(getAbsoluteMax([0, 1, -6])); // -6
// console.log(getAbsoluteMax([-6, 7, 120])); // 120

// ********************************************************************

// функция getRating принимает на вход массив элементов
// вида { likes: <число>, dislikes: <число> }
// вернуть суммарный рейтинг

// function getRating(arr) {
//   return arr.reduce((accumulator, value) => {
//     return accumulator + value.likes - value.dislikes;
//   }, 0);
// }

// console.log(
//   getRating([
//     { likes: 500, dislikes: 10 },
//     { likes: 1, dislikes: 15 },
//     { likes: 60, dislikes: 80 },
//   ])
// ); // 456

// **********************************************************************

// метод getMostPopular принимает на вход массив arr
// и возвращает самый часто встречаемый в нём элемент

// function getMostPopular(arr) {
//   const baskets = [];
//   for (let i = 0; i < arr.length; i++) {
//     baskets[i] = [];
//   }
//   for (let i = 0; i < arr.length; i++) {
//     let repeatsCount = 1;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         repeatsCount++;
//       }
//     }
//     console.log(arr[i], repeatsCount); // check
//     baskets[repeatsCount - 1].push(arr[i]);
//   }
//   for (let i = baskets.length - 1; i >= 0; i--) {
//     if (baskets[i].length !== 0) {
//       // esli massiv ne pustoj
//       return baskets[i][0];
//     }
//   }
// }

// console.log(getMostPopular([1, 2, 3, 2, 5, 2])); // 2
// console.log(getMostPopular(['123', '1', '2', 'a', 'a'])); // a

// *****************METHODS FIND,FILTER,SOME,EVERY******************

const foundElement = [1, 2, 3, 4, 5].find(function (item) {
  return item > 3;
}); // 4 vozvrasiajet tolko pervij
console.log(foundElement);

const filteredArray = [1, 2, 3, 4, 5].filter(function (item) {
  return item > 3;
}); // [ 4, 5 ]

console.log(filteredArray);

const someElement = [1, 2, 3, 4, -1].some(function (item) {
  return item < 0;
}); // true, потому что -1 < 0
console.log(someElement);

const hasNegative = [1, 2, 3, 4, 5].every(function (item) {
  return item > 0;
}); // true, потому что КАЖДЫЙ элемент положительный
console.log(hasNegative);

const allPositive = [1, 2, 3, 4, 5].every(function (item) {
  return item > 0;
}); // true potomucto kazdij element polozitelnij
console.log(allPositive);
