import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  [data-reach-dialog-overlay] {\n    z-index: 1000002; /* Higher than the Dropdown and Tooltip */\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import { Dialog as ReachDialog } from '@reach/dialog';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import { X } from '@primer/octicons-react';
import StyledOcticon from './StyledOcticon';
import { COMMON, LAYOUT } from './constants';
import theme from './theme';
import sx from './sx';
import Text from './Text';
import Flex from './Flex';
var reachStyles = "/* This code is subject to LICENSE in root of this repository */\n\n/* Used to detect in JavaScript if apps have loaded styles or not. */\n:root {\n  --reach-dialog: 1;\n}\n\n[data-reach-dialog-overlay] {\n  background: hsla(0, 0%, 0%, 0.33);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n}\n\n[data-reach-dialog-content] {\n  width: 50vw;\n  margin: 10vh auto;\n  background: white;\n  padding: 2rem;\n  outline: none;\n}\n";
var ReachGlobalStyle = createGlobalStyle(_templateObject(), reachStyles);
var StyledDialog = styled(ReachDialog).withConfig({
  displayName: "Dialog__StyledDialog",
  componentId: "dh15lb-0"
})(["box-shadow:0px 4px 32px rgba(0,0,0,0.35);border-radius:4px;padding:0 !important;position:relative;@media screen and (max-width:750px){width:100vw !important;margin:0 !important;border-radius:0;height:100vh;}", " ", " ", ";"], LAYOUT, COMMON, sx);
var UnstyledButton = styled(Flex).attrs({
  as: 'button'
}).withConfig({
  displayName: "Dialog__UnstyledButton",
  componentId: "dh15lb-1"
})(["background:none;border:none;padding:0;position:absolute;top:16px;right:16px;"]);
var DialogHeaderBase = styled(Flex).withConfig({
  displayName: "Dialog__DialogHeaderBase",
  componentId: "dh15lb-2"
})(["border-radius:4px 4px 0px 0px;border-bottom:1px solid #dad5da;@media screen and (max-width:750px){border-radius:0px;}", ";"], sx);

function DialogHeader(_ref) {
  var theme = _ref.theme,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["theme", "children"]);

  if (React.Children.toArray(children).every(function (ch) {
    return typeof ch === 'string';
  })) {
    children = /*#__PURE__*/React.createElement(Text, {
      theme: theme,
      color: "gray.9",
      fontSize: 1,
      fontWeight: "bold",
      fontFamily: "sans-serif"
    }, children);
  }

  return /*#__PURE__*/React.createElement(DialogHeaderBase, _extends({
    theme: theme,
    p: 3
  }, rest), children);
}

DialogHeader.displayName = "DialogHeader";

function Dialog(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledDialog, props, /*#__PURE__*/React.createElement(UnstyledButton, {
    onClick: props.onDismiss
  }, /*#__PURE__*/React.createElement(StyledOcticon, {
    icon: X
  })), children), /*#__PURE__*/React.createElement(ReachGlobalStyle, null));
}

Dialog.defaultProps = {
  theme: theme
};
Dialog.propTypes = _objectSpread({}, COMMON.propTypes, {}, LAYOUT.propTypes, {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired
}, sx.propTypes, {
  theme: PropTypes.object
});
DialogHeader.defaultProps = {
  backgroundColor: 'gray.1',
  theme: theme
};
DialogHeader.propTypes = _objectSpread({}, Flex.propTypes);
DialogHeader.displayName = 'Dialog.Header';
Dialog.Header = DialogHeader;
export default Dialog;