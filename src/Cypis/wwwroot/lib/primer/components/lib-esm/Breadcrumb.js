import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';
import sx from './sx';
import { COMMON, FLEX, get } from './constants';
import theme from './theme';
import Box from './Box';
var SELECTED_CLASS = 'selected';
var Wrapper = styled.li.withConfig({
  displayName: "Breadcrumb__Wrapper",
  componentId: "sc-1hutxdl-0"
})(["display:inline-block;white-space:nowrap;list-style:none;&::after{padding-right:0.5em;padding-left:0.5em;color:", ";font-size:", ";content:'/';}&:first-child{margin-left:0;}&:last-child{&::after{content:none;}}"], get('colors.gray.2'), get('fontSizes.1'));

var BreadcrumbBase = function BreadcrumbBase(_ref) {
  var className = _ref.className,
      children = _ref.children,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ["className", "children", "theme"]);

  var classes = classnames(className, 'Breadcrumb');
  var wrappedChildren = React.Children.map(children, function (child) {
    return /*#__PURE__*/React.createElement(Wrapper, {
      theme: theme
    }, child);
  });
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: classes,
    "aria-label": "breadcrumb"
  }, rest), /*#__PURE__*/React.createElement(Box, {
    as: "ol",
    my: 0,
    pl: 0
  }, wrappedChildren));
};

BreadcrumbBase.displayName = "BreadcrumbBase";
var Breadcrumb = styled(BreadcrumbBase).withConfig({
  displayName: "Breadcrumb",
  componentId: "sc-1hutxdl-1"
})(["display:flex;justify-content:space-between;", ";", ";", ";"], COMMON, FLEX, sx);
Breadcrumb.Item = styled.a.attrs(function (props) {
  return {
    activeClassName: typeof props.to === 'string' ? 'selected' : '',
    className: classnames(props.selected && SELECTED_CLASS, props.className),
    'aria-current': props.selected ? 'page' : null
  };
}).withConfig({
  displayName: "Breadcrumb__Item",
  componentId: "sc-1hutxdl-2"
})(["color:", ";display:inline-block;font-size:", ";text-decoration:none;&:hover{text-decoration:underline;}&.selected{color:", ";pointer-events:none;}", " ", ";"], get('colors.blue.5'), get('fontSizes.1'), get('colors.gray.7'), COMMON, sx);
Breadcrumb.defaultProps = {
  theme: theme
};
Breadcrumb.propTypes = _objectSpread({}, COMMON.propTypes, {}, sx.propTypes);
Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.Item.defaultProps = {
  theme: theme
};
Breadcrumb.Item.propTypes = _objectSpread({
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  href: PropTypes.string,
  selected: PropTypes.bool
}, sx.propTypes, {}, COMMON.propTypes);
Breadcrumb.Item.displayName = 'Breadcrumb.Item';
export default Breadcrumb;