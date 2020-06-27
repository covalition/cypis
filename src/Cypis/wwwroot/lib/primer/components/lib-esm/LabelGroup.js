import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import theme from './theme';
import { COMMON, get } from './constants';
import sx from './sx';
var StyledLabelGroup = styled.span.withConfig({
  displayName: "LabelGroup__StyledLabelGroup",
  componentId: "sc-1nnmeba-0"
})(["", " & *{margin-right:", ";}& *:last-child{margin-right:0;}", ";"], COMMON, get('space.1'), sx);

var LabelGroup = function LabelGroup(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(StyledLabelGroup, rest, children);
};

LabelGroup.displayName = "LabelGroup";
LabelGroup.defaultProps = {
  theme: theme
};
LabelGroup.propTypes = _objectSpread({}, COMMON.propTypes, {}, sx.propTypes);
export default LabelGroup;