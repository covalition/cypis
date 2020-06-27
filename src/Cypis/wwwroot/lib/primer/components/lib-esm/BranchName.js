import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sx from './sx';
import theme from './theme';
import { COMMON, get } from './constants';
var BranchName = styled.a.withConfig({
  displayName: "BranchName",
  componentId: "sc-1foytcp-0"
})(["display:inline-block;padding:2px 6px;font-size:", ";font-family:", ";color:rgba(27,31,35,0.6);background-color:#eaf5ff;border-radius:3px;", ";", ";"], get('fontSizes.0'), get('fonts.mono'), COMMON, sx);
BranchName.defaultProps = {
  theme: theme
};
BranchName.propTypes = _objectSpread({
  href: PropTypes.string
}, COMMON.propTypes, {}, sx.propTypes, {
  theme: PropTypes.object
});
export default BranchName;