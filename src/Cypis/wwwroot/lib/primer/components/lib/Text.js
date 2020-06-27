"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = _interopRequireDefault(require("./theme"));

var _constants = require("./constants");

var _sx = _interopRequireDefault(require("./sx"));

var Text = _styledComponents["default"].span.withConfig({
  displayName: "Text",
  componentId: "sc-1g6etse-0"
})(["", ";", ";", ";"], _constants.TYPOGRAPHY, _constants.COMMON, _sx["default"]);

Text.defaultProps = {
  theme: _theme["default"]
};
Text.propTypes = (0, _objectSpread2["default"])({}, _constants.TYPOGRAPHY.propTypes, {}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes, {
  theme: _propTypes["default"].object
});
var _default = Text;
exports["default"] = _default;