"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = _interopRequireDefault(require("./theme"));

var _Box = _interopRequireDefault(require("./Box"));

var Flex = (0, _styledComponents["default"])(_Box["default"]).withConfig({
  displayName: "Flex",
  componentId: "jlpa5r-0"
})([""]);
Flex.defaultProps = {
  theme: _theme["default"],
  display: 'flex'
};
Flex.propTypes = (0, _objectSpread2["default"])({}, _Box["default"].propTypes);
var _default = Flex;
exports["default"] = _default;