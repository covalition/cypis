import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled from 'styled-components';
import sx from '../sx';
import { get } from '../constants';
import theme from '../theme';
import ButtonBase, { systemStyles } from './ButtonBase';
var Button = styled(ButtonBase).withConfig({
  displayName: "Button",
  componentId: "sc-1cuu878-0"
})(["color:", ";background-color:", ";border:1px solid ", ";box-shadow:", ";&:hover{background-color:", ";border-color:", ";box-shadow:", ";}&:focus{border-color:transparent;box-shadow:", ";}&:active{background-color:", ";box-shadow:", ";border-color:", ";}&:disabled{color:", ";background-color:", ";border-color:", ";}", " ", ";"], get('buttons.default.color.default'), get('buttons.default.bg.default'), get('buttons.default.border.default'), get('buttons.default.shadow.default'), get('buttons.default.bg.hover'), get('buttons.default.border.hover'), get('buttons.default.shadow.hover'), get('buttons.default.shadow.focus'), get('buttons.default.bg.active'), get('buttons.default.shadow.active'), get('buttons.default.border.active'), get('buttons.default.color.disabled'), get('buttons.default.bg.disabled'), get('buttons.default.border.disabled'), systemStyles, sx);
Button.defaultProps = {
  theme: theme
};
Button.propTypes = _objectSpread({}, ButtonBase.propTypes, {}, sx.propTypes);
export default Button;