import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Check } from '@primer/octicons-react';
import { MenuContext } from './SelectMenuContext';
import { COMMON, get } from '../constants';
import StyledOcticon from '../StyledOcticon';
import theme from '../theme';
import sx from '../sx';
export var listItemStyles = css(["display:flex;align-items:center;padding:", ";overflow:hidden;text-align:left;cursor:pointer;background-color:", ";border:0;border-bottom:", " solid ", ";color:", ";text-decoration:none;font-size:", ";width:100%;&:hover{text-decoration:none;}&:focus{outline:none;}&[hidden]{display:none !important;}@media (min-width:", "){padding-top:", ";padding-bottom:", ";}.SelectMenu-icon{width:", ";margin-right:", ";flex-shrink:0;}.SelectMenu-selected-icon{visibility:hidden;transition:transform 0.12s cubic-bezier(0.5,0.1,1,0.5),visibility 0s 0.12s linear;transform:scale(0);}&[aria-checked='true']{font-weight:500;color:", ";.SelectMenu-selected-icon{visibility:visible;transition:transform 0.12s cubic-bezier(0,0,0.2,1),visibility 0s linear;transform:scale(1);}}@media (hover:hover){body:not(.intent-mouse) .SelectMenu-item:focus,&:hover,&:active,&:focus{background-color:", ";}}@media (hover:none){&:focus,&:active{background-color:", ";}-webkit-tap-highlight-color:rgba(", ",0.5);}"], get('space.3'), get('colors.white'), get('borderWidths.1'), get('colors.border.grayLight'), get('colors.text.gray'), get('fontSizes.0'), get('breakpoints.0'), get('space.2'), get('space.2'), get('space.3'), get('space.2'), get('colors.gray.9'), get('colors.bg.gray'), get('colors.bg.grayLight'), get('colors.gray.3'));
var StyledItem = styled.a.attrs(function () {
  return {
    role: 'menuitemcheckbox'
  };
}).withConfig({
  displayName: "SelectMenuItem__StyledItem",
  componentId: "sc-13zu9d-0"
})(["", " ", " ", ";"], listItemStyles, COMMON, sx);

var SelectMenuItem = function SelectMenuItem(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      theme = _ref.theme,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["children", "selected", "theme", "onClick"]);

  var menuContext = useContext(MenuContext); // close the menu when an item is clicked
  // this can be overriden if the user provides a `onClick` prop and prevents default in it

  var handleClick = function handleClick(e) {
    onClick && onClick(e);

    if (!e.defaultPrevented) {
      menuContext.setOpen(false);
    }
  };

  return /*#__PURE__*/React.createElement(StyledItem, _extends({}, rest, {
    theme: theme,
    onClick: handleClick,
    "aria-checked": selected
  }), /*#__PURE__*/React.createElement(StyledOcticon, {
    theme: theme,
    className: "SelectMenu-icon SelectMenu-selected-icon",
    icon: Check
  }), children);
};

SelectMenuItem.displayName = "SelectMenuItem";
SelectMenuItem.defaultProps = {
  theme: theme,
  selected: false
};
SelectMenuItem.propTypes = _objectSpread({
  selected: PropTypes.bool
}, COMMON.propTypes, {}, sx.propTypes);
SelectMenuItem.displayName = 'SelectMenu.Item';
export default SelectMenuItem;