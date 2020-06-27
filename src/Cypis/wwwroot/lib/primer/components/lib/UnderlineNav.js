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

var ITEM_CLASS = 'UnderlineNav-item';
var SELECTED_CLASS = 'selected';

function UnderlineNavBase(_ref) {
  var actions = _ref.actions,
      className = _ref.className,
      align = _ref.align,
      children = _ref.children,
      full = _ref.full,
      label = _ref.label,
      theme = _ref.theme,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["actions", "className", "align", "children", "full", "label", "theme"]);
  var classes = (0, _classnames["default"])(className, 'UnderlineNav', align && "UnderlineNav--".concat(align), full && 'UnderlineNav--full');
  return /*#__PURE__*/_react["default"].createElement("nav", (0, _extends2["default"])({
    className: classes,
    "aria-label": label
  }, rest), /*#__PURE__*/_react["default"].createElement("div", {
    className: "UnderlineNav-body"
  }, children), actions && /*#__PURE__*/_react["default"].createElement("div", {
    className: "UnderlineNav-actions"
  }, actions));
}

UnderlineNavBase.displayName = "UnderlineNavBase";
var UnderlineNav = (0, _styledComponents["default"])(UnderlineNavBase).withConfig({
  displayName: "UnderlineNav",
  componentId: "sc-14g1rj0-0"
})(["display:flex;justify-content:space-between;border-bottom:1px solid #eaecef;&.UnderlineNav--right{justify-content:flex-end;.UnderlineNav-item{margin-right:0;margin-left:", ";}.UnderlineNav-actions{flex:1 1 auto;}}&.UnderlineNav--full{display:block;}.UnderlineNav-body{display:flex;margin-bottom:-1px;}.UnderlineNav-actions{align-self:center;}", ";", ";"], (0, _constants.get)('space.3'), _constants.COMMON, _sx["default"]);
UnderlineNav.Link = _styledComponents["default"].a.attrs(function (props) {
  return {
    activeClassName: typeof props.to === 'string' ? 'selected' : '',
    className: (0, _classnames["default"])(ITEM_CLASS, props.selected && SELECTED_CLASS, props.className)
  };
}).withConfig({
  displayName: "UnderlineNav__Link",
  componentId: "sc-14g1rj0-1"
})(["padding:", " ", ";margin-right:", ";font-size:", ";line-height:", ";color:", ";text-align:center;border-bottom:2px solid transparent;text-decoration:none;&:hover,&:focus{color:", ";text-decoration:none;border-bottom-color:", ";transition:0.2s ease;.UnderlineNav-octicon{color:", ";}}&.selected{color:", ";border-bottom-color:", ";.UnderlineNav-octicon{color:", ";}}", ";", ";"], (0, _constants.get)('space.3'), (0, _constants.get)('space.2'), (0, _constants.get)('space.3'), (0, _constants.get)('fontSizes.1'), (0, _constants.get)('lineHeights.default'), (0, _constants.get)('colors.gray.6'), (0, _constants.get)('colors.gray.9'), (0, _constants.get)('colors.gray.2'), (0, _constants.get)('colors.gray.5'), (0, _constants.get)('colors.gray.9'), (0, _constants.get)('colors.accent'), (0, _constants.get)('colors.gray.5'), _constants.COMMON, _sx["default"]);
UnderlineNav.defaultProps = {
  theme: _theme["default"]
};
UnderlineNav.propTypes = (0, _objectSpread2["default"])({
  actions: _propTypes["default"].node,
  align: _propTypes["default"].oneOf(['right']),
  children: _propTypes["default"].node,
  full: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  theme: _propTypes["default"].object
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
UnderlineNav.Link.defaultProps = {
  theme: _theme["default"]
};
UnderlineNav.Link.propTypes = (0, _objectSpread2["default"])({
  as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].elementType]),
  href: _propTypes["default"].string,
  selected: _propTypes["default"].bool
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
UnderlineNav.Link.displayName = 'UnderlineNav.Link';
var _default = UnderlineNav;
exports["default"] = _default;