"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _octiconsReact = _interopRequireDefault(require("@primer/octicons-react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

var _sx = _interopRequireDefault(require("./sx"));

var StyledOcticon = (0, _styledComponents["default"])(_octiconsReact["default"]).withConfig({
  displayName: "StyledOcticon",
  componentId: "sc-7ly0uy-0"
})(["", ";", ";"], _constants.COMMON, _sx["default"]);
StyledOcticon.defaultProps = {
  theme: _theme["default"]
};
StyledOcticon.propTypes = (0, _objectSpread2["default"])({}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes, {
  theme: _propTypes["default"].object
});
var _default = StyledOcticon;
exports["default"] = _default;