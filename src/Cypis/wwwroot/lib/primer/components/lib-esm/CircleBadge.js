import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Octicon from '@primer/octicons-react';
import { COMMON, get } from './constants';
import isNumeric from './utils/isNumeric';
import theme from './theme';
import sx from './sx';
var variantSizes = {
  small: 56,
  medium: 96,
  large: 128
};

var sizeStyles = function sizeStyles(_ref) {
  var size = _ref.size,
      variant = _ref.variant;
  var calc = isNumeric(size) ? size : variantSizes[variant];
  return {
    width: calc,
    height: calc
  };
};

var CircleBadge = styled.div.withConfig({
  displayName: "CircleBadge",
  componentId: "sc-19eysyj-0"
})(["display:", ";align-items:center;justify-content:center;background-color:", ";border-radius:50%;box-shadow:", ";", " ", ";", ";"], function (props) {
  return props.inline ? 'inline-flex' : 'flex';
}, get('colors.white'), get('shadows.medium'), COMMON, sizeStyles, sx);
CircleBadge.Icon = styled(Octicon).withConfig({
  displayName: "CircleBadge__Icon",
  componentId: "sc-19eysyj-1"
})(["max-width:60% !important;height:auto !important;max-height:55% !important;", ";", ";"], COMMON, sx);
CircleBadge.defaultProps = {
  inline: false,
  theme: theme,
  variant: 'medium'
};
CircleBadge.propTypes = _objectSpread({
  inline: PropTypes.bool,
  size: PropTypes.number,
  theme: PropTypes.object,
  variant: PropTypes.oneOf(['small', 'medium', 'large'])
}, COMMON.propTypes, {}, sx.propTypes);
CircleBadge.Icon.defaultProps = {
  theme: theme
};
CircleBadge.Icon.propTypes = _objectSpread({
  theme: PropTypes.object
}, COMMON.propTypes, {}, sx.propTypes);
CircleBadge.Icon.displayName = 'CircleBadge.Icon';
export default CircleBadge;