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

var ButtonOutline = (0, _styledComponents["default"])(_ButtonBase["default"]).withConfig({
  displayName: "ButtonOutline",
  componentId: "sc-1pqqfuy-0"
})(["color:", ";border:1px solid ", ";background-color:", ";box-shadow:", ";&:hover{color:", ";background-color:", ";border-color:", ";box-shadow:", ";}&:focus{border-color:transparent;box-shadow:", ";}&:active{color:", ";background-color:", ";border-color:", ";box-shadow:", ";}&:disabled{color:", ";border-color:", ";background-color:", ";}", " ", ";"], (0, _constants.get)('buttons.outline.color.default'), (0, _constants.get)('buttons.outline.border.default'), (0, _constants.get)('buttons.outline.bg.default'), (0, _constants.get)('buttons.outline.shadow.default'), (0, _constants.get)('buttons.outline.color.hover'), (0, _constants.get)('buttons.outline.bg.hover'), (0, _constants.get)('buttons.outline.border.hover'), (0, _constants.get)('buttons.outline.shadow.hover'), (0, _constants.get)('buttons.outline.shadow.focus'), (0, _constants.get)('buttons.outline.color.active'), (0, _constants.get)('buttons.outline.bg.active'), (0, _constants.get)('buttons.outline.border.active'), (0, _constants.get)('buttons.outline.shadow.active'), (0, _constants.get)('buttons.outline.color.disabled'), (0, _constants.get)('buttons.outline.border.default'), (0, _constants.get)('buttons.outline.bg.disabled'), _ButtonBase.systemStyles, _sx["default"]);
ButtonOutline.defaultProps = {
  theme: _theme["default"]
};
ButtonOutline.propTypes = (0, _objectSpread2["default"])({}, _ButtonBase["default"].propTypes, {}, _sx["default"].propTypes);
var _default = ButtonOutline;
exports["default"] = _default;