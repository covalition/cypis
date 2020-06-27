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
var ITEM_CLASS = 'UnderlineNav-item';
var SELECTED_CLASS = 'selected';

function UnderlineNavBase(_ref) {
  var actions = _ref.actions,
      className = _ref.className,
      align = _ref.align,
      children = _ref.children,
      full = _ref.full,
      label = _ref.label,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ["actions", "className", "align", "children", "full", "label", "theme"]);

  var classes = classnames(className, 'UnderlineNav', align && "UnderlineNav--".concat(align), full && 'UnderlineNav--full');
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: classes,
    "aria-label": label
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "UnderlineNav-body"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "UnderlineNav-actions"
  }, actions));
}

UnderlineNavBase.displayName = "UnderlineNavBase";
var UnderlineNav = styled(UnderlineNavBase).withConfig({
  displayName: "UnderlineNav",
  componentId: "sc-14g1rj0-0"
})(["display:flex;justify-content:space-between;border-bottom:1px solid #eaecef;&.UnderlineNav--right{justify-content:flex-end;.UnderlineNav-item{margin-right:0;margin-left:", ";}.UnderlineNav-actions{flex:1 1 auto;}}&.UnderlineNav--full{display:block;}.UnderlineNav-body{display:flex;margin-bottom:-1px;}.UnderlineNav-actions{align-self:center;}", ";", ";"], get('space.3'), COMMON, sx);
UnderlineNav.Link = styled.a.attrs(function (props) {
  return {
    activeClassName: typeof props.to === 'string' ? 'selected' : '',
    className: classnames(ITEM_CLASS, props.selected && SELECTED_CLASS, props.className)
  };
}).withConfig({
  displayName: "UnderlineNav__Link",
  componentId: "sc-14g1rj0-1"
})(["padding:", " ", ";margin-right:", ";font-size:", ";line-height:", ";color:", ";text-align:center;border-bottom:2px solid transparent;text-decoration:none;&:hover,&:focus{color:", ";text-decoration:none;border-bottom-color:", ";transition:0.2s ease;.UnderlineNav-octicon{color:", ";}}&.selected{color:", ";border-bottom-color:", ";.UnderlineNav-octicon{color:", ";}}", ";", ";"], get('space.3'), get('space.2'), get('space.3'), get('fontSizes.1'), get('lineHeights.default'), get('colors.gray.6'), get('colors.gray.9'), get('colors.gray.2'), get('colors.gray.5'), get('colors.gray.9'), get('colors.accent'), get('colors.gray.5'), COMMON, sx);
UnderlineNav.defaultProps = {
  theme: theme
};
UnderlineNav.propTypes = _objectSpread({
  actions: PropTypes.node,
  align: PropTypes.oneOf(['right']),
  children: PropTypes.node,
  full: PropTypes.bool,
  label: PropTypes.string,
  theme: PropTypes.object
}, COMMON.propTypes, {}, sx.propTypes);
UnderlineNav.Link.defaultProps = {
  theme: theme
};
UnderlineNav.Link.propTypes = _objectSpread({
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  href: PropTypes.string,
  selected: PropTypes.bool
}, COMMON.propTypes, {}, sx.propTypes);
UnderlineNav.Link.displayName = 'UnderlineNav.Link';
export default UnderlineNav;