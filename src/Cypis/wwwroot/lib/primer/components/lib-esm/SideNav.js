import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import classnames from 'classnames';
import { COMMON, get } from './constants';
import theme from './theme';
import Link from './Link';
import BorderBox from './BorderBox';
import sx from './sx';

function SideNavBase(_ref) {
  var variant = _ref.variant,
      className = _ref.className,
      bordered = _ref.bordered,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["variant", "className", "bordered", "children"]);

  var variantClassName = variant === 'lightweight' ? 'lightweight' : 'normal';
  var newClassName = classnames(className, "variant-".concat(variantClassName));

  if (!bordered) {
    props = _objectSpread({}, props, {
      borderWidth: 0
    });
  }

  return /*#__PURE__*/React.createElement(BorderBox, _extends({
    as: "nav",
    className: newClassName
  }, props), children);
}

SideNavBase.displayName = "SideNavBase";
var SideNav = styled(SideNavBase).withConfig({
  displayName: "SideNav",
  componentId: "upvvge-0"
})(["background-color:", ";", " ", ";", ";"], get('colors.white'), function (props) {
  return props.bordered && css(["& > &{border-left:0;border-right:0;border-bottom:0;}"]);
}, COMMON, sx);
SideNav.Link = styled(Link).attrs(function (props) {
  var isReactRouter = typeof props.to === 'string';

  if (isReactRouter || props.selected) {
    // according to their docs, NavLink supports aria-current:
    // https://reacttraining.com/react-router/web/api/NavLink/aria-current-string
    return {
      'aria-current': 'page'
    };
  } else {
    return {};
  }
}).withConfig({
  displayName: "SideNav__Link",
  componentId: "upvvge-1"
})(["position:relative;display:block;", " width:100%;text-align:left;font-size:", ";& > ", "{border-bottom:none;}&:first-child{border-top-right-radius:", ";border-top-left-radius:", ";}&:last-child{border-bottom-right-radius:", ";border-bottom-left-radius:", ";}", ".variant-normal > &{color:", ";padding:", ";border:0;border-top:", " solid ", ";&:first-child{border-top:0;}&::before{position:absolute;top:0;bottom:0;left:0;z-index:1;width:3px;pointer-events:none;content:'';}&:hover,&:focus{color:", ";text-decoration:none;background-color:", ";outline:none;}&[aria-current='page'],&[aria-selected='true']{font-weight:", ";color:", ";&::before{background-color:", ";}}}", ".variant-lightweight > &{padding:", " 0;color:", ";&:hover,&:focus{color:", ";text-decoration:none;outline:none;}&[aria-current='page'],&[aria-selected='true']{color:", ";font-weight:", ";}}", ";"], function (props) {
  return props.variant === 'full' && css(["display:flex;align-items:center;justify-content:space-between;"]);
}, get('fontSizes.1'), SideNav, get('radii.2'), get('radii.2'), get('radii.2'), get('radii.2'), SideNav, get('colors.gray.6'), get('space.3'), get('borderWidths.1'), get('colors.gray.2'), get('colors.gray.9'), get('colors.gray.1'), get('fontWeights.semibold'), get('colors.gray.9'), get('colors.accent'), SideNav, get('space.1'), get('colors.blue.5'), get('colors.gray.9'), get('colors.gray.9'), get('fontWeights.semibold'), sx);
SideNav.defaultProps = {
  theme: theme,
  variant: 'normal'
};
SideNav.propTypes = _objectSpread({
  as: PropTypes.elementType,
  bordered: PropTypes.bool,
  children: PropTypes.node,
  theme: PropTypes.object,
  variant: PropTypes.oneOf(['normal', 'lightweight'])
}, BorderBox.propTypes);
SideNav.Link.defaultProps = {
  theme: theme,
  variant: 'normal'
};
SideNav.Link.propTypes = _objectSpread({
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  selected: PropTypes.bool,
  theme: PropTypes.object,
  variant: PropTypes.oneOf(['normal', 'full'])
}, Link.propTypes);
SideNav.Link.displayName = 'SideNav.Link';
export default SideNav;