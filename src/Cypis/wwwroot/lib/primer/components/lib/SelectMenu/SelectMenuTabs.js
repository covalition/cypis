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

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _constants = require("../constants");

var _theme = _interopRequireDefault(require("../theme"));

var _sx = _interopRequireDefault(require("../sx"));

var tabWrapperStyles = (0, _styledComponents.css)(["display:flex;flex-shrink:0;margin-bottom:-1px;-webkit-overflow-scrolling:touch;overflow-x:auto;overflow-y:hidden;&::-webkit-scrollbar{display:none;}@media (min-width:", "){padding:0 ", ";margin-top:", ";}"], (0, _constants.get)('breakpoints.0'), (0, _constants.get)('space.2'), (0, _constants.get)('space.3'));

var Tabs = function Tabs(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    role: "tablist"
  }, rest), children);
};

Tabs.displayName = "Tabs";
var SelectMenuTabs = (0, _styledComponents["default"])(Tabs).withConfig({
  displayName: "SelectMenuTabs",
  componentId: "sc-17uzpv2-0"
})(["", " ", " ", ";"], tabWrapperStyles, _constants.COMMON, _sx["default"]);
SelectMenuTabs.defaultProps = {
  theme: _theme["default"]
};
SelectMenuTabs.propTypes = (0, _objectSpread2["default"])({}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
SelectMenuTabs.displayName = 'SelectMenu.Tabs';
var _default = SelectMenuTabs;
exports["default"] = _default;