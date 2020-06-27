import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled from 'styled-components';
import sx from './sx';
import PropTypes from 'prop-types';
import Box from './Box';
import theme from './theme';
import { BORDER } from './constants';
var BorderBox = styled(Box).withConfig({
  displayName: "BorderBox",
  componentId: "sc-1y9cbfx-0"
})(["", ";", ";"], BORDER, sx);
BorderBox.defaultProps = {
  theme: theme,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'gray.2',
  borderRadius: 2
};
BorderBox.propTypes = _objectSpread({}, Box.propTypes, {}, BORDER.propTypes, {}, sx.propTypes, {
  theme: PropTypes.object
});
export default BorderBox;