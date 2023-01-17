/*
    Функция makeSelectButton принимает HTML элемент
    и возвращает объект из трёх полей

    1. dom - этот HTML элемент
    2. setActive - наследует поведение makeButton.setActive
       и добавляет новое:
       
       2.1. zdiom mousedown po div class="container"

       2.1.1. po mousedown sozdajom selection na koordinatah nazatija i udaliajem predidusij selection, esli est
       2.1.2 po mousemove menijaem razmeri i polozenije selection
       2.1.3 po mouseup zaversajem redaktirovanije i vozvrasiajemsia k punktu 2.1
    
    3. setInactive - наследует поведение makeButton.setInactive
       и добавляет новое:

       3.1. udaliajem div class="selection", esli on est
       3.2 perestajom zdat mousedown po div class="container"
*/

function makeSelectButton(dom) {
  const button = makeButton(dom);
  const container = document.getElementsByClassName('container')[0];

  let selection;
  let startX, startY;

  function handleMouseDown(evt) {
    const x = evt.pageX;
    const y = evt.pageY;
    startX = x;
    startY = y;

    if (selection) {
      selection.destroy();
    }
    selection = makeSelection({ x, y });
    document.body.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseup', handleMouseUp);
  }

  function handleMouseMove(evt) {
    const x1 = evt.pageX;
    const y1 = evt.pageY;
    const newWidth = Math.abs(x1 - startX);
    const newHeight = Math.abs(y1 - startY);
    selection.setHeight(newHeight);
    selection.setWidth(newWidth);
    selection.setLeft(Math.min(x1, startX));
    selection.setTop(Math.min(y1, startY));
  }

  function handleMouseUp() {
    document.body.removeEventListener('mousemove', handleMouseMove);
    document.body.removeEventListener('mouseup', handleMouseUp);
  }

  function setActive() {
    button.setActive();
    if (selection) {
      return;
    }

    container.addEventListener('mousedown', handleMouseDown);
  }

  function setInactive() {
    button.setInactive();
    if (selection) {
      selection.destroy();
      selection = null;
    }
  }
  return {
    dom,
    setActive,
    setInactive,
  };
}

// class SelectButton extends Button {
//   constructor(dom) {
//     super(dom);
//     this.container = document.getElementsByClassName('container')[0];
//   }
//   setActive() {
//     super.setActive(); // vizovit bolee staruju kopiju etogo metoda this.dom.classList.add('button_active');

//     this.container.addEventListener('mousedown', this.mouseDownHandler);

//     // po mousdown zadavat levij verhnij ugol videlenija(koordinati top/left)
//     // mousemove
//     // po mouseup zadavat pravij niznij ugol(razmeeri widt/height)

//     // доработать метод следующим поведением:
//     // по клику на кнопку она становится активной
//     // если после этого мы кликнули куда-то на
//     // class=container, то на месте клика создаётся
//     // selection
//     // evt.pageX / evt.pageY
//   }

//   mouseDownHandler = evt => {
//     const x = evt.pageX;
//     const y = evt.pageY;
//     if (this.selection) {
//       this.selection.destroy();
//     }
//     this.selection = new Selection({ x, y });
//     document.body.addEventListener('mousemove', this.mouseMoveHandler);
//     document.body.addEventListener('mouseup', this.mouseUpHandler);
//     // dorabotat etot kod, ctob mozno bilo tianut v liubuju storonu
//   };

//   mouseMoveHandler = evt => {
//     const x1 = this.selection.x;
//     const x2 = evt.pageX;
//     const y1 = this.selection.y;
//     const y2 = evt.pageY;
//     const width = Math.abs(x2 - x1);
//     const height = Math.abs(y2 - y1);
//     this.selection.setWidth(width);
//     this.selection.setHeight(height);
//     this.selection.setLeft(Math.min(x1, x2));
//     this.selection.setTop(Math.min(x1, x2));
//   };
//   mouseUpHandler = evt => {
//     document.body.removeEventListener('mousemove', this.mouseMoveHandler);
//     document.body.removeEventListener('mouseup', this.mouseUpHandler);
//   };

//   setInactive() {
//     super.setInactive(); // this.dom.classList.remove('button_active');
//     if (this.selection) {
//       this.selection.destroy();
//     }
//     this.selection = null;
//     this.container.removeEventListener('mousedown', this.mouseDownHandler);
//   }
// }
