import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled, { css } from 'styled-components';
import { COMMON, get } from '../constants';
import theme from '../theme';
import sx from '../sx';
var footerStyles = css(["margin-top:-1px;padding:", " ", ";font-size:", ";color:", ";text-align:center;border-top:", " solid ", ";@media (min-width:", "){padding:", " ", ";}"], get('space.2'), get('space.3'), get('fontSizes.0'), get('colors.text.grayLight'), get('borderWidths.1'), get('colors.border.gray'), get('breakpoints.0'), get('space.1'), get('space.2'));
var SelectMenuFooter = styled.footer.withConfig({
  displayName: "SelectMenuFooter",
  componentId: "sc-1uzxr7t-0"
})(["", " ", " ", ";"], footerStyles, COMMON, sx);
SelectMenuFooter.defaultProps = {
  theme: theme
};
SelectMenuFooter.propTypes = _objectSpread({}, COMMON.propTypes, {}, sx.propTypes);
SelectMenuFooter.displayName = 'SelectMenu.Footer';
export default SelectMenuFooter;