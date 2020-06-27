"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _props = require("@styled-system/props");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _StyledOcticon = _interopRequireDefault(require("./StyledOcticon"));

var _styledSystem = require("styled-system");

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

var _sx = _interopRequireDefault(require("./sx"));

var sizeVariants = (0, _styledSystem.variant)({
  variants: {
    small: {
      minHeight: '28px',
      px: 2,
      py: '3px',
      fontSize: 0,
      lineHeight: '20px'
    },
    large: {
      px: 2,
      py: '10px',
      fontSize: 3
    }
  }
}); // using forwardRef is important so that other components (ex. SelectMenu) can autofocus the input

var TextInput = _react["default"].forwardRef(function (_ref, ref) {
  var icon = _ref.icon,
      className = _ref.className,
      block = _ref.block,
      disabled = _ref.disabled,
      sx = _ref.sx,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["icon", "className", "block", "disabled", "sx"]);
  // this class is necessary to style FilterSearch, plz no touchy!
  var wrapperClasses = (0, _classnames["default"])(className, 'TextInput-wrapper');
  var wrapperProps = (0, _props.pick)(rest);
  var inputProps = (0, _props.omit)(rest);
  return /*#__PURE__*/_react["default"].createElement(Wrapper, (0, _extends2["default"])({
    className: wrapperClasses,
    hasIcon: !!icon,
    block: block,
    theme: _theme["default"],
    disabled: disabled,
    sx: sx
  }, wrapperProps), icon && /*#__PURE__*/_react["default"].createElement(_StyledOcticon["default"], {
    className: "TextInput-icon",
    icon: icon
  }), /*#__PURE__*/_react["default"].createElement(Input, (0, _extends2["default"])({
    ref: ref,
    disabled: disabled
  }, inputProps)));
});

var Input = _styledComponents["default"].input.withConfig({
  displayName: "TextInput__Input",
  componentId: "sc-156lfck-0"
})(["border:0;font-size:inherit;background-color:transparent;-webkit-appearance:none;color:inherit;width:100%;&:focus{outline:0;}"]);

var Wrapper = _styledComponents["default"].span.withConfig({
  displayName: "TextInput__Wrapper",
  componentId: "sc-156lfck-1"
})(["display:inline-flex;align-items:stretch;min-height:34px;font-size:", ";line-height:20px;color:", ";vertical-align:middle;background-repeat:no-repeat;background-position:right 8px center;border:1px solid ", ";border-radius:", ";outline:none;box-shadow:", ";", " .TextInput-icon{align-self:center;color:", ";margin:0 ", ";flex-shrink:0;}&:focus-within{border-color:", ";box-shadow:", ",", ";}", " ", " @media (min-width:", "){font-size:", ";}", " ", " ", " ", " ", " ", ";"], (0, _constants.get)('fontSizes.1'), (0, _constants.get)('colors.gray.9'), (0, _constants.get)('colors.border.gray'), (0, _constants.get)('radii.2'), (0, _constants.get)('shadows.formControl'), function (props) {
  if (props.hasIcon) {
    return (0, _styledComponents.css)(["padding:0;"]);
  } else {
    return (0, _styledComponents.css)(["padding:6px 12px;"]);
  }
}, (0, _constants.get)('colors.gray.4'), (0, _constants.get)('space.2'), (0, _constants.get)('colors.blue.4'), (0, _constants.get)('shadows.formControl'), (0, _constants.get)('shadows.formControlFocus'), function (props) {
  return props.disabled && (0, _styledComponents.css)(["background-color:", ";box-shadow:", "}"], (0, _constants.get)('colors.bg.disabled'), (0, _constants.get)('shadows.formControlDisabled'));
}, function (props) {
  return props.block && (0, _styledComponents.css)(["display:block;width:100%;"]);
}, (0, _constants.get)('breakpoints.1'), (0, _constants.get)('fontSizes.1'), _constants.COMMON, _styledSystem.width, _styledSystem.minWidth, _styledSystem.maxWidth, sizeVariants, _sx["default"]);

TextInput.defaultProps = {
  theme: _theme["default"],
  type: 'text'
};
TextInput.propTypes = (0, _objectSpread2["default"])({
  block: _propTypes["default"].bool,
  maxWidth: _propTypes2["default"].layout.maxWidth,
  minWidth: _propTypes2["default"].layout.minWidth,
  variant: _propTypes["default"].oneOf(['small', 'large'])
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes, {
  width: _propTypes2["default"].layout.width
});
TextInput.displayName = 'TextInput';
var _default = TextInput;
exports["default"] = _default;