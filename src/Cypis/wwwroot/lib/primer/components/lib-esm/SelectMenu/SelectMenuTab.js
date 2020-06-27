import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React, { useContext, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuContext } from './SelectMenuContext';
import { get, COMMON } from '../constants';
import theme from '../theme';
import sx from '../sx';
var tabStyles = css(["flex:1;padding:", " ", ";font-size:", ";font-weight:500;color:", ";text-align:center;background-color:", ";border:0;box-shadow:inset 0 -1px 0 ", ";@media (min-width:", "){flex:none;padding:", " ", ";border:", " solid transparent;border-bottom-width:0;border-top-left-radius:", ";border-top-right-radius:", ";background-color:", ";}&[aria-selected='true']{z-index:1;color:", ";background-color:", ";box-shadow:0 0 0 1px ", ";@media (min-width:", "){border-color:", ";box-shadow:none;}}&:focus{background-color:#dbedff;}"], get('space.2'), get('space.3'), get('fontSizes.0'), get('colors.gray.5'), get('colors.gray.1'), get('colors.border.gray'), get('breakpoints.0'), get('space.1'), get('space.3'), get('borderWidths.1'), get('radii.2'), get('radii.2'), get('colors.white'), get('colors.gray.9'), get('colors.white'), get('colors.border.gray'), get('breakpoints.0'), get('colors.border.gray'));
var StyledTab = styled.button.withConfig({
  displayName: "SelectMenuTab__StyledTab",
  componentId: "oezw3-0"
})(["", " ", " ", ";"], tabStyles, COMMON, sx);

var SelectMenuTab = function SelectMenuTab(_ref) {
  var tabName = _ref.tabName,
      index = _ref.index,
      className = _ref.className,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["tabName", "index", "className", "onClick"]);

  var menuContext = useContext(MenuContext);

  var handleClick = function handleClick(e) {
    // if consumer has attached an onClick event, call it
    onClick && onClick(e);

    if (!e.defaultPrevented) {
      menuContext.setSelectedTab(tabName);
    }
  }; // if no tab is selected when the component renders, show the first tab


  useEffect(function () {
    if (!menuContext.selectedTab && index === 0) {
      menuContext.setSelectedTab(tabName);
    }
  }, [index, menuContext, tabName]);
  var isSelected = menuContext.selectedTab === tabName;
  return /*#__PURE__*/React.createElement(StyledTab, _extends({
    role: "tab",
    className: classnames('SelectMenuTab', className),
    "aria-selected": isSelected,
    onClick: handleClick
  }, rest), tabName);
};

SelectMenuTab.displayName = "SelectMenuTab";
SelectMenuTab.defaultProps = {
  theme: theme
};
SelectMenuTab.propTypes = _objectSpread({
  index: PropTypes.number,
  onClick: PropTypes.func,
  tabName: PropTypes.string
}, COMMON.propTypes, {}, sx.propTypes);
SelectMenuTab.displayName = 'SelectMenu.Tab';
export default SelectMenuTab;