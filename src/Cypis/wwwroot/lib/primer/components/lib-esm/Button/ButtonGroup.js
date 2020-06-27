import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled from 'styled-components';
import { get } from '../constants';
import Box from '../Box';
import theme from '../theme';
import sx from '../sx';
var ButtonGroup = styled(Box).withConfig({
  displayName: "ButtonGroup",
  componentId: "sc-1q27gfn-0"
})(["vertical-align:middle;&& > *{position:relative;border-right-width:0;border-radius:0;:first-child{border-top-left-radius:", ";border-bottom-left-radius:", ";margin-right:0;}:not(:first-child){margin-left:0;margin-right:0;}:last-child{border-right-width:1px;border-top-right-radius:", ";border-bottom-right-radius:", ";}:focus,:active,:hover{border-right-width:1px;+ *{border-left-width:0;}}:focus,:active{z-index:1;}}", ";"], get('radii.2'), get('radii.2'), get('radii.2'), get('radii.2'), sx);
ButtonGroup.defaultProps = {
  display: 'inline-block',
  theme: theme
};
ButtonGroup.propTypes = _objectSpread({}, Box.propTypes, {}, sx.propTypes);
export default ButtonGroup;