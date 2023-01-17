const arr = window.document.body.getElementsByClassName('child');
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

const parent = window.document.getElementById('parent');

// console.log(parent);

const arr1 = parent.getElementsByClassName('child');

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i].className);
//   console.log(arr[i].id);
//   console.log(arr[i].classList); // arr[i].className.split(' ')
// }

// arr[0].classList.add('blue');
// arr[0].classList.remove('red');
// arr[0].classList.toggle('blue');

// arr[0].addEventListener('click', function (event) {
//   console.log('event.target', event.target);
//   console.log('arr[0] I got clicked!');
// });

// при клике на child красить его в синий цвет. если элемент уже покрашен в синий
// то возвращать исходный цвет

// parent.addEventListener('click', function (evt) {
//   evt.target.classList.toggle('blue');
// });

// *********************************************************************
// parent.addEventListener('mouseenter', function (evt) {
//   console.log('mouse enter');
// });
// parent.addEventListener('mouseleave', function (evt) {
//   console.log('mouse leave');
// });

// при наведении на child красить его в синий. при покидании child убирать синий

// 1 solution
// arr[0].addEventListener('mouseenter', function (event) {
//   arr[0].classList.add('blue');
// });
// arr[0].addEventListener('mouseleave', function (event) {
//   arr[0].classList.remove('blue');
// });
// arr[1].addEventListener('mouseenter', function (event) {
//   arr[1].classList.add('blue');
// });
// arr[1].addEventListener('mouseleave', function (event) {
//   arr[1].classList.remove('blue');
// });
// arr[2].addEventListener('mouseenter', function (event) {
//   arr[2].classList.add('blue');
// });
// arr[2].addEventListener('mouseleave', function (event) {
//   arr[2].classList.remove('blue');
// });

// 2 Solution

// function onEnter(evt) {
//   evt.target.classList.add('blue');
// }
// function onLeave(evt) {
//   evt.target.classList.remove('blue');
// }
// Mozno i tak lucse ciklom
// arr[0].addEventListener('mouseenter', onEnter);
// arr[0].addEventListener('mouseleave', onLeave);

// arr[1].addEventListener('mouseenter', onEnter);
// arr[1].addEventListener('mouseleave', onLeave);

// arr[2].addEventListener('mouseenter', onEnter);
// arr[2].addEventListener('mouseleave', onLeave);

// Lucse ciklom
// for (let i = 0; i < arr.length; i++) {
//   arr[i].addEventListener('mouseenter', onEnter);
//   arr[i].addEventListener('mouseleave', onLeave);
// }
// **********************************************************************
// removeEventListener

// при наведении на child красить его в <цвет>. при покидании child убирать <цвет>
// для первого child цвет - синий, для второго - чёрный, для третьего - коричневый

// function getOnEnter(color) {
//   return function (evt) {
//     evt.target.classList.add(color);
//   };
// }
// function getOnLeave(color) {
//   return function (evt) {
//     evt.target.classList.remove(color);
//   };
// }

// for (let i = 0; i < arr.length; i++) {
//   const color = i === 0 ? 'blue' : i === 1 ? 'black' : 'brown';
//   const onEnter = getOnEnter(color);
//   const onLeave = getOnLeave(color);
//   arr[i].addEventListener('mouseenter', onEnter);
//   arr[i].addEventListener('mouseleave', onLeave);
// }

// **********************************************************************

// при наведении на child красить его в <цвет>. при покидании child убирать <цвет>
// для первого child цвет - синий, для второго - чёрный, для третьего - коричневый
// при клике на child возвращать его оригинальный цвет и отменять все события
// только на нём

function getOnEnter(color) {
  return function (evt) {
    evt.target.classList.add(color);
  };
}
function getOnLeave(color) {
  return function (evt) {
    evt.target.classList.remove(color);
  };
}

function getCancel(onEnter, onLeave, color) {
  return function cancel(evt) {
    evt.target.classList.remove(color);
    evt.target.removeEventListener('mouseenter', onEnter);
    evt.target.removeEventListener('mouseleave', onLeave);
    evt.target.removeEventListener('click', cancel);
  };
}

for (let i = 0; i < arr.length; i++) {
  const color = i === 0 ? 'blue' : i === 1 ? 'black' : 'brown';
  const onEnter = getOnEnter(color);
  const onLeave = getOnLeave(color);
  const cancel = getCancel(onEnter, onLeave, color);
  arr[i].addEventListener('mouseenter', onEnter);
  arr[i].addEventListener('mouseleave', onLeave);
  arr[i].addEventListener('click', cancel);
}
