import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { get, COMMON, TYPOGRAPHY } from '../constants';
import theme from '../theme';
import sx from '../sx'; // SelectMenu.Header is intentionally not exported, it's an internal component used in
// SelectMenu.Modal

var SelectMenuTitle = styled.h3.withConfig({
  displayName: "SelectMenuHeader__SelectMenuTitle",
  componentId: "sc-1njvopm-0"
})(["flex:auto;font-size:", ";font-weight:", ";margin:0;@media (min-width:", "){font-size:inherit;}"], get('fontSizes.1'), get('fontWeights.bold'), get('breakpoints.0'));
var StyledHeader = styled.header.withConfig({
  displayName: "SelectMenuHeader__StyledHeader",
  componentId: "sc-1njvopm-1"
})(["display:flex;flex:none;padding:", ";border-bottom:", " solid ", ";", " ", " @media (min-width:", "){padding-top:", ";padding-bottom:", ";}", ";"], get('space.3'), get('borderWidths'), get('colors.border.gray'), COMMON, TYPOGRAPHY, get('breakpoints.0'), get('space.2'), get('space.2'), sx);

var SelectMenuHeader = function SelectMenuHeader(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ["children", "theme"]);

  return /*#__PURE__*/React.createElement(StyledHeader, _extends({
    theme: theme
  }, rest), /*#__PURE__*/React.createElement(SelectMenuTitle, {
    theme: theme
  }, children));
};

SelectMenuHeader.displayName = "SelectMenuHeader";
SelectMenuHeader.defaultProps = {
  theme: theme
};
SelectMenuHeader.propTypes = _objectSpread({
  theme: PropTypes.object
}, COMMON.propTypes, {}, TYPOGRAPHY.propTypes, {}, sx.propTypes);
SelectMenuHeader.displayName = 'SelectMenu.Header';
export default SelectMenuHeader;