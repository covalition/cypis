import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled, { css } from 'styled-components';
import theme from '../theme';
import { COMMON, get } from '../constants';
import sx from '../sx';
var dividerStyles = css(["padding:", " ", ";margin:0;font-size:", ";font-weight:", ";color:", ";background-color:", ";border-bottom:", " solid ", ";"], get('space.1'), get('space.3'), get('fontSizes.0'), get('fontWeights.bold'), get('colors.text.grayLight'), get('colors.bg.gray'), get('borderWidths.1'), get('colors.border.grayLight'));
var SelectMenuDivider = styled.div.withConfig({
  displayName: "SelectMenuDivider",
  componentId: "hf146n-0"
})(["", " ", " ", ";"], dividerStyles, COMMON, sx);
SelectMenuDivider.defaultProps = {
  theme: theme
};
SelectMenuDivider.propTypes = _objectSpread({}, COMMON.propTypes, {}, sx.propTypes);
SelectMenuDivider.displayName = 'SelectMenu.Divider';
export default SelectMenuDivider;