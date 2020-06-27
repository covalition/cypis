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

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _SelectMenuContext = require("./SelectMenuContext");

var _constants = require("../constants");

var _theme = _interopRequireDefault(require("../theme"));

var _sx = _interopRequireDefault(require("../sx"));

var tabStyles = (0, _styledComponents.css)(["flex:1;padding:", " ", ";font-size:", ";font-weight:500;color:", ";text-align:center;background-color:", ";border:0;box-shadow:inset 0 -1px 0 ", ";@media (min-width:", "){flex:none;padding:", " ", ";border:", " solid transparent;border-bottom-width:0;border-top-left-radius:", ";border-top-right-radius:", ";background-color:", ";}&[aria-selected='true']{z-index:1;color:", ";background-color:", ";box-shadow:0 0 0 1px ", ";@media (min-width:", "){border-color:", ";box-shadow:none;}}&:focus{background-color:#dbedff;}"], (0, _constants.get)('space.2'), (0, _constants.get)('space.3'), (0, _constants.get)('fontSizes.0'), (0, _constants.get)('colors.gray.5'), (0, _constants.get)('colors.gray.1'), (0, _constants.get)('colors.border.gray'), (0, _constants.get)('breakpoints.0'), (0, _constants.get)('space.1'), (0, _constants.get)('space.3'), (0, _constants.get)('borderWidths.1'), (0, _constants.get)('radii.2'), (0, _constants.get)('radii.2'), (0, _constants.get)('colors.white'), (0, _constants.get)('colors.gray.9'), (0, _constants.get)('colors.white'), (0, _constants.get)('colors.border.gray'), (0, _constants.get)('breakpoints.0'), (0, _constants.get)('colors.border.gray'));

var StyledTab = _styledComponents["default"].button.withConfig({
  displayName: "SelectMenuTab__StyledTab",
  componentId: "oezw3-0"
})(["", " ", " ", ";"], tabStyles, _constants.COMMON, _sx["default"]);

var SelectMenuTab = function SelectMenuTab(_ref) {
  var tabName = _ref.tabName,
      index = _ref.index,
      className = _ref.className,
      onClick = _ref.onClick,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["tabName", "index", "className", "onClick"]);
  var menuContext = (0, _react.useContext)(_SelectMenuContext.MenuContext);

  var handleClick = function handleClick(e) {
    // if consumer has attached an onClick event, call it
    onClick && onClick(e);

    if (!e.defaultPrevented) {
      menuContext.setSelectedTab(tabName);
    }
  }; // if no tab is selected when the component renders, show the first tab


  (0, _react.useEffect)(function () {
    if (!menuContext.selectedTab && index === 0) {
      menuContext.setSelectedTab(tabName);
    }
  }, [index, menuContext, tabName]);
  var isSelected = menuContext.selectedTab === tabName;
  return /*#__PURE__*/_react["default"].createElement(StyledTab, (0, _extends2["default"])({
    role: "tab",
    className: (0, _classnames["default"])('SelectMenuTab', className),
    "aria-selected": isSelected,
    onClick: handleClick
  }, rest), tabName);
};

SelectMenuTab.displayName = "SelectMenuTab";
SelectMenuTab.defaultProps = {
  theme: _theme["default"]
};
SelectMenuTab.propTypes = (0, _objectSpread2["default"])({
  index: _propTypes["default"].number,
  onClick: _propTypes["default"].func,
  tabName: _propTypes["default"].string
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
SelectMenuTab.displayName = 'SelectMenu.Tab';
var _default = SelectMenuTab;
exports["default"] = _default;