"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

var _Box = _interopRequireDefault(require("./Box"));

var Grid = (0, _styledComponents["default"])(_Box["default"]).withConfig({
  displayName: "Grid",
  componentId: "nhubvi-0"
})(["", ";"], _constants.GRID);
Grid.defaultProps = {
  theme: _theme["default"],
  display: 'grid'
};
Grid.propTypes = (0, _objectSpread2["default"])({}, _Box["default"].propTypes, {}, _constants.GRID.propTypes);
var _default = Grid;
exports["default"] = _default;