"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sticky = exports.Relative = exports.Fixed = exports.Absolute = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("./constants");

var _Box = _interopRequireDefault(require("./Box"));

var _theme = _interopRequireDefault(require("./theme"));

var _sx = _interopRequireDefault(require("./sx"));

var Position = (0, _styledComponents["default"])(_Box["default"]).withConfig({
  displayName: "Position",
  componentId: "gj4o9g-0"
})(["", ";", ";"], _constants.POSITION, _sx["default"]);
Position.defaultProps = {
  theme: _theme["default"]
};
Position.propTypes = (0, _objectSpread2["default"])({}, _Box["default"].propTypes, {}, _constants.POSITION.propTypes, {
  theme: _propTypes["default"].object
}, _sx["default"].propTypes);

function withPosition(position) {
  var WithPosition = function WithPosition(props) {
    return /*#__PURE__*/_react["default"].createElement(Position, (0, _extends2["default"])({}, props, {
      position: position.toLowerCase()
    }));
  };

  WithPosition.propTypes = Position.propTypes;
  WithPosition.defaultProps = Position.defaultProps;
  WithPosition.displayName = "Position.".concat(position);
  return WithPosition;
}

var _default = Position;
exports["default"] = _default;
var Absolute = withPosition('Absolute');
exports.Absolute = Absolute;
var Fixed = withPosition('Fixed');
exports.Fixed = Fixed;
var Relative = withPosition('Relative');
exports.Relative = Relative;
var Sticky = withPosition('Sticky');
exports.Sticky = Sticky;
Sticky.defaultProps = {
  theme: _theme["default"],
  top: 0,
  zIndex: 1
};