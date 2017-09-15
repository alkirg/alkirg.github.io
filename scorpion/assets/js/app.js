/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _menu = __webpack_require__(1);

var _menu2 = _interopRequireDefault(_menu);

var _slider = __webpack_require__(2);

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
	(0, _menu2.default)();
	(0, _slider2.default)();
});

$(window).resize(function () {
	(0, _menu2.default)();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var nav = $('.mainmenu');
var menu = nav.children('.mainmenu__items');
var menuItem = $('.mainmenu__item');
var menuLink = $('.mainmenu__link');
var mobileShown = false;
var keepShadow = false;

var run = function run() {
	if (!isMobile()) {
		menuItem.each(function () {
			var current = $(this);
			if (current.children().length == 2) current.addClass('mainmenu__parent');
		});
		menuLink.mouseenter(function () {
			$(this).next().addClass('mainmenu__items--active');
			showShadow();
			keepShadow = true;
			$('.mainmenu__items--active').mouseenter(function () {
				$(this).addClass('mainmenu__items--active');
				showShadow();
				keepShadow = true;
			});
			$('.mainmenu__items--active').mouseleave(function () {
				$(this).removeClass('mainmenu__items--active');
				keepShadow = false;
				removeShadow();
			});
		});
		menuLink.mouseleave(function () {
			$(this).next().removeClass('mainmenu__items--active');
		});
		$('.mainmenu__items').mouseleave(function () {
			keepShadow = false;
			removeShadow();
		});
	} else {
		var navMobile = nav;
		navMobile.click(function () {
			if (!mobileShown) {
				navMobile.prepend('<div class="mobilemenu__close"></div>');
				navMobile.addClass('mobilemenu').animate({ left: '0px' }, 200);
				$('body').prepend(navMobile);
				$('.search').parent().prepend('<div class="mainmenu"></div>');
				$('.header, .main, .footer').wrapAll('<div class="mobilemenu__shadow"></div>');
				$('.mobilemenu__shadow').animate({ left: '300px' }, 200);
				$('.search').css('margin-left', 'auto');
				$('.mainmenu__parent').removeClass('mainmenu__parent');
				$('.mobilemenu__close, .mobilemenu__shadow').click(function () {
					navMobile.animate({ left: '-300px' }, 200, function () {
						$(this).removeClass('mobilemenu');
					});
					$('.mobilemenu__shadow').animate({ left: '0px' }, 200, function () {
						$('.header, .main, .footer').unwrap();
						$('.header__row--yellow .header__row .mainmenu').remove();
						$('.header__row--yellow .header__row').prepend(nav);
						$('.mobilemenu__close').remove();
						$('.search').css('margin-left', '');
						mobileShown = false;
					});
				});
				mobileShown = true;
			}
		});
	}
};

var showShadow = function showShadow() {
	if (!keepShadow) {
		$('body').prepend('<div class="shadow"></div>');
		var shadow = $('.shadow');
		shadow.css('opacity', 0);
		shadow.animate({ opacity: '.5' }, 100);
	}
};

var removeShadow = function removeShadow() {
	if (!keepShadow) {
		var shadow = $('.shadow');
		shadow.animate({ opacity: '0' }, 100);
		shadow.remove();
	}
};

var isMobile = function isMobile() {
	return !menu.is(':visible');
};

exports.default = run;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var slider = $('.slider');
var slides = slider.children();
var slidesCount = slides.length;
var slideSpeed = 500;
var slideEasing = 'linear';
var sliderHammer = void 0;
var slideIndex = 1;

var run = function run() {
	if (slides.length) {
		sliderHammer = new Hammer(document.querySelector('.slider'));
		var currentSlide = slides.first();
		currentSlide.addClass('current');
		slider.append('<div class="slider__count"><strong>1</strong> / ' + slidesCount + '</div><div class="slider__pager slider__back"></div><div class="slider__pager slider__front"></div>');

		$('.slider__pager').click(function () {
			if ($(this).hasClass('slider__back')) currentSlide = prev(currentSlide);else currentSlide = next(currentSlide);
			$('.slider__count strong').text(slideIndex);
		});

		sliderHammer.on('swipeleft', function () {
			currentSlide = prev(currentSlide);
			$('.slider__count strong').text(slideIndex);
		});

		sliderHammer.on('swiperight', function () {
			currentSlide = next(currentSlide);
			$('.slider__count strong').text(slideIndex);
		});
	}
};

var next = function next(currentSlide) {
	var nextSlide = currentSlide.next('.slider__image');
	slideIndex++;
	if (nextSlide.length == 0) {
		nextSlide = slides.first();
		slideIndex = 1;
	}
	nextSlide.css('left', '-100%');
	nextSlide.animate({ left: 0 }, slideSpeed, slideEasing);
	currentSlide.animate({ left: '100%' }, slideSpeed, slideEasing, function () {
		currentSlide.removeClass('current');
		nextSlide.addClass('current').css('left', 0);
	});
	return nextSlide;
};

var prev = function prev(currentSlide) {
	var nextSlide = currentSlide.prev('.slider__image');
	slideIndex--;
	if (nextSlide.length == 0) {
		nextSlide = slides.last();
		slideIndex = slidesCount;
	}
	nextSlide.css('left', '100%');
	nextSlide.animate({ left: 0 }, slideSpeed, slideEasing);
	currentSlide.animate({ left: '-100%' }, slideSpeed, slideEasing, function () {
		currentSlide.removeClass('current');
		nextSlide.addClass('current').css('left', 0);
	});
	return nextSlide;
};

exports.default = run;

/***/ })
/******/ ]);