"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isNumeric;

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}