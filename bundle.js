/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Swapic.js":
/*!**********************!*\
  !*** ./js/Swapic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"swapScreen\": () => /* binding */ swapScreen,\n/* harmony export */   \"colorChange\": () => /* binding */ colorChange\n/* harmony export */ });\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.js */ \"./js/sidebar.js\");\n/* harmony import */ var _basefun_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basefun.js */ \"./js/basefun.js\");\n\n // 屏幕切换时触发指定动画效果。\n\nfunction swapScreen() {\n  // 得到滚动距离\n  var local = document.documentElement.scrollTop;\n  var underline = document.getElementById(\"underline\"); // 5个课程特效\n\n  function delaylists() {\n    var list = document.getElementById(\"languages\");\n    var lists = list.children;\n    (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.removeClass)(list, \"hide\");\n\n    for (var j = 0; j < lists.length; j++) {\n      (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(lists[j], \"thirdlistitem\"); //定时器1秒后添加呼吸灯特效。\n\n      setTimeout(removelanguage, 1000);\n    }\n  }\n\n  function removelanguage() {\n    var list = document.getElementById(\"languages\");\n    var lists = list.children;\n\n    for (var j = 0; j < lists.length; j++) {\n      (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.removeClass)(lists[j], \"thirdlistitem\");\n      (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(lists[j], \"thirdlistitem2\");\n    }\n  } // 火箭图标延迟显示\n\n\n  function delayrocket() {\n    (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.removeClass)(rocket, \"hide\");\n    (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(rocket, \"rocket\");\n  } // 第一屏特效\n\n\n  if (local < 550) {\n    // 文字滚动到指定位置时切换导航栏文字颜色\n    (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_0__.rollcolor)(1); //下划线切换\n\n    underline.className = \"underline1\";\n  } //第二屏特效\n  else if (local < 1150) {\n      (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_0__.rollcolor)(2);\n      var secondScreen = document.getElementById(\"center2\").children; //下划线切换\n\n      underline.className = \"underline2\"; //第二屏文字以及人物特效\n\n      for (var i = 0; i < secondScreen.length - 1; i++) {\n        (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.removeClass)(secondScreen[i], \"hide\");\n        (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(secondScreen[i], \"secondscreen\");\n      } // 第二屏火箭延时显示\n\n\n      setTimeout(delayrocket, 2500);\n    } // 第三屏特效\n    else if (local < 1800) {\n        (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_0__.rollcolor)(3); // 下划线切换\n\n        underline.className = \"underline3\"; // 原子弹图片特效\n\n        document.getElementById(\"thirdimg\").classList.add(\"thirdimg-new\"); //文字特效\n\n        var words = document.getElementsByClassName(\"right-side\")[0].children;\n\n        for (var _i = 0; _i < words.length - 1; _i++) {\n          (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(words[_i], \"thirdcontent\" + (_i + 1));\n        } // 5个课程特效延时显示。\n\n\n        setTimeout(delaylists, 2000);\n      } // 第四屏特效\n      else if (local < 2450) {\n          (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_0__.rollcolor)(4); // 下划线切换\n\n          underline.className = \"underline4\";\n          var child4 = document.getElementById(\"center4\").children;\n          var gallarys = document.getElementsByClassName(\"gallary\")[0].children; // 第四屏大标题和四个图文混排区域特效\n\n          (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.removeClass)(child4[0], \"hide\");\n          (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(child4[0], \"fourthscreen\");\n\n          for (var j = 0; j < gallarys.length; j++) {\n            (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(gallarys[j], \"fourthscreen\");\n          } // 副标题和分割线延迟显示\n\n\n          setTimeout(function () {\n            for (var _i2 = 1; _i2 < child4.length - 1; _i2++) {\n              (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.removeClass)(child4[_i2], \"hide\");\n              (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(child4[_i2], \"fourthscreen\");\n            }\n          }, 1000);\n        } // 第五屏特效\n        else if (local > 2450) {\n            (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_0__.rollcolor)(5); // 下划线切换\n\n            underline.className = \"underline5\";\n            var child5 = document.getElementById(\"center5\").children; // 第五屏人物和标题特效\n\n            (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(child5[0], \"fifthscreenimg\");\n            (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(child5[1], \"fifthscreentitle\");\n            (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.removeClass)(child5[1], \"hide\"); // 第五屏副标题和下划线延迟特效\n\n            setTimeout(function () {\n              for (var _i3 = 2; _i3 < child5.length; _i3++) {\n                (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.removeClass)(child5[_i3], \"hide\");\n                (0,_basefun_js__WEBPACK_IMPORTED_MODULE_1__.addClass)(child5[_i3], \"fifthscreencontent\");\n              }\n            }, 1500);\n          }\n\n  return local;\n} // 导航栏点击时文字的颜色切换为黑色\n\n\nfunction colorChange(e) {\n  var tar = e.target;\n  var items = document.getElementById(\"navi-ul\").children;\n  var asideitems = document.querySelectorAll(\"aside ul li a\");\n\n  for (var i = 1; i < items.length; i++) {\n    if (items[i] == tar) {\n      items[i].style.color = \"black\";\n    } else {\n      items[i].style = \"\";\n    }\n  }\n\n  for (var _i4 = 1; _i4 < asideitems.length; _i4++) {\n    if (asideitems[_i4] == tar) {\n      asideitems[_i4].style.color = \"red\";\n    } else {\n      asideitems[_i4].style = \"\";\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack://web/./js/Swapic.js?");

