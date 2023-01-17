// const output = document.getElementById('output');

// function displayText(text) {
//   console.log(text);
// }

// displayText('Hello world!');
// displayText('One more line');
// displayText('Next line');

// const tmp = 'tmp';
// displayText(`a ${tmp} b`);

// displayText(tmp[0]);
// displayText(tmp[1]);
// displayText(tmp.length);

// function equalStrings(a, b = '') {
//   if (a.length !== b.length) {
//     return false;
//   }
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// displayText(equalStrings('temp', 'temp'));
// displayText(equalStrings('tmp', 'temp'));
// displayText(equalStrings('tem', 'temp'));
// displayText(equalStrings('temp', 'temp123'));
// displayText(equalStrings('temp'));
// displayText(equalStrings('temp', ''));

// ******************************ParseINT***************************

// displayText(parseInt('10', 10));
// displayText(parseInt('1A', 16)); // A = 10, b = 11
// displayText(parseInt('11', 2)); // 0 - 0, 1-1, 10-2, 11-3....

// console.log(+'10');
// console.log(+'10abc');

// function calc(str) {
//   let a = '';
//   let b = '';
//   for (let i = 0; i < str.length; i++) {
//     const symbol = str[i];
//     // if (symbol === '0' || symbol === '1' || symbol === '2' || symbol === '3' || symbol === '4' || symbol === '5' || symbol === '6' || symbol === '7' || symbol === '8' || symbol === '9' {

//     // } // to ze samoje cto snizu
//     if (+symbol !== NaN) {
//     }
//   }
// }

// console.log(calc('10' + '7')); // 17

// function isNumber(str) {
//   return !Number.isNaN(+str);
// }

// console.log(isNumber('100')); // true
// console.log(isNumber('10a')); // false
// console.log(isNumber('abc')); // false

// ******************************SPLIT JOIN*****************************

// function a(s, d) {
//   return 0;
// }

// const a = (s, d) => {
//   return 0;
// };

// const a = s => 0;

// const a = function () {
//   return 0;
// };

// console.log('1,2,3,4,5'.split(',')); // splitr vozvrasiajet massiv vsegda
// console.log('13'.split(','));
// console.log('13, '.split(',')); // budet scitat cto posle zapiatoj pustaja stroka

// console.log('13, '.split(', ').filter(s => s.length !== 0));

// console.log(['1', '2', '3'].join(', ')); // prevrasiajet massiv v stroku

// formatDate принимает дату в формате 2022-09-25,
// а возвращает в формате 25/09/2022

// function formatDate(d) {
//   const arr = d.split('-'); // ['2022', '09','25]
//   return `${arr[2] / ${arr[1] / ${arr[0]}`
// return d.split('-').join('/');
// return d.split('-').reverse().join('/'); // mozno s reverse
// }
// console.log(formatDate('2022-09-25'));

// wordsCount принимает предложение, возвращает
// число слов в предложении

// function wordsCount(s) {
//   const arr = s.split(' ');
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length !== 0) {
//       count++;
//     }
//   }

//   return count;
// }

// const filteredArr = arr.filter(s => s.length !== 0);
// return filteredArr.length; // 2 variant

// console.log(wordsCount('Мама мыла раму'));
// console.log(wordsCount('Мама  мыла  раму'));

// makePhrase принимает массив слов и составляет из
// них предложение

// function makePhrase(arr) {
//   const firstWord = arr[0]; // mother
//   const lettersArr = firstWord.split(''); // ['m', 'o', 't', 'h', 'e', 'r']
//   lettersArr[0] = lettersArr[0].toUpperCase(); // 'm' => 'M'
//   arr[0] = lettersArr.join('');
//   return `${arr.join(' ')}.`;
// }

// console.log(makePhrase(['mother', 'father', 'brother']));

// toUpperCase() - delajet vse bukvi v stroke bolsimi
// toLowerCase() - delajet vse bukvi v stroke malenkimi

// *******************SLICE*************************************

// console.log('Mother washed window.'.slice(0, 4)); // 0 eto start stroki, 4 eto konec i dlinna. 4 - 0 eto dlinna. 4 ne vkliuciajetsia

// cut принимает в себя длинную строку. Если строка > 300
// символов, то она обрезается многоточием. Если строка <= 300
// символов, то возвращается эта же строка

// function cut(str) {
//   if (str.length > 300) {
//     let cutIndex = 297;
//     while (cutIndex >= 0 && str[cutIndex] !== ' ') {
//       cutIndex--;
//     }
//     // Esli net probelov, to cutIndex = -1
//     if (cutIndex === -1) {
//       cutIndex = 297;
//     }
//     return `${str.slice(0, cutIndex)} ...`;
//   }
//   return str;
// }

// console.log(cut('Mama mila ramu'));
// const verLongString =
//   'Phasellus nec nibh id massa bibendum placerat at at tortor. Integer maximus vitae ex a iaculis. Vivamus elementum gravida sapien, quis bibendum lacus congue vitae. Phasellus ac hendrerit mi, at ultricies velit. Integer sit amet ipsum ac erat sagittis aliquet. Sed lobortis sapien ex, vel sodales leo lacinia laoreet. Integer vel velit semper, rutrum libero vitae, blandit orci. Praesent pellentesque mollis magna in porttitor. Nullam sodales felis eu finibus consequat. Pellentesque lobortis sollicitudin massa, sit amet blandit nisl cursus sed. Donec tempus, est in gravida posuere, felis turpis sodales velit, in posuere leo dui vitae nunc. Nunc viverra finibus porttitor.';
// const shortString = cut(verLongString);
// console.log(
//   cut(
//     'Phasellus nec nibh id massa bibendum placerat at at tortor. Integer maximus vitae ex a iaculis. Vivamus elementum gravida sapien, quis bibendum lacus congue vitae. Phasellus ac hendrerit mi, at ultricies velit. Integer sit amet ipsum ac erat sagittis aliquet. Sed lobortis sapien ex, vel sodales leo lacinia laoreet. Integer vel velit semper, rutrum libero vitae, blandit orci. Praesent pellentesque mollis magna in porttitor. Nullam sodales felis eu finibus consequat. Pellentesque lobortis sollicitudin massa, sit amet blandit nisl cursus sed. Donec tempus, est in gravida posuere, felis turpis sodales velit, in posuere leo dui vitae nunc. Nunc viverra finibus porttitor.'
//   )
// );
