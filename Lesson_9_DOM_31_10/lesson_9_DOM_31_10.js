// если в поле "Cube side" вводить значение, то автоматически должно
// заполняться поле cube volume по принципу x * x * x, где x = cube side
// если x * x * x = NaN, то и писать в cube volume

// ********************************************************************

// добавить поведение: если в поле Cube volume вводить значение, то автоматически
// должно заполняться поле Cube side по принципу "корень кубический из Cube volume"
// если корня кубического не существует, то писать Not a number

const sideInput = document.getElementById('side');
const volumeInput = document.getElementById('volume');
sideInput.addEventListener('keyup', function (evt) {
  // const value = sideInput.value
  const value = evt.target.value;
  const cube = value * value * value;
  volumeInput.value = Number.isNaN(cube) ? 'Not a number' : cube; // Math.pow(value, 3)
});
// ******************************************************************
volumeInput.addEventListener('keyup', function (evt) {
  const value = evt.target.value;
  const side = Math.pow(value, 1 / 3);
  sideInput.value = Number.isNaN(side) ? 'Not a number' : side;
});
// **********************************END*******************************

// window.document
//   .getElementsByClassName('form')[0]
//   .addEventListener('click', function (evt) {
//     console.log(evt);
//   });

// ******************************************************************
// когда водим мышкой внутри form, обновлять поле Mouse coordinates по шаблону
// `(${x}, ${y})`, где x и y - относительные координаты курсора
// если вышли за пределы формы - очищать поле

const coordInput = document.getElementById('coord');
const form = document.getElementsByClassName('form')[0];
form.addEventListener('mousemove', function (evt) {
  const x = evt.pageX - form.offsetLeft;
  const y = evt.pageY - form.offsetTop;
  coordInput.value = `(${x}, ${y})`;
});

form.addEventListener('mouseleave', function () {
  coordInput.value = '';
});

// *******************************************************************
// когда водим мышкой внутри form, "прикреплять" к курсору блок coord_tooltip
// с небольшим отступом вниз и писать координаты по тому же шаблону в нём
// если вышли за пределы формы - прятать тултип и сбрасывать координаты в нём

const coordToolTip = document.getElementById('coord-tooltip');
form.addEventListener('mousemove', function (evt) {
  const x = evt.pageX - form.offsetLeft;
  const y = evt.pageY - form.offsetTop;
  coordToolTip.style.top = evt.clientY + 10 + 'px';
  coordToolTip.style.left = evt.clientX + 7 + 'px';
  coordToolTip.innerHTML = `(${x}, ${y})`;
});
form.addEventListener('mouseleave', function () {
  coordToolTip.classList.add('hidden');
});
form.addEventListener('mouseenter', function () {
  coordToolTip.classList.remove('hidden');
});

// ********************************************************************
//  когда нажать Shift, то чекбокс выделится
// если отжать shift - сбросится

const shiftKey = document.getElementById('shiftkey');
document.body.addEventListener('keydown', function (evt) {
  shiftKey.checked = evt.shiftKey;
});
document.body.addEventListener('keyup', function (evt) {
  shiftKey.checked = evt.shiftKey;
});
