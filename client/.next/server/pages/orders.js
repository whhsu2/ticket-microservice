module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/orders/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/orders/index.js":
/*!*******************************!*\
  !*** ./pages/orders/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/morris754/Documents/projects/ticket-microservice/client/pages/orders/index.js\";\n\nconst OrderIndex = ({\n  orders\n}) => {\n  const orderList = orders.map(order => {\n    /*#__PURE__*/\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n        children: order.ticket.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n        children: order.ticket.status\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 9\n      }, undefined)]\n    }, order.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }, undefined);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Orders\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n      className: \"table\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            children: \"Title\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            children: \"Status\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n        children: orderList\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 7\n  }, undefined);\n};\n\nOrderIndex.getInitialProps = async (context, client) => {\n  const {\n    data\n  } = await client.get('/api/orders');\n  return {\n    orders: data\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderIndex);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9vcmRlcnMvaW5kZXguanM/YmFiYyJdLCJuYW1lcyI6WyJPcmRlckluZGV4Iiwib3JkZXJzIiwib3JkZXJMaXN0IiwibWFwIiwib3JkZXIiLCJ0aWNrZXQiLCJ0aXRsZSIsInN0YXR1cyIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImNsaWVudCIsImRhdGEiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU1BLFVBQVUsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFnQjtBQUUvQixRQUFNQyxTQUFTLEdBQUdELE1BQU0sQ0FBQ0UsR0FBUCxDQUFZQyxLQUFELElBQVc7QUFDdEM7QUFBQTtBQUFBLDhCQUNFO0FBQUEsa0JBQUtBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxrQkFBS0YsS0FBSyxDQUFDQyxNQUFOLENBQWFFO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQSxPQUFTSCxLQUFLLENBQUNJLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlELEdBTGlCLENBQWxCO0FBT0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU8sZUFBUyxFQUFDLE9BQWpCO0FBQUEsOEJBQ0U7QUFBQSwrQkFDRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU9FO0FBQUEsa0JBQVFOO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFjRCxDQXZCSDs7QUF5QkFGLFVBQVUsQ0FBQ1MsZUFBWCxHQUE2QixPQUFPQyxPQUFQLEVBQWdCQyxNQUFoQixLQUEyQjtBQUN0RCxRQUFNO0FBQUVDO0FBQUYsTUFBVyxNQUFNRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxhQUFYLENBQXZCO0FBQ0EsU0FBTztBQUFFWixVQUFNLEVBQUVXO0FBQVYsR0FBUDtBQUNELENBSEQ7O0FBS2VaLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvb3JkZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgT3JkZXJJbmRleCA9ICh7IG9yZGVycyB9KSA9PiB7XG5cbiAgICBjb25zdCBvcmRlckxpc3QgPSBvcmRlcnMubWFwKChvcmRlcikgPT4ge1xuICAgICAgPHRyIGtleT17b3JkZXIuaWR9PlxuICAgICAgICA8dGQ+e29yZGVyLnRpY2tldC50aXRsZX08L3RkPlxuICAgICAgICA8dGQ+e29yZGVyLnRpY2tldC5zdGF0dXN9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+T3JkZXJzPC9oMj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+VGl0bGU8L3RoPlxuICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+e29yZGVyTGlzdH08L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbiAgXG5PcmRlckluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0LCBjbGllbnQpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KCcvYXBpL29yZGVycycpO1xuICByZXR1cm4geyBvcmRlcnM6IGRhdGEgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVySW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/orders/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });