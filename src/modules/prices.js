const slider2 = document.querySelector('.swiper2');

let mySwiper2;

function mobileSlider2() {
  if (window.innerWidth <= 780 && slider2.dataset.mobile === 'false') {
    //     eslint-disable-next-line no-undef
    mySwiper2 = new Swiper(slider2, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      slideClass: 'prices__item',
      wrapperClass: 'prices__wrapper',

      pagination: {
        el: '.pag-3',
        type: 'bullets',
        clickable: true,
      },
    });

    slider2.dataset.mobile = 'true';
  }

  if (window.innerWidth > 780 && slider2.classList.contains('swiper-initialized')) {
    slider2.dataset.mobile = 'false';
    mySwiper2.destroy();
  }
}

mobileSlider2();

window.addEventListener('resize', () => {
  mobileSlider2();
});
