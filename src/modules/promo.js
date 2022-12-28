const forwardPromo = document.querySelector('[data-forward="promo"]');

const text = document.querySelector('.promo__text');
const linksServices = document.querySelectorAll('.promo__link');

forwardPromo.addEventListener('click', () => {
  if (window.innerWidth < 1268) {
    text.classList.toggle('promo__text--active');
    forwardPromo.classList.toggle('link__forward--active');

    if (forwardPromo.classList.contains('link__forward--active')) {
      forwardPromo.querySelector('button').textContent = 'Cкрыть';
    } else {
      forwardPromo.querySelector('button').textContent = 'Читать далее';
    }
  }
});

linksServices.forEach((link) => {
  link.addEventListener('click', () => {
    linksServices.forEach((link) => {
      if (link.classList.contains('promo__link--active')) {
        link.classList.remove('promo__link--active');
      }
    });
    link.classList.add('promo__link--active');
  });
});
