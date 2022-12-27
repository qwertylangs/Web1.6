/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 307:
/***/ (function() {

const linksMenu = document.querySelectorAll('.menu__link');
const langsMenu = document.querySelectorAll('.menu__lang-btn');
const burgerAside = document.querySelectorAll('[data-burger="aside"]');
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');
const underlay = document.querySelector('.underlay');
const body = document.querySelector('body');
const feedbackBtns = document.querySelectorAll('[data-btn="feedback"]');
const callBtns = document.querySelectorAll('[data-btn="call"]');
linksMenu.forEach(link => {
  link.addEventListener('click', () => {
    linksMenu.forEach(links => {
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
langsMenu.forEach(link => {
  link.addEventListener('click', () => {
    langsMenu.forEach(links => {
      if (link.classList.contains('menu__lang-btn--active')) {
        links.classList.remove('menu__lang-btn--active');
      }
    });
    link.classList.add('menu__lang-btn--active');
  });
});
burgerAside.forEach(btn => {
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
feedbackBtns.forEach(callBtn => {
  callBtn.addEventListener('click', () => {
    if (container.classList.contains('container--active')) {
      menu.classList.remove('menu--active');
      container.classList.remove('container--active');
      underlay.classList.remove('underlay--active');
      body.classList.remove('body-hidden');
    }
  });
});
callBtns.forEach(callBtn => {
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
feedbackBtns.forEach(callBtn => {
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
callBtns.forEach(callBtn => {
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

/***/ }),

/***/ 758:
/***/ (function() {

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
        clickable: true
      }
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

/***/ }),

/***/ 801:
/***/ (function() {

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
        clickable: true
      }
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

/***/ }),

/***/ 332:
/***/ (function() {

const forwardPromo = document.querySelector('[data-forward="promo"]');
const text = document.querySelector('.promo__text');
const linksServices = document.querySelectorAll('.promo__link');
forwardPromo.addEventListener('click', () => {
  if (window.innerWidth < 1000) {
    text.classList.toggle('promo__text--active');
    forwardPromo.classList.toggle('link__forward--active');
    if (forwardPromo.classList.contains('link__forward--active')) {
      forwardPromo.querySelector('button').textContent = 'Cкрыть';
    } else {
      forwardPromo.querySelector('button').textContent = 'Читать далее';
    }
  }
});
linksServices.forEach(link => {
  link.addEventListener('click', () => {
    linksServices.forEach(link => {
      if (link.classList.contains('promo__link--active')) {
        link.classList.remove('promo__link--active');
      }
    });
    link.classList.add('promo__link--active');
  });
});

/***/ }),

/***/ 610:
/***/ (function() {

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
        clickable: true
      }
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

/***/ }),

/***/ 91:
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 251:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/brand1.svg";

/***/ }),

/***/ 291:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/brand2.svg";

/***/ }),

/***/ 701:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/brand3.svg";

/***/ }),

/***/ 762:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/brand4.svg";

/***/ }),

/***/ 823:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/brand5.svg";

/***/ }),

/***/ 483:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/brand6.svg";

/***/ }),

/***/ 432:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/brand7.svg";

/***/ }),

/***/ 207:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/brand8.svg";

/***/ }),

/***/ 406:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/go.svg";

/***/ }),

/***/ 704:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/info-go.svg";

/***/ }),

/***/ 210:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/logo.svg";

/***/ }),

/***/ 333:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/message.svg";

/***/ }),

/***/ 540:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/person.svg";

/***/ }),

/***/ 725:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/phone.svg";

/***/ }),

/***/ 657:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/prices-go.svg";

/***/ }),

/***/ 467:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/search-menu.svg";

/***/ }),

/***/ 816:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/search.svg";

/***/ }),

/***/ 316:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "icons/tools.svg";

/***/ }),

