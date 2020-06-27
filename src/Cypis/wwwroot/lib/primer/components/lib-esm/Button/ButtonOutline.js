import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled from 'styled-components';
import ButtonBase, { systemStyles } from './ButtonBase';
import { get } from '../constants';
import theme from '../theme';
import sx from '../sx';
var ButtonOutline = styled(ButtonBase).withConfig({
  displayName: "ButtonOutline",
  componentId: "sc-1pqqfuy-0"
})(["color:", ";border:1px solid ", ";background-color:", ";box-shadow:", ";&:hover{color:", ";background-color:", ";border-color:", ";box-shadow:", ";}&:focus{border-color:transparent;box-shadow:", ";}&:active{color:", ";background-color:", ";border-color:", ";box-shadow:", ";}&:disabled{color:", ";border-color:", ";background-color:", ";}", " ", ";"], get('buttons.outline.color.default'), get('buttons.outline.border.default'), get('buttons.outline.bg.default'), get('buttons.outline.shadow.default'), get('buttons.outline.color.hover'), get('buttons.outline.bg.hover'), get('buttons.outline.border.hover'), get('buttons.outline.shadow.hover'), get('buttons.outline.shadow.focus'), get('buttons.outline.color.active'), get('buttons.outline.bg.active'), get('buttons.outline.border.active'), get('buttons.outline.shadow.active'), get('buttons.outline.color.disabled'), get('buttons.outline.border.default'), get('buttons.outline.bg.disabled'), systemStyles, sx);
ButtonOutline.defaultProps = {
  theme: theme
};
ButtonOutline.propTypes = _objectSpread({}, ButtonBase.propTypes, {}, sx.propTypes);
export default ButtonOutline;