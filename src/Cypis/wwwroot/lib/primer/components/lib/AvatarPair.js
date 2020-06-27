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

var _constants = require("./constants");

var _Avatar = _interopRequireDefault(require("./Avatar"));

var _theme = _interopRequireDefault(require("./theme"));

var getBackgroundColor = (0, _constants.get)('colors.white');
var Wrapper = (0, _styledComponents["default"])('div').withConfig({
  displayName: "AvatarPair__Wrapper",
  componentId: "sc-1v5x8y5-0"
})(["display:inline-flex;position:relative;"]);

var childStyles = function childStyles(props) {
  return {
    display: 'inline-block',
    overflow: 'hidden',
    // Ensure page layout in Firefox should images fail to load
    lineHeight: "".concat((0, _constants.get)('lineHeights.condensedUltra')),
    verticalAlign: 'middle',
    borderRadius: '2px',
    position: 'absolute',
    right: '-15%',
    bottom: '-9%',
    boxShadow: '-2px -2px 0 rgba(255,255,255,0.8)',
    backgroundColor: "".concat(getBackgroundColor(props))
  };
};

var ChildAvatar = (0, _styledComponents["default"])(_Avatar["default"]).withConfig({
  displayName: "AvatarPair__ChildAvatar",
  componentId: "sc-1v5x8y5-1"
})(childStyles);

var AvatarPair = function AvatarPair(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);

  var avatars = _react["default"].Children.map(children, function (child, i) {
    return i === 0 ? _react["default"].cloneElement(child, {
      size: 40
    }) : /*#__PURE__*/_react["default"].createElement(ChildAvatar, (0, _extends2["default"])({}, child.props, {
      size: 20
    }));
  });

  return /*#__PURE__*/_react["default"].createElement(Wrapper, rest, avatars);
};

AvatarPair.displayName = "AvatarPair";
// styled() changes this
AvatarPair.displayName = 'AvatarPair';
AvatarPair.defaultProps = {
  theme: _theme["default"]
};
AvatarPair.propTypes = (0, _objectSpread2["default"])({
  children: _propTypes["default"].instanceOf(_Avatar["default"])
}, _Avatar["default"].propTypes, {
  theme: _propTypes["default"].object
});
var _default = AvatarPair;
exports["default"] = _default;