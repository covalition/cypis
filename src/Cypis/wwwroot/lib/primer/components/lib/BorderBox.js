"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sx = _interopRequireDefault(require("./sx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("./Box"));

var _theme = _interopRequireDefault(require("./theme"));

var _constants = require("./constants");

var BorderBox = (0, _styledComponents["default"])(_Box["default"]).withConfig({
  displayName: "BorderBox",
  componentId: "sc-1y9cbfx-0"
})(["", ";", ";"], _constants.BORDER, _sx["default"]);
BorderBox.defaultProps = {
  theme: _theme["default"],
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'gray.2',
  borderRadius: 2
};
BorderBox.propTypes = (0, _objectSpread2["default"])({}, _Box["default"].propTypes, {}, _constants.BORDER.propTypes, {}, _sx["default"].propTypes, {
  theme: _propTypes["default"].object
});
var _default = BorderBox;
exports["default"] = _default;