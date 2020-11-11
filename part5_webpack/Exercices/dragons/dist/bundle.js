/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_dragons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/dragons */ \"./src/core/dragons.js\");\n/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/utils */ \"./src/core/utils.js\");\n\n\n\nconst main = document.getElementById('main');\nconst { names, count, elements } = _core_dragons__WEBPACK_IMPORTED_MODULE_0__.default;\n\nconst render = async () => {\n    await (0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.addCount)(main, count);\n    await (0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.addDragons)(main, names, elements);\n}\n\ndocument.addEventListener('DOMContentLoaded', () => console.log('dom ready..'));\n\ndocument.body.onload = render;\n\n//# sourceURL=webpack://dragons/./src/app.js?");

/***/ }),

/***/ "./src/core/dragons.js":
/*!*****************************!*\
  !*** ./src/core/dragons.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst dragons = {\n    names: [\n        { id: 1, name: \"Apalala\" },\n        { id: 2, name: \"Balaur\" },\n        { id: 3, name: \"Bolla\" }\n    ],\n    count: 3,\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragons);\n\n//# sourceURL=webpack://dragons/./src/core/dragons.js?");

/***/ }),

/***/ "./src/core/utils.js":
/*!***************************!*\
  !*** ./src/core/utils.js ***!
  \***************************/
/*! namespace exports */
/*! export addCount [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addDragons [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDragons\": () => /* binding */ addDragons,\n/* harmony export */   \"addCount\": () => /* binding */ addCount\n/* harmony export */ });\n\nconst addDragons = (main, names) => {\n    const ul = document.createElement('ul');\n    let li, content;\n\n    for (const { id, name } of names) {\n        li = document.createElement('li');\n        content = document.createTextNode(name);\n        li.appendChild(content);\n        ul.appendChild(li);\n    }\n\n    main.appendChild(ul);\n}\n\nconst addCount = (main, count) => {\n    const p = document.createElement('p');\n    let content;\n    content = document.createTextNode(count);\n    p.appendChild(content);\n\n    main.appendChild(p);\n}\n\n\n\n\n//# sourceURL=webpack://dragons/./src/core/utils.js?");

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
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;