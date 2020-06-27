"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = _interopRequireDefault(require("./theme"));

var _constants = require("./constants");

var _sx = _interopRequireDefault(require("./sx"));

var StyledLabelGroup = _styledComponents["default"].span.withConfig({
  displayName: "LabelGroup__StyledLabelGroup",
  componentId: "sc-1nnmeba-0"
})(["", " & *{margin-right:", ";}& *:last-child{margin-right:0;}", ";"], _constants.COMMON, (0, _constants.get)('space.1'), _sx["default"]);

var LabelGroup = function LabelGroup(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return /*#__PURE__*/_react["default"].createElement(StyledLabelGroup, rest, children);
};

LabelGroup.displayName = "LabelGroup";
LabelGroup.defaultProps = {
  theme: _theme["default"]
};
LabelGroup.propTypes = (0, _objectSpread2["default"])({}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
var _default = LabelGroup;
exports["default"] = _default;