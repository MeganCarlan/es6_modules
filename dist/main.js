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

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Car\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\n    constructor(id,make,model,year) {\n        this.id = id;\n        this.make = make;\n        this.model = model;\n        this.year = year;\n    }\n}\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.js */ \"./src/wishlist.js\");\n\n\nlet form = document.getElementById(\"submitForm\");\n\nlet makeInput = document.getElementById(\"makeInput\");\n\nlet modelInput = document.getElementById(\"modelInput\");\n\nlet yearInput = document.getElementById(\"yearInput\");\n\nlet carMake = document.getElementById(\"car-make\");\nlet carModel = document.getElementById(\"car-model\");\nlet carYear = document.getElementById(\"car-year\");\n\nlet removeButton = document.getElementById(\"removeButton\");\n\nlet unorderedList = document.getElementById(\"ul\");\n\nlet wishlist = new _wishlist_js__WEBPACK_IMPORTED_MODULE_0__.Wishlist();\n\nform.addEventListener(\"submit\",addCar);\nremoveButton.addEventListener(\"click\", removeCar);\n\nfunction showCarDetails(car) {\n    carMake.textContent = car.make;\n    carModel.textContent = car.model;\n    carYear.textContent = car.year;\n\n    removeButton.disabled = false;\n    removeButton.setAttribute(\"data-carID\", car.id);\n}\n\nfunction updateDOMList() {\n    unorderedList.innerHTML = \"\";\n    for (let car of wishlist.list) {\n        let li = document.createElement(\"li\");\n        unorderedList.appendChild(li);\n        li.textContent = `${car.make} ${car.model}`;\n\n        li.addEventListener(\"click\", (event) => {\n            \n            showCarDetails(car);\n        })\n    }\n}\n\nfunction addCar(event) {\n    event.preventDefault(); \n    wishlist.add(makeInput.value, modelInput.value, yearInput.value);\n    updateDOMList();\n}\n\n\n\nfunction removeCar() {\n    debugger;\n    let carId = Number(removeButton.getAttribute(\"data-carId\"));\n    wishlist.remove(carId);\n    updateDOMList();\n    carMake.textContent = \"\";\n    carModel.textContent = \"\";\n    carYear.textContent = \"\";\n    removeButton.disabled = true;\n}\n\n\n\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Wishlist\": () => (/* binding */ Wishlist)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\n\n\nclass Wishlist {\n    constructor() {\n        this.list = []; // array of Cars\n        this.nextId = 0;\n    }\n    \n\n    add(make,model,year) {\n        this.list.push (new _car_js__WEBPACK_IMPORTED_MODULE_0__.Car(this.nextId++,make,model,year));\n    }\n\n    remove(carId) {\n        for (let car of this.list) {\n            if (carId == car.id) {\n                let index = this.list.indexOf(car);\n                this.list.splice(index,1);\n            }\n         }\n\n     }\n\n}\n\n\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;