"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _constants = require("../constants");

var _theme = _interopRequireDefault(require("../theme"));

var _sx = _interopRequireDefault(require("../sx"));

var footerStyles = (0, _styledComponents.css)(["margin-top:-1px;padding:", " ", ";font-size:", ";color:", ";text-align:center;border-top:", " solid ", ";@media (min-width:", "){padding:", " ", ";}"], (0, _constants.get)('space.2'), (0, _constants.get)('space.3'), (0, _constants.get)('fontSizes.0'), (0, _constants.get)('colors.text.grayLight'), (0, _constants.get)('borderWidths.1'), (0, _constants.get)('colors.border.gray'), (0, _constants.get)('breakpoints.0'), (0, _constants.get)('space.1'), (0, _constants.get)('space.2'));

var SelectMenuFooter = _styledComponents["default"].footer.withConfig({
  displayName: "SelectMenuFooter",
  componentId: "sc-1uzxr7t-0"
})(["", " ", " ", ";"], footerStyles, _constants.COMMON, _sx["default"]);

SelectMenuFooter.defaultProps = {
  theme: _theme["default"]
};
SelectMenuFooter.propTypes = (0, _objectSpread2["default"])({}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
SelectMenuFooter.displayName = 'SelectMenu.Footer';
var _default = SelectMenuFooter;
exports["default"] = _default;