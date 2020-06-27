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

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

var _sx = _interopRequireDefault(require("./sx"));

var _deprecate = require("./utils/deprecate");

var schemeMap = {
  red: 'danger',
  blue: 'default',
  yellow: 'warning',
  green: 'success'
};
var variants = (0, _styledSystem.variant)({
  scale: 'flash'
});

var getIconColor = function getIconColor(variant, theme) {
  return (0, _constants.get)("flashIcon.".concat(variant))(theme);
};

var StyledFlash = _styledComponents["default"].div.withConfig({
  displayName: "Flash__StyledFlash",
  componentId: "y43qx-0"
})(["position:relative;color:", ";padding:", ";border-style:solid;border-width:", ";border-radius:", ";margin-top:", ";p:last-child{margin-bottom:0;}svg{color:", ";margin-right:", ";}", ";", " ", ";"], (0, _constants.get)('colors.text.grayDark'), (0, _constants.get)('space.3'), function (props) {
  return props.full ? '1px 0px' : '1px';
}, function (props) {
  return props.full ? '0' : (0, _constants.get)('radii.2');
}, function (props) {
  return props.full ? '-1px' : '0';
}, function (props) {
  return getIconColor(props.variant, props.theme);
}, (0, _constants.get)('space.2'), _constants.COMMON, variants, _sx["default"]);

var Flash = function Flash(_ref) {
  var variant = _ref.variant,
      scheme = _ref.scheme,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["variant", "scheme"]);
  var deprecate = (0, _deprecate.useDeprecation)({
    name: 'Flash "scheme" prop',
    version: '20.0.0',
    message: 'Use the variant prop instead. See https://primer.style/components/Flash for more details.'
  });

  if (scheme) {
    deprecate();
    variant = schemeMap[scheme];
  }

  return /*#__PURE__*/_react["default"].createElement(StyledFlash, (0, _extends2["default"])({
    variant: variant
  }, props));
};

Flash.displayName = "Flash";
Flash.defaultProps = {
  theme: _theme["default"],
  variant: 'default'
};
Flash.propTypes = (0, _objectSpread2["default"])({
  children: _propTypes["default"].node,
  full: _propTypes["default"].bool,
  scheme: _propTypes["default"].oneOf(Object.keys(schemeMap)),
  // deprecate 20.0.0
  variant: _propTypes["default"].oneOf(['default', 'warning', 'success', 'danger'])
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
var _default = Flash;
exports["default"] = _default;