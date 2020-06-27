"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.listItemStyles = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _octiconsReact = require("@primer/octicons-react");

var _SelectMenuContext = require("./SelectMenuContext");

var _constants = require("../constants");

var _StyledOcticon = _interopRequireDefault(require("../StyledOcticon"));

var _theme = _interopRequireDefault(require("../theme"));

var _sx = _interopRequireDefault(require("../sx"));

var listItemStyles = (0, _styledComponents.css)(["display:flex;align-items:center;padding:", ";overflow:hidden;text-align:left;cursor:pointer;background-color:", ";border:0;border-bottom:", " solid ", ";color:", ";text-decoration:none;font-size:", ";width:100%;&:hover{text-decoration:none;}&:focus{outline:none;}&[hidden]{display:none !important;}@media (min-width:", "){padding-top:", ";padding-bottom:", ";}.SelectMenu-icon{width:", ";margin-right:", ";flex-shrink:0;}.SelectMenu-selected-icon{visibility:hidden;transition:transform 0.12s cubic-bezier(0.5,0.1,1,0.5),visibility 0s 0.12s linear;transform:scale(0);}&[aria-checked='true']{font-weight:500;color:", ";.SelectMenu-selected-icon{visibility:visible;transition:transform 0.12s cubic-bezier(0,0,0.2,1),visibility 0s linear;transform:scale(1);}}@media (hover:hover){body:not(.intent-mouse) .SelectMenu-item:focus,&:hover,&:active,&:focus{background-color:", ";}}@media (hover:none){&:focus,&:active{background-color:", ";}-webkit-tap-highlight-color:rgba(", ",0.5);}"], (0, _constants.get)('space.3'), (0, _constants.get)('colors.white'), (0, _constants.get)('borderWidths.1'), (0, _constants.get)('colors.border.grayLight'), (0, _constants.get)('colors.text.gray'), (0, _constants.get)('fontSizes.0'), (0, _constants.get)('breakpoints.0'), (0, _constants.get)('space.2'), (0, _constants.get)('space.2'), (0, _constants.get)('space.3'), (0, _constants.get)('space.2'), (0, _constants.get)('colors.gray.9'), (0, _constants.get)('colors.bg.gray'), (0, _constants.get)('colors.bg.grayLight'), (0, _constants.get)('colors.gray.3'));
exports.listItemStyles = listItemStyles;

var StyledItem = _styledComponents["default"].a.attrs(function () {
  return {
    role: 'menuitemcheckbox'
  };
}).withConfig({
  displayName: "SelectMenuItem__StyledItem",
  componentId: "sc-13zu9d-0"
})(["", " ", " ", ";"], listItemStyles, _constants.COMMON, _sx["default"]);

var SelectMenuItem = function SelectMenuItem(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      theme = _ref.theme,
      onClick = _ref.onClick,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["children", "selected", "theme", "onClick"]);
  var menuContext = (0, _react.useContext)(_SelectMenuContext.MenuContext); // close the menu when an item is clicked
  // this can be overriden if the user provides a `onClick` prop and prevents default in it

  var handleClick = function handleClick(e) {
    onClick && onClick(e);

    if (!e.defaultPrevented) {
      menuContext.setOpen(false);
    }
  };

  return /*#__PURE__*/_react["default"].createElement(StyledItem, (0, _extends2["default"])({}, rest, {
    theme: theme,
    onClick: handleClick,
    "aria-checked": selected
  }), /*#__PURE__*/_react["default"].createElement(_StyledOcticon["default"], {
    theme: theme,
    className: "SelectMenu-icon SelectMenu-selected-icon",
    icon: _octiconsReact.Check
  }), children);
};

SelectMenuItem.displayName = "SelectMenuItem";
SelectMenuItem.defaultProps = {
  theme: _theme["default"],
  selected: false
};
SelectMenuItem.propTypes = (0, _objectSpread2["default"])({
  selected: _propTypes["default"].bool
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
SelectMenuItem.displayName = 'SelectMenu.Item';
var _default = SelectMenuItem;
exports["default"] = _default;