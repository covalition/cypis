import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';
import { COMMON, get } from './constants';
import theme from './theme';
import sx from './sx';
var ITEM_CLASS = 'TabNav-item';
var SELECTED_CLASS = 'selected';

function TabNavBase(_ref) {
  var actions = _ref.actions,
      className = _ref.className,
      align = _ref.align,
      children = _ref.children,
      full = _ref.full,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ["actions", "className", "align", "children", "full", "theme"]);

  var classes = classnames(className, 'TabNav');
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: classes
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "TabNav-body"
  }, children));
}

TabNavBase.displayName = "TabNavBase";
var TabNav = styled(TabNavBase).withConfig({
  displayName: "TabNav",
  componentId: "sc-1x2a5a7-0"
})(["display:flex;border-bottom:1px solid ", ";.TabNav-body{display:flex;margin-bottom:-1px;}", ";", ";"], get('colors.border.gray'), COMMON, sx);
TabNav.Link = styled.a.attrs(function (props) {
  return {
    activeClassName: typeof props.to === 'string' ? 'selected' : '',
    className: classnames(ITEM_CLASS, props.selected && SELECTED_CLASS, props.className)
  };
}).withConfig({
  displayName: "TabNav__Link",
  componentId: "sc-1x2a5a7-1"
})(["padding:8px 12px;font-size:", ";line-height:20px;color:", ";text-decoration:none;background-color:transparent;border:1px solid transparent;border-bottom:0;&:hover,&:focus{color:", ";text-decoration:none;}&.selected{color:", ";border-color:", ";border-top-right-radius:", ";border-top-left-radius:", ";background-color:", ";}", ";", ";"], get('fontSizes.1'), get('colors.black'), get('colors.text.grayDark'), get('colors.text.grayDark'), get('colors.border.gray'), get('radii.2'), get('radii.2'), get('colors.white'), COMMON, sx);
TabNav.defaultProps = {
  theme: theme
};
TabNav.propTypes = _objectSpread({
  children: PropTypes.node,
  theme: PropTypes.object
}, COMMON.propTypes, {}, sx.propTypes);
TabNav.Link.defaultProps = {
  theme: theme
};
TabNav.Link.propTypes = _objectSpread({
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  href: PropTypes.string,
  selected: PropTypes.bool
}, COMMON.propTypes, {}, sx.propTypes);
TabNav.Link.displayName = 'TabNav.Link';
export default TabNav;