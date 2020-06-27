import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import systemPropTypes from '@styled-system/prop-types';
import { omit, pick } from '@styled-system/props';
import styled, { css } from 'styled-components';
import Octicon from './StyledOcticon';
import { variant, width, minWidth, maxWidth } from 'styled-system';
import { COMMON, get } from './constants';
import theme from './theme';
import sx from './sx';
var sizeVariants = variant({
  variants: {
    small: {
      minHeight: '28px',
      px: 2,
      py: '3px',
      fontSize: 0,
      lineHeight: '20px'
    },
    large: {
      px: 2,
      py: '10px',
      fontSize: 3
    }
  }
}); // using forwardRef is important so that other components (ex. SelectMenu) can autofocus the input

var TextInput = React.forwardRef(function (_ref, ref) {
  var icon = _ref.icon,
      className = _ref.className,
      block = _ref.block,
      disabled = _ref.disabled,
      sx = _ref.sx,
      rest = _objectWithoutProperties(_ref, ["icon", "className", "block", "disabled", "sx"]);

  // this class is necessary to style FilterSearch, plz no touchy!
  var wrapperClasses = classnames(className, 'TextInput-wrapper');
  var wrapperProps = pick(rest);
  var inputProps = omit(rest);
  return /*#__PURE__*/React.createElement(Wrapper, _extends({
    className: wrapperClasses,
    hasIcon: !!icon,
    block: block,
    theme: theme,
    disabled: disabled,
    sx: sx
  }, wrapperProps), icon && /*#__PURE__*/React.createElement(Octicon, {
    className: "TextInput-icon",
    icon: icon
  }), /*#__PURE__*/React.createElement(Input, _extends({
    ref: ref,
    disabled: disabled
  }, inputProps)));
});
var Input = styled.input.withConfig({
  displayName: "TextInput__Input",
  componentId: "sc-156lfck-0"
})(["border:0;font-size:inherit;background-color:transparent;-webkit-appearance:none;color:inherit;width:100%;&:focus{outline:0;}"]);
var Wrapper = styled.span.withConfig({
  displayName: "TextInput__Wrapper",
  componentId: "sc-156lfck-1"
})(["display:inline-flex;align-items:stretch;min-height:34px;font-size:", ";line-height:20px;color:", ";vertical-align:middle;background-repeat:no-repeat;background-position:right 8px center;border:1px solid ", ";border-radius:", ";outline:none;box-shadow:", ";", " .TextInput-icon{align-self:center;color:", ";margin:0 ", ";flex-shrink:0;}&:focus-within{border-color:", ";box-shadow:", ",", ";}", " ", " @media (min-width:", "){font-size:", ";}", " ", " ", " ", " ", " ", ";"], get('fontSizes.1'), get('colors.gray.9'), get('colors.border.gray'), get('radii.2'), get('shadows.formControl'), function (props) {
  if (props.hasIcon) {
    return css(["padding:0;"]);
  } else {
    return css(["padding:6px 12px;"]);
  }
}, get('colors.gray.4'), get('space.2'), get('colors.blue.4'), get('shadows.formControl'), get('shadows.formControlFocus'), function (props) {
  return props.disabled && css(["background-color:", ";box-shadow:", "}"], get('colors.bg.disabled'), get('shadows.formControlDisabled'));
}, function (props) {
  return props.block && css(["display:block;width:100%;"]);
}, get('breakpoints.1'), get('fontSizes.1'), COMMON, width, minWidth, maxWidth, sizeVariants, sx);
TextInput.defaultProps = {
  theme: theme,
  type: 'text'
};
TextInput.propTypes = _objectSpread({
  block: PropTypes.bool,
  maxWidth: systemPropTypes.layout.maxWidth,
  minWidth: systemPropTypes.layout.minWidth,
  variant: PropTypes.oneOf(['small', 'large'])
}, COMMON.propTypes, {}, sx.propTypes, {
  width: systemPropTypes.layout.width
});
TextInput.displayName = 'TextInput';
export default TextInput;