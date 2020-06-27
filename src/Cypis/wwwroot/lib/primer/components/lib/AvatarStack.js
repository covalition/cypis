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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _sx = _interopRequireDefault(require("./sx"));

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

var transformChildren = function transformChildren(children) {
  var count = children.length;
  return _react["default"].Children.map(children, function (child, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, count > 3 && index === 2 && /*#__PURE__*/_react["default"].createElement("div", {
      className: "AvatarItem-more AvatarItem"
    }), _react["default"].cloneElement(child, {
      className: 'AvatarItem'
    }));
  });
};

var AvatarStackWrapper = _styledComponents["default"].span.withConfig({
  displayName: "AvatarStack__AvatarStackWrapper",
  componentId: "sc-137fv15-0"
})(["display:inline-block;position:relative;min-width:", ";height:20px;", " ", ";"], function (props) {
  return props.count === 1 ? '26px' : props.count === 2 ? '36px' : '46px';
}, _constants.COMMON, _sx["default"]);

var AvatarStackBody = _styledComponents["default"].span.withConfig({
  displayName: "AvatarStack__AvatarStackBody",
  componentId: "sc-137fv15-1"
})(["display:flex;position:absolute;background:white;&:hover{.AvatarItem{margin-right:3px;}.AvatarItem:nth-child(n + 4){display:flex;opacity:1;}.AvatarItem-more{display:none !important;}}.AvatarItem{position:relative;z-index:2;display:flex;width:20px;height:20px;box-sizing:content-box;margin-right:-11px;background-color:", ";border-right:", " solid ", ";border-radius:2px;transition:margin 0.1s ease-in-out;&:first-child{z-index:3;}&:last-child{z-index:1;border-right:0;}img{border-radius:2px;width:inherit;}&:nth-child(n + 4){display:none;opacity:0;}}.AvatarItem-more{z-index:1;margin-right:0;background:", ";&::before,&::after{position:absolute;display:block;height:20px;content:'';border-radius:2px;outline:", " solid ", ";}&::before{width:17px;background:", ";}&::after{width:14px;background:", ";}}", ""], (0, _constants.get)('colors.white'), (0, _constants.get)('borderWidths.1'), (0, _constants.get)('colors.white'), (0, _constants.get)('colors.gray.1'), (0, _constants.get)('borderWidths.1'), (0, _constants.get)('colors.white'), (0, _constants.get)('colors.gray.2'), (0, _constants.get)('colors.gray.3'), function (props) {
  return props.alignRight && (0, _styledComponents.css)(["right:0;flex-direction:row-reverse;&:hover .AvatarItem{margin-right:0;margin-left:3px;}.AvatarItem-more{background:", ";&::before{width:5px;}&::after{background:", ";width:2px;}}.AvatarItem{margin-right:0;margin-left:-11px;border-right:0;border-left:", " solid ", ";}"], (0, _constants.get)('colors.gray.3'), (0, _constants.get)('colors.gray.1'), (0, _constants.get)('borderWidths.1'), (0, _constants.get)('colors.white'));
});

var AvatarStack = function AvatarStack(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      alignRight = _ref.alignRight,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["children", "alignRight"]);
  return /*#__PURE__*/_react["default"].createElement(AvatarStackWrapper, (0, _extends2["default"])({
    count: children.length
  }, rest), /*#__PURE__*/_react["default"].createElement(AvatarStackBody, {
    alignRight: alignRight,
    className: "AvatarStackBody"
  }, transformChildren(children)));
};

AvatarStack.displayName = "AvatarStack";
AvatarStack.defaultProps = {
  theme: _theme["default"]
};
AvatarStack.propTypes = (0, _objectSpread2["default"])({}, _constants.COMMON.propTypes, {
  alignRight: _propTypes["default"].bool
}, _sx["default"].propTypes);
var _default = AvatarStack;
exports["default"] = _default;