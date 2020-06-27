"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.systemStyles = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("../constants");

var _theme = _interopRequireDefault(require("../theme"));

var _ButtonStyles = _interopRequireDefault(require("./ButtonStyles"));

var _styledSystem = require("styled-system");

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var variants = (0, _styledSystem.variant)({
  variants: {
    small: {
      p: '4px 12px',
      fontSize: 0
    },
    medium: {
      fontSize: 1
    },
    large: {
      fontSize: 2,
      p: '10px 20px'
    }
  }
});

var ButtonBase = _styledComponents["default"].button.attrs(function (_ref) {
  var disabled = _ref.disabled,
      onClick = _ref.onClick;
  return {
    onClick: disabled ? undefined : onClick
  };
}).withConfig({
  displayName: "ButtonBase",
  componentId: "exshql-0"
})(["", " ", ""], _ButtonStyles["default"], variants);

var systemStyles = (0, _styledSystem.compose)(_styledSystem.fontSize, _constants.COMMON, _constants.LAYOUT);
exports.systemStyles = systemStyles;
ButtonBase.defaultProps = {
  theme: _theme["default"],
  variant: 'medium'
};
ButtonBase.propTypes = (0, _objectSpread2["default"])({
  as: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(['button', 'a', 'summary', 'input']), _propTypes["default"].elementType]),
  children: _propTypes["default"].node,
  disabled: _propTypes["default"].bool,
  fontSize: _propTypes2["default"].typography.fontSize,
  onClick: _propTypes["default"].func,
  theme: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['small', 'medium', 'large'])
}, _constants.COMMON.propTypes, {}, _constants.LAYOUT.propTypes);
var _default = ButtonBase;
exports["default"] = _default;