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

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

var _sx = _interopRequireDefault(require("./sx"));

var ITEM_CLASS = 'TabNav-item';
var SELECTED_CLASS = 'selected';

function TabNavBase(_ref) {
  var actions = _ref.actions,
      className = _ref.className,
      align = _ref.align,
      children = _ref.children,
      full = _ref.full,
      theme = _ref.theme,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["actions", "className", "align", "children", "full", "theme"]);
  var classes = (0, _classnames["default"])(className, 'TabNav');
  return /*#__PURE__*/_react["default"].createElement("nav", (0, _extends2["default"])({
    className: classes
  }, rest), /*#__PURE__*/_react["default"].createElement("div", {
    className: "TabNav-body"
  }, children));
}

TabNavBase.displayName = "TabNavBase";
var TabNav = (0, _styledComponents["default"])(TabNavBase).withConfig({
  displayName: "TabNav",
  componentId: "sc-1x2a5a7-0"
})(["display:flex;border-bottom:1px solid ", ";.TabNav-body{display:flex;margin-bottom:-1px;}", ";", ";"], (0, _constants.get)('colors.border.gray'), _constants.COMMON, _sx["default"]);
TabNav.Link = _styledComponents["default"].a.attrs(function (props) {
  return {
    activeClassName: typeof props.to === 'string' ? 'selected' : '',
    className: (0, _classnames["default"])(ITEM_CLASS, props.selected && SELECTED_CLASS, props.className)
  };
}).withConfig({
  displayName: "TabNav__Link",
  componentId: "sc-1x2a5a7-1"
})(["padding:8px 12px;font-size:", ";line-height:20px;color:", ";text-decoration:none;background-color:transparent;border:1px solid transparent;border-bottom:0;&:hover,&:focus{color:", ";text-decoration:none;}&.selected{color:", ";border-color:", ";border-top-right-radius:", ";border-top-left-radius:", ";background-color:", ";}", ";", ";"], (0, _constants.get)('fontSizes.1'), (0, _constants.get)('colors.black'), (0, _constants.get)('colors.text.grayDark'), (0, _constants.get)('colors.text.grayDark'), (0, _constants.get)('colors.border.gray'), (0, _constants.get)('radii.2'), (0, _constants.get)('radii.2'), (0, _constants.get)('colors.white'), _constants.COMMON, _sx["default"]);
TabNav.defaultProps = {
  theme: _theme["default"]
};
TabNav.propTypes = (0, _objectSpread2["default"])({
  children: _propTypes["default"].node,
  theme: _propTypes["default"].object
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
TabNav.Link.defaultProps = {
  theme: _theme["default"]
};
TabNav.Link.propTypes = (0, _objectSpread2["default"])({
  as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].elementType]),
  href: _propTypes["default"].string,
  selected: _propTypes["default"].bool
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
TabNav.Link.displayName = 'TabNav.Link';
var _default = TabNav;
exports["default"] = _default;