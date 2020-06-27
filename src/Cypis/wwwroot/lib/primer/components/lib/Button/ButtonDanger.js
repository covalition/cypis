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

var ButtonDanger = (0, _styledComponents["default"])(_ButtonBase["default"]).withConfig({
  displayName: "ButtonDanger",
  componentId: "sc-1y2n4qs-0"
})(["color:", ";border:1px solid ", ";background-color:", ";box-shadow:", ";&:hover{color:", ";background-color:", ";border-color:", ";box-shadow:", ";}&:focus{border-color:transparent;box-shadow:", ";}&:active{color:", ";background-color:", ";box-shadow:", ";border-color:", ";}&:disabled{color:", ";background-color:", ";border:1px solid ", ";}", " ", ";"], (0, _constants.get)('buttons.danger.color.default'), (0, _constants.get)('buttons.danger.border.default'), (0, _constants.get)('buttons.danger.bg.default'), (0, _constants.get)('buttons.danger.shadow.default'), (0, _constants.get)('buttons.danger.color.hover'), (0, _constants.get)('buttons.danger.bg.hover'), (0, _constants.get)('buttons.danger.border.hover'), (0, _constants.get)('buttons.danger.shadow.hover'), (0, _constants.get)('buttons.danger.shadow.focus'), (0, _constants.get)('buttons.danger.color.active'), (0, _constants.get)('buttons.danger.bg.active'), (0, _constants.get)('buttons.danger.shadow.active'), (0, _constants.get)('buttons.danger.border.active'), (0, _constants.get)('buttons.danger.color.disabled'), (0, _constants.get)('buttons.danger.bg.disabled'), (0, _constants.get)('buttons.danger.border.default'), _ButtonBase.systemStyles, _sx["default"]);
ButtonDanger.defaultProps = {
  theme: _theme["default"]
};
ButtonDanger.propTypes = (0, _objectSpread2["default"])({}, _ButtonBase["default"].propTypes, {}, _sx["default"].propTypes);
var _default = ButtonDanger;
exports["default"] = _default;