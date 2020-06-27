import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled, { css } from 'styled-components';
import theme from '../theme';
import { COMMON, get } from '../constants';
import sx from '../sx';
var listStyles = css(["position:relative;padding:0;margin:0;flex:auto;overflow-x:hidden;overflow-y:auto;background-color:", ";-webkit-overflow-scrolling:touch;@media (hover:hover){.SelectMenuTab:focus{background-color:", ";}.SelectMenuTab:not([aria-checked='true']):hover{color:", ";background-color:", ";}.SelectMenuTab:not([aria-checked='true']):active{color:", ";background-color:", ";}}"], get('colors.white'), get('colors.blue.1'), get('colors.gray.9'), get('colors.gray.2'), get('colors.gray.9'), get('colors.gray.1'));
var SelectMenuList = styled.div.withConfig({
  displayName: "SelectMenuList",
  componentId: "uflcju-0"
})(["", " ", " ", ";"], listStyles, COMMON, sx);
SelectMenuList.defaultProps = {
  theme: theme
};
SelectMenuList.propTypes = _objectSpread({}, COMMON.propTypes, {}, sx.propTypes);
SelectMenuList.displayName = 'SelectMenu.List';
export default SelectMenuList;