"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BorderBox = _interopRequireDefault(require("./BorderBox"));

var _Caret = _interopRequireDefault(require("./Caret"));

var _theme = _interopRequireDefault(require("./theme"));

function PointerBox(props) {
  // don't destructure these, just grab them
  var bg = props.bg,
      border = props.border,
      borderColor = props.borderColor;
  var caret = props.caret,
      children = props.children,
      boxProps = (0, _objectWithoutProperties2["default"])(props, ["caret", "children"]);
  var caretProps = {
    bg: bg,
    borderColor: borderColor,
    borderWidth: border,
    location: caret
  };
  return /*#__PURE__*/_react["default"].createElement(_BorderBox["default"], (0, _extends2["default"])({
    sx: {
      position: 'relative'
    }
  }, boxProps), children, /*#__PURE__*/_react["default"].createElement(_Caret["default"], caretProps));
}

PointerBox.displayName = "PointerBox";
PointerBox.defaultProps = {
  theme: _theme["default"]
};
PointerBox.propTypes = (0, _objectSpread2["default"])({}, _BorderBox["default"].propTypes, {
  caret: _Caret["default"].propTypes.location,
  theme: _propTypes["default"].object
});
var _default = PointerBox;
exports["default"] = _default;