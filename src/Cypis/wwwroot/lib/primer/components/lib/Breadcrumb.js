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

var _sx = _interopRequireDefault(require("./sx"));

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

var _Box = _interopRequireDefault(require("./Box"));

var SELECTED_CLASS = 'selected';

var Wrapper = _styledComponents["default"].li.withConfig({
  displayName: "Breadcrumb__Wrapper",
  componentId: "sc-1hutxdl-0"
})(["display:inline-block;white-space:nowrap;list-style:none;&::after{padding-right:0.5em;padding-left:0.5em;color:", ";font-size:", ";content:'/';}&:first-child{margin-left:0;}&:last-child{&::after{content:none;}}"], (0, _constants.get)('colors.gray.2'), (0, _constants.get)('fontSizes.1'));

var BreadcrumbBase = function BreadcrumbBase(_ref) {
  var className = _ref.className,
      children = _ref.children,
      theme = _ref.theme,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["className", "children", "theme"]);
  var classes = (0, _classnames["default"])(className, 'Breadcrumb');

  var wrappedChildren = _react["default"].Children.map(children, function (child) {
    return /*#__PURE__*/_react["default"].createElement(Wrapper, {
      theme: theme
    }, child);
  });

  return /*#__PURE__*/_react["default"].createElement("nav", (0, _extends2["default"])({
    className: classes,
    "aria-label": "breadcrumb"
  }, rest), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    as: "ol",
    my: 0,
    pl: 0
  }, wrappedChildren));
};

BreadcrumbBase.displayName = "BreadcrumbBase";
var Breadcrumb = (0, _styledComponents["default"])(BreadcrumbBase).withConfig({
  displayName: "Breadcrumb",
  componentId: "sc-1hutxdl-1"
})(["display:flex;justify-content:space-between;", ";", ";", ";"], _constants.COMMON, _constants.FLEX, _sx["default"]);
Breadcrumb.Item = _styledComponents["default"].a.attrs(function (props) {
  return {
    activeClassName: typeof props.to === 'string' ? 'selected' : '',
    className: (0, _classnames["default"])(props.selected && SELECTED_CLASS, props.className),
    'aria-current': props.selected ? 'page' : null
  };
}).withConfig({
  displayName: "Breadcrumb__Item",
  componentId: "sc-1hutxdl-2"
})(["color:", ";display:inline-block;font-size:", ";text-decoration:none;&:hover{text-decoration:underline;}&.selected{color:", ";pointer-events:none;}", " ", ";"], (0, _constants.get)('colors.blue.5'), (0, _constants.get)('fontSizes.1'), (0, _constants.get)('colors.gray.7'), _constants.COMMON, _sx["default"]);
Breadcrumb.defaultProps = {
  theme: _theme["default"]
};
Breadcrumb.propTypes = (0, _objectSpread2["default"])({}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.Item.defaultProps = {
  theme: _theme["default"]
};
Breadcrumb.Item.propTypes = (0, _objectSpread2["default"])({
  as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].elementType]),
  href: _propTypes["default"].string,
  selected: _propTypes["default"].bool
}, _sx["default"].propTypes, {}, _constants.COMMON.propTypes);
Breadcrumb.Item.displayName = 'Breadcrumb.Item';
var _default = Breadcrumb;
exports["default"] = _default;