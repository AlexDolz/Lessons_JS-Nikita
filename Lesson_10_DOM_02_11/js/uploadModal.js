/*
    Функция makeUploadModal при вызове
    рисует модальное окно загрузки файла
    Заголовок = "Upload a file"
    Контент = инпут для ввода ссылки на картинку и кнопка Submit
*/

function makeUploadModal() {
  const form = document.createElement('div');
  form.classList.add('upload_form');

  const input = document.createElement('input');
  input.classList.add('upload_form_input');

  const submit = document.createElement('div');
  submit.classList.add('btn');
  submit.innerHTML = 'Submit';

  form.appendChild(input);
  form.appendChild(submit);

  makeModal('Upload a file', form);

  // по клику на Submit проверять является ли то, что мы ввели
  //   в input ссылкой на картинку. Ссылка на картинку всегда
  //   заканчивается ".png", ".jpg" или ".jpeg"
  // Если ссылка верная, то создать в form img src=ссылка

  const img = document.createElement('img');
  img.style.display = 'none';
  img.width = 300;
  img.height = 300;
  form.appendChild(img);

  function onSubmitClick() {
    const value = input.value;
    const isPng = value.endsWith('.png');
    const isJpg = value.endsWith('.jpg');
    const isJpeg = value.endsWith('.jpeg');
    const isValid = isPng || isJpeg || isJpg;
    console.log('isValid', isValid);

    // Если ссылка верная, то создать в form img src=ссылка
    if (isValid) {
      img.src = value;
      img.alt = 'photo';
      img.style.display = 'block';
    }
  }

  submit.addEventListener('click', onSubmitClick);
}
