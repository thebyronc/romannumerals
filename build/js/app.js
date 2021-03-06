(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Roman = exports.Roman = function () {
  function Roman() {
    _classCallCheck(this, Roman);
  }

  _createClass(Roman, [{
    key: "toRoman",
    value: function toRoman(userInput) {

      var output = [];
      for (var numI = 0; numI < userInput; numI++) {
        output.push("I");
      }
      console.log("initial output: " + output);
      // debugger;
      for (var index = 0; index < output.length; index++) {
        if (output.slice(index, index + 1000).join('').match(/I{1000}/i)) {
          output.splice(index, 1000, "M");
        } else if (output.slice(index, index + 900).join('').match(/I{900}/i)) {
          output.splice(index, 900, "CM");
        } else if (output.slice(index, index + 500).join('').match(/I{500}/i)) {
          output.splice(index, 500, "D");
        } else if (output.slice(index, index + 400).join('').match(/I{400}/i)) {
          output.splice(index, 400, "CD");
        } else if (output.slice(index, index + 100).join('').match(/I{100}/i)) {
          output.splice(index, 100, "C");
        } else if (output.slice(index, index + 90).join('').match(/I{90}/i)) {
          output.splice(index, 90, "XC");
        } else if (output.slice(index, index + 50).join('').match(/I{50}/i)) {
          output.splice(index, 50, "L");
        } else if (output.slice(index, index + 10).join('').match(/I{10}/i)) {
          output.splice(index, 10, "X");
        } else if (output.slice(index, index + 9).join('').match(/I{9}/i)) {
          output.splice(index, 9, "IX");
        } else if (output.slice(index, index + 5).join('').match(/I{5}/i)) {
          output.splice(index, 5, "V");
        } else if (output.slice(index, index + 4).join('').match(/I{4}/i)) {
          output.splice(index, 4, "IV");
        } else {
          console.log("loop: " + output.length);
        }
      }
      return output;
    }
  }]);

  return Roman;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _roman = require("./../js/roman.js");

$(document).ready(function () {
  $(".formOne").submit(function (event) {
    event.preventDefault();
    var reducer = function reducer(accumulator, currentValue) {
      return accumulator + currentValue;
    };
    var userInput = parseInt($(".number").val());
    console.log(userInput);
    var number = new _roman.Roman();
    var results = number.toRoman(userInput);
    $("#numbers").text(results.reduce(reducer));
  });
});

},{"./../js/roman.js":1}]},{},[2]);
