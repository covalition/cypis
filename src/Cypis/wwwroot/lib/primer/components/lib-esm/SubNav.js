import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';
import { COMMON, FLEX, get } from './constants';
import theme from './theme';
import Flex from './Flex';
import sx from './sx';
var ITEM_CLASS = 'SubNav-item';
var SELECTED_CLASS = 'selected';

function SubNavBase(_ref) {
  var actions = _ref.actions,
      className = _ref.className,
      children = _ref.children,
      label = _ref.label,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ["actions", "className", "children", "label", "theme"]);

  var classes = classnames(className, 'SubNav');
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: classes,
    "aria-label": label
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "SubNav-body"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "SubNav-actions"
  }, actions));
}

SubNavBase.displayName = "SubNavBase";
var SubNav = styled(SubNavBase).withConfig({
  displayName: "SubNav",
  componentId: "sc-16bavxu-0"
})(["display:flex;justify-content:space-between;.SubNav-body{display:flex;margin-bottom:-1px;> *{margin-left:", ";}> *:first-child{margin-left:0;}}.SubNav-actions{align-self:center;}", ";", ";", ";"], get('space.2'), COMMON, FLEX, sx);
SubNav.Links = Flex;
SubNav.Link = styled.a.attrs(function (props) {
  return {
    activeClassName: typeof props.to === 'string' ? 'selected' : '',
    className: classnames(ITEM_CLASS, props.selected && SELECTED_CLASS, props.className)
  };
}).withConfig({
  displayName: "SubNav__Link",
  componentId: "sc-16bavxu-1"
})(["padding-left:", ";padding-right:", ";min-height:34px;font-weight:", ";font-size:", ";line-height:", ";color:", ";text-align:center;text-decoration:none;border-top:1px solid ", ";border-bottom:1px solid ", ";border-right:1px solid ", ";display:flex;align-items:center;&:first-of-type{border-top-left-radius:", ";border-bottom-left-radius:", ";border-left:1px solid ", ";}&:last-of-type{border-top-right-radius:", ";border-bottom-right-radius:", ";}&:hover,&:focus{text-decoration:none;background-color:", ";transition:0.2s ease;.SubNav-octicon{color:", ";}}&.selected{color:", ";background-color:", ";border:0;.SubNav-octicon{color:", ";}}", ";", ";"], get('space.3'), get('space.3'), get('fontWeights.bold'), get('fontSizes.1'), get('lineHeights.default'), get('colors.gray.6'), get('colors.gray.2'), get('colors.gray.2'), get('colors.gray.2'), get('radii.2'), get('radii.2'), get('colors.gray.2'), get('radii.2'), get('radii.2'), get('colors.gray.1'), get('colors.gray.5'), get('colors.white'), get('colors.blue.5'), get('colors.gray.5'), COMMON, sx);
SubNav.defaultProps = {
  theme: theme
};
SubNav.propTypes = _objectSpread({
  actions: PropTypes.node,
  align: PropTypes.oneOf(['right']),
  children: PropTypes.node,
  full: PropTypes.bool,
  label: PropTypes.string,
  theme: PropTypes.object
}, COMMON.propTypes, {}, sx.propTypes);
SubNav.Link.defaultProps = {
  theme: theme
};
SubNav.Link.propTypes = _objectSpread({
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  href: PropTypes.string,
  selected: PropTypes.bool
}, COMMON.propTypes, {}, sx.propTypes);
SubNav.Link.displayName = 'SubNav.Link';
SubNav.Links.propTypes = _objectSpread({}, Flex.propTypes);
SubNav.Links.displayName = 'SubNav.Links';
export default SubNav;