/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CarouselModule"] = factory();
	else
		root["CarouselModule"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ (() => {

eval("// src/carousel.js\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const slides = document.querySelectorAll(\".carousel-slide img\");\n  const prevButton = document.querySelector(\".carousel-prev\");\n  const nextButton = document.querySelector(\".carousel-next\");\n  const dots = document.querySelectorAll(\".dot\");\n  let currentSlide = 0;\n  const totalSlides = slides.length;\n\n  function showSlide(index) {\n    const slideWidth = slides[0].clientWidth;\n    const carouselSlide = document.querySelector(\".carousel-slide\");\n    carouselSlide.style.transform = `translateX(${-index * slideWidth}px)`;\n\n    dots.forEach((dot) => dot.classList.remove(\"active\"));\n    dots[index].classList.add(\"active\");\n  }\n\n  function nextSlide() {\n    currentSlide = (currentSlide + 1) % totalSlides;\n    showSlide(currentSlide);\n    resetTimer();\n  }\n\n  function prevSlide() {\n    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;\n    showSlide(currentSlide);\n    resetTimer();\n  }\n\n  function resetTimer() {\n    clearInterval(slideInterval);\n    slideInterval = setInterval(nextSlide, 5000);\n  }\n\n  prevButton.addEventListener(\"click\", prevSlide);\n  nextButton.addEventListener(\"click\", nextSlide);\n\n  dots.forEach((dot, index) => {\n    dot.addEventListener(\"click\", () => {\n      currentSlide = index;\n      showSlide(currentSlide);\n      resetTimer();\n    });\n  });\n\n  let slideInterval = setInterval(nextSlide, 5000);\n\n  showSlide(currentSlide);\n});\n\n\n//# sourceURL=webpack://CarouselModule/./src/carousel.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/carousel.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});