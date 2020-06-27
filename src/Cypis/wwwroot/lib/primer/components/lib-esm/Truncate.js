import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled from 'styled-components';
import { maxWidth } from 'styled-system';
import PropTypes from 'prop-types';
import { TYPOGRAPHY, COMMON } from './constants';
import theme from './theme';
import sx from './sx';
var Truncate = styled('div').withConfig({
  displayName: "Truncate",
  componentId: "sc-1b0dcmo-0"
})(["", " ", " display:", ";overflow:hidden;text-overflow:ellipsis;vertical-align:", ";white-space:nowrap;", " ", " ", ";"], TYPOGRAPHY, COMMON, function (props) {
  return props.inline ? 'inline-block' : 'inherit';
}, function (props) {
  return props.inline ? 'top' : 'initial';
}, maxWidth, function (props) {
  return props.expandable ? "&:hover { max-width: 10000px; }" : '';
}, sx);
Truncate.defaultProps = {
  as: 'div',
  expandable: false,
  inline: false,
  maxWidth: 125,
  theme: theme
};
Truncate.propTypes = _objectSpread({}, TYPOGRAPHY.propTypes, {}, COMMON.propTypes, {
  expandable: PropTypes.bool,
  inline: PropTypes.bool
}, sx.propTypes, {
  maxWidth: PropTypes.number,
  theme: PropTypes.object,
  title: PropTypes.string.isRequired
});
export default Truncate;