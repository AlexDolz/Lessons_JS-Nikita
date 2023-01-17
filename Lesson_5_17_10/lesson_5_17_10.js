// function a() {
//   return 'Hello, world!';
// }

// console.log(a());

// // console.log(b()); tut ne otrabotajet
// const b = () => {
//   return 'Hello, world!';
// };

// console.log(b());

// function c() {
//   function insideC(i) {
//     console.log(`Called ${i} times`);
//   }
//   for (let i = 0; i < 5; i++) {
//     insideC(i);
//   }
// }
// c();

// function c2() {
//   function insideC() {
//     insideC.i = insideC.i + 1;
//     console.log(`Called ${insideC.i} times`);
//   }
//   insideC.i = 0;
//   for (let i = 0; i < 5; i++) {
//     insideC(i);
//   }
// }
// c();

// function recursiveSum(n) {
//   // rekursija
//   if (n === 1) {
//     return 1;
//   }
//   return n + recursiveSum(n - 1);
// }

// console.log(recursiveSum(5));

// (function selfCalled() {
//   // samovizivajusiesia funkcija
//   function insideC() {
//     insideC.i = insideC.i + 1;
//     console.log(`Called ${insideC.i} times`);
//   }
//   insideC.i = 0;
//   for (let i = 0; i < 5; i++) {
//     insideC(i);
//   }
// })();

// ******************************TASKS*************************************
// Функция getShortName принимает полное ФИО и сокращает его

// function getShortName(str) {
//   const arr = str.split(' ');
//   return `${arr[0]} ${arr[1][0]}. ${arr[2][0]}.`;
// }

// console.log(getShortName('Иванов Иван Иванович')); // Иванов И.И

// Функция getShortNames принимает массив из полных ФИО и
// возвращает массив из сокращённых

// function getShortNames(arr) {
//   return arr.map(getShortName);
// }

// console.log(getShortNames(['Иванов Иван Иванович', 'Петров Пётр Петрович'])); // ['Иванов И.И.', 'Петров П.П.']

// *************************************************************************
// Функция isSingleNumber принимает на вход число
// и возвращает true, если это число состоит из одной и той же
// цифры

// function isSingleNumber(n) {
//   const str = Math.abs(n).toString().replace('.', ''); // replace ubrali tocku
//   // console.log(str);
//   for (let i = 1; i < str.length; i++) {
//     if (str[i] !== str[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isSingleNumber(11111)); // true
// console.log(isSingleNumber(-111)); // true
// console.log(isSingleNumber(123)); // false
// console.log(isSingleNumber(1.11)); // true

// **************************************************************************
// Килограм мяса стоит 2$ и имеет 100к.
// Килограм овощей стоит 0.5$ и имеют 75к.
// Функция getMenu() принимает первым параметром бюджет
// а вторым минимально число необходимых для жизни калорий
// возвращает массив из 2 чисел, первым числом идёт количество
// килограм мяса, вторым - количество килограм овощей.
// Мяса должно быть максимум.

// function getMenu(budget, minCalories) {
//   let meatCount = 0;
//   let vegCount = 0;
//   meatCount = Math.floor(budget / 2);
//   vegCount = (budget % 2) * 2;

//   while (meatCount * 100 + vegCount * 75 < minCalories) {
//     meatCount--;
//     vegCount = vegCount + 4;
//   }

//   return [meatCount, vegCount];
// }

// console.log(getMenu(20, 1000)); // [10,0]
// console.log(getMenu(20, 2000)); // [5,20]

// function getMenu2(budget, minCalories) {
//   let meatCount = 0;
//   let vegCount = 0;
//   meatCount = 0;
//   vegCount = budget * 2;

//   while (meatCount * 100 + vegCount * 75 >= minCalories) {
//     meatCount++;
//     vegCount = vegCount - 4;
//   }

//   meatCount--;
//   vegCount = vegCount + 4;

//   return [meatCount, vegCount];
// }

// console.log(getMenu2(20, 1000)); // [10,0]
// console.log(getMenu2(20, 2000)); // [5,20]

// *************************************************************************

// Функция hasProgress принимает на вход массив чисел
// и возвращает true, если этот массив нигде не убывает

// function hasProgress(arr) {
//   // for (let i = 1; i < arr.length; i++) {
//   //     if (arr[i] < arr[i-1]) {
//   //         return false;
//   //     }
//   // }
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(hasProgress([1, 5, 100])); // true
// console.log(hasProgress([1, 3, 2])); // false

// **************************************************************************
// Proverka na massiv
// [1, 2, 3] instanceof Array; // true
// '123' instanceof Array; // false
// 0 instanceof Array; // false

// objedinenije 2 massivov
// console.log([1, 2, 3].concat([4, 5, 6].concat([7, 8, 9])));

// **************************************************************************
// Функция flattenArray принимает на вход массив
// и делает его плоским

// resenije s rekursijej
// function flattenArray(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     // console.log(item);
//     const isArray = item instanceof Array;
//     if (!isArray) {
//       res.push(item);
//     } else {
//       res = res.concat(flattenArray(item));
//     }
//   }
//   return res;
// }

// console.log(flattenArray([9, [2, [3, 4], 5], 6, 7, 8])); // [1,2,3,4,5,6,7,8]

// resenije bez rekursiji
// function flattenArray2(arr) {
//   let res = [];
//   let copyArr = [...arr]; // kopija massiva, takoj ze
//   let hasSubArrays = copyArr.some(item => item instanceof Array); // true tak kak jest podmassivi v masssive

// while (hasSubArrays) {
//   res = [];
//   for (let i = 0; i < copyArr.length; i++) {
//     res = res.concat(copyArr[i]);
//   }
//   copyArr = [...res];
//   hasSubArrays = copyArr.some(item => item instanceof Array); // true tak kak jest podmassiv v massive, raz true idiom dalse
//   }

//   return res;
// }

// console.log(flattenArray2([9, [2, [3, 4], 5], 6, 7, 8])); // [1,2,3,4,5,6,7,8]

// console.log([9].concat([2, [3, 4], 5]));

// ************************************************************************

// Функция mirror принимает массив и зеркально его отражает
// относительно конца

// function mirror(arr) {
//   const res = [...arr]; // skopirovali massiv
//   return res.concat(arr.reverse().slice(1)); // v skopirovannij masssiv zapisivajem reverse massiv, no ostajotsia  dublirovannaja 3, poetomu primeniajem slice(1)-nam nuzni indexi ot 1 i dalse
// }

// console.log(mirror([])); // []
// console.log(mirror([1, 2, 3])); // [1,2,3,2,1]

// ************************************************************************

// Функция findCat принимает на вход массив строк
// и возвращает true, если в какой-то из строк массива есть "кот"

// function findCat(arr) {
//   return arr.some(str => str.toLowerCase().includes('кот'));
// }

// console.log(findCat(['собака', 'который день', 'мама мыла раму']));

// ************************************************************************
