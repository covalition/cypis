import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import styled, { css } from 'styled-components';
import { COMMON, get } from '../constants';
import theme from '../theme';
import sx from '../sx';
var tabWrapperStyles = css(["display:flex;flex-shrink:0;margin-bottom:-1px;-webkit-overflow-scrolling:touch;overflow-x:auto;overflow-y:hidden;&::-webkit-scrollbar{display:none;}@media (min-width:", "){padding:0 ", ";margin-top:", ";}"], get('breakpoints.0'), get('space.2'), get('space.3'));

var Tabs = function Tabs(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist"
  }, rest), children);
};

Tabs.displayName = "Tabs";
var SelectMenuTabs = styled(Tabs).withConfig({
  displayName: "SelectMenuTabs",
  componentId: "sc-17uzpv2-0"
})(["", " ", " ", ";"], tabWrapperStyles, COMMON, sx);
SelectMenuTabs.defaultProps = {
  theme: theme
};
SelectMenuTabs.propTypes = _objectSpread({}, COMMON.propTypes, {}, sx.propTypes);
SelectMenuTabs.displayName = 'SelectMenu.Tabs';
export default SelectMenuTabs;