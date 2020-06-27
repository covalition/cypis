"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../constants");

var _theme = _interopRequireDefault(require("../theme"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _SelectMenuContext = require("./SelectMenuContext");

var _sx = _interopRequireDefault(require("../sx"));

var StyledForm = _styledComponents["default"].form.withConfig({
  displayName: "SelectMenuFilter__StyledForm",
  componentId: "k2jey9-0"
})(["padding:", ";margin:0;border-top:", " solid ", ";background-color:", ";", ";@media (min-width:", "){padding:", ";}", ";"], (0, _constants.get)('space.3'), (0, _constants.get)('borderWidths.1'), (0, _constants.get)('colors.border.gray'), (0, _constants.get)('colors.white'), _constants.COMMON, (0, _constants.get)('breakpoints.0'), (0, _constants.get)('space.2'), _sx["default"]);

function SelectMenuFilter(_ref) {
  var theme = _ref.theme,
      value = _ref.value,
      sx = _ref.sx,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["theme", "value", "sx"]);
  var inputRef = (0, _react.useRef)(null);

  var _useContext = (0, _react.useContext)(_SelectMenuContext.MenuContext),
      open = _useContext.open; // puts focus on the filter input when the menu is opened


  (0, _react.useEffect)(function () {
    if (open) {
      inputRef.current.focus();
    }
  }, [open]);
  return /*#__PURE__*/_react["default"].createElement(StyledForm, {
    theme: theme,
    sx: sx
  }, /*#__PURE__*/_react["default"].createElement(_TextInput["default"], (0, _extends2["default"])({
    theme: theme,
    ref: inputRef,
    width: "100%",
    block: true,
    value: value
  }, rest)));
}

SelectMenuFilter.displayName = "SelectMenuFilter";
SelectMenuFilter.defaultProps = {
  theme: _theme["default"]
};
SelectMenuFilter.propTypes = (0, _objectSpread2["default"])({}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes, {
  value: _propTypes["default"].string
});
SelectMenuFilter.displayName = 'SelectMenu.Filter';
var _default = SelectMenuFilter;
exports["default"] = _default;