"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sx = _interopRequireDefault(require("../sx"));

var _constants = require("../constants");

var _theme = _interopRequireDefault(require("../theme"));

var _ButtonBase = _interopRequireWildcard(require("./ButtonBase"));

var Button = (0, _styledComponents["default"])(_ButtonBase["default"]).withConfig({
  displayName: "Button",
  componentId: "sc-1cuu878-0"
})(["color:", ";background-color:", ";border:1px solid ", ";box-shadow:", ";&:hover{background-color:", ";border-color:", ";box-shadow:", ";}&:focus{border-color:transparent;box-shadow:", ";}&:active{background-color:", ";box-shadow:", ";border-color:", ";}&:disabled{color:", ";background-color:", ";border-color:", ";}", " ", ";"], (0, _constants.get)('buttons.default.color.default'), (0, _constants.get)('buttons.default.bg.default'), (0, _constants.get)('buttons.default.border.default'), (0, _constants.get)('buttons.default.shadow.default'), (0, _constants.get)('buttons.default.bg.hover'), (0, _constants.get)('buttons.default.border.hover'), (0, _constants.get)('buttons.default.shadow.hover'), (0, _constants.get)('buttons.default.shadow.focus'), (0, _constants.get)('buttons.default.bg.active'), (0, _constants.get)('buttons.default.shadow.active'), (0, _constants.get)('buttons.default.border.active'), (0, _constants.get)('buttons.default.color.disabled'), (0, _constants.get)('buttons.default.bg.disabled'), (0, _constants.get)('buttons.default.border.disabled'), _ButtonBase.systemStyles, _sx["default"]);
Button.defaultProps = {
  theme: _theme["default"]
};
Button.propTypes = (0, _objectSpread2["default"])({}, _ButtonBase["default"].propTypes, {}, _sx["default"].propTypes);
var _default = Button;
exports["default"] = _default;