"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../constants");

var _theme = _interopRequireDefault(require("../theme"));

var _sx = _interopRequireDefault(require("../sx"));

var ButtonTableList = _styledComponents["default"].summary.withConfig({
  displayName: "ButtonTableList",
  componentId: "xtne0h-0"
})(["display:inline-block;padding:0;font-size:", ";color:", ";text-decoration:none;white-space:nowrap;cursor:pointer;user-select:none;background-color:transparent;border:0;appearance:none;&:hover{text-decoration:underline;}&:disabled{&,&:hover{color:rgba(", ",0.5);cursor:default;}}&:after{display:inline-block;margin-left:", ";width:0;height:0;vertical-align:-2px;content:\"\";border:4px solid transparent;border-top-color:currentcolor;}", " ", " ", " ", ";"], (0, _constants.get)('fontSizes.1'), (0, _constants.get)('colors.gray.6'), (0, _constants.get)('colors.gray.6'), (0, _constants.get)('space.1'), _constants.COMMON, _constants.TYPOGRAPHY, _constants.LAYOUT, _sx["default"]);

ButtonTableList.defaultProps = {
  theme: _theme["default"]
};
ButtonTableList.propTypes = (0, _objectSpread2["default"])({
  theme: _propTypes["default"].object
}, _sx["default"].propTypes, {}, _constants.COMMON.propTypes, {}, _constants.TYPOGRAPHY.propTypes, {}, _constants.LAYOUT.propTypes);
var _default = ButtonTableList;
exports["default"] = _default;