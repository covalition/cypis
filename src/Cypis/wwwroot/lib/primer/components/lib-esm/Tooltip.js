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

function TooltipBase(_ref) {
  var direction = _ref.direction,
      children = _ref.children,
      className = _ref.className,
      text = _ref.text,
      noDelay = _ref.noDelay,
      align = _ref.align,
      wrap = _ref.wrap,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ["direction", "children", "className", "text", "noDelay", "align", "wrap", "theme"]);

  var classes = classnames(className, "tooltipped-".concat(direction), align && "tooltipped-align-".concat(align, "-2"), noDelay && 'tooltipped-no-delay', wrap && 'tooltipped-multiline');
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-label": text
  }, rest, {
    className: classes
  }), children);
}

TooltipBase.displayName = "TooltipBase";
var Tooltip = styled(TooltipBase).withConfig({
  displayName: "Tooltip",
  componentId: "h3c7f-0"
})(["position:relative;&::before{position:absolute;z-index:1000001;display:none;width:0px;height:0px;color:", ";pointer-events:none;content:'';border:6px solid transparent;opacity:0;}&::after{position:absolute;z-index:1000000;display:none;padding:0.5em 0.75em;font:normal normal 11px/1.5 ", ";-webkit-font-smoothing:subpixel-antialiased;color:", ";text-align:center;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-wrap:break-word;white-space:pre;pointer-events:none;content:attr(aria-label);background:", ";border-radius:", ";opacity:0;}@keyframes tooltip-appear{from{opacity:0;}to{opacity:1;}}&:hover,&:active,&:focus{&::before,&::after{display:inline-block;text-decoration:none;animation-name:tooltip-appear;animation-duration:0.1s;animation-fill-mode:forwards;animation-timing-function:ease-in;animation-delay:0.4s;}}&.tooltipped-no-delay:hover,&.tooltipped-no-delay:active,&.tooltipped-no-delay:focus{&::before,&::after{animation-delay:0s;}}&.tooltipped-multiline:hover,&.tooltipped-multiline:active,&.tooltipped-multiline:focus{&::after{display:table-cell;}}&.tooltipped-s,&.tooltipped-se,&.tooltipped-sw{&::after{top:100%;right:50%;margin-top:6px;}&::before{top:auto;right:50%;bottom:-7px;margin-right:-6px;border-bottom-color:", ";}}&.tooltipped-se{&::after{right:auto;left:50%;margin-left:-", ";}}&.tooltipped-sw::after{margin-right:-", ";}&.tooltipped-n,&.tooltipped-ne,&.tooltipped-nw{&::after{right:50%;bottom:100%;margin-bottom:6px;}&::before{top:-7px;right:50%;bottom:auto;margin-right:-6px;border-top-color:", ";}}&.tooltipped-ne{&::after{right:auto;left:50%;margin-left:-", ";}}&.tooltipped-nw::after{margin-right:-", ";}&.tooltipped-s::after,&.tooltipped-n::after{transform:translateX(50%);}&.tooltipped-w{&::after{right:100%;bottom:50%;margin-right:6px;transform:translateY(50%);}&::before{top:50%;bottom:50%;left:-7px;margin-top:-6px;border-left-color:", ";}}&.tooltipped-e{&::after{bottom:50%;left:100%;margin-left:6px;transform:translateY(50%);}&::before{top:50%;right:-7px;bottom:50%;margin-top:-6px;border-right-color:", ";}}&.tooltipped-multiline{&::after{width:max-content;max-width:250px;word-wrap:break-word;white-space:pre-line;border-collapse:separate;}&.tooltipped-s::after,&.tooltipped-n::after{right:auto;left:50%;transform:translateX(-50%);}&.tooltipped-w::after,&.tooltipped-e::after{right:100%;}}&.tooltipped-align-right-2::after{right:0;margin-right:0;}&.tooltipped-align-right-2::before{right:15px;}&.tooltipped-align-left-2::after{left:0;margin-left:0;}&.tooltipped-align-left-2::before{left:10px;}", ";", ";"], get('colors.black'), get('fonts.normal'), get('colors.white'), get('colors.black'), get('radii.1'), get('colors.black'), get('space.3'), get('space.3'), get('colors.black'), get('space.3'), get('space.3'), get('colors.black'), get('colors.black'), COMMON, sx);
Tooltip.alignments = ['left', 'right'];
Tooltip.directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
Tooltip.defaultProps = {
  theme: theme,
  direction: 'n'
};
Tooltip.propTypes = _objectSpread({
  align: PropTypes.oneOf(Tooltip.alignments),
  children: PropTypes.node,
  direction: PropTypes.oneOf(Tooltip.directions),
  noDelay: PropTypes.bool,
  text: PropTypes.string,
  theme: PropTypes.object,
  wrap: PropTypes.bool
}, COMMON.propTypes, {}, sx.propTypes);
export default Tooltip;