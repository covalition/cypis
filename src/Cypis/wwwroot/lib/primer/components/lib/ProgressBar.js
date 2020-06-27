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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _theme = _interopRequireDefault(require("./theme"));

var _constants = require("./constants");

var _sx = _interopRequireDefault(require("./sx"));

var Bar = _styledComponents["default"].span.withConfig({
  displayName: "ProgressBar__Bar",
  componentId: "jrdkmi-0"
})(["width:", ";", ""], function (props) {
  return props.progress ? "".concat(props.progress, "%") : 0;
}, _constants.COMMON);

var sizeMap = {
  small: '5px',
  large: '10px',
  "default": '8px'
};

var ProgressContainer = _styledComponents["default"].span.withConfig({
  displayName: "ProgressBar__ProgressContainer",
  componentId: "jrdkmi-1"
})(["display:", ";overflow:hidden;background-color:", ";border-radius:", ";height:", ";", " ", " ", ";"], function (props) {
  return props.inline ? 'inline-flex' : 'flex';
}, (0, _constants.get)('colors.gray.2'), (0, _constants.get)('radii.1'), function (props) {
  return sizeMap[props.barSize];
}, _constants.COMMON, _styledSystem.layout.width, _sx["default"]);

var ProgressBar = function ProgressBar(_ref) {
  var progress = _ref.progress,
      bg = _ref.bg,
      theme = _ref.theme,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["progress", "bg", "theme"]);
  return /*#__PURE__*/_react["default"].createElement(ProgressContainer, (0, _extends2["default"])({
    theme: theme
  }, rest), /*#__PURE__*/_react["default"].createElement(Bar, {
    progress: progress,
    bg: bg,
    theme: theme
  }));
};

ProgressBar.displayName = "ProgressBar";
ProgressBar.defaultProps = {
  bg: 'green.5',
  barSize: 'default',
  theme: _theme["default"]
};
ProgressBar.propTypes = (0, _objectSpread2["default"])({}, _constants.COMMON.propTypes, {
  barSize: _propTypes["default"].oneOf(['small', 'default', 'large']),
  inline: _propTypes["default"].bool,
  progress: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
}, _sx["default"].propTypes, {
  theme: _propTypes["default"].object,
  width: _propTypes2["default"].layout.width
});
var _default = ProgressBar;
exports["default"] = _default;