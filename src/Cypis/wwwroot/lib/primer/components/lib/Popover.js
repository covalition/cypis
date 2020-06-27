"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

var _BorderBox = _interopRequireDefault(require("./BorderBox"));

var _sx = _interopRequireDefault(require("./sx"));

var Popover = _styledComponents["default"].div.attrs(function (_ref) {
  var className = _ref.className,
      caret = _ref.caret;
  return {
    className: (0, _classnames["default"])(className, "caret-pos--".concat(caret))
  };
}).withConfig({
  displayName: "Popover",
  componentId: "sc-16dgy07-0"
})(["position:", ";z-index:100;display:", ";", ";", ";", ";", ";"], function (props) {
  return props.relative ? 'relative' : 'absolute';
}, function (props) {
  return props.open ? 'block' : 'none';
}, _constants.COMMON, _constants.LAYOUT, _constants.POSITION, _sx["default"]);

Popover.Content = (0, _styledComponents["default"])(_BorderBox["default"]).withConfig({
  displayName: "Popover__Content",
  componentId: "sc-16dgy07-1"
})(["position:relative;width:232px;margin-right:auto;margin-left:auto;padding:", ";background-color:", ";", ";", ";&::before,&::after{position:absolute;left:50%;display:inline-block;content:'';}&::before{top:-", ";margin-left:-9px;border:", " solid transparent;border-bottom-color:", ";}&::after{top:-14px;margin-left:-", ";border:7px solid transparent;border-bottom-color:", ";}", ".caret-pos--bottom &,", ".caret-pos--bottom-right &,", ".caret-pos--bottom-left &{&::before,&::after{top:auto;border-bottom-color:transparent;}&::before{bottom:-", ";border-top-color:", ";}&::after{bottom:-14px;border-top-color:", ";}}", ".caret-pos--top-right &,", ".caret-pos--bottom-right &{right:-9px;margin-right:0;&::before,&::after{left:auto;margin-left:0;}&::before{right:20px;}&::after{right:21px;}}", ".caret-pos--top-left &,", ".caret-pos--bottom-left &{left:-9px;margin-left:0;&::before,&::after{left:", ";margin-left:0;}&::after{left:calc(", " + 1px);}}", ".caret-pos--right &,", ".caret-pos--right-top &,", ".caret-pos--right-bottom &,", ".caret-pos--left &,", ".caret-pos--left-top &,", ".caret-pos--left-bottom &{&::before,&::after{top:50%;left:auto;margin-left:0;border-bottom-color:transparent;}&::before{margin-top:calc((", " + 1px) * -1);}&::after{margin-top:-", ";}}", ".caret-pos--right &,", ".caret-pos--right-top &,", ".caret-pos--right-bottom &{&::before{right:-", ";border-left-color:", ";}&::after{right:-14px;border-left-color:", ";}}", ".caret-pos--left &,", ".caret-pos--left-top &,", ".caret-pos--left-bottom &{&::before{left:-", ";border-right-color:", ";}&::after{left:-14px;border-right-color:", ";}}", ".caret-pos--right-top &,", ".caret-pos--left-top &{&::before,&::after{top:", ";}}", ".caret-pos--right-bottom &,", ".caret-pos--left-bottom &{&::before,&::after{top:auto;}&::before{bottom:", ";}&::after{bottom:calc(", " + 1px);}}", ";"], (0, _constants.get)('space.4'), (0, _constants.get)('colors.white'), _constants.COMMON, _constants.LAYOUT, (0, _constants.get)('space.3'), (0, _constants.get)('space.2'), (0, _constants.get)('popovers.colors.caret'), (0, _constants.get)('space.2'), (0, _constants.get)('colors.white'), Popover, Popover, Popover, (0, _constants.get)('space.3'), (0, _constants.get)('popovers.colors.caret'), (0, _constants.get)('colors.white'), Popover, Popover, Popover, Popover, (0, _constants.get)('space.4'), (0, _constants.get)('space.4'), Popover, Popover, Popover, Popover, Popover, Popover, (0, _constants.get)('space.2'), (0, _constants.get)('space.2'), Popover, Popover, Popover, (0, _constants.get)('space.3'), (0, _constants.get)('popovers.colors.caret'), (0, _constants.get)('colors.white'), Popover, Popover, Popover, (0, _constants.get)('space.3'), (0, _constants.get)('popovers.colors.caret'), (0, _constants.get)('colors.white'), Popover, Popover, (0, _constants.get)('space.4'), Popover, Popover, (0, _constants.get)('space.3'), (0, _constants.get)('space.3'), _sx["default"]);
Popover.CARET_POSITIONS = ['top', 'bottom', 'left', 'right', 'bottom-left', 'bottom-right', 'top-left', 'top-right', 'left-bottom', 'left-top', 'right-bottom', 'right-top'];
Popover.defaultProps = {
  caret: 'top',
  theme: _theme["default"]
};
Popover.propTypes = (0, _objectSpread2["default"])({
  as: _propTypes["default"].elementType,
  caret: _propTypes["default"].oneOf(Popover.CARET_POSITIONS),
  open: _propTypes["default"].bool,
  relative: _propTypes["default"].bool,
  theme: _propTypes["default"].object
}, _constants.COMMON.propTypes, {}, _constants.LAYOUT.propTypes, {}, _constants.POSITION.propTypes, {}, _sx["default"].propTypes);
Popover.Content.defaultProps = {
  theme: _theme["default"]
};
Popover.Content.propTypes = (0, _objectSpread2["default"])({
  as: _propTypes["default"].elementType,
  theme: _propTypes["default"].object
}, _BorderBox["default"].propTypes, {}, _sx["default"].propTypes);
Popover.Content.displayName = 'Popover.Content';
var _default = Popover;
exports["default"] = _default;