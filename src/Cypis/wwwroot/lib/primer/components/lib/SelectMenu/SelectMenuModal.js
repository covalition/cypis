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

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _constants = require("../constants");

var _theme = _interopRequireDefault(require("../theme"));

var _sx = _interopRequireDefault(require("../sx"));

var animateModal = (0, _styledComponents.keyframes)(["0%{opacity:0;transform:scale(0.9);}"]);
var modalStyles = (0, _styledComponents.css)(["position:relative;z-index:99;display:flex;", ";max-height:", ";margin:auto 0;", ";overflow:hidden;pointer-events:auto;flex-direction:column;background-color:", ";border-radius:", ";box-shadow:0 1px 5px rgba(27,31,35,0.15);animation:", " 0.12s cubic-bezier(0,0.1,0.1,1) backwards;@media (min-width:", "){width:'300px';height:auto;max-height:350px;margin:", " 0 ", " 0;font-size:", ";border:", " solid ", ";border-radius:", ";box-shadow:0 1px 5px ", " !default;}"], function (props) {
  return props.filter ? 'height: 80%' : '';
}, function (props) {
  return props.filter ? 'none' : '66%';
}, function (props) {
  return props.filter ? 'margin-top: 0' : '';
}, (0, _constants.get)('colors.white'), (0, _constants.get)('radii.2'), animateModal, (0, _constants.get)('breakpoints.0'), (0, _constants.get)('space.1'), (0, _constants.get)('space.3'), (0, _constants.get)('fontSizes.0'), (0, _constants.get)('borderWidths.1'), (0, _constants.get)('colors.border.grayDark'), (0, _constants.get)('radii.2'), (0, _constants.get)('colors.blackfade15'));
var modalWrapperStyles = (0, _styledComponents.css)(["position:fixed;top:0;right:0;bottom:0;left:0;z-index:99;display:flex;padding:", ";pointer-events:none;flex-direction:column;&::before{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;content:'';background-color:", ";@media (min-width:", "){display:none;}}@media (min-width:", "){position:absolute;top:auto;right:", ";bottom:auto;left:auto;padding:0;}"], (0, _constants.get)('space.3'), (0, _constants.get)('colors.blackfade50'), (0, _constants.get)('breakpoints.0'), (0, _constants.get)('breakpoints.0'), function (props) {
  return props.align === 'right' ? '0' : 'auto';
});

var Modal = _styledComponents["default"].div.withConfig({
  displayName: "SelectMenuModal__Modal",
  componentId: "fv9zw3-0"
})(["", ""], modalStyles);

var ModalWrapper = _styledComponents["default"].div.withConfig({
  displayName: "SelectMenuModal__ModalWrapper",
  componentId: "fv9zw3-1"
})(["", " ", " ", ";"], modalWrapperStyles, _constants.COMMON, _sx["default"]);

var SelectMenuModal = function SelectMenuModal(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["children", "theme"]);
  return /*#__PURE__*/_react["default"].createElement(ModalWrapper, (0, _extends2["default"])({
    theme: theme
  }, rest, {
    role: "menu"
  }), /*#__PURE__*/_react["default"].createElement(Modal, {
    theme: theme
  }, children));
};

SelectMenuModal.displayName = "SelectMenuModal";
SelectMenuModal.defaultProps = {
  align: 'left',
  theme: _theme["default"]
};
SelectMenuModal.propTypes = (0, _objectSpread2["default"])({
  align: _propTypes["default"].oneOf(['left', 'right']),
  theme: _propTypes["default"].object
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
SelectMenuModal.displayName = 'SelectMenu.Modal';
var _default = SelectMenuModal;
exports["default"] = _default;