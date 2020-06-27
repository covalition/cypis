"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("./Button"));

var _Details = _interopRequireDefault(require("./Details"));

var _constants = require("./constants");

var _DropdownStyles = _interopRequireDefault(require("./DropdownStyles"));

var _theme = _interopRequireDefault(require("./theme"));

var _sx = _interopRequireDefault(require("./sx"));

var StyledDetails = (0, _styledComponents["default"])(_Details["default"]).withConfig({
  displayName: "Dropdown__StyledDetails",
  componentId: "sc-3wysgd-0"
})(["position:relative;display:inline-block;"]);

var Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["children", "className"]);
  return /*#__PURE__*/_react["default"].createElement(StyledDetails, (0, _extends2["default"])({
    overlay: true,
    className: className
  }, rest), children);
};

Dropdown.displayName = "Dropdown";

Dropdown.Button = function (_ref2) {
  var children = _ref2.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref2, ["children"]);
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], (0, _extends2["default"])({
    as: "summary",
    "aria-haspopup": "true"
  }, rest), children, /*#__PURE__*/_react["default"].createElement(Dropdown.Caret, null));
};

Dropdown.Caret = _styledComponents["default"].div.withConfig({
  displayName: "Dropdown__Caret",
  componentId: "sc-3wysgd-1"
})(["border:4px solid transparent;margin-left:12px;border-top-color:currentcolor;border-bottom-width:0;content:'';display:inline-block;height:0;vertical-align:middle;width:0;", ";", ";"], _constants.COMMON, _sx["default"]);
Dropdown.Menu = _styledComponents["default"].ul.withConfig({
  displayName: "Dropdown__Menu",
  componentId: "sc-3wysgd-2"
})(["background-clip:padding-box;background-color:", ";border:1px solid rgba(27,31,35,0.15);border-radius:", ";box-shadow:0 3px 12px rgba(27,31,35,0.15);left:0;list-style:none;margin-top:2px;padding:5px 0 5px 0 !important;position:absolute;top:100%;width:160px;z-index:100;&::before{position:absolute;display:inline-block;content:'';}&::after{position:absolute;display:inline-block;content:'';}&::before{border:8px solid transparent;border-bottom-color:", ";}&::after{border:7px solid transparent;border-bottom-color:", ";}> ul{list-style:none;}", ";", ";", ";"], (0, _constants.get)('colors.white'), (0, _constants.get)('radii.2'), (0, _constants.get)('colors.blackfade15'), (0, _constants.get)('colors.white'), function (props) {
  return props.direction ? (0, _DropdownStyles["default"])(props.theme, props.direction) : '';
}, _constants.COMMON, _sx["default"]);
Dropdown.Item = _styledComponents["default"].li.withConfig({
  displayName: "Dropdown__Item",
  componentId: "sc-3wysgd-3"
})(["display:block;padding:", " 10px ", " 15px;overflow:hidden;color:", ";text-overflow:ellipsis;white-space:nowrap;a{color:", ";text-decoration:none;display:block;padding:", " 10px ", " 15px;overflow:hidden;color:", ";text-overflow:ellipsis;white-space:nowrap;}&:focus,a:focus{color:", ";text-decoration:none;background-color:", ";}&:hover,&:hover a{color:", ";text-decoration:none;background-color:", ";outline:none;}", ";", ";"], (0, _constants.get)('space.1'), (0, _constants.get)('space.1'), (0, _constants.get)('colors.gray.9'), (0, _constants.get)('colors.gray.9'), (0, _constants.get)('space.1'), (0, _constants.get)('space.1'), (0, _constants.get)('colors.gray.9'), (0, _constants.get)('colors.white'), (0, _constants.get)('colors.blue.5'), (0, _constants.get)('colors.white'), (0, _constants.get)('colors.blue.5'), _constants.COMMON, _sx["default"]);
Dropdown.Menu.propTypes = (0, _objectSpread2["default"])({
  direction: _propTypes["default"].oneOf(['ne', 'e', 'se', 's', 'sw', 'w'])
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
Dropdown.Menu.defaultProps = {
  direction: 'sw',
  theme: _theme["default"]
};
Dropdown.Menu.displayName = 'Dropdown.Menu';
Dropdown.Item.defaultProps = {
  theme: _theme["default"]
};
Dropdown.Item.propTypes = (0, _objectSpread2["default"])({}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
Dropdown.Item.displayName = 'Dropdown.Item';
Dropdown.Button.defaultProps = (0, _objectSpread2["default"])({
  theme: _theme["default"]
}, _Button["default"].defaultProps);
Dropdown.Button.propTypes = (0, _objectSpread2["default"])({}, _Button["default"].propTypes);
Dropdown.Button.displayName = 'Dropdown.Button';
Dropdown.Caret.defaultProps = {
  theme: _theme["default"]
};
Dropdown.Caret.propTypes = (0, _objectSpread2["default"])({}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
Dropdown.Caret.displayName = 'Dropdown.Caret';
Dropdown.defaultProps = (0, _objectSpread2["default"])({
  theme: _theme["default"]
}, _Details["default"].defaultProps);
Dropdown.propTypes = (0, _objectSpread2["default"])({}, _Details["default"].propTypes, {}, _constants.COMMON.propTypes);
var _default = Dropdown;
exports["default"] = _default;