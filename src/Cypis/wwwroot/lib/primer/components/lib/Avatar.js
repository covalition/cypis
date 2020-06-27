"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sx = _interopRequireDefault(require("./sx"));

var _constants = require("./constants");

var _styledSystem = require("styled-system");

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _theme = _interopRequireDefault(require("./theme"));

function borderRadius(_ref) {
  var size = _ref.size;
  return {
    borderRadius: size <= 24 ? '2px' : '3px'
  };
}

var Avatar = _styledComponents["default"].img.attrs(function (props) {
  return {
    height: props.size,
    width: props.size,
    alt: props.alt
  };
}).withConfig({
  displayName: "Avatar",
  componentId: "cqsihq-0"
})(["display:inline-block;overflow:hidden;line-height:", ";vertical-align:middle;", ";", ";", ";"], (0, _constants.get)('lineHeights.condensedUltra'), borderRadius, _styledSystem.space, _sx["default"]);

Avatar.defaultProps = {
  theme: _theme["default"],
  size: 20,
  alt: ''
};
Avatar.propTypes = (0, _objectSpread2["default"])({
  alt: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].number,
  src: _propTypes["default"].string
}, _propTypes2["default"].space, {}, _sx["default"].propTypes, {
  theme: _propTypes["default"].object
});
var _default = Avatar;
exports["default"] = _default;