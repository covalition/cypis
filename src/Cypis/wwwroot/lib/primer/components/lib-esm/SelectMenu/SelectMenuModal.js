import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { COMMON, get } from '../constants';
import theme from '../theme';
import sx from '../sx';
var animateModal = keyframes(["0%{opacity:0;transform:scale(0.9);}"]);
var modalStyles = css(["position:relative;z-index:99;display:flex;", ";max-height:", ";margin:auto 0;", ";overflow:hidden;pointer-events:auto;flex-direction:column;background-color:", ";border-radius:", ";box-shadow:0 1px 5px rgba(27,31,35,0.15);animation:", " 0.12s cubic-bezier(0,0.1,0.1,1) backwards;@media (min-width:", "){width:'300px';height:auto;max-height:350px;margin:", " 0 ", " 0;font-size:", ";border:", " solid ", ";border-radius:", ";box-shadow:0 1px 5px ", " !default;}"], function (props) {
  return props.filter ? 'height: 80%' : '';
}, function (props) {
  return props.filter ? 'none' : '66%';
}, function (props) {
  return props.filter ? 'margin-top: 0' : '';
}, get('colors.white'), get('radii.2'), animateModal, get('breakpoints.0'), get('space.1'), get('space.3'), get('fontSizes.0'), get('borderWidths.1'), get('colors.border.grayDark'), get('radii.2'), get('colors.blackfade15'));
var modalWrapperStyles = css(["position:fixed;top:0;right:0;bottom:0;left:0;z-index:99;display:flex;padding:", ";pointer-events:none;flex-direction:column;&::before{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;content:'';background-color:", ";@media (min-width:", "){display:none;}}@media (min-width:", "){position:absolute;top:auto;right:", ";bottom:auto;left:auto;padding:0;}"], get('space.3'), get('colors.blackfade50'), get('breakpoints.0'), get('breakpoints.0'), function (props) {
  return props.align === 'right' ? '0' : 'auto';
});
var Modal = styled.div.withConfig({
  displayName: "SelectMenuModal__Modal",
  componentId: "fv9zw3-0"
})(["", ""], modalStyles);
var ModalWrapper = styled.div.withConfig({
  displayName: "SelectMenuModal__ModalWrapper",
  componentId: "fv9zw3-1"
})(["", " ", " ", ";"], modalWrapperStyles, COMMON, sx);

var SelectMenuModal = function SelectMenuModal(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ["children", "theme"]);

  return /*#__PURE__*/React.createElement(ModalWrapper, _extends({
    theme: theme
  }, rest, {
    role: "menu"
  }), /*#__PURE__*/React.createElement(Modal, {
    theme: theme
  }, children));
};

SelectMenuModal.displayName = "SelectMenuModal";
SelectMenuModal.defaultProps = {
  align: 'left',
  theme: theme
};
SelectMenuModal.propTypes = _objectSpread({
  align: PropTypes.oneOf(['left', 'right']),
  theme: PropTypes.object
}, COMMON.propTypes, {}, sx.propTypes);
SelectMenuModal.displayName = 'SelectMenu.Modal';
export default SelectMenuModal;