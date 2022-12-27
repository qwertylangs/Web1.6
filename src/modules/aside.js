const linksMenu = document.querySelectorAll('.menu__link');
const langsMenu = document.querySelectorAll('.menu__lang-btn');
const burgerAside = document.querySelectorAll('[data-burger="aside"]');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');
const underlay = document.querySelector('.underlay');
const body = document.querySelector('body');

const feedbackBtns = document.querySelectorAll('[data-btn="feedback"]');
const callBtns = document.querySelectorAll('[data-btn="call"]');

linksMenu.forEach((link) => {
  link.addEventListener('click', () => {
    linksMenu.forEach((links) => {
      if (links.classList.contains('menu__link--active')) {
        links.classList.remove('menu__link--active');
      }
    });
    if (window.innerWidth <= 1440) {
      menu.classList.toggle('menu--active');
      container.classList.toggle('container--active');
      underlay.classList.toggle('underlay--active');
      body.classList.toggle('body-hidden');
    }
    link.classList.add('menu__link--active');
  });
});

langsMenu.forEach((link) => {
  link.addEventListener('click', () => {
    langsMenu.forEach((links) => {
      if (link.classList.contains('menu__lang-btn--active')) {
        links.classList.remove('menu__lang-btn--active');
      }
    });
    link.classList.add('menu__lang-btn--active');
  });
});

burgerAside.forEach((btn) => {
  btn.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
    container.classList.toggle('container--active');
    underlay.classList.toggle('underlay--active');
    body.classList.toggle('body-hidden');
  });
});

underlay.addEventListener('click', () => {
  if (container.classList.contains('container--active')) {
    menu.classList.toggle('menu--active');
    container.classList.toggle('container--active');
    underlay.classList.toggle('underlay--active');
    body.classList.toggle('body-hidden');
  }
});

feedbackBtns.forEach((callBtn) => {
  callBtn.addEventListener('click', () => {
    if (container.classList.contains('container--active')) {
      menu.classList.remove('menu--active');
      container.classList.remove('container--active');
      underlay.classList.remove('underlay--active');
      body.classList.remove('body-hidden');
    }
  });
});

callBtns.forEach((callBtn) => {
  callBtn.addEventListener('click', () => {
    if (container.classList.contains('container--active')) {
      menu.classList.remove('menu--active');
      container.classList.remove('container--active');
      underlay.classList.remove('underlay--active');
      body.classList.remove('body-hidden');
    }
  });
});

// feedback
const modalFeedback = document.querySelector('[data-modal="feedback"]');
const burgerFeedback = document.querySelector('[data-burger="modal-feedback"]');
// call-btn upper
const underlayModals = document.querySelector('.underlay-modals');

feedbackBtns.forEach((callBtn) => {
  callBtn.addEventListener('click', () => {
    modalFeedback.classList.add('modal--feedback-active');
    modalFeedback.classList.add('modal--feedback-active');
    container.classList.add('container--active');
    underlayModals.classList.add('underlay-modals--active');
    body.classList.add('body-hidden');
    menu.classList.add('menu--transparency');
  });
});

burgerFeedback.addEventListener('click', () => {
  modalFeedback.classList.remove('modal--feedback-active');
  modalFeedback.classList.remove('modal--feedback-active');
  container.classList.remove('container--active');
  underlayModals.classList.remove('underlay-modals--active');
  body.classList.remove('body-hidden');
  menu.classList.remove('menu--transparency');
});

underlayModals.addEventListener('click', () => {
  modalFeedback.classList.remove('modal--feedback-active');
  container.classList.remove('container--active');
  underlayModals.classList.remove('underlay-modals--active');
  body.classList.remove('body-hidden');
  menu.classList.remove('menu--transparency');
});

// на underlay не раюотает

// call
const modalCall = document.querySelector('[data-modal="call"]');
const burgerCall = document.querySelector('[data-burger="modal-call"]');

callBtns.forEach((callBtn) => {
  callBtn.addEventListener('click', () => {
    modalCall.classList.add('modal--feedback-active');
    modalCall.classList.add('modal--feedback-active');
    container.classList.add('container--active');
    underlayModals.classList.add('underlay-modals--active');
    body.classList.add('body-hidden');
    menu.classList.add('menu--transparency');
  });
});

burgerCall.addEventListener('click', () => {
  modalCall.classList.remove('modal--feedback-active');
  modalCall.classList.remove('modal--feedback-active');
  container.classList.remove('container--active');
  underlayModals.classList.remove('underlay-modals--active');
  body.classList.remove('body-hidden');
  menu.classList.remove('menu--transparency');
});

underlayModals.addEventListener('click', () => {
  modalCall.classList.remove('modal--feedback-active');
  container.classList.remove('container--active');
  underlayModals.classList.remove('underlay-modals--active');
  body.classList.remove('body-hidden');
  menu.classList.remove('menu--transparency');
});
