import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { POSITION } from './constants';
import Box from './Box';
import theme from './theme';
import sx from './sx';
var Position = styled(Box).withConfig({
  displayName: "Position",
  componentId: "gj4o9g-0"
})(["", ";", ";"], POSITION, sx);
Position.defaultProps = {
  theme: theme
};
Position.propTypes = _objectSpread({}, Box.propTypes, {}, POSITION.propTypes, {
  theme: PropTypes.object
}, sx.propTypes);

function withPosition(position) {
  var WithPosition = function WithPosition(props) {
    return /*#__PURE__*/React.createElement(Position, _extends({}, props, {
      position: position.toLowerCase()
    }));
  };

  WithPosition.propTypes = Position.propTypes;
  WithPosition.defaultProps = Position.defaultProps;
  WithPosition.displayName = "Position.".concat(position);
  return WithPosition;
}

export default Position;
export var Absolute = withPosition('Absolute');
export var Fixed = withPosition('Fixed');
export var Relative = withPosition('Relative');
export var Sticky = withPosition('Sticky');
Sticky.defaultProps = {
  theme: theme,
  top: 0,
  zIndex: 1
};