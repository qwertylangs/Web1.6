const forwardTech = document.querySelector('[data-forward="technics"]');
const techCards = document.querySelector('.technics__cards');

forwardTech.addEventListener('click', () => {
  forwardTech.classList.toggle('link__forward--active');
  techCards.classList.toggle('technics__cards--active');
  if (forwardTech.classList.contains('link__forward--active')) {
    forwardTech.querySelector('button').textContent = 'Cкрыть';
  } else {
    forwardTech.querySelector('button').textContent = 'Показать все';
  }
});

const slider1 = document.querySelector('.swiper1');

let mySwiper1;

function mobileSlider1() {
  if (window.innerWidth <= 540 && slider1.dataset.mobile === 'false') {
    // eslint-disable-next-line no-undef
    mySwiper1 = new Swiper(slider1, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      slideClass: 'technics__card',
      wrapperClass: 'technics__cards',

      pagination: {
        el: '.pag-2',
        type: 'bullets',
        clickable: true,
      },
    });

    slider1.dataset.mobile = 'true';
  }

  if (window.innerWidth > 540 && slider1.classList.contains('swiper-initialized')) {
    slider1.dataset.mobile = 'false';
    mySwiper1.destroy();
  }
}

mobileSlider1();

window.addEventListener('resize', () => {
  if (window.innerWidth < 540 && techCards.classList.contains('technics__cards--active')) {
    techCards.classList.remove('technics__cards--active');
  }
  mobileSlider1();
});
