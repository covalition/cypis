import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import Octicon from '@primer/octicons-react';
import Flex from './Flex';
import theme from './theme';
import BorderBox from './BorderBox';

function CircleOcticon(props) {
  var size = props.size,
      as = props.as;

  var icon = props.icon,
      bg = props.bg,
      asProp = props.as,
      rest = _objectWithoutProperties(props, ["icon", "bg", "as"]);

  return /*#__PURE__*/React.createElement(BorderBox, {
    as: as,
    bg: bg,
    overflow: "hidden",
    borderWidth: 0,
    size: size,
    borderRadius: "50%"
  }, /*#__PURE__*/React.createElement(Flex, _extends({}, rest, {
    alignItems: "center",
    justifyContent: "center"
  }), /*#__PURE__*/React.createElement(Octicon, {
    icon: icon,
    size: size
  })));
}

CircleOcticon.displayName = "CircleOcticon";
CircleOcticon.defaultProps = _objectSpread({
  theme: theme
}, Flex.defaultProps, {
  size: 32
});
CircleOcticon.propTypes = _objectSpread({}, Flex.propTypes, {
  icon: Octicon.propTypes.icon,
  size: PropTypes.number,
  theme: PropTypes.object
});
export default CircleOcticon;