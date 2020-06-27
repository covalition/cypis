"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _octiconsReact = _interopRequireDefault(require("@primer/octicons-react"));

var _constants = require("./constants");

var _isNumeric = _interopRequireDefault(require("./utils/isNumeric"));

var _theme = _interopRequireDefault(require("./theme"));

var _sx = _interopRequireDefault(require("./sx"));

var variantSizes = {
  small: 56,
  medium: 96,
  large: 128
};

var sizeStyles = function sizeStyles(_ref) {
  var size = _ref.size,
      variant = _ref.variant;
  var calc = (0, _isNumeric["default"])(size) ? size : variantSizes[variant];
  return {
    width: calc,
    height: calc
  };
};

var CircleBadge = _styledComponents["default"].div.withConfig({
  displayName: "CircleBadge",
  componentId: "sc-19eysyj-0"
})(["display:", ";align-items:center;justify-content:center;background-color:", ";border-radius:50%;box-shadow:", ";", " ", ";", ";"], function (props) {
  return props.inline ? 'inline-flex' : 'flex';
}, (0, _constants.get)('colors.white'), (0, _constants.get)('shadows.medium'), _constants.COMMON, sizeStyles, _sx["default"]);

CircleBadge.Icon = (0, _styledComponents["default"])(_octiconsReact["default"]).withConfig({
  displayName: "CircleBadge__Icon",
  componentId: "sc-19eysyj-1"
})(["max-width:60% !important;height:auto !important;max-height:55% !important;", ";", ";"], _constants.COMMON, _sx["default"]);
CircleBadge.defaultProps = {
  inline: false,
  theme: _theme["default"],
  variant: 'medium'
};
CircleBadge.propTypes = (0, _objectSpread2["default"])({
  inline: _propTypes["default"].bool,
  size: _propTypes["default"].number,
  theme: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['small', 'medium', 'large'])
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
CircleBadge.Icon.defaultProps = {
  theme: _theme["default"]
};
CircleBadge.Icon.propTypes = (0, _objectSpread2["default"])({
  theme: _propTypes["default"].object
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
CircleBadge.Icon.displayName = 'CircleBadge.Icon';
var _default = CircleBadge;
exports["default"] = _default;