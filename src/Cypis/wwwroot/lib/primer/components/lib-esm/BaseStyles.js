import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  * { box-sizing: border-box; }\n  body { margin: 0; }\n  table { border-collapse: collapse; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import { TYPOGRAPHY, COMMON } from './constants';
import theme from './theme';
var GlobalStyle = createGlobalStyle(_templateObject());

var Base = function Base(props) {
  var color = props.color,
      lineHeight = props.lineHeight,
      fontFamily = props.fontFamily,
      theme = props.theme,
      rest = _objectWithoutProperties(props, ["color", "lineHeight", "fontFamily", "theme"]);

  return /*#__PURE__*/React.createElement("div", rest, /*#__PURE__*/React.createElement(GlobalStyle, null), props.children);
};

Base.displayName = "Base";
var BaseStyles = styled(Base).withConfig({
  displayName: "BaseStyles",
  componentId: "sc-8q0tj8-0"
})(["", " ", ";"], TYPOGRAPHY, COMMON);
BaseStyles.defaultProps = {
  color: 'gray.9',
  fontFamily: 'normal',
  lineHeight: 'default',
  theme: theme
};
BaseStyles.propTypes = _objectSpread({}, TYPOGRAPHY.propTypes, {}, COMMON.propTypes, {
  theme: PropTypes.object
});
export default BaseStyles;