"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sx = _interopRequireDefault(require("./sx"));

var _theme = _interopRequireDefault(require("./theme"));

var _constants = require("./constants");

var BranchName = _styledComponents["default"].a.withConfig({
  displayName: "BranchName",
  componentId: "sc-1foytcp-0"
})(["display:inline-block;padding:2px 6px;font-size:", ";font-family:", ";color:rgba(27,31,35,0.6);background-color:#eaf5ff;border-radius:3px;", ";", ";"], (0, _constants.get)('fontSizes.0'), (0, _constants.get)('fonts.mono'), _constants.COMMON, _sx["default"]);

BranchName.defaultProps = {
  theme: _theme["default"]
};
BranchName.propTypes = (0, _objectSpread2["default"])({
  href: _propTypes["default"].string
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes, {
  theme: _propTypes["default"].object
});
var _default = BranchName;
exports["default"] = _default;