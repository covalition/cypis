"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sx = _interopRequireDefault(require("./sx"));

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

var Box = _styledComponents["default"].div.withConfig({
  displayName: "Box",
  componentId: "sc-1b6inku-0"
})(["", " ", " ", " ", ";"], _constants.COMMON, _constants.FLEX, _constants.LAYOUT, _sx["default"]);

Box.defaultProps = {
  theme: _theme["default"]
};
Box.propTypes = (0, _objectSpread2["default"])({}, _constants.COMMON.propTypes, {}, _constants.FLEX.propTypes, {}, _constants.LAYOUT.propTypes, {}, _sx["default"].propTypes, {
  theme: _propTypes["default"].object
});
var _default = Box;
exports["default"] = _default;