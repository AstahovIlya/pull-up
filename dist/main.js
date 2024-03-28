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

/***/ "./src/js/control.js":
/*!***************************!*\
  !*** ./src/js/control.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decreaseValue: () => (/* binding */ decreaseValue),\n/* harmony export */   increaseValue: () => (/* binding */ increaseValue)\n/* harmony export */ });\nfunction increaseValue(Counter) {\r\n   let originalValue = Number(Counter.textContent);\r\n   return ++originalValue;\r\n}\r\n\r\nfunction decreaseValue(Counter) {\r\n   let originalValue = Number(Counter.textContent);\r\n\r\n   if (originalValue === 0) {\r\n      return 0;\r\n   } else {\r\n      return --originalValue;\r\n   }\r\n}\n\n//# sourceURL=webpack://working-file/./src/js/control.js?");

/***/ }),

/***/ "./src/js/programs.js":
/*!****************************!*\
  !*** ./src/js/programs.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n   1: {\r\n      'time': 90,\r\n      'limit': 5,\r\n      'approaches': [],\r\n   },\r\n   2: {\r\n      'time': 10,\r\n      'limit': null,\r\n      'approaches': [],\r\n   },\r\n   3: {\r\n      'time': 60,\r\n      'limit': 9,\r\n      'approaches': [],\r\n   },\r\n   4: {\r\n      'time': 60,\r\n      'limit': null,\r\n      'approaches': [],\r\n   },\r\n   5: 'выбрать день',\r\n});\n\n//# sourceURL=webpack://working-file/./src/js/programs.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_programs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/programs.js */ \"./src/js/programs.js\");\n/* harmony import */ var _js_control_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/control.js */ \"./src/js/control.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n   setTitleText('h1');\r\n   let currentDay = new Date().getDay();\r\n\r\n   let bodyBox = document.querySelector('.body');\r\n   let complateButton = document.querySelector('.complate');\r\n   let timeAproach = _js_programs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][currentDay]['time'];\r\n   let limitApproach = _js_programs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][currentDay]['limit'];\r\n   let approaches = _js_programs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][currentDay]['approaches'];\r\n\r\n   if (bodyBox.dataset.stage == 'work') {\r\n      let counter = bodyBox.querySelector('.pull-up__counter');\r\n\r\n      let buttonIncreaseValue = bodyBox.querySelector('.pull-up__button_increase');\r\n      buttonIncreaseValue.addEventListener('click', function () {\r\n         counter.textContent = (0,_js_control_js__WEBPACK_IMPORTED_MODULE_1__.increaseValue)(counter);\r\n      })\r\n\r\n      let buttonDecreaseValue = bodyBox.querySelector('.pull-up__button_lower');\r\n      buttonDecreaseValue.addEventListener('click', function () {\r\n         counter.textContent = (0,_js_control_js__WEBPACK_IMPORTED_MODULE_1__.decreaseValue)(counter);\r\n      })\r\n\r\n      complateButton.addEventListener('click', function () {\r\n         approaches.push(counter.textContent);\r\n         bodyBox.dataset.stage = 'rest';\r\n         if (currentDay == 1 || currentDay == 3) {\r\n            if (approaches.length == limitApproach) {\r\n               _js_programs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][currentDay]['approaches'] = approaches;\r\n               localStorage.setItem('approaches', JSON.stringify(_js_programs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]))\r\n               document.location.href = 'result.html';\r\n            } else {\r\n               startTimer('.timer', timeAproach, clouseTimer);\r\n            }\r\n         } else if (currentDay == 2) {\r\n            if (approaches.at(-1) <= approaches.at(-2)) {\r\n               _js_programs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][currentDay]['approaches'] = approaches;\r\n               localStorage.setItem('approaches', JSON.stringify(_js_programs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]))\r\n               document.location.href = 'result.html';\r\n            } else {\r\n               startTimer('.timer', timeAproach * approaches.length, clouseTimer);\r\n            }\r\n         } else if (currentDay == 4) {\r\n            if (approaches.at(-1) < approaches.at(-2)) {\r\n               _js_programs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][currentDay]['approaches'] = approaches;\r\n               localStorage.setItem('approaches', JSON.stringify(_js_programs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]))\r\n               document.location.href = 'result.html';\r\n            } else {\r\n               startTimer('.timer', timeAproach, clouseTimer);\r\n            }\r\n         }\r\n      })\r\n   }\r\n\r\n   if (bodyBox.firstElementChild.classList.contains('result')) {\r\n      let saveTrening = JSON.parse(localStorage.getItem('approaches'));\r\n      let resultTrening = saveTrening[currentDay]['approaches'];\r\n\r\n      setTableResults(resultTrening, '.table');\r\n\r\n      complateButton.addEventListener('click', function () {\r\n         document.location.href = '../index.html';\r\n      })\r\n   }\r\n});\r\n\r\nfunction setTitleText(selectorTitle) {\r\n   let title = document.querySelector(selectorTitle);\r\n   let currentDay = new Date().getDay();\r\n\r\n   title.textContent = currentDay !== 0 || currentDay !== 6 ? `День ${currentDay}` : 'Выходной';\r\n}\r\n\r\nfunction startTimer(selectorTimer, time, clouseTimer) {\r\n   let timerCount = document.querySelector(selectorTimer);\r\n   timerCount.textContent = time;\r\n\r\n   let timerValue = setInterval(function () {\r\n      timerCount.textContent = Number(timerCount.textContent) - 1;\r\n      if (timerCount.textContent == 0) {\r\n         clearInterval(timerValue);\r\n         clouseTimer(timerCount.parentElement)\r\n      }\r\n   }, 1000)\r\n}\r\n\r\nfunction clouseTimer(body) {\r\n   body.dataset.stage = 'work';\r\n}\r\n\r\nfunction setTableResults(results, tableSelector) {\r\n   let table = document.querySelector(tableSelector);\r\n\r\n   for (let i = 0; i <= results.length; i++) {\r\n      let li = document.createElement('li');\r\n      li.classList.add('table__line');\r\n\r\n      let approach = document.createElement('span');\r\n      li.appendChild(approach);\r\n\r\n      let amount = document.createElement('span');\r\n      li.appendChild(amount);\r\n\r\n      if (i == results.length) {\r\n         approach.textContent = `Итого`;\r\n         amount.textContent = results.reduce((sum, e) => sum + Number(e), 0);\r\n      } else {\r\n         approach.textContent = `Подход ${i + 1}`;\r\n         amount.textContent = results[i];\r\n      }\r\n\r\n      table.appendChild(li);\r\n   }\r\n}\n\n//# sourceURL=webpack://working-file/./src/script.js?");

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