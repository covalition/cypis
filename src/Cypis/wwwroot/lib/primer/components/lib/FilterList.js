"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

var _sx = _interopRequireDefault(require("./sx"));

function ItemBase(_ref) {
  var children = _ref.children,
      count = _ref.count,
      theme = _ref.theme,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["children", "count", "theme"]);
  return /*#__PURE__*/_react["default"].createElement("a", rest, count && /*#__PURE__*/_react["default"].createElement("span", {
    title: "results",
    className: "count"
  }, count), children);
}

ItemBase.displayName = "ItemBase";
var Item = (0, _styledComponents["default"])(ItemBase).withConfig({
  displayName: "FilterList__Item",
  componentId: "sc-1widapo-0"
})(["position:relative;display:block;padding:", ";margin:", ";overflow:hidden;font-size:", ";color:", ";background-color:", "!important;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;border-radius:", ";&:hover{text-decoration:none;background-color:", ";}&:active{color:", ";background-color:", ";}.count{float:right;font-weight:", ";}", ";", ";"], function (props) {
  return props.small ? "".concat((0, _constants.get)('space.1')(props), " 10px") : "".concat((0, _constants.get)('space.2')(props), " 11px");
}, function (props) {
  return props.small ? '0 0 2px' : '0 0 5px 0';
}, (0, _constants.get)('fontSizes.1'), function (props) {
  return props.selected ? (0, _constants.get)('colors.white') : (0, _constants.get)('colors.gray.6');
}, function (props) {
  return props.selected ? (0, _constants.get)('colors.blue.5') : '';
}, (0, _constants.get)('radii.1'), (0, _constants.get)('colors.filterList.hoverBg'), (0, _constants.get)('colors.white'), (0, _constants.get)('colors.blue.5'), (0, _constants.get)('fontWeights.bold'), _constants.COMMON, _sx["default"]);

var FilterListBase = function FilterListBase(_ref2) {
  var children = _ref2.children,
      theme = _ref2.theme,
      rest = (0, _objectWithoutProperties2["default"])(_ref2, ["children", "theme"]);

  var items = _react["default"].Children.map(children, function (child) {
    return /*#__PURE__*/_react["default"].createElement("li", null, child);
  });

  return /*#__PURE__*/_react["default"].createElement("ul", rest, items);
};

FilterListBase.displayName = "FilterListBase";
var FilterList = (0, _styledComponents["default"])(FilterListBase).withConfig({
  displayName: "FilterList",
  componentId: "sc-1widapo-1"
})(["list-style-type:none;", ";", ";"], _constants.COMMON, _sx["default"]);
FilterList.defaultProps = {
  theme: _theme["default"],
  m: 0,
  p: 0
};
FilterList.propTypes = (0, _objectSpread2["default"])({
  children: _propTypes["default"].node,
  small: _propTypes["default"].bool
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
FilterList.Item = Item;
FilterList.Item.defaultProps = {
  theme: _theme["default"]
};
FilterList.Item.propTypes = (0, _objectSpread2["default"])({
  as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].elementType]),
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  count: _propTypes["default"].string,
  selected: _propTypes["default"].bool,
  theme: _propTypes["default"].object
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
FilterList.Item.displayName = 'FilterList.Item';
var _default = FilterList;
exports["default"] = _default;