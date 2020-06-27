"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

var _Link = _interopRequireDefault(require("./Link"));

var _BorderBox = _interopRequireDefault(require("./BorderBox"));

var _sx = _interopRequireDefault(require("./sx"));

function SideNavBase(_ref) {
  var variant = _ref.variant,
      className = _ref.className,
      bordered = _ref.bordered,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["variant", "className", "bordered", "children"]);
  var variantClassName = variant === 'lightweight' ? 'lightweight' : 'normal';
  var newClassName = (0, _classnames["default"])(className, "variant-".concat(variantClassName));

  if (!bordered) {
    props = (0, _objectSpread2["default"])({}, props, {
      borderWidth: 0
    });
  }

  return /*#__PURE__*/_react["default"].createElement(_BorderBox["default"], (0, _extends2["default"])({
    as: "nav",
    className: newClassName
  }, props), children);
}

SideNavBase.displayName = "SideNavBase";
var SideNav = (0, _styledComponents["default"])(SideNavBase).withConfig({
  displayName: "SideNav",
  componentId: "upvvge-0"
})(["background-color:", ";", " ", ";", ";"], (0, _constants.get)('colors.white'), function (props) {
  return props.bordered && (0, _styledComponents.css)(["& > &{border-left:0;border-right:0;border-bottom:0;}"]);
}, _constants.COMMON, _sx["default"]);
SideNav.Link = (0, _styledComponents["default"])(_Link["default"]).attrs(function (props) {
  var isReactRouter = typeof props.to === 'string';

  if (isReactRouter || props.selected) {
    // according to their docs, NavLink supports aria-current:
    // https://reacttraining.com/react-router/web/api/NavLink/aria-current-string
    return {
      'aria-current': 'page'
    };
  } else {
    return {};
  }
}).withConfig({
  displayName: "SideNav__Link",
  componentId: "upvvge-1"
})(["position:relative;display:block;", " width:100%;text-align:left;font-size:", ";& > ", "{border-bottom:none;}&:first-child{border-top-right-radius:", ";border-top-left-radius:", ";}&:last-child{border-bottom-right-radius:", ";border-bottom-left-radius:", ";}", ".variant-normal > &{color:", ";padding:", ";border:0;border-top:", " solid ", ";&:first-child{border-top:0;}&::before{position:absolute;top:0;bottom:0;left:0;z-index:1;width:3px;pointer-events:none;content:'';}&:hover,&:focus{color:", ";text-decoration:none;background-color:", ";outline:none;}&[aria-current='page'],&[aria-selected='true']{font-weight:", ";color:", ";&::before{background-color:", ";}}}", ".variant-lightweight > &{padding:", " 0;color:", ";&:hover,&:focus{color:", ";text-decoration:none;outline:none;}&[aria-current='page'],&[aria-selected='true']{color:", ";font-weight:", ";}}", ";"], function (props) {
  return props.variant === 'full' && (0, _styledComponents.css)(["display:flex;align-items:center;justify-content:space-between;"]);
}, (0, _constants.get)('fontSizes.1'), SideNav, (0, _constants.get)('radii.2'), (0, _constants.get)('radii.2'), (0, _constants.get)('radii.2'), (0, _constants.get)('radii.2'), SideNav, (0, _constants.get)('colors.gray.6'), (0, _constants.get)('space.3'), (0, _constants.get)('borderWidths.1'), (0, _constants.get)('colors.gray.2'), (0, _constants.get)('colors.gray.9'), (0, _constants.get)('colors.gray.1'), (0, _constants.get)('fontWeights.semibold'), (0, _constants.get)('colors.gray.9'), (0, _constants.get)('colors.accent'), SideNav, (0, _constants.get)('space.1'), (0, _constants.get)('colors.blue.5'), (0, _constants.get)('colors.gray.9'), (0, _constants.get)('colors.gray.9'), (0, _constants.get)('fontWeights.semibold'), _sx["default"]);
SideNav.defaultProps = {
  theme: _theme["default"],
  variant: 'normal'
};
SideNav.propTypes = (0, _objectSpread2["default"])({
  as: _propTypes["default"].elementType,
  bordered: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  theme: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['normal', 'lightweight'])
}, _BorderBox["default"].propTypes);
SideNav.Link.defaultProps = {
  theme: _theme["default"],
  variant: 'normal'
};
SideNav.Link.propTypes = (0, _objectSpread2["default"])({
  as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  selected: _propTypes["default"].bool,
  theme: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['normal', 'full'])
}, _Link["default"].propTypes);
SideNav.Link.displayName = 'SideNav.Link';
var _default = SideNav;
exports["default"] = _default;