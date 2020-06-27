import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { system } from 'styled-system';
import { COMMON, TYPOGRAPHY, get } from './constants';
import theme from './theme';
import sx from './sx';
var buttonStyles = {
  display: 'inline-block',
  padding: '0',
  fontSize: 'inherit',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  userSelect: 'none',
  backgroundColor: 'transparent',
  border: '0',
  appearance: 'none'
};
var hoverColor = system({
  hoverColor: {
    property: 'color',
    scale: 'colors'
  }
});
var Link = styled.a.attrs(function (props) {
  return {
    color: props.color ? props.color : props.muted ? 'gray.6' : 'blue.5'
  };
}).withConfig({
  displayName: "Link",
  componentId: "kudw2l-0"
})(["text-decoration:", ";&:hover{text-decoration:", ";", ";}", ";", " ", ";", ";"], function (props) {
  return props.underline ? 'underline' : 'none';
}, function (props) {
  return props.muted ? 'none' : 'underline';
}, function (props) {
  return props.hoverColor ? hoverColor : props.muted ? "color: ".concat(get('colors.blue.5')(theme)) : '';
}, function (props) {
  return props.as === 'button' ? buttonStyles : '';
}, TYPOGRAPHY, COMMON, sx);
Link.defaultProps = {
  theme: theme
};
Link.propTypes = _objectSpread({
  as: PropTypes.elementType,
  href: PropTypes.string,
  muted: PropTypes.bool,
  theme: PropTypes.object,
  underline: PropTypes.bool
}, TYPOGRAPHY.propTypes, {}, COMMON.propTypes, {}, sx.propTypes);
export default Link;