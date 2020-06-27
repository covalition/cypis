"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _css = _interopRequireDefault(require("@styled-system/css"));

var sx = function sx(props) {
  return (0, _css["default"])(props.sx);
};

sx.propTypes = {
  sx: _propTypes["default"].object
};
var _default = sx;
exports["default"] = _default;