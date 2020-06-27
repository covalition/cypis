import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from './theme';
import { TYPOGRAPHY, COMMON } from './constants';
import sx from './sx';
var Text = styled.span.withConfig({
  displayName: "Text",
  componentId: "sc-1g6etse-0"
})(["", ";", ";", ";"], TYPOGRAPHY, COMMON, sx);
Text.defaultProps = {
  theme: theme
};
Text.propTypes = _objectSpread({}, TYPOGRAPHY.propTypes, {}, COMMON.propTypes, {}, sx.propTypes, {
  theme: PropTypes.object
});
export default Text;