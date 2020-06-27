"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = _interopRequireDefault(require("../theme"));

var _constants = require("../constants");

var _sx = _interopRequireDefault(require("../sx"));

var dividerStyles = (0, _styledComponents.css)(["padding:", " ", ";margin:0;font-size:", ";font-weight:", ";color:", ";background-color:", ";border-bottom:", " solid ", ";"], (0, _constants.get)('space.1'), (0, _constants.get)('space.3'), (0, _constants.get)('fontSizes.0'), (0, _constants.get)('fontWeights.bold'), (0, _constants.get)('colors.text.grayLight'), (0, _constants.get)('colors.bg.gray'), (0, _constants.get)('borderWidths.1'), (0, _constants.get)('colors.border.grayLight'));

var SelectMenuDivider = _styledComponents["default"].div.withConfig({
  displayName: "SelectMenuDivider",
  componentId: "hf146n-0"
})(["", " ", " ", ";"], dividerStyles, _constants.COMMON, _sx["default"]);

SelectMenuDivider.defaultProps = {
  theme: _theme["default"]
};
SelectMenuDivider.propTypes = (0, _objectSpread2["default"])({}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
SelectMenuDivider.displayName = 'SelectMenu.Divider';
var _default = SelectMenuDivider;
exports["default"] = _default;