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

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _dialog = require("@reach/dialog");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _octiconsReact = require("@primer/octicons-react");

var _StyledOcticon = _interopRequireDefault(require("./StyledOcticon"));

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

var _sx = _interopRequireDefault(require("./sx"));

var _Text = _interopRequireDefault(require("./Text"));

var _Flex = _interopRequireDefault(require("./Flex"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  [data-reach-dialog-overlay] {\n    z-index: 1000002; /* Higher than the Dropdown and Tooltip */\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var reachStyles = "/* This code is subject to LICENSE in root of this repository */\n\n/* Used to detect in JavaScript if apps have loaded styles or not. */\n:root {\n  --reach-dialog: 1;\n}\n\n[data-reach-dialog-overlay] {\n  background: hsla(0, 0%, 0%, 0.33);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n}\n\n[data-reach-dialog-content] {\n  width: 50vw;\n  margin: 10vh auto;\n  background: white;\n  padding: 2rem;\n  outline: none;\n}\n";
var ReachGlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), reachStyles);
var StyledDialog = (0, _styledComponents["default"])(_dialog.Dialog).withConfig({
  displayName: "Dialog__StyledDialog",
  componentId: "dh15lb-0"
})(["box-shadow:0px 4px 32px rgba(0,0,0,0.35);border-radius:4px;padding:0 !important;position:relative;@media screen and (max-width:750px){width:100vw !important;margin:0 !important;border-radius:0;height:100vh;}", " ", " ", ";"], _constants.LAYOUT, _constants.COMMON, _sx["default"]);
var UnstyledButton = (0, _styledComponents["default"])(_Flex["default"]).attrs({
  as: 'button'
}).withConfig({
  displayName: "Dialog__UnstyledButton",
  componentId: "dh15lb-1"
})(["background:none;border:none;padding:0;position:absolute;top:16px;right:16px;"]);
var DialogHeaderBase = (0, _styledComponents["default"])(_Flex["default"]).withConfig({
  displayName: "Dialog__DialogHeaderBase",
  componentId: "dh15lb-2"
})(["border-radius:4px 4px 0px 0px;border-bottom:1px solid #dad5da;@media screen and (max-width:750px){border-radius:0px;}", ";"], _sx["default"]);

function DialogHeader(_ref) {
  var theme = _ref.theme,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["theme", "children"]);

  if (_react["default"].Children.toArray(children).every(function (ch) {
    return typeof ch === 'string';
  })) {
    children = /*#__PURE__*/_react["default"].createElement(_Text["default"], {
      theme: theme,
      color: "gray.9",
      fontSize: 1,
      fontWeight: "bold",
      fontFamily: "sans-serif"
    }, children);
  }

  return /*#__PURE__*/_react["default"].createElement(DialogHeaderBase, (0, _extends2["default"])({
    theme: theme,
    p: 3
  }, rest), children);
}

DialogHeader.displayName = "DialogHeader";

function Dialog(_ref2) {
  var children = _ref2.children,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["children"]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(StyledDialog, props, /*#__PURE__*/_react["default"].createElement(UnstyledButton, {
    onClick: props.onDismiss
  }, /*#__PURE__*/_react["default"].createElement(_StyledOcticon["default"], {
    icon: _octiconsReact.X
  })), children), /*#__PURE__*/_react["default"].createElement(ReachGlobalStyle, null));
}

Dialog.defaultProps = {
  theme: _theme["default"]
};
Dialog.propTypes = (0, _objectSpread2["default"])({}, _constants.COMMON.propTypes, {}, _constants.LAYOUT.propTypes, {
  children: _propTypes["default"].node.isRequired,
  isOpen: _propTypes["default"].bool.isRequired,
  onDismiss: _propTypes["default"].func.isRequired
}, _sx["default"].propTypes, {
  theme: _propTypes["default"].object
});
DialogHeader.defaultProps = {
  backgroundColor: 'gray.1',
  theme: _theme["default"]
};
DialogHeader.propTypes = (0, _objectSpread2["default"])({}, _Flex["default"].propTypes);
DialogHeader.displayName = 'Dialog.Header';
Dialog.Header = DialogHeader;
var _default = Dialog;
exports["default"] = _default;