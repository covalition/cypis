"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("../constants");

var _Box = _interopRequireDefault(require("../Box"));

var _theme = _interopRequireDefault(require("../theme"));

var _sx = _interopRequireDefault(require("../sx"));

var ButtonGroup = (0, _styledComponents["default"])(_Box["default"]).withConfig({
  displayName: "ButtonGroup",
  componentId: "sc-1q27gfn-0"
})(["vertical-align:middle;&& > *{position:relative;border-right-width:0;border-radius:0;:first-child{border-top-left-radius:", ";border-bottom-left-radius:", ";margin-right:0;}:not(:first-child){margin-left:0;margin-right:0;}:last-child{border-right-width:1px;border-top-right-radius:", ";border-bottom-right-radius:", ";}:focus,:active,:hover{border-right-width:1px;+ *{border-left-width:0;}}:focus,:active{z-index:1;}}", ";"], (0, _constants.get)('radii.2'), (0, _constants.get)('radii.2'), (0, _constants.get)('radii.2'), (0, _constants.get)('radii.2'), _sx["default"]);
ButtonGroup.defaultProps = {
  display: 'inline-block',
  theme: _theme["default"]
};
ButtonGroup.propTypes = (0, _objectSpread2["default"])({}, _Box["default"].propTypes, {}, _sx["default"].propTypes);
var _default = ButtonGroup;
exports["default"] = _default;