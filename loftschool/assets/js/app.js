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


var _preloader = __webpack_require__(1);

var _preloader2 = _interopRequireDefault(_preloader);

var _menu = __webpack_require__(2);

var _menu2 = _interopRequireDefault(_menu);

var _flip = __webpack_require__(3);

var _flip2 = _interopRequireDefault(_flip);

var _validate = __webpack_require__(5);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
    (0, _preloader2.default)();
    (0, _menu2.default)();
    (0, _flip2.default)();
    (0, _validate2.default)();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var percentsTotal = 0;
var preloader = $('.preloader');

var imgPaths = $('*').map(function (ndx, element) {
    var isImg = $(element).is('img');
    var background = $(element).css('background-image');

    var path = '';

    if (background != 'none') {
        path = background.replace('url("', '').replace('")', '');
    }

    if (isImg) {
        path = $(element).attr('src');
    }

    if (path) return path;
});

var setPercents = function setPercents(total, current) {
    var percents = Math.ceil(current / total * 100);

    $('.preloader__percents').text(percents + '%');

    if (percents >= 100) preloader.fadeOut();
};

var loadImages = function loadImages(images) {
    if (!images.length) return;

    images.forEach(function (img, i, images) {
        var fakeImg = $('<img>', {
            attr: {
                src: img
            }
        });

        fakeImg.on('load error', function () {
            percentsTotal++;
            setPercents(images.length, percentsTotal);
        });
    });
};

var imgs = imgPaths.toArray();

