// Vsio toze samoje tolko s funkcijej.
// function circleHandlerFn(corners, parent) {
//   function mouseMoveHandler(evt) {
//     const yAxis = corners[0]; // top || bottom
//     const xAxis = corners[1]; // left || right

//     const x1 = parseInt(parent.dom.style.left, 10);
//     const y1 = parseInt(parent.dom.style.top, 10);
//     const originalWidth = parseInt(parent.dom.style.width, 10);
//     const originalHeight = parseInt(parent.dom.style.height, 10);
//     const x2 = evt.pageX;
//     const y2 = evt.pageY;
//     let newWidth, newHeight, newTop, newLeft;

//     if (yAxis === 'top') {
//       newHeight = originalHeight - (y2 - y1);
//       newTop = y2;
//     }

//     if (yAxis === 'bottom') {
//       newHeight = Math.abs(y2 - y1);
//       newTop = y1;
//     }

//     if (xAxis === 'left') {
//       newWidth = originalWidth - (x2 - x1);
//       newLeft = x2;
//     }
//     if (xAxis === 'right') {
//       newWidth = Math.abs(x2 - x1);
//       newLeft = x1;
//     }

//     parent.setWidth(newWidth);
//     parent.setHeight(newHeight);
//     parent.setTop(newTop);
//     parent.setLeft(newLeft);
//   }

//   function mouseDownHandler() {
//     document.body.addEventListener('mousemove', mouseMoveHandler);
//     document.body.addEventListener('mouseup', mouseUpHandler);
//   }

//   function mouseUpHandler() {
//     document.body.removeEventListener('mousemove', mouseMoveHandler);
//     document.body.removeEventListener('mouseup', mouseUpHandler);
//   }

//   function destroy() {
//     dom.removeEventListener('mousedown', mouseDownHandler);
//   }

//   const dom = document.createElement('div');
//   dom.classList.add('circle-handler');
//   dom.style[corners[0]] = '-3.5px';
//   dom.style[corners[1]] = '-3.5px';
//   parent.dom.appendChild(dom);
//   dom.addEventListener('mousedown', mouseDownHandler);

//   return {
//     dom,
//     destroy,
//   };
// }

class CircleHandler {
  // corners = ['top'. 'left'], naprimer
  // parent = instans klassa
  constructor(corners, parent) {
    this.dom = document.createElement('div');
    this.dom.classList.add('circle-handler');
    this.dom.style[corners[0]] = '-3.5px';
    this.dom.style[corners[1]] = '-3.5px';
    this.corners = corners;
    this.parent = parent;
    parent.dom.appendChild(this.dom);

    // peretaskivanije tocek dolzni rabotat kak resize bloka parent
    this.dom.addEventListener('mousedown', this.mouseDownHandler);
  }
  mouseDownHandler = () => {
    document.body.addEventListener('mousemove', this.mouseMoveHandler);
    document.body.addEventListener('mouseup', this.mouseUpHandler);
  };
  mouseMoveHandler = evt => {
    const yAxis = this.corners[0]; // top || bottom
    const xAxis = this.corners[1]; // left || right

    const x1 = parseInt(this.parent.dom.style.left, 10);
    const y1 = parseInt(this.parent.dom.style.top, 10);
    const originalWidth = parseInt(this.parent.dom.style.width, 10);
    const originalHeight = parseInt(this.parent.dom.style.height, 10);
    const x2 = evt.pageX;
    const y2 = evt.pageY;
    let newWidth, newHeight, newTop, newLeft;

    if (yAxis === 'top') {
      newHeight = originalHeight - (y2 - y1);
      newTop = y2;
    }

    if (yAxis === 'bottom') {
      newHeight = Math.abs(y2 - y1);
      newTop = y1;
    }

    if (xAxis === 'left') {
      newWidth = originalWidth - (x2 - x1);
      newLeft = x2;
    }
    if (xAxis === 'right') {
      newWidth = Math.abs(x2 - x1);
      newLeft = x1;
    }

    // to ze samoje cto scehru, optimizirovali tam
    // if (yAxis === 'top' && xAxis === 'left') {
    //   newWidth = originalWidth - (x2 - x1);
    //   newHeight = originalHeight - (y2 - y1);
    //   newTop = y2;
    //   newLeft = x2;
    // }

    // if (yAxis === 'top' && xAxis === 'right') {
    //   newWidth = Math.abs(x2 - x1);
    //   newHeight = originalHeight - (y2 - y1);
    //   newTop = y2;
    //   newLeft = x1;
    // }

    // if (yAxis === 'bottom' && xAxis === 'left') {
    //   newWidth = originalWidth - (x2 - x1);
    //   newHeight = Math.abs(y2 - y1);
    //   newTop = y1;
    //   newLeft = x2;
    // }

    // if (yAxis === 'bottom' && xAxis === 'right') {
    //   newWidth = Math.abs(x2 - x1);
    //   newHeight = Math.abs(y2 - y1);
    //   newTop = y1;
    //   newLeft = x1;
    // }
    this.parent.setWidth(newWidth);
    this.parent.setHeight(newHeight);
    this.parent.setTop(newTop);
    this.parent.setLeft(newLeft);
  };
  mouseUpHandler = () => {
    document.body.removeEventListener('mousemove', this.mouseMoveHandler);
    document.body.removeEventListener('mouseup', this.mouseUpHandler);
  };
  destroy() {
    this.dom.removeEventListener('mousedown', this.mouseDownHandler);
  }
}
