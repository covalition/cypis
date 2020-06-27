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

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

var Heading = _styledComponents["default"].h2.withConfig({
  displayName: "Heading",
  componentId: "sc-1m35ws5-0"
})(["font-weight:", ";font-size:", ";margin:0;", " ", ";", ";"], (0, _constants.get)('fontWeights.bold'), (0, _constants.get)('fontSizes.5'), _constants.TYPOGRAPHY, _constants.COMMON, _sx["default"]);

Heading.defaultProps = {
  theme: _theme["default"]
};
Heading.propTypes = (0, _objectSpread2["default"])({}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes, {
  theme: _propTypes["default"].object
}, _constants.TYPOGRAPHY.propTypes);
var _default = Heading;
exports["default"] = _default;