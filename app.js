document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('#navbarBurger');
  const menu = document.querySelector('#navbarExampleTransparentExample');

  if (burger && menu) {
    burger.addEventListener('click', function () {
      menu.classList.toggle('is-active');
      burger.classList.toggle('is-active');
    });
  } else {
    console.error('Elemen navbarBurger atau navbarExampleTransparentExample tidak ditemukan');
  }
});
