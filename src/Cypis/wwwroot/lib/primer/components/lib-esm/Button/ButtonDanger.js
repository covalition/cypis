import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled from 'styled-components';
import ButtonBase, { systemStyles } from './ButtonBase';
import { get } from '../constants';
import theme from '../theme';
import sx from '../sx';
var ButtonDanger = styled(ButtonBase).withConfig({
  displayName: "ButtonDanger",
  componentId: "sc-1y2n4qs-0"
})(["color:", ";border:1px solid ", ";background-color:", ";box-shadow:", ";&:hover{color:", ";background-color:", ";border-color:", ";box-shadow:", ";}&:focus{border-color:transparent;box-shadow:", ";}&:active{color:", ";background-color:", ";box-shadow:", ";border-color:", ";}&:disabled{color:", ";background-color:", ";border:1px solid ", ";}", " ", ";"], get('buttons.danger.color.default'), get('buttons.danger.border.default'), get('buttons.danger.bg.default'), get('buttons.danger.shadow.default'), get('buttons.danger.color.hover'), get('buttons.danger.bg.hover'), get('buttons.danger.border.hover'), get('buttons.danger.shadow.hover'), get('buttons.danger.shadow.focus'), get('buttons.danger.color.active'), get('buttons.danger.bg.active'), get('buttons.danger.shadow.active'), get('buttons.danger.border.active'), get('buttons.danger.color.disabled'), get('buttons.danger.bg.disabled'), get('buttons.danger.border.default'), systemStyles, sx);
ButtonDanger.defaultProps = {
  theme: theme
};
ButtonDanger.propTypes = _objectSpread({}, ButtonBase.propTypes, {}, sx.propTypes);
export default ButtonDanger;