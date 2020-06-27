"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = _interopRequireDefault(require("./theme"));

var _constants = require("./constants");

var FilteredSearch = _styledComponents["default"].div.withConfig({
  displayName: "FilteredSearch",
  componentId: "sc-7vue7r-0"
})(["", ";display:flex;align-items:stretch;summary{border-radius:0;border-top-left-radius:", ";border-bottom-left-radius:", ";border-right:0;}.TextInput-wrapper{border-radius:0;border-top-right-radius:", ";border-bottom-right-radius:", ";z-index:1;}"], _constants.COMMON, (0, _constants.get)('radii.2'), (0, _constants.get)('radii.2'), (0, _constants.get)('radii.2'), (0, _constants.get)('radii.2'));

FilteredSearch.defaultProps = {
  theme: _theme["default"]
};
FilteredSearch.propTypes = (0, _objectSpread2["default"])({}, _constants.COMMON.propTypes, {
  theme: _propTypes["default"].object
});
var _default = FilteredSearch;
exports["default"] = _default;