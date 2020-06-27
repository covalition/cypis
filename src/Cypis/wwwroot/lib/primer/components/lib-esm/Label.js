import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { variant, borderColor } from 'styled-system';
import theme from './theme';
import { COMMON, get } from './constants';
import sx from './sx';
var outlineStyles = css(["margin-top:-1px;margin-bottom:-1px;color:", ";border:", " solid ", ";box-shadow:none;", ";", ";background-color:transparent;"], get('colors.gray.6'), get('borderWidths.1'), get('colors.blackfade15'), borderColor, COMMON);
var sizeVariant = variant({
  variants: {
    small: {
      fontSize: 0,
      lineHeight: '16px',
      padding: '0px 8px'
    },
    medium: {
      fontSize: 0,
      lineHeight: '20px',
      padding: '0 8px'
    },
    large: {
      fontSize: 0,
      lineHeight: '24px',
      padding: '0 12px'
    },
    // corresponds to StateLabel fontSize/lineHeight/padding
    xl: {
      fontSize: 1,
      lineHeight: '16px',
      padding: '8px 12px'
    }
  }
});
var Label = styled('span').withConfig({
  displayName: "Label",
  componentId: "sc-1lj9poe-0"
})(["display:inline-block;font-weight:", ";color:", ";border-radius:", ";&:hover{text-decoration:none;}", " ", " ", ";", ";", ";"], get('fontWeights.normal'), get('colors.white'), get('radii.3'), sizeVariant, COMMON, function (props) {
  return props.dropshadow ? 'box-shadow: inset 0 -1px 0 rgba(27, 31, 35, 0.12)' : '';
}, function (props) {
  return props.outline ? outlineStyles : '';
}, sx);
Label.defaultProps = {
  theme: theme,
  bg: 'gray.5',
  variant: 'medium'
};
Label.propTypes = _objectSpread({
  dropshadow: PropTypes.bool,
  outline: PropTypes.bool,
  theme: PropTypes.object,
  variant: PropTypes.oneOf(['small', 'medium', 'large', 'xl'])
}, COMMON.propTypes, {}, sx.propTypes);
export default Label;