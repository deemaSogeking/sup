const buyBtn = document.querySelector('.buy__btn');

buyBtn.addEventListener('click', function () {
  alert(
    'Пожалуйста перейдите в раздел CONTACT US, и заполните форму отправки.'
  );
});

const inputName = document.querySelector('.input__name');
const inputEmail = document.querySelector('.input__email');

const pressSend = document.querySelector('.footer__form-btn');
pressSend.addEventListener('click', function () {
  alert(
    inputName.value +
      ' Спасибо что выбрали нас! Мы с вами свяжемся в ближайшее время по email ' +
      inputEmail.value +
      '.'
  );
});
