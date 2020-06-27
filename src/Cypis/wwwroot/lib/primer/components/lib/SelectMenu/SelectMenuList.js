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

var listStyles = (0, _styledComponents.css)(["position:relative;padding:0;margin:0;flex:auto;overflow-x:hidden;overflow-y:auto;background-color:", ";-webkit-overflow-scrolling:touch;@media (hover:hover){.SelectMenuTab:focus{background-color:", ";}.SelectMenuTab:not([aria-checked='true']):hover{color:", ";background-color:", ";}.SelectMenuTab:not([aria-checked='true']):active{color:", ";background-color:", ";}}"], (0, _constants.get)('colors.white'), (0, _constants.get)('colors.blue.1'), (0, _constants.get)('colors.gray.9'), (0, _constants.get)('colors.gray.2'), (0, _constants.get)('colors.gray.9'), (0, _constants.get)('colors.gray.1'));

var SelectMenuList = _styledComponents["default"].div.withConfig({
  displayName: "SelectMenuList",
  componentId: "uflcju-0"
})(["", " ", " ", ";"], listStyles, _constants.COMMON, _sx["default"]);

SelectMenuList.defaultProps = {
  theme: _theme["default"]
};
SelectMenuList.propTypes = (0, _objectSpread2["default"])({}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
SelectMenuList.displayName = 'SelectMenu.List';
var _default = SelectMenuList;
exports["default"] = _default;