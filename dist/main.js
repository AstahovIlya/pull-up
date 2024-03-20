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

/***/ "./src/js/programs.js":
/*!****************************!*\
  !*** ./src/js/programs.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n   1: {\r\n      'time': 90,\r\n      1: 16,\r\n      2: 6,\r\n      3: 7,\r\n      4: 6,\r\n      5: 7\r\n   },\r\n   2: {\r\n      'time': 10,\r\n      1: 1,\r\n      2: 2,\r\n      3: 3,\r\n      4: 4,\r\n      5: 5,\r\n      6: 6,\r\n   },\r\n   3: {\r\n      'time': 60,\r\n      1: 6,\r\n      2: 6,\r\n      3: 6,\r\n      4: 6,\r\n      5: 6,\r\n      6: 6,\r\n      7: 6,\r\n      8: 6,\r\n      9: 6,\r\n   },\r\n   4: {\r\n      'time': 60,\r\n      1: 6,\r\n      2: 6,\r\n      3: 6,\r\n      4: 6,\r\n      5: 6,\r\n      6: 6,\r\n      7: 6,\r\n      8: 6,\r\n      9: 6,\r\n   },\r\n   5: 'выбрать день'\r\n});\n\n//# sourceURL=webpack://working-file/./src/js/programs.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_programs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/programs.js */ \"./src/js/programs.js\");\n\r\nlet numberApproaches = 1;\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n   let contentBlock = document.querySelector('.body');\r\n   let childrenBlock = contentBlock.firstElementChild;\r\n   let dayTrening = document.querySelector('h1');\r\n   let today = new Date().getDay();\r\n\r\n   dayTrening.textContent = today !== 6 || today !== 0 ? `День ${today}` : 'Выходной';\r\n\r\n   let buttonIncrease = childrenBlock.querySelector('.pull-up__button_increase');\r\n   let buttonLower = childrenBlock.querySelector('.pull-up__button_lower');\r\n   let counter = childrenBlock.querySelector('.pull-up__counter');\r\n   let timer = contentBlock.querySelector('.timer');\r\n   let buttonComplate = document.querySelector('.complate');\r\n\r\n   counter.textContent = _js_programs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][today][numberApproaches];\r\n\r\n   buttonComplate.addEventListener('click', function () {\r\n      contentBlock.dataset.stage = 'rest';\r\n      timer.textContent = today !== 2 ? _js_programs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][today]['time'] : _js_programs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][today]['time'] * numberApproaches;\r\n      let restTime = setInterval(function () {\r\n         timer.textContent = Number(timer.textContent) - 1;\r\n         if (timer.textContent == '0') {\r\n            clearInterval(restTime);\r\n            contentBlock.dataset.stage = 'work';\r\n         }\r\n      }, 1000);\r\n      _js_programs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][today][numberApproaches] = Number(counter.textContent);\r\n      console.log(_js_programs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][today])\r\n      numberApproaches++;\r\n   })\r\n   buttonIncrease.addEventListener('click', function () {\r\n      counter.textContent = Number(counter.textContent) + 1;\r\n   })\r\n   buttonLower.addEventListener('click', function () {\r\n      if (counter.textContent !== '0') {\r\n         counter.textContent = Number(counter.textContent) - 1;\r\n      }\r\n   })\r\n\r\n})\n\n//# sourceURL=webpack://working-file/./src/script.js?");

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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;