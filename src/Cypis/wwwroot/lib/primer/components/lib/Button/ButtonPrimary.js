"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ButtonBase = _interopRequireWildcard(require("./ButtonBase"));

var _constants = require("../constants");

var _theme = _interopRequireDefault(require("../theme"));

var _sx = _interopRequireDefault(require("../sx"));

var ButtonPrimary = (0, _styledComponents["default"])(_ButtonBase["default"]).withConfig({
  displayName: "ButtonPrimary",
  componentId: "pp1q4q-0"
})(["color:", ";background-color:", ";border:1px solid ", ";box-shadow:", ";&:hover{background-color:", ";border-color:", ";}&:focus{border-color:transparent;box-shadow:", ";background-color:", ";}&:active{background-color:", ";box-shadow:", ";border-color:", ";}&:disabled{color:", ";background-color:", ";border-color:", ";}", " ", ";"], (0, _constants.get)('buttons.primary.color.default'), (0, _constants.get)('buttons.primary.bg.default'), (0, _constants.get)('buttons.primary.border.default'), (0, _constants.get)('buttons.primary.shadow.default'), (0, _constants.get)('buttons.primary.bg.hover'), (0, _constants.get)('buttons.primary.border.hover'), (0, _constants.get)('buttons.primary.shadow.focus'), (0, _constants.get)('buttons.primary.bg.focus'), (0, _constants.get)('buttons.primary.bg.active'), (0, _constants.get)('buttons.primary.shadow.active'), (0, _constants.get)('buttons.primary.border.active'), (0, _constants.get)('buttons.primary.color.disabled'), (0, _constants.get)('buttons.primary.bg.disabled'), (0, _constants.get)('buttons.primary.border.disabled'), _ButtonBase.systemStyles, _sx["default"]);
ButtonPrimary.defaultProps = {
  theme: _theme["default"]
};
ButtonPrimary.propTypes = (0, _objectSpread2["default"])({}, _ButtonBase["default"].propTypes, {}, _sx["default"].propTypes);
var _default = ButtonPrimary;
exports["default"] = _default;