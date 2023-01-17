/*
    Функция makeButton принимает на вход HTML элемент
    и возвращает объект из трёх свойств

    1. dom - переданный HTML элемент
    2. setActive - функция, которая ставит на dom класс button-active
    3. setInactive - функция, которая убирает с dom класс button-active
*/

function makeButton(dom) {
  function setActive() {
    dom.classList.add('button_active');
  }
  function setInactive() {
    dom.classList.remove('button_active');
  }
  return {
    dom,
    setActive,
    setInactive,
  };
}

class Button {
  constructor(dom) {
    this.dom = dom;
  }
  setActive() {
    this.dom.classList.add('button_active');
  }
  setInactive() {
    this.dom.classList.remove('button_active');
  }
}
