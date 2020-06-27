import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MenuContext } from './SelectMenuContext';
import SelectMenuList from './SelectMenuList';
import theme from '../theme';
import { COMMON, get } from '../constants';
import sx from '../sx';

var TabPanelBase = function TabPanelBase(_ref) {
  var tabName = _ref.tabName,
      className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["tabName", "className", "children"]);

  var menuContext = useContext(MenuContext);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tabpanel",
    className: className,
    hidden: menuContext.selectedTab !== tabName
  }, rest), /*#__PURE__*/React.createElement(SelectMenuList, null, children));
};

TabPanelBase.displayName = "TabPanelBase";
var TabPanel = styled(TabPanelBase).withConfig({
  displayName: "SelectMenuTabPanel__TabPanel",
  componentId: "hgx3vc-0"
})(["border-top:", " solid ", ";", " ", ";"], get('borderWidths.1'), get('colors.border.gray'), COMMON, sx);
TabPanel.defaultProps = {
  theme: theme
};
TabPanel.propTypes = _objectSpread({
  tabName: PropTypes.string
}, COMMON.propTypes, {}, sx.propTypes);
TabPanel.displayName = 'SelectMenu.TabPanel';
export default TabPanel;