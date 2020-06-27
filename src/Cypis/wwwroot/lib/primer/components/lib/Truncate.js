"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

var _sx = _interopRequireDefault(require("./sx"));

var Truncate = (0, _styledComponents["default"])('div').withConfig({
  displayName: "Truncate",
  componentId: "sc-1b0dcmo-0"
})(["", " ", " display:", ";overflow:hidden;text-overflow:ellipsis;vertical-align:", ";white-space:nowrap;", " ", " ", ";"], _constants.TYPOGRAPHY, _constants.COMMON, function (props) {
  return props.inline ? 'inline-block' : 'inherit';
}, function (props) {
  return props.inline ? 'top' : 'initial';
}, _styledSystem.maxWidth, function (props) {
  return props.expandable ? "&:hover { max-width: 10000px; }" : '';
}, _sx["default"]);
Truncate.defaultProps = {
  as: 'div',
  expandable: false,
  inline: false,
  maxWidth: 125,
  theme: _theme["default"]
};
Truncate.propTypes = (0, _objectSpread2["default"])({}, _constants.TYPOGRAPHY.propTypes, {}, _constants.COMMON.propTypes, {
  expandable: _propTypes["default"].bool,
  inline: _propTypes["default"].bool
}, _sx["default"].propTypes, {
  maxWidth: _propTypes["default"].number,
  theme: _propTypes["default"].object,
  title: _propTypes["default"].string.isRequired
});
var _default = Truncate;
exports["default"] = _default;