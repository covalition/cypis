import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import sx from '../sx';
import { COMMON } from '../constants';
import theme from '../theme';
import { MenuContext } from './SelectMenuContext';
import SelectMenuDivider from './SelectMenuDivider';
import SelectMenuFilter from './SelectMenuFilter';
import SelectMenuFooter from './SelectMenuFooter';
import SelectMenuItem from './SelectMenuItem';
import SelectMenuList from './SelectMenuList';
import SelectMenuModal from './SelectMenuModal';
import SelectMenuTabs from './SelectMenuTabs';
import SelectMenuHeader from './SelectMenuHeader';
import SelectMenuTab from './SelectMenuTab';
import SelectMenuTabPanel from './SelectMenuTabPanel';
import useKeyboardNav from './hooks/useKeyboardNav';
var wrapperStyles = "\n  &[open] > summary::before {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 80;\n    display: block;\n    cursor: default;\n    content: ' ';\n    background: transparent;\n  }\n  // Remove marker added by the display: list-item browser default\n  > summary {\n    list-style: none;\n  }\n  // Remove marker added by details polyfill\n  > summary::before {\n    display: none;\n  }\n  // Remove marker added by Chrome\n  > summary::-webkit-details-marker {\n    display: none;\n  }\n";
var StyledSelectMenu = styled.details.withConfig({
  displayName: "SelectMenu__StyledSelectMenu",
  componentId: "sc-12xd8o8-0"
})(["", " ", " ", ";"], wrapperStyles, COMMON, sx); // 'as' is spread out because we don't want users to be able to change the tag.

var SelectMenu = function SelectMenu(_ref) {
  var children = _ref.children,
      initialTab = _ref.initialTab,
      as = _ref.as,
      rest = _objectWithoutProperties(_ref, ["children", "initialTab", "as"]);

  var ref = useRef(null);

  var _useState = useState(initialTab),
      _useState2 = _slicedToArray(_useState, 2),
      selectedTab = _useState2[0],
      setSelectedTab = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var menuProviderValues = {
    selectedTab: selectedTab,
    setSelectedTab: setSelectedTab,
    setOpen: setOpen,
    open: open,
    initialTab: initialTab
  };

  function toggle(event) {
    setOpen(event.target.open);
  }

  useKeyboardNav(ref, open, setOpen);
  return /*#__PURE__*/React.createElement(MenuContext.Provider, {
    value: menuProviderValues
  }, /*#__PURE__*/React.createElement(StyledSelectMenu, _extends({
    ref: ref
  }, rest, {
    open: open,
    onToggle: toggle
  }), children));
};

SelectMenu.displayName = "SelectMenu";
SelectMenu.MenuContext = MenuContext;
SelectMenu.List = SelectMenuList;
SelectMenu.Divider = SelectMenuDivider;
SelectMenu.Filter = SelectMenuFilter;
SelectMenu.Footer = SelectMenuFooter;
SelectMenu.Item = SelectMenuItem;
SelectMenu.List = SelectMenuList;
SelectMenu.Modal = SelectMenuModal;
SelectMenu.Tabs = SelectMenuTabs;
SelectMenu.Tab = SelectMenuTab;
SelectMenu.TabPanel = SelectMenuTabPanel;
SelectMenu.Header = SelectMenuHeader;
SelectMenu.defaultProps = {
  theme: theme
};
SelectMenu.propTypes = _objectSpread({
  initialTab: PropTypes.string
}, COMMON.propTypes, {}, sx.propTypes);
export default SelectMenu;