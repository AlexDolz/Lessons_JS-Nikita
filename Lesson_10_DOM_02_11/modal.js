// Функция makeModal принимает аргумент title (string) i children (DOM element)

//     создаёт div class = "overlay", внутри него
//     создаёт div class="modal", внутри него
//     создаёт div class="modal_header" и div class="modal_body"

//     проставляет заголовок в modal_header

//     создаёт div class="button button_close button-small"
//     прикрепляет его к modal_header

//     prikrepliajet children v modal body

//     и прикрепляет созданный overlay к document.body

function makeModal(title, children) {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');
  modalHeader.innerHTML = title;

  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');
  modalBody.appendChild(children);

  const buttonClose = document.createElement('div');
  buttonClose.classList.add('button', 'button-close', 'button-small');

  modal.appendChild(modalHeader);
  modal.appendChild(modalBody);
  overlay.appendChild(modal);
  modalHeader.appendChild(buttonClose);

  document.body.appendChild(overlay);

  // при клике по крестику - удалять overlay из document.body
  function close() {
    document.body.removeChild(overlay);
    buttonClose.removeEventListener('click', close);
  }

  buttonClose.addEventListener('click', close);
}
