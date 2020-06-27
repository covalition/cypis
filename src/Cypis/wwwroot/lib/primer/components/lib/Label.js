"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _theme = _interopRequireDefault(require("./theme"));

var _constants = require("./constants");

var _sx = _interopRequireDefault(require("./sx"));

var outlineStyles = (0, _styledComponents.css)(["margin-top:-1px;margin-bottom:-1px;color:", ";border:", " solid ", ";box-shadow:none;", ";", ";background-color:transparent;"], (0, _constants.get)('colors.gray.6'), (0, _constants.get)('borderWidths.1'), (0, _constants.get)('colors.blackfade15'), _styledSystem.borderColor, _constants.COMMON);
var sizeVariant = (0, _styledSystem.variant)({
  variants: {
    small: {
      fontSize: 0,
      lineHeight: '16px',
      padding: '0px 8px'
    },
    medium: {
      fontSize: 0,
      lineHeight: '20px',
      padding: '0 8px'
    },
    large: {
      fontSize: 0,
      lineHeight: '24px',
      padding: '0 12px'
    },
    // corresponds to StateLabel fontSize/lineHeight/padding
    xl: {
      fontSize: 1,
      lineHeight: '16px',
      padding: '8px 12px'
    }
  }
});
var Label = (0, _styledComponents["default"])('span').withConfig({
  displayName: "Label",
  componentId: "sc-1lj9poe-0"
})(["display:inline-block;font-weight:", ";color:", ";border-radius:", ";&:hover{text-decoration:none;}", " ", " ", ";", ";", ";"], (0, _constants.get)('fontWeights.normal'), (0, _constants.get)('colors.white'), (0, _constants.get)('radii.3'), sizeVariant, _constants.COMMON, function (props) {
  return props.dropshadow ? 'box-shadow: inset 0 -1px 0 rgba(27, 31, 35, 0.12)' : '';
}, function (props) {
  return props.outline ? outlineStyles : '';
}, _sx["default"]);
Label.defaultProps = {
  theme: _theme["default"],
  bg: 'gray.5',
  variant: 'medium'
};
Label.propTypes = (0, _objectSpread2["default"])({
  dropshadow: _propTypes["default"].bool,
  outline: _propTypes["default"].bool,
  theme: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['small', 'medium', 'large', 'xl'])
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
var _default = Label;
exports["default"] = _default;