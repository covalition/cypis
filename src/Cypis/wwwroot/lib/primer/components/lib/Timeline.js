"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _constants = require("./constants");

var _Box = _interopRequireDefault(require("./Box"));

var _Flex = _interopRequireDefault(require("./Flex"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Position = require("./Position");

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = _interopRequireDefault(require("./theme"));

var _sx = _interopRequireDefault(require("./sx"));

var Timeline = (0, _styledComponents["default"])(_Flex["default"]).withConfig({
  displayName: "Timeline",
  componentId: "sc-1y01lij-0"
})(["flex-direction:column;", " ", ";"], function (props) {
  return props.clipSidebar && (0, _styledComponents.css)([".Timeline-Item:first-child{padding-top:0;}.Timeline-Item:last-child{padding-bottom:0;}"]);
}, _sx["default"]);
Timeline.Item = (0, _styledComponents["default"])(_Flex["default"]).attrs(function (props) {
  return {
    className: (0, _classnames["default"])('Timeline-Item', props.className)
  };
}).withConfig({
  displayName: "Timeline__Item",
  componentId: "sc-1y01lij-1"
})(["position:relative;padding:", " 0;margin-left:", ";&::before{position:absolute;top:0;bottom:0;left:0;display:block;width:2px;content:'';background-color:", ";}", " ", ";", ";"], (0, _constants.get)('space.3'), (0, _constants.get)('space.3'), (0, _constants.get)('colors.gray.2'), function (props) {
  return props.condensed && (0, _styledComponents.css)(["padding-top:", ";padding-bottom:0;&:last-child{padding-bottom:", ";}.TimelineItem-Badge{height:16px;margin-top:", ";margin-bottom:", ";color:", ";background-color:", ";border:0;}"], (0, _constants.get)('space.1'), (0, _constants.get)('space.3'), (0, _constants.get)('space.2'), (0, _constants.get)('space.2'), (0, _constants.get)('colors.gray.4'), (0, _constants.get)('colors.white'));
}, _constants.COMMON, _sx["default"]);

var _StyledFlex = (0, _styledComponents["default"])(_Flex["default"]).withConfig({
  displayName: "Timeline___StyledFlex",
  componentId: "sc-1y01lij-2"
})(["border-radius:50%;border:2px solid ", ";"], function (p) {
  return p._css;
});

Timeline.Badge = function (props) {
  return /*#__PURE__*/_react["default"].createElement(_Position.Relative, {
    zIndex: 1
  }, /*#__PURE__*/_react["default"].createElement(_StyledFlex, (0, _extends2["default"])({
    className: (0, _classnames["default"])(props.className, 'TimelineItem-Badge'),
    flexShrink: 0,
    overflow: "hidden",
    color: "gray.7",
    bg: "gray.2",
    width: "32px",
    height: "32px",
    mr: 2,
    ml: "-15px",
    alignItems: "center",
    justifyContent: "center"
  }, props, {
    _css: (0, _constants.get)('colors.white')
  }), props.children));
};

Timeline.Body = (0, _styledComponents["default"])(_Box["default"]).withConfig({
  displayName: "Timeline__Body",
  componentId: "sc-1y01lij-3"
})(["min-width:0;max-width:100%;margin-top:", ";color:", ";flex:auto;font-size:", ";", ";"], (0, _constants.get)('space.1'), (0, _constants.get)('colors.gray.7'), (0, _constants.get)('fontSizes.1'), _sx["default"]);
Timeline.Break = (0, _styledComponents["default"])(_Position.Relative).withConfig({
  displayName: "Timeline__Break",
  componentId: "sc-1y01lij-4"
})(["z-index:1;height:24px;margin:0;margin-bottom:-", ";margin-left:0;background-color:", ";border:0;border-top:", " solid ", ";", ";"], (0, _constants.get)('space.3'), (0, _constants.get)('colors.white'), (0, _constants.get)('space.1'), (0, _constants.get)('colors.gray.2'), _sx["default"]);
Timeline.defaultProps = {
  theme: _theme["default"]
};
Timeline.propTypes = (0, _objectSpread2["default"])({
  children: _propTypes["default"].node,
  clipSidebar: _propTypes["default"].bool,
  theme: _propTypes["default"].object
}, _Flex["default"].propTypes, {}, _sx["default"].propTypes);
Timeline.Item.defaultProps = {
  theme: _theme["default"]
};
Timeline.Item.propTypes = (0, _objectSpread2["default"])({
  children: _propTypes["default"].node,
  condensed: _propTypes["default"].bool,
  theme: _propTypes["default"].object
}, _Flex["default"].propTypes, {}, _sx["default"].propTypes);
Timeline.Item.displayName = 'Timeline.Item';
Timeline.Badge.defaultProps = {
  theme: _theme["default"]
};
Timeline.Badge.propTypes = (0, _objectSpread2["default"])({
  children: _propTypes["default"].node,
  theme: _propTypes["default"].object
}, _Flex["default"].propTypes, {}, _sx["default"].propTypes);
Timeline.Badge.displayName = 'Timeline.Badge';
Timeline.Body.defaultProps = {
  theme: _theme["default"]
};
Timeline.Body.propTypes = (0, _objectSpread2["default"])({
  children: _propTypes["default"].node,
  theme: _propTypes["default"].object
}, _Box["default"].propTypes, {}, _sx["default"].propTypes);
Timeline.Body.displayName = 'Timeline.Body';
Timeline.Break.defaultProps = {
  theme: _theme["default"]
};
Timeline.Break.propTypes = (0, _objectSpread2["default"])({
  children: _propTypes["default"].node,
  theme: _propTypes["default"].object
}, _Box["default"].propTypes, {}, _sx["default"].propTypes);
Timeline.Break.displayName = 'Timeline.Break';
var _default = Timeline;
exports["default"] = _default;