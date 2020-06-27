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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../constants");

var _theme = _interopRequireDefault(require("../theme"));

var _sx = _interopRequireDefault(require("../sx"));

// SelectMenu.Header is intentionally not exported, it's an internal component used in
// SelectMenu.Modal
var SelectMenuTitle = _styledComponents["default"].h3.withConfig({
  displayName: "SelectMenuHeader__SelectMenuTitle",
  componentId: "sc-1njvopm-0"
})(["flex:auto;font-size:", ";font-weight:", ";margin:0;@media (min-width:", "){font-size:inherit;}"], (0, _constants.get)('fontSizes.1'), (0, _constants.get)('fontWeights.bold'), (0, _constants.get)('breakpoints.0'));

var StyledHeader = _styledComponents["default"].header.withConfig({
  displayName: "SelectMenuHeader__StyledHeader",
  componentId: "sc-1njvopm-1"
})(["display:flex;flex:none;padding:", ";border-bottom:", " solid ", ";", " ", " @media (min-width:", "){padding-top:", ";padding-bottom:", ";}", ";"], (0, _constants.get)('space.3'), (0, _constants.get)('borderWidths'), (0, _constants.get)('colors.border.gray'), _constants.COMMON, _constants.TYPOGRAPHY, (0, _constants.get)('breakpoints.0'), (0, _constants.get)('space.2'), (0, _constants.get)('space.2'), _sx["default"]);

var SelectMenuHeader = function SelectMenuHeader(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["children", "theme"]);
  return /*#__PURE__*/_react["default"].createElement(StyledHeader, (0, _extends2["default"])({
    theme: theme
  }, rest), /*#__PURE__*/_react["default"].createElement(SelectMenuTitle, {
    theme: theme
  }, children));
};

SelectMenuHeader.displayName = "SelectMenuHeader";
SelectMenuHeader.defaultProps = {
  theme: _theme["default"]
};
SelectMenuHeader.propTypes = (0, _objectSpread2["default"])({
  theme: _propTypes["default"].object
}, _constants.COMMON.propTypes, {}, _constants.TYPOGRAPHY.propTypes, {}, _sx["default"].propTypes);
SelectMenuHeader.displayName = 'SelectMenu.Header';
var _default = SelectMenuHeader;
exports["default"] = _default;