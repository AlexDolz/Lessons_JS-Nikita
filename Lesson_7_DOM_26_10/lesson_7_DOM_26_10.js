function validate(str) {
  return /^\d{0,4}$/.test(str);
}
console.log(validate('11')); // true
console.log(validate('laaa')); // false
console.log(validate('12121212')); // false

// evt.preventDefault()
// document.getElementsByClassName('input')[0].value = 123;

// if ((document.getElementsByClassName('input')[0].value = '123')) {
//   console.log('Success');
// }

// getElementsByClassName - vsegda vozvrasiajet massiv, stavim [0] cto bi vernut pervij element massiva

// ***********************************************************************

// запретить ввод в .input любых не-цифровых значений и ограничить ввод 4 символами

// как только ввели 4 цифры - красить инпут в succes

const input = document.getElementsByClassName('input')[0];
const header = document.getElementById('header');

function addSuccess() {
  // sdelali dopolnitelnuju funkciju na success
  input.classList.add('success');
  header.innerHTML = 'PIN is Entered';
}

function removeSuccess() {
  //sdelali dopolnitelnuju funkciju na udalenije success
  input.classList.add('success');
  header.innerHTML = 'Enter PIN';
}

let realInputValue = '';
input.addEventListener('keypress', function (evt) {
  // keypress keyup keydown
  const char = evt.key;
  if (evt.target.value.length === 4 || isNaN(+char)) {
    evt.preventDefault();
  } else {
    realInputValue = realInputValue + char;
  }
});

input.addEventListener('keyup', function (evt) {
  const value = evt.target.value;
  if (value.length === 4) {
    addSuccess();
  } else {
    removeSuccess();
  }
  const valueArr = value.split('');
  for (let i = 0; i < valueArr.length; i++) {
    valueArr[i] = '*';
  }
  evt.target.value = valueArr.join('');
  // 2 variant
  // evt.target.value = evt.target.value.replace(/[0-9][^$]/g, '*')
});

// ***********************************************************************
// по нажатию на кнопку ставить в конец input.value соответствующее кнопке
// значение

// По умолчанию header = "Введите пин"
// Если пин введён (стоит класс success) - хедер меняется на "Пин введён"

const numbers = document.getElementsByClassName('js-number');

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function (evt) {
    const n = evt.target.getAttribute('data-number');
    if (input.value.length < 4) {
      input.value = input.value + '*';
      realInputValue = realInputValue + n;
      console.log(realInputValue);
    }
    if (input.value.length === 4) {
      addSuccess();
    }
  });
}

// element.innerHTML
// document.getElementById('header').innerHTML = 'Custom header';

// *************************************************************************

// при вводе показывать - *

// по нажатию на Clear - очищать инпут и realInputValue

const clearButton = document.getElementsByClassName('js-clear')[0];
clearButton.addEventListener('click', function () {
  input.value = '';
  realInputValue = '';
  removeSuccess();
});

// po nazatiju na backspace ocisiat odnu cifru
const backspaceButton = document.getElementsByClassName('js-backspace')[0];
backspaceButton.addEventListener('click', function () {
  input.value = input.value.slice(0, input.value.length - 1);
  realInputValue = realInputValue.slice(0, realInputValue.length - 1);
});

// по нажатию на Показать пин - показать пин :)

const showPinButton = document.getElementsByClassName('show-pin')[0];
// showPinButton.addEventListener('click', function () {
//   input.value = realInputValue;
// });

// mousedown- nazali levuju knopku i derzim
// mouseup - otpustili levuju knopku misi
showPinButton.addEventListener('mousedown', function (evt) {
  input.value = realInputValue;
  evt.target.innerHTML = 'Hide PIN';
  const hide = function () {
    input.value = realInputValue.replace(/\d/g, '*');
    evt.target.innerHTML = 'Show PIN';
    window.removeEventListener('mouseup', hide);
  };
  window.addEventListener('mouseup', hide);
});

// когда пин показан менять название кнопки на "Скрыть пин"
// Mozno tak kak snizu, mozno tak kak sverhu evt.target.innerHTML = 'Hide PIN' i innerHTML 'Show PIN'

// showPinButton.addEventListener('mousedown', function () {
//   showPinButton.textContent = 'Hide PIN';
//   window.addEventListener('mouseup', function () {
//     showPinButton.textContent = 'Show PIN';
//   });
// });
