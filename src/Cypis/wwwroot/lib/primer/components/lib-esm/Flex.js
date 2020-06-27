import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled from 'styled-components';
import theme from './theme';
import Box from './Box';
var Flex = styled(Box).withConfig({
  displayName: "Flex",
  componentId: "jlpa5r-0"
})([""]);
Flex.defaultProps = {
  theme: theme,
  display: 'flex'
};
Flex.propTypes = _objectSpread({}, Box.propTypes);
export default Flex;