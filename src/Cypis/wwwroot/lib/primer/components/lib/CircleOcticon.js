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

var _octiconsReact = _interopRequireDefault(require("@primer/octicons-react"));

var _Flex = _interopRequireDefault(require("./Flex"));

var _theme = _interopRequireDefault(require("./theme"));

var _BorderBox = _interopRequireDefault(require("./BorderBox"));

function CircleOcticon(props) {
  var size = props.size,
      as = props.as;
  var icon = props.icon,
      bg = props.bg,
      asProp = props.as,
      rest = (0, _objectWithoutProperties2["default"])(props, ["icon", "bg", "as"]);
  return /*#__PURE__*/_react["default"].createElement(_BorderBox["default"], {
    as: as,
    bg: bg,
    overflow: "hidden",
    borderWidth: 0,
    size: size,
    borderRadius: "50%"
  }, /*#__PURE__*/_react["default"].createElement(_Flex["default"], (0, _extends2["default"])({}, rest, {
    alignItems: "center",
    justifyContent: "center"
  }), /*#__PURE__*/_react["default"].createElement(_octiconsReact["default"], {
    icon: icon,
    size: size
  })));
}

CircleOcticon.displayName = "CircleOcticon";
CircleOcticon.defaultProps = (0, _objectSpread2["default"])({
  theme: _theme["default"]
}, _Flex["default"].defaultProps, {
  size: 32
});
CircleOcticon.propTypes = (0, _objectSpread2["default"])({}, _Flex["default"].propTypes, {
  icon: _octiconsReact["default"].propTypes.icon,
  size: _propTypes["default"].number,
  theme: _propTypes["default"].object
});
var _default = CircleOcticon;
exports["default"] = _default;