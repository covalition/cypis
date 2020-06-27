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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SelectMenuContext = require("./SelectMenuContext");

var _SelectMenuList = _interopRequireDefault(require("./SelectMenuList"));

var _theme = _interopRequireDefault(require("../theme"));

var _constants = require("../constants");

var _sx = _interopRequireDefault(require("../sx"));

var TabPanelBase = function TabPanelBase(_ref) {
  var tabName = _ref.tabName,
      className = _ref.className,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["tabName", "className", "children"]);
  var menuContext = (0, _react.useContext)(_SelectMenuContext.MenuContext);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    role: "tabpanel",
    className: className,
    hidden: menuContext.selectedTab !== tabName
  }, rest), /*#__PURE__*/_react["default"].createElement(_SelectMenuList["default"], null, children));
};

TabPanelBase.displayName = "TabPanelBase";
var TabPanel = (0, _styledComponents["default"])(TabPanelBase).withConfig({
  displayName: "SelectMenuTabPanel__TabPanel",
  componentId: "hgx3vc-0"
})(["border-top:", " solid ", ";", " ", ";"], (0, _constants.get)('borderWidths.1'), (0, _constants.get)('colors.border.gray'), _constants.COMMON, _sx["default"]);
TabPanel.defaultProps = {
  theme: _theme["default"]
};
TabPanel.propTypes = (0, _objectSpread2["default"])({
  tabName: _propTypes["default"].string
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
TabPanel.displayName = 'SelectMenu.TabPanel';
var _default = TabPanel;
exports["default"] = _default;