import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled from 'styled-components';
import { GRID } from './constants';
import theme from './theme';
import Box from './Box';
var Grid = styled(Box).withConfig({
  displayName: "Grid",
  componentId: "nhubvi-0"
})(["", ";"], GRID);
Grid.defaultProps = {
  theme: theme,
  display: 'grid'
};
Grid.propTypes = _objectSpread({}, Box.propTypes, {}, GRID.propTypes);
export default Grid;