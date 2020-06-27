"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GRID = exports.FLEX = exports.POSITION = exports.LAYOUT = exports.BORDER = exports.COMMON = exports.TYPOGRAPHY = exports.get = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var styledSystem = _interopRequireWildcard(require("styled-system"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _themeGet = _interopRequireDefault(require("@styled-system/theme-get"));

var _theme = _interopRequireDefault(require("./theme"));

var getKey = styledSystem.get,
    compose = styledSystem.compose,
    system = styledSystem.system;

var get = function get(key) {
  return (0, _themeGet["default"])(key, getKey(_theme["default"], key));
};

exports.get = get;
var whiteSpace = system({
  whiteSpace: {
    property: 'whiteSpace',
    cssProperty: 'whiteSpace'
  }
});
var TYPOGRAPHY = compose(styledSystem.typography, whiteSpace);
exports.TYPOGRAPHY = TYPOGRAPHY;
TYPOGRAPHY.propTypes = (0, _objectSpread2["default"])({}, _propTypes2["default"].typography, {
  whiteSpace: _propTypes["default"].oneOf(['normal', 'nowrap', 'pre-wrap', 'pre', 'pre-line'])
});
var COMMON = compose(styledSystem.space, styledSystem.color, styledSystem.display);
exports.COMMON = COMMON;
COMMON.propTypes = (0, _objectSpread2["default"])({}, _propTypes2["default"].space, {}, _propTypes2["default"].color);
var BORDER = compose(styledSystem.border, styledSystem.shadow);
exports.BORDER = BORDER;
BORDER.propTypes = (0, _objectSpread2["default"])({}, _propTypes2["default"].border, {}, _propTypes2["default"].shadow); // these are 1:1 with styled-system's API now,
// so you could consider dropping the abstraction

var LAYOUT = styledSystem.layout;
exports.LAYOUT = LAYOUT;
var POSITION = styledSystem.position;
exports.POSITION = POSITION;
var FLEX = styledSystem.flexbox;
exports.FLEX = FLEX;
var GRID = styledSystem.grid;
exports.GRID = GRID;
TYPOGRAPHY.propTypes = _propTypes2["default"].typography;
LAYOUT.propTypes = _propTypes2["default"].layout;
POSITION.propTypes = _propTypes2["default"].position;
FLEX.propTypes = _propTypes2["default"].flexbox;
GRID.propTypes = _propTypes2["default"].grid;