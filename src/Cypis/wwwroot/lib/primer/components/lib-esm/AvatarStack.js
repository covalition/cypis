import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import sx from './sx';
import { get, COMMON } from './constants';
import theme from './theme';

var transformChildren = function transformChildren(children) {
  var count = children.length;
  return React.Children.map(children, function (child, index) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, count > 3 && index === 2 && /*#__PURE__*/React.createElement("div", {
      className: "AvatarItem-more AvatarItem"
    }), React.cloneElement(child, {
      className: 'AvatarItem'
    }));
  });
};

var AvatarStackWrapper = styled.span.withConfig({
  displayName: "AvatarStack__AvatarStackWrapper",
  componentId: "sc-137fv15-0"
})(["display:inline-block;position:relative;min-width:", ";height:20px;", " ", ";"], function (props) {
  return props.count === 1 ? '26px' : props.count === 2 ? '36px' : '46px';
}, COMMON, sx);
var AvatarStackBody = styled.span.withConfig({
  displayName: "AvatarStack__AvatarStackBody",
  componentId: "sc-137fv15-1"
})(["display:flex;position:absolute;background:white;&:hover{.AvatarItem{margin-right:3px;}.AvatarItem:nth-child(n + 4){display:flex;opacity:1;}.AvatarItem-more{display:none !important;}}.AvatarItem{position:relative;z-index:2;display:flex;width:20px;height:20px;box-sizing:content-box;margin-right:-11px;background-color:", ";border-right:", " solid ", ";border-radius:2px;transition:margin 0.1s ease-in-out;&:first-child{z-index:3;}&:last-child{z-index:1;border-right:0;}img{border-radius:2px;width:inherit;}&:nth-child(n + 4){display:none;opacity:0;}}.AvatarItem-more{z-index:1;margin-right:0;background:", ";&::before,&::after{position:absolute;display:block;height:20px;content:'';border-radius:2px;outline:", " solid ", ";}&::before{width:17px;background:", ";}&::after{width:14px;background:", ";}}", ""], get('colors.white'), get('borderWidths.1'), get('colors.white'), get('colors.gray.1'), get('borderWidths.1'), get('colors.white'), get('colors.gray.2'), get('colors.gray.3'), function (props) {
  return props.alignRight && css(["right:0;flex-direction:row-reverse;&:hover .AvatarItem{margin-right:0;margin-left:3px;}.AvatarItem-more{background:", ";&::before{width:5px;}&::after{background:", ";width:2px;}}.AvatarItem{margin-right:0;margin-left:-11px;border-right:0;border-left:", " solid ", ";}"], get('colors.gray.3'), get('colors.gray.1'), get('borderWidths.1'), get('colors.white'));
});

var AvatarStack = function AvatarStack(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      alignRight = _ref.alignRight,
      rest = _objectWithoutProperties(_ref, ["children", "alignRight"]);

  return /*#__PURE__*/React.createElement(AvatarStackWrapper, _extends({
    count: children.length
  }, rest), /*#__PURE__*/React.createElement(AvatarStackBody, {
    alignRight: alignRight,
    className: "AvatarStackBody"
  }, transformChildren(children)));
};

AvatarStack.displayName = "AvatarStack";
AvatarStack.defaultProps = {
  theme: theme
};
AvatarStack.propTypes = _objectSpread({}, COMMON.propTypes, {
  alignRight: PropTypes.bool
}, sx.propTypes);
export default AvatarStack;