/***/ }),

/***/ "./js/basefun.js":
/*!***********************!*\
  !*** ./js/basefun.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addClass\": () => /* binding */ addClass,\n/* harmony export */   \"removeClass\": () => /* binding */ removeClass\n/* harmony export */ });\n// 添加类名函数\nfunction addClass(eleid, add) {\n  return eleid.classList.add(add);\n} // 删除类名函数\n\n\nfunction removeClass(eleid, remove) {\n  return eleid.classList.remove(remove);\n}\n\n\n\n//# sourceURL=webpack://web/./js/basefun.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navigator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigator.js */ \"./js/navigator.js\");\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ \"./js/sidebar.js\");\n/* harmony import */ var _Swapic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Swapic.js */ \"./js/Swapic.js\");\n\n\n //滚动事件监听，当页面滚动到指定位置时启动指定效果。\n\nwindow.addEventListener(\"scroll\", _navigator_js__WEBPACK_IMPORTED_MODULE_0__.navigate);\nwindow.addEventListener(\"scroll\", _Swapic_js__WEBPACK_IMPORTED_MODULE_2__.swapScreen); //底部按钮点击跳转顶部\n\ndocument.getElementById(\"more-info\").onclick = function () {\n  first.scrollIntoView();\n}; // 侧边栏点击事件\n\n\ndocument.getElementById(\"aside\").addEventListener(\"click\", _sidebar_js__WEBPACK_IMPORTED_MODULE_1__.relocate);\ndocument.getElementById(\"aside\").addEventListener(\"click\", _Swapic_js__WEBPACK_IMPORTED_MODULE_2__.colorChange); // 导航栏点击跳转及悬浮事件\n\ndocument.getElementById(\"navi-ul\").addEventListener(\"mouseover\", _navigator_js__WEBPACK_IMPORTED_MODULE_0__.navHover);\ndocument.getElementById(\"navi-ul\").addEventListener(\"mouseout\", _navigator_js__WEBPACK_IMPORTED_MODULE_0__.navReturn);\ndocument.getElementById(\"navi-ul\").addEventListener(\"click\", _sidebar_js__WEBPACK_IMPORTED_MODULE_1__.relocate);\ndocument.getElementById(\"navi-ul\").addEventListener(\"click\", _Swapic_js__WEBPACK_IMPORTED_MODULE_2__.colorChange);\n\n//# sourceURL=webpack://web/./js/index.js?");

/***/ }),

