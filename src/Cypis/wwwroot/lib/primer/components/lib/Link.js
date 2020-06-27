"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

var _sx = _interopRequireDefault(require("./sx"));

var buttonStyles = {
  display: 'inline-block',
  padding: '0',
  fontSize: 'inherit',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  userSelect: 'none',
  backgroundColor: 'transparent',
  border: '0',
  appearance: 'none'
};
var hoverColor = (0, _styledSystem.system)({
  hoverColor: {
    property: 'color',
    scale: 'colors'
  }
});

var Link = _styledComponents["default"].a.attrs(function (props) {
  return {
    color: props.color ? props.color : props.muted ? 'gray.6' : 'blue.5'
  };
}).withConfig({
  displayName: "Link",
  componentId: "kudw2l-0"
})(["text-decoration:", ";&:hover{text-decoration:", ";", ";}", ";", " ", ";", ";"], function (props) {
  return props.underline ? 'underline' : 'none';
}, function (props) {
  return props.muted ? 'none' : 'underline';
}, function (props) {
  return props.hoverColor ? hoverColor : props.muted ? "color: ".concat((0, _constants.get)('colors.blue.5')(_theme["default"])) : '';
}, function (props) {
  return props.as === 'button' ? buttonStyles : '';
}, _constants.TYPOGRAPHY, _constants.COMMON, _sx["default"]);

Link.defaultProps = {
  theme: _theme["default"]
};
Link.propTypes = (0, _objectSpread2["default"])({
  as: _propTypes["default"].elementType,
  href: _propTypes["default"].string,
  muted: _propTypes["default"].bool,
  theme: _propTypes["default"].object,
  underline: _propTypes["default"].bool
}, _constants.TYPOGRAPHY.propTypes, {}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
var _default = Link;
exports["default"] = _default;