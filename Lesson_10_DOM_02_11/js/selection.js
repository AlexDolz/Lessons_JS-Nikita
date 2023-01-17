/*
    Функция makeSelection принимает аргумент position:
    объект с координатами x, y и создаёт div class="selection"
    с top = y и left = x и прикрепляет его к document.body
    Возвращает объект
        1. dom - HTML элемент созданного div
        2. setWidth - метод, принимает число и проставляет ширину
           созданному div
        3. setHeight - метод, принимает число и проставляет
           высоту созданному div
        4. setLeft - метод, принимает число и проставляет left
           созданному div
        5. setTop - метод, принимает число и проставляет top
           созданному div
        6. destroy - уничтожает созданный div
*/

function makeSelection(position) {
  const dom = document.createElement('div');
  dom.classList.add('selection');
  dom.style.top = `${position.x}px`;
  dom.style.left = `${position.y}px`;
  document.body.appendChild(dom);

  function setWidth(width) {
    dom.style.width = `${width}px`;
  }
  function setHeight(height) {
    dom.style.height = `${height}px`;
  }
  function setLeft(left) {
    dom.style.left = `${left}px`;
  }
  function setTop(top) {
    dom.style.top = `${top}px`;
  }

  function destroy() {
    document.body.removeChild(dom);
  }
  return { dom, setWidth, setHeight, setLeft, setTop, destroy };
}

// class Selection {
//   constructor(position) {
//     // position: {x: <number> , y: <number>}
//     this.dom = document.createElement('div');
//     this.dom.classList.add('selection');
//     this.dom.style.left = `${position.x}px`;
//     this.dom.style.top = `${position.y}px`;

//     // sozdat po circle-handler v kazdom iz uglov

//     this.CircleHandlers = [
//       new CircleHandler(['top', 'left'], this),
//       new CircleHandler(['top', 'right'], this),
//       new CircleHandler(['bottom', 'left'], this),
//       new CircleHandler(['bottom', 'right'], this),
//     ];

// rassirennij variant, to ze samoje cto sverhu
// const topLeftCircleHandler = document.createElement('div');
// topLeftCircleHandler.classList.add('circle-handler');
// topLeftCircleHandler.style.top = `-2.5px`;
// topLeftCircleHandler.style.left = `-2.5px`;
// this.dom.appendChild(topLeftCircleHandler);

// const topRightCircleHandler = document.createElement('div');
// topRightCircleHandler.classList.add('circle-handler');
// topRightCircleHandler.style.right = `-2.5px`;
// topRightCircleHandler.style.top = `-2.5px`;
// this.dom.appendChild(topRightCircleHandler);

// const bottomLeftCircleHandler = document.createElement('div');
// bottomLeftCircleHandler.classList.add('circle-handler');
// bottomLeftCircleHandler.style.bottom = `-2.5px`;
// bottomLeftCircleHandler.style.left = `-2.5px`;
// this.dom.appendChild(bottomLeftCircleHandler);

// const bottomRightCircleHandler = document.createElement('div');
// bottomRightCircleHandler.classList.add('circle-handler');
// bottomRightCircleHandler.style.bottom = `-2.5px`;
// bottomRightCircleHandler.style.right = `-2.5px`;
// this.dom.appendChild(bottomRightCircleHandler);

//     document.body.appendChild(this.dom);
//     this.x = position.x;
//     this.y = position.y;
//   }
//   setWidth(width) {
//     this.dom.style.width = `${width}px`;
//   }
//   setHeight(height) {
//     this.dom.style.height = `${height}px`;
//   }
//   setLeft(left) {
//     this.dom.style.left = `${left}px`;
//   }
//   setTop(top) {
//     this.dom.style.top = `${top}px`;
//   }
//   destroy() {
//     this.CircleHandlers.forEach(function (handler) {
//       handler.destroy();
//     });
//     this.dom.parentNode.removeChild(this.dom);
//   }
// }