exports.default = function () {
    loadImages(imgs);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var menuIcon = $('.hamburger-menu__icon');
var menuWrapper = $('.hamburger-menu__menu');
var menu = menuWrapper.children('.menu');

var run = function run() {
    menuIcon.click(function () {
        menuWrapper.show();
    });
};

exports.default = run;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(4);

var link = $('.header__login_button');
var userInfo = $('.user-info');
var loginForm = $('.login-form');
var flip = $('.flip');

var run = function run() {
    flip.flip({
        front: '.user-info',
        back: '.login-form',
        trigger: 'manual',
        autoSize: false
    });

    loginForm.addClass('flip_hidden');

    link.click(function (e) {
        var flipModel = flip.data('flip-model');
        if (!flipModel.isFlipped) {
            userInfo.removeClass('flip_active').addClass('flip_hidden');
            loginForm.removeClass('flip_hidden').addClass('flip_active');
            flip.flip(true);
        } else {
            loginForm.removeClass('flip_active').addClass('flip_hidden');
            userInfo.removeClass('flip_hidden').addClass('flip_active');
            flip.flip(false);
        }
        e.preventDefault();
    });
};

exports.default = run;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*! flip - v1.1.2 - 2016-10-20
* https://github.com/nnattawat/flip
* Copyright (c) 2016 Nattawat Nonsung; Licensed MIT */

!function (a) {
  var b = function b() {
    var a,
        b = document.createElement("fakeelement"),
        c = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (a in c) {
      if (void 0 !== b.style[a]) return c[a];
    }
  },
      c = function c(b, _c, d) {
    this.setting = { axis: "y", reverse: !1, trigger: "click", speed: 500, forceHeight: !1, forceWidth: !1, autoSize: !0, front: ".front", back: ".back" }, this.setting = a.extend(this.setting, _c), "string" != typeof _c.axis || "x" !== _c.axis.toLowerCase() && "y" !== _c.axis.toLowerCase() || (this.setting.axis = _c.axis.toLowerCase()), "boolean" == typeof _c.reverse && (this.setting.reverse = _c.reverse), "string" == typeof _c.trigger && (this.setting.trigger = _c.trigger.toLowerCase());var e = parseInt(_c.speed);isNaN(e) || (this.setting.speed = e), "boolean" == typeof _c.forceHeight && (this.setting.forceHeight = _c.forceHeight), "boolean" == typeof _c.forceWidth && (this.setting.forceWidth = _c.forceWidth), "boolean" == typeof _c.autoSize && (this.setting.autoSize = _c.autoSize), ("string" == typeof _c.front || _c.front instanceof a) && (this.setting.front = _c.front), ("string" == typeof _c.back || _c.back instanceof a) && (this.setting.back = _c.back), this.element = b, this.frontElement = this.getFrontElement(), this.backElement = this.getBackElement(), this.isFlipped = !1, this.init(d);
  };a.extend(c.prototype, { flipDone: function flipDone(a) {
      var c = this;c.element.one(b(), function () {
        c.element.trigger("flip:done"), "function" == typeof a && a.call(c.element);
      });
    }, flip: function flip(a) {
      if (!this.isFlipped) {
        this.isFlipped = !0;var b = "rotate" + this.setting.axis;this.frontElement.css({ transform: b + (this.setting.reverse ? "(-180deg)" : "(180deg)"), "z-index": "0" }), this.backElement.css({ transform: b + "(0deg)", "z-index": "1" }), this.flipDone(a);
      }
    }, unflip: function unflip(a) {
      if (this.isFlipped) {
        this.isFlipped = !1;var b = "rotate" + this.setting.axis;this.frontElement.css({ transform: b + "(0deg)", "z-index": "1" }), this.backElement.css({ transform: b + (this.setting.reverse ? "(180deg)" : "(-180deg)"), "z-index": "0" }), this.flipDone(a);
      }
    }, getFrontElement: function getFrontElement() {
      return this.setting.front instanceof a ? this.setting.front : this.element.find(this.setting.front);
    }, getBackElement: function getBackElement() {
      return this.setting.back instanceof a ? this.setting.back : this.element.find(this.setting.back);
    }, init: function init(a) {
      var b = this,
          c = b.frontElement.add(b.backElement),
          d = "rotate" + b.setting.axis,
          e = 2 * b.element["outer" + ("rotatex" === d ? "Height" : "Width")](),
          f = { perspective: e, position: "relative" },
          g = { transform: d + "(" + (b.setting.reverse ? "180deg" : "-180deg") + ")", "z-index": "0", position: "relative" },
          h = { "backface-visibility": "hidden", "transform-style": "preserve-3d", position: "absolute", "z-index": "1" };b.setting.forceHeight ? c.outerHeight(b.element.height()) : b.setting.autoSize && (h.height = "100%"), b.setting.forceWidth ? c.outerWidth(b.element.width()) : b.setting.autoSize && (h.width = "100%"), (window.chrome || window.Intl && Intl.v8BreakIterator) && "CSS" in window && (f["-webkit-transform-style"] = "preserve-3d"), c.css(h).find("*").css({ "backface-visibility": "hidden" }), b.element.css(f), b.backElement.css(g), setTimeout(function () {
        var d = b.setting.speed / 1e3 || .5;c.css({ transition: "all " + d + "s ease-out" }), "function" == typeof a && a.call(b.element);
      }, 20), b.attachEvents();
    }, clickHandler: function clickHandler(b) {
      b || (b = window.event), this.element.find(a(b.target).closest('button, a, input[type="submit"]')).length || (this.isFlipped ? this.unflip() : this.flip());
    }, hoverHandler: function hoverHandler() {
      var b = this;b.element.off("mouseleave.flip"), b.flip(), setTimeout(function () {
        b.element.on("mouseleave.flip", a.proxy(b.unflip, b)), b.element.is(":hover") || b.unflip();
      }, b.setting.speed + 150);
    }, attachEvents: function attachEvents() {
      var b = this;"click" === b.setting.trigger ? b.element.on(a.fn.tap ? "tap.flip" : "click.flip", a.proxy(b.clickHandler, b)) : "hover" === b.setting.trigger && (b.element.on("mouseenter.flip", a.proxy(b.hoverHandler, b)), b.element.on("mouseleave.flip", a.proxy(b.unflip, b)));
    }, flipChanged: function flipChanged(a) {
      this.element.trigger("flip:change"), "function" == typeof a && a.call(this.element);
    }, changeSettings: function changeSettings(a, b) {
      var c = this,
          d = !1;if (void 0 !== a.axis && c.setting.axis !== a.axis.toLowerCase() && (c.setting.axis = a.axis.toLowerCase(), d = !0), void 0 !== a.reverse && c.setting.reverse !== a.reverse && (c.setting.reverse = a.reverse, d = !0), d) {
        var e = c.frontElement.add(c.backElement),
            f = e.css(["transition-property", "transition-timing-function", "transition-duration", "transition-delay"]);e.css({ transition: "none" });var g = "rotate" + c.setting.axis;c.isFlipped ? c.frontElement.css({ transform: g + (c.setting.reverse ? "(-180deg)" : "(180deg)"), "z-index": "0" }) : c.backElement.css({ transform: g + (c.setting.reverse ? "(180deg)" : "(-180deg)"), "z-index": "0" }), setTimeout(function () {
          e.css(f), c.flipChanged(b);
        }, 0);
      } else c.flipChanged(b);
    } }), a.fn.flip = function (b, d) {
    return "function" == typeof b && (d = b), "string" == typeof b || "boolean" == typeof b ? this.each(function () {
      var c = a(this).data("flip-model");"toggle" === b && (b = !c.isFlipped), b ? c.flip(d) : c.unflip(d);
    }) : this.each(function () {
      if (a(this).data("flip-model")) {
        var e = a(this).data("flip-model");!b || void 0 === b.axis && void 0 === b.reverse || e.changeSettings(b, d);
      } else a(this).data("flip-model", new c(a(this), b || {}, d));
    }), this;
  };
}(jQuery);
//# sourceMappingURL=jquery.flip.min.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var form = $('.login-form');
var input = form.find('.login-form__input');
var checkRobot1 = form.find('#checkbox');
var checkRobot2 = form.find('#radio1');
var popup = $('.popup');
var showError = false;

var showPopup = function showPopup(message) {
    popup.find('.popup__message').text(message);
    popup.removeClass('popup_hidden');
    $('.popup__close').click(function () {
        popup.addClass('popup_hidden');
    });
};
var checkInputs = function checkInputs() {
    input.each(function () {
        if ($(this).val() == '') {
            showPopup('Введите логин и пароль');
            showError = true;
            return false;
        }
    });
};
var checkRobot = function checkRobot() {
    if (!(checkRobot1.prop('checked') && checkRobot2.prop('checked'))) {
        showPopup('Роботам у нас не рады');
        showError = true;
    }
};
var validate = function validate() {
    checkInputs();
    if (!showError) checkRobot();
    if (!showError) showPopup('Успешный вход');
};

var run = function run() {
    $('.login-form__button--submit').on('click', function (e) {
        e.preventDefault();
        showError = false;
        validate();
    });
};

exports.default = run;

/***/ })
/******/ ]);