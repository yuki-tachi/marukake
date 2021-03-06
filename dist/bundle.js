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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Main.js":
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var _Model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.js */ "./src/Model.js");


class Main {
    constructor() {
        this.model = new _Model_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

        this.creatBoard();
    }

    creatBoard() {
        console.log('createBoard');
    }


    update() {
        this.model.addvanceTurn();
        if(this.model.isResult()){
            if(this.model.isFirstMove()) {
                console.log("先手勝利");
            } else {
                console.log("後手勝利");
            }
            return;
        }
    }
}


/***/ }),

/***/ "./src/Model.js":
/*!**********************!*\
  !*** ./src/Model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
class Model {

  constructor() {
    this._board = [];
    this._turn = 1;

    this.startSuzi = 1;
    this.endSuzi = 3;
    this.startDan = 1;
    this.endDan = 3;
  }

  get currentTurn() {
    retunr = this._turn;
  }

  get board() {
    retunr = this._board;
  }

  isPut(suzi, dan) {
    return this.board[suzi][dan] === 0 || this.board[suzi][dan] === 1;
  }

  /**
   * @return {boolean} 勝敗が付いているかを真偽値で返却
   */
  isResult() {
    for (let dan = this.startDan; dan <= this.endDan; dan++) {
        for (let suzi = this.startSuzi; suzi <= this.endSuzi; suzi++) {
            if (isFinite(this.board[suzi][dan])){
            
            } else {
                break;
            }
            return true;
        }
    }

    for (let suzi = this.startSuzi; suzi <= this.endSuzi; suzi++) {
        for (let dan = this.startDan; dan <= this.endDan; dan++) {
            if (isFinite(this.board[suzi][dan])){
            
            } else {
                break;
            }
            return true;
        }
    }

    for (let suzi = this.startSuzi; suzi <= this.endSuzi; suzi++) {
        const dan = suzi;
        if (isFinite(this.board[suzi][dan])){
            
        } else {
            break;
        }
        return true;
    }

    for (let suzi = this.endSuzi; suzi >= this.startSuzi; suzi--) {
        const dan = suzi;
        if (isFinite(this.board[suzi][dan])){
            
        } else {
            break;
        }
        return true;
    }

    return false;
  }

  putMarukaku(suzi, dan) {
    const marukake = this.isFirstMove() ? 1 : 0;
    this.board[suzi][dan] = marukake;
  }

  addvanceTurn() {
    this.turn++;
  }

    /**
     * @return {boolean} trueなら先手
     */
  isFirstMove() {
    return this.turn % 2 > 0;
  }

  isSecondMove() {
    return this.turn % 2 === 0;
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.js */ "./src/Main.js");


console.log('webpack');
function init() {
    const board = new _Main_js__WEBPACK_IMPORTED_MODULE_0__["Main"]();
}

init();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map