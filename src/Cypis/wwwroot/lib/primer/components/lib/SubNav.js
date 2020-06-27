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

var _Flex = _interopRequireDefault(require("./Flex"));

var _sx = _interopRequireDefault(require("./sx"));

var ITEM_CLASS = 'SubNav-item';
var SELECTED_CLASS = 'selected';

function SubNavBase(_ref) {
  var actions = _ref.actions,
      className = _ref.className,
      children = _ref.children,
      label = _ref.label,
      theme = _ref.theme,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["actions", "className", "children", "label", "theme"]);
  var classes = (0, _classnames["default"])(className, 'SubNav');
  return /*#__PURE__*/_react["default"].createElement("nav", (0, _extends2["default"])({
    className: classes,
    "aria-label": label
  }, rest), /*#__PURE__*/_react["default"].createElement("div", {
    className: "SubNav-body"
  }, children), actions && /*#__PURE__*/_react["default"].createElement("div", {
    className: "SubNav-actions"
  }, actions));
}

SubNavBase.displayName = "SubNavBase";
var SubNav = (0, _styledComponents["default"])(SubNavBase).withConfig({
  displayName: "SubNav",
  componentId: "sc-16bavxu-0"
})(["display:flex;justify-content:space-between;.SubNav-body{display:flex;margin-bottom:-1px;> *{margin-left:", ";}> *:first-child{margin-left:0;}}.SubNav-actions{align-self:center;}", ";", ";", ";"], (0, _constants.get)('space.2'), _constants.COMMON, _constants.FLEX, _sx["default"]);
SubNav.Links = _Flex["default"];
SubNav.Link = _styledComponents["default"].a.attrs(function (props) {
  return {
    activeClassName: typeof props.to === 'string' ? 'selected' : '',
    className: (0, _classnames["default"])(ITEM_CLASS, props.selected && SELECTED_CLASS, props.className)
  };
}).withConfig({
  displayName: "SubNav__Link",
  componentId: "sc-16bavxu-1"
})(["padding-left:", ";padding-right:", ";min-height:34px;font-weight:", ";font-size:", ";line-height:", ";color:", ";text-align:center;text-decoration:none;border-top:1px solid ", ";border-bottom:1px solid ", ";border-right:1px solid ", ";display:flex;align-items:center;&:first-of-type{border-top-left-radius:", ";border-bottom-left-radius:", ";border-left:1px solid ", ";}&:last-of-type{border-top-right-radius:", ";border-bottom-right-radius:", ";}&:hover,&:focus{text-decoration:none;background-color:", ";transition:0.2s ease;.SubNav-octicon{color:", ";}}&.selected{color:", ";background-color:", ";border:0;.SubNav-octicon{color:", ";}}", ";", ";"], (0, _constants.get)('space.3'), (0, _constants.get)('space.3'), (0, _constants.get)('fontWeights.bold'), (0, _constants.get)('fontSizes.1'), (0, _constants.get)('lineHeights.default'), (0, _constants.get)('colors.gray.6'), (0, _constants.get)('colors.gray.2'), (0, _constants.get)('colors.gray.2'), (0, _constants.get)('colors.gray.2'), (0, _constants.get)('radii.2'), (0, _constants.get)('radii.2'), (0, _constants.get)('colors.gray.2'), (0, _constants.get)('radii.2'), (0, _constants.get)('radii.2'), (0, _constants.get)('colors.gray.1'), (0, _constants.get)('colors.gray.5'), (0, _constants.get)('colors.white'), (0, _constants.get)('colors.blue.5'), (0, _constants.get)('colors.gray.5'), _constants.COMMON, _sx["default"]);
SubNav.defaultProps = {
  theme: _theme["default"]
};
SubNav.propTypes = (0, _objectSpread2["default"])({
  actions: _propTypes["default"].node,
  align: _propTypes["default"].oneOf(['right']),
  children: _propTypes["default"].node,
  full: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  theme: _propTypes["default"].object
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
SubNav.Link.defaultProps = {
  theme: _theme["default"]
};
SubNav.Link.propTypes = (0, _objectSpread2["default"])({
  as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].elementType]),
  href: _propTypes["default"].string,
  selected: _propTypes["default"].bool
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
SubNav.Link.displayName = 'SubNav.Link';
SubNav.Links.propTypes = (0, _objectSpread2["default"])({}, _Flex["default"].propTypes);
SubNav.Links.displayName = 'SubNav.Links';
var _default = SubNav;
exports["default"] = _default;