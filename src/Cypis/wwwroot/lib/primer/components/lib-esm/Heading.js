import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled from 'styled-components';
import sx from './sx';
import PropTypes from 'prop-types';
import { TYPOGRAPHY, COMMON, get } from './constants';
import theme from './theme';
var Heading = styled.h2.withConfig({
  displayName: "Heading",
  componentId: "sc-1m35ws5-0"
})(["font-weight:", ";font-size:", ";margin:0;", " ", ";", ";"], get('fontWeights.bold'), get('fontSizes.5'), TYPOGRAPHY, COMMON, sx);
Heading.defaultProps = {
  theme: theme
};
Heading.propTypes = _objectSpread({}, COMMON.propTypes, {}, sx.propTypes, {
  theme: PropTypes.object
}, TYPOGRAPHY.propTypes);
export default Heading;