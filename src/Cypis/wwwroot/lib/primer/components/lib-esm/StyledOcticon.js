import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import Octicon from '@primer/octicons-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COMMON } from './constants';
import theme from './theme';
import sx from './sx';
var StyledOcticon = styled(Octicon).withConfig({
  displayName: "StyledOcticon",
  componentId: "sc-7ly0uy-0"
})(["", ";", ";"], COMMON, sx);
StyledOcticon.defaultProps = {
  theme: theme
};
StyledOcticon.propTypes = _objectSpread({}, COMMON.propTypes, {}, sx.propTypes, {
  theme: PropTypes.object
});
export default StyledOcticon;