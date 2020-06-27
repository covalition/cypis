import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import sx from './sx';
import { COMMON, FLEX, LAYOUT } from './constants';
import theme from './theme';
var Box = styled.div.withConfig({
  displayName: "Box",
  componentId: "sc-1b6inku-0"
})(["", " ", " ", " ", ";"], COMMON, FLEX, LAYOUT, sx);
Box.defaultProps = {
  theme: theme
};
Box.propTypes = _objectSpread({}, COMMON.propTypes, {}, FLEX.propTypes, {}, LAYOUT.propTypes, {}, sx.propTypes, {
  theme: PropTypes.object
});
export default Box;