/* eslint-disable no-undef */
const forwardBrands = document.querySelector('[data-forward="brands"]');
const brandCards = document.querySelector('.brands__cards');

forwardBrands.addEventListener('click', () => {
  forwardBrands.classList.toggle('link__forward--active');
  brandCards.classList.toggle('brands__cards--active');

  if (forwardBrands.classList.contains('link__forward--active')) {
    forwardBrands.querySelector('button').textContent = 'Cкрыть';
  } else {
    forwardBrands.querySelector('button').textContent = 'Показать все';
  }
});

const slider = document.querySelector('.swiper');

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 540 && slider.dataset.mobile === 'false') {
    mySwiper = new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      slideClass: 'brands__card',
      wrapperClass: 'brands__cards',

      pagination: {
        el: '.pag-1',
        type: 'bullets',
        clickable: true,
      },
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 540 && slider.classList.contains('swiper-initialized')) {
    slider.dataset.mobile = 'false';
    mySwiper.destroy();
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});
