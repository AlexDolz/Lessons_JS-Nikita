const red = document.getElementsByClassName('red')[0];
const yellow = document.getElementsByClassName('yellow')[0];
const green = document.getElementsByClassName('green')[0];

// red.addEventListener('click', function (evt) {
//   console.log('red is clicked bubbling', evt.target.className);
// });
// yellow.addEventListener('click', function (evt) {
//   console.log('yellow is clicked bubbling', evt.target.className);
// });
// green.addEventListener('click', function (evt) {
//   console.log('green is clicked bubbling', evt.target.className);
// });

// red.addEventListener(
//   'click',
//   function () {
//     console.log('red is clicked capturing');
//   },
//   true
// );
// yellow.addEventListener(
//   'click',
//   function () {
//     console.log('yellow is clicked capturing');
//   },
//   true
// );
// green.addEventListener(
//   'click',
//   function () {
//     console.log('green is clicked capturing');
//   },
//   true
// );

// по клику на зелёный элемент - менять цвет красного на чёрный,
// а чёрного на красный

// const parent = document.getElementsByClassName('js-parent')[0];
// green.addEventListener('click', function () {
//   parent.classList.toggle('black');
// });

// Mozno tak
// const parent = document.getElementsByClassName('js-parent')[0];
// green.addEventListener('click', function () {
//   parent.style.backgroundColor =
//     parent.style.backgroundColor === 'black' ? 'red' : 'black';
// });

// ***********************************************************************

// по клику на любой из 3 блоков красить его в чёрный цвет (если ещё нет)
// если есть - возвращать оригинальный
// ************************************************************************

// поправить код выше, чтобы он работал на любом уровне вложенности
const parent = document.getElementsByClassName('js-parent')[0];
parent.addEventListener('click', function (evt) {
  let target = evt.target;

  while (!target.classList.contains('js-block')) {
    target = target.parentNode;
  }

  target.classList.toggle('black');
});
