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

function TooltipBase(_ref) {
  var direction = _ref.direction,
      children = _ref.children,
      className = _ref.className,
      text = _ref.text,
      noDelay = _ref.noDelay,
      align = _ref.align,
      wrap = _ref.wrap,
      theme = _ref.theme,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["direction", "children", "className", "text", "noDelay", "align", "wrap", "theme"]);
  var classes = (0, _classnames["default"])(className, "tooltipped-".concat(direction), align && "tooltipped-align-".concat(align, "-2"), noDelay && 'tooltipped-no-delay', wrap && 'tooltipped-multiline');
  return /*#__PURE__*/_react["default"].createElement("span", (0, _extends2["default"])({
    "aria-label": text
  }, rest, {
    className: classes
  }), children);
}

TooltipBase.displayName = "TooltipBase";
var Tooltip = (0, _styledComponents["default"])(TooltipBase).withConfig({
  displayName: "Tooltip",
  componentId: "h3c7f-0"
})(["position:relative;&::before{position:absolute;z-index:1000001;display:none;width:0px;height:0px;color:", ";pointer-events:none;content:'';border:6px solid transparent;opacity:0;}&::after{position:absolute;z-index:1000000;display:none;padding:0.5em 0.75em;font:normal normal 11px/1.5 ", ";-webkit-font-smoothing:subpixel-antialiased;color:", ";text-align:center;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-wrap:break-word;white-space:pre;pointer-events:none;content:attr(aria-label);background:", ";border-radius:", ";opacity:0;}@keyframes tooltip-appear{from{opacity:0;}to{opacity:1;}}&:hover,&:active,&:focus{&::before,&::after{display:inline-block;text-decoration:none;animation-name:tooltip-appear;animation-duration:0.1s;animation-fill-mode:forwards;animation-timing-function:ease-in;animation-delay:0.4s;}}&.tooltipped-no-delay:hover,&.tooltipped-no-delay:active,&.tooltipped-no-delay:focus{&::before,&::after{animation-delay:0s;}}&.tooltipped-multiline:hover,&.tooltipped-multiline:active,&.tooltipped-multiline:focus{&::after{display:table-cell;}}&.tooltipped-s,&.tooltipped-se,&.tooltipped-sw{&::after{top:100%;right:50%;margin-top:6px;}&::before{top:auto;right:50%;bottom:-7px;margin-right:-6px;border-bottom-color:", ";}}&.tooltipped-se{&::after{right:auto;left:50%;margin-left:-", ";}}&.tooltipped-sw::after{margin-right:-", ";}&.tooltipped-n,&.tooltipped-ne,&.tooltipped-nw{&::after{right:50%;bottom:100%;margin-bottom:6px;}&::before{top:-7px;right:50%;bottom:auto;margin-right:-6px;border-top-color:", ";}}&.tooltipped-ne{&::after{right:auto;left:50%;margin-left:-", ";}}&.tooltipped-nw::after{margin-right:-", ";}&.tooltipped-s::after,&.tooltipped-n::after{transform:translateX(50%);}&.tooltipped-w{&::after{right:100%;bottom:50%;margin-right:6px;transform:translateY(50%);}&::before{top:50%;bottom:50%;left:-7px;margin-top:-6px;border-left-color:", ";}}&.tooltipped-e{&::after{bottom:50%;left:100%;margin-left:6px;transform:translateY(50%);}&::before{top:50%;right:-7px;bottom:50%;margin-top:-6px;border-right-color:", ";}}&.tooltipped-multiline{&::after{width:max-content;max-width:250px;word-wrap:break-word;white-space:pre-line;border-collapse:separate;}&.tooltipped-s::after,&.tooltipped-n::after{right:auto;left:50%;transform:translateX(-50%);}&.tooltipped-w::after,&.tooltipped-e::after{right:100%;}}&.tooltipped-align-right-2::after{right:0;margin-right:0;}&.tooltipped-align-right-2::before{right:15px;}&.tooltipped-align-left-2::after{left:0;margin-left:0;}&.tooltipped-align-left-2::before{left:10px;}", ";", ";"], (0, _constants.get)('colors.black'), (0, _constants.get)('fonts.normal'), (0, _constants.get)('colors.white'), (0, _constants.get)('colors.black'), (0, _constants.get)('radii.1'), (0, _constants.get)('colors.black'), (0, _constants.get)('space.3'), (0, _constants.get)('space.3'), (0, _constants.get)('colors.black'), (0, _constants.get)('space.3'), (0, _constants.get)('space.3'), (0, _constants.get)('colors.black'), (0, _constants.get)('colors.black'), _constants.COMMON, _sx["default"]);
Tooltip.alignments = ['left', 'right'];
Tooltip.directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
Tooltip.defaultProps = {
  theme: _theme["default"],
  direction: 'n'
};
Tooltip.propTypes = (0, _objectSpread2["default"])({
  align: _propTypes["default"].oneOf(Tooltip.alignments),
  children: _propTypes["default"].node,
  direction: _propTypes["default"].oneOf(Tooltip.directions),
  noDelay: _propTypes["default"].bool,
  text: _propTypes["default"].string,
  theme: _propTypes["default"].object,
  wrap: _propTypes["default"].bool
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
var _default = Tooltip;
exports["default"] = _default;