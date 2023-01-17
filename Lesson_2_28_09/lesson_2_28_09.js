// let a = 5;
// let b = 5.33;
// let veryBigNumber = 5_000_000_000;
// **************************TO FIXED**************************************
// toFixed  --> Vozvrasiajet stroku(string)
// const c = (12.3456789).toFixed(2); // 12.35 vsegda stolko znakov posle zapiatoj skolko napisem
// console.log(c);
// *************************TO PRECISION**************************
// toPrecision --> vozvrasiajet stroku(string), skolko cifr v itogovom cisle
// const d = (12.3456789).toPrecision(3); // e+4 eto 10 v 4 stepeni
// console.log(d);

// *******************************TO EXPONENTIAL***********************
// toExponential --> vozvrasiajet stroku(string) // skolko dolzno bit cifr posle tocki
// const e = (12.3456789).toExponential(3);
// console.log(e);

// Функция round, должна округлить число до 2 знака
// после запятой если необходимо

// function round(num) {
//   if ((num * 10) % 1 === 0) {
//     return num + ''; // togda vozvratit stroku kak i nado
//   } else {
//     return num.toFixed(2);
//   }
// }

// console.log(round(12));
// console.log(round(12.3));
// console.log(round(12.3444));

// ***************************PARSEINT PARSEFLOAT*********************
// const a = parseInt('12.3', 10); //12 perevodit so strocki v cislo
// const b = parseFloat('12.3', 10); // 12.3 perevodit so strocki v cislo
// console.log(a, b);

// ********MATH.MIN  MATH.MAX  MATH.ROUND  MATH.CEIL  MATH.FLOOR*******
// Math.min(12, 48); // 12  verniot minimalnopje cilso
// Math.max(12, 48); // 48 verniot maksimalnoje cilso
// Math.round(12.345); // 12 okruglit po matematike
// Math.round(12.89); // 13 okruglit po matematike
// Math.ceil(12.1); // 13 okruglit v bolsuju
// Math.floor(12.89); //12 okruglit v mensuju

// Функция divide принимает два числа
// Возвращает остаток от деления большего на меньшее

// function divide(a, b) {
//   if (a > b) {
//     return a % b;
//   } else {
//     return b % a;
//   }
// }

// function divide(a, b) {
//   return Math.max(a, b) % Math.min(a, b);
// }
// console.log(divide(3, 5));
// console.log(divide(5, 3));
// console.log(divide(5, 5));
// console.log(divide(-5, 5));

// const a = 'some string';

// const substr = 'substring';
// const str = `Here's ${substr}`;
// console.log(str);

// const char = str[2]; // 'r'
// str[2] = '1';
// console.log(str);

// ********************SLICE  SPLIT  JOIN***************************
// const sicedStr = str.slice(0, 6); // Here's

// console.log('original: ', str);
// console.log('sliced: ', sicedStr);

// split razrezajet stroku v massiv
// join sojediniajet massiv v stroki
// toUpperCase / toLowerCase

// Функция checkForFox принимает строку
// Возвращает true если в строке есть слово fox
// Возвращает false если нет

// function checkForFox(string) {
//   const array = string.split(' '); // ['tiny-tiny', 'little', 'fox']
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].toLowerCase() === 'fox') {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(checkForFox('tiny-tiny little fox'));

// ******************************INCLUDES***********************
// const str = 'Hello, worlld!';
// console.log(str.includes('ll')); // verniot true esli jest dve ll
// console.log(str.includes('gg')); // false, potomu cto net takih bukv

// const example = 'tiny-tiny little fox';
// console.log(example.includes('fox')); // true
// console.log('I love to dance foxtrot!'.includes('fox')); // true

// ***********************STARTSWITH  ENDSWITH*****************
// console.log(str.startsWith('Hello')); //true dolzno sovpadat nacalo stroki
// console.log(str.endsWith('world!')); //true dolzno sovpadat konec stroki

// *********************INDEXOF  LASTINDEXOF*************************
// console.log(str.indexOf('ll')); // 2 vozvrasiajet tolko pervoje vhozdenije i zakancivajet rabotu
// console.log(str.lastIndexOf('ll')); // 10 vozvrasiajet posledneje znacenije ll esli est dvojnije v stroke
// console.log(str.indexOf('cat')); // -1

// функция findAllMatches принимает 2 аргумента
// первый - текст, второй - подстрока
// возвращает массив с индексами всех вхождений

// function findAllMatches(str, substr) {
//   // str = 'test test test test' substr = 'test'
//   const res = [];
//   let stringCopy = str;
//   let delta = 0;
//   while (stringCopy.includes(substr)) {
//     let firstMatch = stringCopy.indexOf(substr); // 6

//     stringCopy = stringCopy.slice(firstMatch + substr.length);

//     res.push(firstMatch + delta);
//     delta += firstMatch + substr.length;
//   }
//   return res;
// }
// console.log(findAllMatches('Hello test test test test', 'test'));

// **********************REPLACE METHOD*************************
// const str = 'Hello, world!';
// console.log(str.replace('ll', '!!')); //cto nado zamenit, na cto
