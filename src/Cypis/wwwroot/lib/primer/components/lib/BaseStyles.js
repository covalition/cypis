"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  * { box-sizing: border-box; }\n  body { margin: 0; }\n  table { border-collapse: collapse; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());

var Base = function Base(props) {
  var color = props.color,
      lineHeight = props.lineHeight,
      fontFamily = props.fontFamily,
      theme = props.theme,
      rest = (0, _objectWithoutProperties2["default"])(props, ["color", "lineHeight", "fontFamily", "theme"]);
  return /*#__PURE__*/_react["default"].createElement("div", rest, /*#__PURE__*/_react["default"].createElement(GlobalStyle, null), props.children);
};

Base.displayName = "Base";
var BaseStyles = (0, _styledComponents["default"])(Base).withConfig({
  displayName: "BaseStyles",
  componentId: "sc-8q0tj8-0"
})(["", " ", ";"], _constants.TYPOGRAPHY, _constants.COMMON);
BaseStyles.defaultProps = {
  color: 'gray.9',
  fontFamily: 'normal',
  lineHeight: 'default',
  theme: _theme["default"]
};
BaseStyles.propTypes = (0, _objectSpread2["default"])({}, _constants.TYPOGRAPHY.propTypes, {}, _constants.COMMON.propTypes, {
  theme: _propTypes["default"].object
});
var _default = BaseStyles;
exports["default"] = _default;