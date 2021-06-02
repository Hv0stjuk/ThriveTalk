$(document).ready(function(){
  $('.testimonials__slider').slick({
    slidesToShow:1,
    autoplay:false,
  });
});

function burgerMenu () {
  const burgerBtn = document.querySelector('.burger__img');
  burgerBtn.addEventListener('click', () => {
    document.querySelector('.header__top').classList.toggle('show');
    document.querySelector('.header__logo').classList.toggle('hidden');
  });
}

burgerMenu();