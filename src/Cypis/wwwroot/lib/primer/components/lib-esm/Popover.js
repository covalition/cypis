import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import { COMMON, LAYOUT, POSITION, get } from './constants';
import theme from './theme';
import BorderBox from './BorderBox';
import sx from './sx';
var Popover = styled.div.attrs(function (_ref) {
  var className = _ref.className,
      caret = _ref.caret;
  return {
    className: classnames(className, "caret-pos--".concat(caret))
  };
}).withConfig({
  displayName: "Popover",
  componentId: "sc-16dgy07-0"
})(["position:", ";z-index:100;display:", ";", ";", ";", ";", ";"], function (props) {
  return props.relative ? 'relative' : 'absolute';
}, function (props) {
  return props.open ? 'block' : 'none';
}, COMMON, LAYOUT, POSITION, sx);
Popover.Content = styled(BorderBox).withConfig({
  displayName: "Popover__Content",
  componentId: "sc-16dgy07-1"
})(["position:relative;width:232px;margin-right:auto;margin-left:auto;padding:", ";background-color:", ";", ";", ";&::before,&::after{position:absolute;left:50%;display:inline-block;content:'';}&::before{top:-", ";margin-left:-9px;border:", " solid transparent;border-bottom-color:", ";}&::after{top:-14px;margin-left:-", ";border:7px solid transparent;border-bottom-color:", ";}", ".caret-pos--bottom &,", ".caret-pos--bottom-right &,", ".caret-pos--bottom-left &{&::before,&::after{top:auto;border-bottom-color:transparent;}&::before{bottom:-", ";border-top-color:", ";}&::after{bottom:-14px;border-top-color:", ";}}", ".caret-pos--top-right &,", ".caret-pos--bottom-right &{right:-9px;margin-right:0;&::before,&::after{left:auto;margin-left:0;}&::before{right:20px;}&::after{right:21px;}}", ".caret-pos--top-left &,", ".caret-pos--bottom-left &{left:-9px;margin-left:0;&::before,&::after{left:", ";margin-left:0;}&::after{left:calc(", " + 1px);}}", ".caret-pos--right &,", ".caret-pos--right-top &,", ".caret-pos--right-bottom &,", ".caret-pos--left &,", ".caret-pos--left-top &,", ".caret-pos--left-bottom &{&::before,&::after{top:50%;left:auto;margin-left:0;border-bottom-color:transparent;}&::before{margin-top:calc((", " + 1px) * -1);}&::after{margin-top:-", ";}}", ".caret-pos--right &,", ".caret-pos--right-top &,", ".caret-pos--right-bottom &{&::before{right:-", ";border-left-color:", ";}&::after{right:-14px;border-left-color:", ";}}", ".caret-pos--left &,", ".caret-pos--left-top &,", ".caret-pos--left-bottom &{&::before{left:-", ";border-right-color:", ";}&::after{left:-14px;border-right-color:", ";}}", ".caret-pos--right-top &,", ".caret-pos--left-top &{&::before,&::after{top:", ";}}", ".caret-pos--right-bottom &,", ".caret-pos--left-bottom &{&::before,&::after{top:auto;}&::before{bottom:", ";}&::after{bottom:calc(", " + 1px);}}", ";"], get('space.4'), get('colors.white'), COMMON, LAYOUT, get('space.3'), get('space.2'), get('popovers.colors.caret'), get('space.2'), get('colors.white'), Popover, Popover, Popover, get('space.3'), get('popovers.colors.caret'), get('colors.white'), Popover, Popover, Popover, Popover, get('space.4'), get('space.4'), Popover, Popover, Popover, Popover, Popover, Popover, get('space.2'), get('space.2'), Popover, Popover, Popover, get('space.3'), get('popovers.colors.caret'), get('colors.white'), Popover, Popover, Popover, get('space.3'), get('popovers.colors.caret'), get('colors.white'), Popover, Popover, get('space.4'), Popover, Popover, get('space.3'), get('space.3'), sx);
Popover.CARET_POSITIONS = ['top', 'bottom', 'left', 'right', 'bottom-left', 'bottom-right', 'top-left', 'top-right', 'left-bottom', 'left-top', 'right-bottom', 'right-top'];
Popover.defaultProps = {
  caret: 'top',
  theme: theme
};
Popover.propTypes = _objectSpread({
  as: PropTypes.elementType,
  caret: PropTypes.oneOf(Popover.CARET_POSITIONS),
  open: PropTypes.bool,
  relative: PropTypes.bool,
  theme: PropTypes.object
}, COMMON.propTypes, {}, LAYOUT.propTypes, {}, POSITION.propTypes, {}, sx.propTypes);
Popover.Content.defaultProps = {
  theme: theme
};
Popover.Content.propTypes = _objectSpread({
  as: PropTypes.elementType,
  theme: PropTypes.object
}, BorderBox.propTypes, {}, sx.propTypes);
Popover.Content.displayName = 'Popover.Content';
export default Popover;