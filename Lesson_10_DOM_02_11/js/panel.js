// to ze samoje, 2 podhod

// function button2(dom) {
//   // const dom = dom
//   return {
//     setActive: function(){
//       dom.classList.add('button_active')
//     },
//     setInactive: function(){
//       dom.classList.remove('button_inactive')
//     }
// }
// const button = button2(...)

// повесить на каждую кнопку обработчик click
// по клику на кнопку ставить ей класс button-active
// и убирать buton-active со всех остальных кнопок

/*
    Функция makePanel собирает все элементы
    с class="button" внутри class="panel"
    и реализовывает следущее поведение:

    1. Если кнопку нажать, то на неё вешается класс button-active
    2. Единовременно может быть только одна кнопка с классом button-active
    3. Есть особая кнопка button_select со своим поведением opisannim v makeSelectButton
*/

function makePanel() {
  const dom = document.getElementsByClassName('panel')[0];
  const buttons = dom.getElementsByClassName('button');
  const buttonsCollection = [];

  for (let i = 0; i < buttons.length; i++) {
    let buttonWrapper;
    if (buttons[i].classList.contains('button-select')) {
      buttonWrapper = makeSelectButton(buttons[i]);
    } else if (buttons[i].classList.contains('button-image')) {
      buttonWrapper = makeImageButton(buttons[i]);
    } else {
      buttonWrapper = makeButton(buttons[i]);
    }
    buttonsCollection.push(buttonWrapper);
    buttons[i].addEventListener('click', function () {
      buttonWrapper.setActive();
      for (let j = 0; j < buttons.length; j++) {
        if (i !== j) {
          buttonsCollection[j].setInactive();
        }
      }
    });
  }
}
// class Panel {
//   constructor() {
//     this.dom = document.getElementsByClassName('panel')[0];
//     const buttons = this.dom.getElementsByClassName('button');
//     const buttonsCollection = [];

//     for (let i = 0; i < buttons.length; i++) {
//       let button;
//       if (buttons[i].classList.contains('button-select')) {
//         button = new SelectButton(buttons[i]);
//       } else {
//         button = new Button(buttons[i]);
//       }

//       buttonsCollection.push(button);
//       button.dom.addEventListener('click', () => {
//         button.setActive();
//         for (let j = 0; j < buttonsCollection.length; j++) {
//           if (i !== j) {
//             buttonsCollection[j].setInactive();
//           }
//         }
//       });
//     }
// по клику на button_select создавать div class="selection"
// и прикреплять его к body
// по клику на любую другую кнопку - удалять

// 1 Solution, not correct, to much code, 2 solution at top
// document
//   .getElementsByClassName('button-select')[0]
//   .addEventListener('click', function () {
//     const existingSelection = document.getElementsByClassName('selection');
//     if (existingSelection.length === 0) {
//       // cto bi ne dobavlialos mnogo raz
//       const selection = document.createElement('div');
//       selection.classList.add('selection');
//       document.body.appendChild(selection);
//     }
//   });
// buttons[1].addEventListener('click', function () {
//   const existingSelection = document.getElementsByClassName('selection');
//   for (let i = 0; i < existingSelection.length; i++) {
//     existingSelection[i].parentNode.removeChild(existingSelection[i]);
//   }
// });
//   }
// }
//     for (let i = 0; i < this.buttons.length; i++) {
//       this.buttons[i].addEventListener('click', () => {
//         this.buttons[i].classList.add('button_active');
//         for (let j = 0; j < this.buttons.length; j++) {
//           if (i !== j) {
//             this.buttons[j].classList.remove('button_active');
//           }
//         }
//       });
//     }
