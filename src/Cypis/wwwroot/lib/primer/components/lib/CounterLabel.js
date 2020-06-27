"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

var _sx = _interopRequireDefault(require("./sx"));

var colorStyles = function colorStyles(_ref) {
  var scheme = _ref.scheme,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["scheme"]);
  return {
    color: scheme === 'gray-light' ? (0, _constants.get)('colors.gray.9')(props) : scheme === 'gray' ? (0, _constants.get)('colors.white')(props) : (0, _constants.get)('colors.gray.6')(props)
  };
};

var bgStyles = function bgStyles(_ref2) {
  var scheme = _ref2.scheme,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["scheme"]);
  return {
    backgroundColor: scheme === 'gray-light' ? (0, _constants.get)('colors.blackfade15')(props) : scheme === 'gray' ? (0, _constants.get)('colors.gray.5')(props) : (0, _constants.get)('colors.counter.bg')(props)
  };
};

var CounterLabel = _styledComponents["default"].span.withConfig({
  displayName: "CounterLabel",
  componentId: "dvbkn1-0"
})(["display:inline-block;padding:2px 5px;font-size:", ";font-weight:", ";line-height:", ";border-radius:20px;", ";", ";", ";&:empty{visibility:hidden;}", ";"], (0, _constants.get)('fontSizes.0'), (0, _constants.get)('fontWeights.bold'), (0, _constants.get)('lineHeights.condensedUltra'), colorStyles, bgStyles, _constants.COMMON, _sx["default"]);

CounterLabel.defaultProps = {
  theme: _theme["default"]
};
CounterLabel.propTypes = (0, _objectSpread2["default"])({
  children: _propTypes["default"].node,
  scheme: _propTypes["default"].oneOf(['gray', 'gray-light']),
  theme: _propTypes["default"].object
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
var _default = CounterLabel;
exports["default"] = _default;