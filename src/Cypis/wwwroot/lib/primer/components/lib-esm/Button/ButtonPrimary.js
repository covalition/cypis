import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled from 'styled-components';
import ButtonBase, { systemStyles } from './ButtonBase';
import { get } from '../constants';
import theme from '../theme';
import sx from '../sx';
var ButtonPrimary = styled(ButtonBase).withConfig({
  displayName: "ButtonPrimary",
  componentId: "pp1q4q-0"
})(["color:", ";background-color:", ";border:1px solid ", ";box-shadow:", ";&:hover{background-color:", ";border-color:", ";}&:focus{border-color:transparent;box-shadow:", ";background-color:", ";}&:active{background-color:", ";box-shadow:", ";border-color:", ";}&:disabled{color:", ";background-color:", ";border-color:", ";}", " ", ";"], get('buttons.primary.color.default'), get('buttons.primary.bg.default'), get('buttons.primary.border.default'), get('buttons.primary.shadow.default'), get('buttons.primary.bg.hover'), get('buttons.primary.border.hover'), get('buttons.primary.shadow.focus'), get('buttons.primary.bg.focus'), get('buttons.primary.bg.active'), get('buttons.primary.shadow.active'), get('buttons.primary.border.active'), get('buttons.primary.color.disabled'), get('buttons.primary.bg.disabled'), get('buttons.primary.border.disabled'), systemStyles, sx);
ButtonPrimary.defaultProps = {
  theme: theme
};
ButtonPrimary.propTypes = _objectSpread({}, ButtonBase.propTypes, {}, sx.propTypes);
export default ButtonPrimary;