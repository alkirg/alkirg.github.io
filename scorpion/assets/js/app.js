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

var _gallery = __webpack_require__(3);

var _cart = __webpack_require__(4);

var _cart2 = _interopRequireDefault(_cart);

var _compare = __webpack_require__(5);

var _compare2 = _interopRequireDefault(_compare);

var _validate = __webpack_require__(6);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
	(0, _menu2.default)();
	(0, _slider2.default)();
	(0, _gallery.runGallery)();
	(0, _cart2.default)();
	(0, _compare2.default)();
	(0, _validate2.default)();
});

$(window).resize(function () {
	(0, _menu2.default)();
	(0, _gallery.prepareGallery)();
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
		// menuItem.each(function () {
		// 	let current = $(this);
		// 	if (current.children().length == 2)
		// 		current.addClass('mainmenu__parent');
		// });
		menuLink.on('mouseenter', function () {
			$(this).next().addClass('mainmenu__items--active');
			showShadow();
			keepShadow = true;
			$('.mainmenu__items--active').mouseenter(function () {
				$(this).addClass('mainmenu__items--active');
				showShadow();
				keepShadow = true;
			});
			$('.mainmenu__items--active').mouseleave(function (e) {
				if (!(e.pageY > $('.mainmenu').position().top && e.pageY <= $('.mainmenu').position().top + $('.mainmenu').height())) {
					$(this).removeClass('mainmenu__items--active');
					keepShadow = false;
					removeShadow();
				}
			});
		});
		menuLink.on('mouseleave', function () {
			$(this).next().removeClass('mainmenu__items--active');
		});
		$('.mainmenu__items').on('mouseleave', function (e) {
			if (!(e.pageY > $('.mainmenu').position().top && e.pageY <= $('.mainmenu').position().top + $('.mainmenu').height())) {
				keepShadow = false;
				removeShadow();
			}
		});
	} else {
		var navMobile = nav;
		navMobile.click(function () {
			if (!mobileShown) {
				navMobile.prepend('<div class="icon_close"></div>');
				navMobile.addClass('mobilemenu').animate({ left: '0px' }, 200);
				$('body').prepend(navMobile);
				$('.search').parent().prepend('<div class="mainmenu"></div>');
				$('.header, .main, .footer').wrapAll('<div class="mobilemenu__shadow"></div>');
				$('.mobilemenu__shadow').animate({ left: '300px' }, 200);
				$('.search').css('margin-left', 'auto');
				$('.mainmenu__parent').removeClass('mainmenu__parent');
				$('.mobilemenu .icon_close, .mobilemenu__shadow').click(function () {
					navMobile.animate({ left: '-300px' }, 200, function () {
						$(this).removeClass('mobilemenu');
					});
					$('.mobilemenu__shadow').animate({ left: '0px' }, 200, function () {
						$('.header, .main, .footer').unwrap();
						$('.header__row--yellow .header__row .mainmenu').remove();
						$('.header__row--yellow .header__row').prepend(nav);
						$('.mainmenu .icon_close').remove();
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
	if (!keepShadow && !isMobile()) {
		$('body').prepend('<div class="shadow"></div>');
		var shadow = $('.shadow');
		shadow.css('opacity', 0);
		shadow.animate({ opacity: '.5' }, 100);
	}
};

var removeShadow = function removeShadow() {
	if (!keepShadow) {
		var shadow = $('.shadow');
		shadow.animate({ opacity: '0' }, 100, function () {
			shadow.remove();
		});
	}
};

var isMobile = function isMobile() {
	return $('.main').width() <= 970;
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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var gallery = $('.gallery');
var galleryFull = $('.gallery__full');
var thumbs = gallery.find('.gallery__thumb');
var itemOrder = 1;

var runGallery = function runGallery() {
	prepareGallery();
	thumbs.click(function (e) {
		var thumb = $(e.target);
		var imageCurrent = $('.gallery__main');
		var imageNext = $('.gallery__main--hidden');
		var newOrder = thumb.attr('data-order');
		var top = void 0;
		if (newOrder > itemOrder) top = '-100%';else {
			imageNext.css('top', '-200%');
			top = '100%';
		}
		itemOrder = newOrder;
		if (imageCurrent.attr('src') !== thumb.attr('data-img')) {
			thumbs.removeClass('gallery__thumb--active');
			imageNext.animate({ top: '-100%' }, function () {
				$(this).attr('src', imageCurrent.attr('src'));
				$(this).css('top', '0');
			});
			imageCurrent.animate({ top: top }, function () {
				$(this).attr('src', thumb.attr('data-img'));
				$(this).css('top', '0');
				thumb.addClass('gallery__thumb--active');
			});
		}
	});
};

var prepareGallery = function prepareGallery() {
	var imageCurrent = $('.gallery__main');
	thumbs.first().addClass('gallery__thumb--active');
	galleryFull.height(imageCurrent.height());
	if (galleryFull.children('.gallery__main--hidden').length == 0) {
		galleryFull.append('<img src="' + imageCurrent.attr('src') + '" class="gallery__main--hidden">');
		var order = 1;
		thumbs.each(function () {
			$(this).attr('data-order', order);
			order++;
		});
	}
};

exports.runGallery = runGallery;
exports.prepareGallery = prepareGallery;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var run = function run() {
	$('.cart__button--less').click(function () {
		var that = $(this);
		if (!that.hasClass('cart__button--disabled')) {
			var input = that.next();
			var newVal = parseInt(input.val()) - 1;
			input.val(newVal);
			if (newVal == 1) that.addClass('cart__button--disabled');
			input.change();
		}
	});

	$('.cart__button--more').click(function () {
		var that = $(this);
		var input = that.prev();
		var newVal = parseInt(input.val()) + 1;
		input.val(newVal);
		if (newVal == 2) input.prev().removeClass('cart__button--disabled');
		input.change();
	});

	$('.cart__count').change(function () {
		var that = $(this);
		var value = parseInt(that.val());
		if (value) {
			that.val(value);
			if (value == 1) that.prev().addClass('cart__button--disabled');
		} else {
			that.val(1);
			that.prev().addClass('cart__button--disabled');
		}

		countCart();
	});

	$('.cart__remove a').click(function (e) {
		e.preventDefault();

		var that = $(this);
		$.get(that.attr('href'), function (data) {
			if (data.delete) {
				var tr = that.parents('tr');
				tr.fadeOut(400, function () {
					tr.remove();
					if ($('.cart__table tr').length > 1) countCart();else {
						$('.main .cart').html('<p class="error">Your cart is empty.</p>');
					}
				});
			}
		});
	});
};

var countCart = function countCart() {
	var cartTotal = 0;

	$('.cart__item_price').each(function () {
		var that = $(this);
		var count = parseInt(that.next().find('.cart__count').val());
		var total = parseFloat(that.children('strong').html().substr(1)) * count;
		cartTotal += parseFloat(total.toFixed(2));
		that.siblings('.cart__item_total').children('strong').html('$' + formatPrice(total.toFixed(2)));
	});

	$('.cart__total_price strong').html('$' + formatPrice(cartTotal.toFixed(2)));
};

var formatPrice = function formatPrice(value) {
	return Intl.NumberFormat('en-US', { 'minimumFractionDigits': 2 }).format(value).replace(',', ' ');
};

exports.default = run;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var run = function run() {
	$('.compare__item .icon_close').click(function () {
		var that = $(this);
		var item = that.parent();
		item.fadeOut(400, function () {
			item.remove();
			if ($('.compare__item').length == 0) $('.compare').html('<p class="error">You have nothing to compare.</p>');
		});
	});
};

exports.default = run;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var run = function run() {
    var elements = $('input[required]');
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function (e) {
            e.preventDefault();
            this.classList.add('error');
        };
    }
    elements = $('select[required]');
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function (e) {
            e.preventDefault();
            $(this).parent().addClass('error');
        };
    }
};

exports.default = run;

/***/ })
/******/ ]);