/***/ "./js/navigator.js":
/*!*************************!*\
  !*** ./js/navigator.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navigate\": () => /* binding */ navigate,\n/* harmony export */   \"navHover\": () => /* binding */ navHover,\n/* harmony export */   \"navReturn\": () => /* binding */ navReturn\n/* harmony export */ });\n/* harmony import */ var _basefun_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basefun.js */ \"./js/basefun.js\");\n // 顶部导航栏特效\n\nfunction navigate() {\n  //local 用来得到滚动距离\n  var local = document.documentElement.scrollTop;\n  var navchild = document.getElementsByClassName(\"change-col\");\n  var navi = document.getElementById(\"navi\");\n  var aside = document.getElementById(\"aside\");\n\n  if (local > 280) {\n    // 当滚动距离小于280px时，导航栏样式改变。\n    (0,_basefun_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(navi, \"new-nav\");\n\n    for (var i = 0; i < navchild.length; i++) {\n      (0,_basefun_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(navchild[i], \"new-color\");\n    }\n\n    (0,_basefun_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(navchild[0], \"newcolorspec\"); // 当滚动距离小于280px时，侧边栏消失。\n\n    (0,_basefun_js__WEBPACK_IMPORTED_MODULE_0__.removeClass)(aside, \"sidebarout\");\n    (0,_basefun_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(aside, \"sidebarin\");\n  } else {\n    // 当滚动距离大于280px，侧边栏显示\n    (0,_basefun_js__WEBPACK_IMPORTED_MODULE_0__.removeClass)(aside, \"sidebarin\");\n    (0,_basefun_js__WEBPACK_IMPORTED_MODULE_0__.addClass)(aside, \"sidebarout\"); // 当滚动距离大于280px，导航栏样式恢复默认。\n\n    (0,_basefun_js__WEBPACK_IMPORTED_MODULE_0__.removeClass)(navi, \"new-nav\");\n\n    for (var _i = 0; _i < navchild.length; _i++) {\n      (0,_basefun_js__WEBPACK_IMPORTED_MODULE_0__.removeClass)(navchild[_i], \"new-color\");\n    }\n\n    (0,_basefun_js__WEBPACK_IMPORTED_MODULE_0__.removeClass)(navchild[0], \"newcolorspec\");\n  }\n} // 当鼠标在导航栏项目上悬浮时，为选项添加下划线。\n\n\nfunction navHover(e) {\n  var underline = document.getElementById(\"underline\");\n  var clicktarget = e.target.getAttribute(\"data-id\");\n\n  if (clicktarget >= 1 && clicktarget < 6) {\n    // 当用户鼠标悬浮时，用行内样式覆盖外部样式。\n    underline.style.transform = \"translate(\" + 85 * (clicktarget - 1) + \"px)\";\n  }\n} // 当鼠标离开导航栏时，清空下划线元素的行内样式。\n\n\nfunction navReturn() {\n  var underline = document.getElementById(\"underline\");\n  underline.style = \"\";\n}\n\n\n\n//# sourceURL=webpack://web/./js/navigator.js?");

/***/ }),

/***/ "./js/sidebar.js":
/*!***********************!*\
  !*** ./js/sidebar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"relocate\": () => /* binding */ relocate,\n/* harmony export */   \"rollcolor\": () => /* binding */ rollcolor\n/* harmony export */ });\n// 导航滚动到指定位置时导航项文字样式切换\nfunction rollcolor(num) {\n  var items = document.getElementById(\"navi-ul\").children;\n  var asideitems = document.querySelectorAll(\"aside ul li a\");\n\n  for (var i = 1; i < items.length; i++) {\n    if (i == num - 1) {\n      items[i].style.color = \"black\";\n    } else {\n      items[i].style = \"\";\n    }\n  }\n\n  for (var _i = 1; _i < asideitems.length; _i++) {\n    if (_i == num - 1) {\n      asideitems[_i].style.color = \"red\";\n    } else {\n      asideitems[_i].style = \"\";\n    }\n  }\n} // 侧边栏和导航栏点击时跳转页面指定位置。\n\n\nfunction relocate(e) {\n  var tar = e.target.getAttribute(\"data-id\"); // 当导航栏或侧边栏被点击时，跳转到页面的指定位置。\n\n  switch (tar) {\n    case \"1\":\n      first.scrollIntoView();\n      break;\n\n    case \"2\":\n      second.scrollIntoView();\n      break;\n\n    case \"3\":\n      third.scrollIntoView();\n      break;\n\n    case \"4\":\n      fourth.scrollIntoView();\n      break;\n\n    case \"5\":\n      fifth.scrollIntoView();\n      break;\n\n    case \"6\":\n      first.scrollIntoView();\n      break;\n  }\n}\n\n\n\n//# sourceURL=webpack://web/./js/sidebar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;