/***/ 915:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/cps.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(91);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./src/template.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(210), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(467), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(725), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(333), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(540), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(657), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(316), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(816), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(915), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(251), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(406), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(291), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(701), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(762), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(823), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(483), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(432), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(207), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(704), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = getUrl_default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = getUrl_default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = getUrl_default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = getUrl_default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = getUrl_default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = getUrl_default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = getUrl_default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = getUrl_default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = getUrl_default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = getUrl_default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = getUrl_default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = getUrl_default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = getUrl_default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = getUrl_default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = getUrl_default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = getUrl_default()(___HTML_LOADER_IMPORT_18___);
var code = "<!DOCTYPE html> <html lang=\"ru\"> <head> <meta charset=\"UTF-8\"/> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"/> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/> <title>Ремонт техники Dell</title> <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css\"/> </head> <body> <aside class=\"menu\"> <header class=\"menu__header\"> <button class=\"btn burger menu__burger burger--active\" data-burger=\"aside\"> <span></span> <span></span> <span></span> </button> <div class=\"menu__logo\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\"/></a> </div> <button class=\"btn\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"search-menu\"/> </button> </header> <nav class=\"menu__nav\"> <ul class=\"menu__links\"> <li> <a href=\"#\" class=\"menu__link menu__link--active\">Ремонт техники</a> </li> <li><a href=\"#\" class=\"menu__link\">Услуги и сервисы</a></li> <li><a href=\"#\" class=\"menu__link\">Корпоративным клиентам</a></li> <li><a href=\"#\" class=\"menu__link\">Продавцам техники</a></li> <li><a href=\"#\" class=\"menu__link\">Партнерам</a></li> <li><a href=\"#\" class=\"menu__link\">Производителям</a></li> <li><a href=\"#\" class=\"menu__link\">Наши сервисные центры</a></li> <li><a href=\"#\" class=\"menu__link\">Контакты</a></li> </ul> </nav> <footer class=\"menu__footer\"> <div class=\"menu__btns\"> <button class=\"btn\" data-btn=\"call\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"phone\"/></button> <button class=\"btn\" data-btn=\"feedback\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"message\"/> </button> <button class=\"btn\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"person\"/> </button> </div> <div class=\"menu__mail\"> <a href=\"mailto:mail@cps.com\">mail@cps.com</a> </div> <div class=\"menu__phone\"> <a href=\"tel:+88008908900\">8 800 890 8900</a> </div> <div class=\"menu__lang-btns\"> <button class=\"menu__lang-btn\">RU</button> <button class=\"menu__lang-btn\">EN</button> <button class=\"menu__lang-btn\">CH</button> </div> </footer> </aside> <aside class=\"modal\" data-modal=\"feedback\"> <button class=\"btn burger modal__burger burger--active\" data-burger=\"modal-feedback\"> <span></span> <span></span> <span></span> </button> <h2 class=\"modal__title\">Обратная связь</h2> <form action=\"#\" method=\"get\" class=\"modal__form\"> <input type=\"text\" name=\"name\" id=\"name-feedback\" placeholder=\"Имя\" required autofocus class=\"modal__input\"/> <input type=\"tel\" name=\"phone\" id=\"tel-feedback\" placeholder=\"Телефон\" required class=\"modal__input\"/> <input type=\"email\" name=\"mail\" id=\"mail-feedback\" placeholder=\"Электронная почта\" required class=\"modal__input\"/> <textarea name=\"text\" id=\"message-feedback\" cols=\"30\" rows=\"10\" placeholder=\"Сообщение\" required class=\"modal__message\"></textarea> <p class=\"modal__info\"> Нажимая “отправить”, вы даете согласие на <span>обработку персональных данных</span> и соглашаетесь с нашей <span>политикой конфиденциальности</span> </p> <button type=\"submit\" class=\"btn-action modal__submit\"> ОТПРАВИТЬ <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"arrow\"/> </button> </form> </aside> <aside class=\"modal\" data-modal=\"call\"> <button class=\"btn burger modal__burger burger--active\" data-burger=\"modal-call\"> <span></span> <span></span> <span></span> </button> <h2 class=\"modal__title\">Заказать звонок</h2> <form action=\"#\" method=\"get\" class=\"modal__form\"> <input type=\"tel\" name=\"phone\" id=\"tel-call\" placeholder=\"Телефон\" required class=\"modal__input\"/> <p class=\"modal__info\"> Нажимая “отправить”, вы даете согласие на <span>обработку персональных данных</span> и соглашаетесь с нашей <span>политикой конфиденциальности</span> </p> <button type=\"submit\" class=\"btn-action modal__submit\"> ОТПРАВИТЬ <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"arrow\"/> </button> </form> </aside> <div class=\"container\"> <div class=\"underlay\"></div> <div class=\"underlay-modals\"></div> <header class=\"header\"> <div class=\"header__float-left\"> <button class=\"btn burger\" data-burger=\"aside\"> <span></span> <span></span> <span></span> </button> <div class=\"header__divider\"></div> <div class=\"header__logo\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\"/></a> </div> </div> <div class=\"header__float-right\"> <div class=\"header__btns\"> <button class=\"btn\" data-btn=\"call\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"phone\"/> </button> <button class=\"btn\" data-btn=\"feedback\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"message\"/> </button> <button class=\"btn\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"person\"/> </button> </div> <div class=\"header__divider\"></div> <div class=\"header__btns\"> <button class=\"btn\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"tools\"/> </button> <button class=\"btn\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"search\"/> </button> </div> </div> </header> <main> <section class=\"promo\"> <header class=\"promo__header\"> <h1 class=\"promo__title\">Услуги и сервисы</h1> <div class=\"promo__btns\"> <div class=\"promo__btns-item\"> <a href=\"#\">Оставить заявку</a> <button class=\"btn\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"tools\"/> </button> </div> <div class=\"promo__btns-item\"> <a href=\"#\">Статус ремонта</a> <button class=\"btn\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"search\"/> </button> </div> </div> </header> <nav class=\"promo__nav\"> <ul class=\"promo__links\"> <li class=\"promo__link\"> <a href=\"#\">Ремонтируемые устройства</a> </li> <li class=\"promo__link\"><a href=\"#\">Дополнительные услуги</a></li> <li class=\"promo__link\"><a href=\"#\">Цены на услуги</a></li> <li class=\"promo__link\"> <a href=\"#\">Адреса сервисных центров</a> </li> <li class=\"promo__link\"><a href=\"#\">Специальные цены</a></li> </ul> </nav> <div class=\"promo__link-reviews\"> <a href=\"#\">Отзывы</a> </div> <div class=\"promo__wrapper\"> <div class=\"promo__text-wrapper\"> <div class=\"promo__text\"> <p class=\"promo__descr\"> Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя. </p> <p class=\"promo__descr\"> Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким. </p> </div> <div class=\"link__forward promo__forward\" data-forward=\"promo\"> <button>Читать далее</button> </div> </div> <div class=\"promo__main-img\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"cps\"/> </div> </div> </section> <section class=\"brands\"> <h2 class=\"subtitle\">Ремонт техники различных брендов</h2> <div class=\"swiper\" data-mobile=\"false\"> <div class=\"brands__cards\"> <div class=\"brands__card\"> <div class=\"brands--logo\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"lenovo\"/> </div> <div class=\"brands__arrow\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"go\"/></a> </div> </div> <div class=\"brands__card\"> <div class=\"brands--logo\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"sumsung\"/> </div> <div class=\"brands__arrow\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"go\"/></a> </div> </div> <div class=\"brands__card\"> <div class=\"brands--logo\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"apple\"/> </div> <div class=\"brands__arrow\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"go\"/></a> </div> </div> <div class=\"brands__card\"> <div class=\"brands--logo\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"viewSonic\"/> </div> <div class=\"brands__arrow\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"go\"/></a> </div> </div> <div class=\"brands__card\"> <div class=\"brands--logo\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"bosch\"/> </div> <div class=\"brands__arrow\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"go\"/></a> </div> </div> <div class=\"brands__card\"> <div class=\"brands--logo\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"hp\"/> </div> <div class=\"brands__arrow\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"go\"/></a> </div> </div> <div class=\"brands__card\"> <div class=\"brands--logo\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"acer\"/> </div> <div class=\"brands__arrow\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"go\"/></a> </div> </div> <div class=\"brands__card\"> <div class=\"brands--logo\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"sony\"/> </div> <div class=\"brands__arrow\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"go\"/></a> </div> </div> <div class=\"brands__card\"> <div class=\"brands--logo\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"lenovo\"/> </div> <div class=\"brands__arrow\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"go\"/></a> </div> </div> <div class=\"brands__card\"> <div class=\"brands--logo\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"sumsung\"/> </div> <div class=\"brands__arrow\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"go\"/></a> </div> </div> <div class=\"brands__card\"> <div class=\"brands--logo\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"apple\"/> </div> <div class=\"brands__arrow\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"go\"/></a> </div> </div> </div> <div class=\"swiper-pagination pag-1\"></div> </div> <div class=\"link__forward brands__forward\" data-forward=\"brands\"> <button>Показать все</button> </div> </section> <section class=\"technics\"> <h2 class=\"subtitle\">Ремонт различных видов техники</h2> <div class=\"swiper1\" data-mobile=\"false\"> <div class=\"technics__cards\"> <div class=\"technics__card\"> <div class=\"technics__subtitle\">Ремонт ноутбуков</div> <div class=\"technics__arrow\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"go\"/></a> </div> </div> <div class=\"technics__card\"> <div class=\"technics__subtitle\">Ремонт планшетов</div> <div class=\"technics__arrow\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"go\"/></a> </div> </div> <div class=\"technics__card\"> <div class=\"technics__subtitle\">Ремонт ПК</div> <div class=\"technics__arrow\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"go\"/></a> </div> </div> <div class=\"technics__card\"> <div class=\"technics__subtitle\">Ремонт мониторов</div> <div class=\"technics__arrow\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"go\"/></a> </div> </div> <div class=\"technics__card\"> <div class=\"technics__subtitle\">Ремонт ноутбуков</div> <div class=\"technics__arrow\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"go\"/></a> </div> </div> <div class=\"technics__card\"> <div class=\"technics__subtitle\">Ремонт планшетов</div> <div class=\"technics__arrow\"> <a href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"go\"/></a> </div> </div> </div> <div class=\"swiper-pagination pag-2\"></div> </div> <div class=\"link__forward technics__forward\" data-forward=\"technics\"> <button>Показать все</button> </div> </section> <section class=\"prices\"> <h2 class=\"subtitle\">цены на услуги</h2> <div class=\"prices__table\"> <div class=\"prices__head\"> <span class=\"prices__table-name\">Ремонтные услуги</span> <span class=\"prices__table-cost\">Цена</span> <span class=\"prices__table-term\">Срок</span> </div> <div class=\"swiper2\" data-mobile=\"false\"> <div class=\"prices__wrapper\"> <div class=\"prices__item\"> <span class=\"prices__slider-subtitle\">Ремонтные услуги</span> <span class=\"prices__name\">Диагностика</span> <span class=\"prices__slider-subtitle\">Цена</span> <span class=\"prices__cost\">Бесплатно</span> <span class=\"prices__slider-subtitle\">Срок</span> <span class=\"prices__term\">30 мин</span> <span class=\"prices__order\"> <button class=\"btn-action\"> Заказать <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"arrow\"/> </button> </span> </div> <div class=\"prices__item\"> <span class=\"prices__slider-subtitle\">Ремонтные услуги</span> <span class=\"prices__name\">Замена дисплея</span> <span class=\"prices__slider-subtitle\">Цена</span> <span class=\"prices__cost\">1 000 ₽</span> <span class=\"prices__slider-subtitle\">Срок</span> <span class=\"prices__term\">30-120 мин</span> <span class=\"prices__order\"> <button class=\"btn-action\"> Заказать <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"arrow\"/> </button> </span> </div> <div class=\"prices__item\"> <span class=\"prices__slider-subtitle\">Ремонтные услуги</span> <span class=\"prices__name\">Замена полифонического динамика</span> <span class=\"prices__slider-subtitle\">Цена</span> <span class=\"prices__cost\">1 000 ₽</span> <span class=\"prices__slider-subtitle\">Срок</span> <span class=\"prices__term\">30-120 мин</span> <span class=\"prices__order\"> <button class=\"btn-action\"> Заказать <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"arrow\"/> </button> </span> </div> <div class=\"prices__item\"> <span class=\"prices__slider-subtitle\">Ремонтные услуги</span> <span class=\"prices__name\">Тестирование с выдачей технического заключения</span> <span class=\"prices__slider-subtitle\">Цена</span> <span class=\"prices__cost\">1 000 ₽</span> <span class=\"prices__slider-subtitle\">Срок</span> <span class=\"prices__term\">30-120 мин</span> <span class=\"prices__order\"> <button class=\"btn-action\"> Заказать <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"arrow\"/> </button> </span> </div> <div class=\"prices__item\"> <span class=\"prices__slider-subtitle\">Ремонтные услуги</span> <span class=\"prices__name\">Замена программного обеспечения</span> <span class=\"prices__slider-subtitle\">Цена</span> <span class=\"prices__cost\">1 000 ₽</span> <span class=\"prices__slider-subtitle\">Срок</span> <span class=\"prices__term\">30-120 мин</span> <span class=\"prices__order\"> <button class=\"btn-action\"> Заказать <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"arrow\"/> </button> </span> </div> </div> <div class=\"swiper-pagination pag-3\"></div> </div> </div> </section> <section class=\"info\"> <p class=\"info__descr\"> Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку. </p> <div class=\"info__link\"> <a href=\"#\">Получить коммерческое предложение <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"go\"/></a> </div> </section> </main> <footer class=\"footer\"> <div class=\"footer__col-1\"> © 2019 CPS <br/> Разработано командой Apesong </div> <div class=\"footer__col-2\">Политика конфиденциальности</div> <div class=\"footer__col-3\">Информация, размещенная на данной странице, не является публичной офертой</div> </footer> </div> <" + "script src=\"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js\"><" + "/script> </body> </html> ";
// Exports
/* harmony default export */ var template = ((/* unused pure expression or super */ null && (code)));
// EXTERNAL MODULE: ./src/modules/aside.js
var aside = __webpack_require__(307);
// EXTERNAL MODULE: ./src/modules/promo.js
var promo = __webpack_require__(332);
// EXTERNAL MODULE: ./src/modules/brands.js
var brands = __webpack_require__(758);
// EXTERNAL MODULE: ./src/modules/technics.js
var technics = __webpack_require__(610);
// EXTERNAL MODULE: ./src/modules/prices.js
var prices = __webpack_require__(801);
;// CONCATENATED MODULE: ./src/modules/script.js





;// CONCATENATED MODULE: ./src/index.js



}();
/******/ })()
;