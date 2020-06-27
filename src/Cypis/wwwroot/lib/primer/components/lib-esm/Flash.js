import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { COMMON, get } from './constants';
import theme from './theme';
import sx from './sx';
import { useDeprecation } from './utils/deprecate';
var schemeMap = {
  red: 'danger',
  blue: 'default',
  yellow: 'warning',
  green: 'success'
};
var variants = variant({
  scale: 'flash'
});

var getIconColor = function getIconColor(variant, theme) {
  return get("flashIcon.".concat(variant))(theme);
};

var StyledFlash = styled.div.withConfig({
  displayName: "Flash__StyledFlash",
  componentId: "y43qx-0"
})(["position:relative;color:", ";padding:", ";border-style:solid;border-width:", ";border-radius:", ";margin-top:", ";p:last-child{margin-bottom:0;}svg{color:", ";margin-right:", ";}", ";", " ", ";"], get('colors.text.grayDark'), get('space.3'), function (props) {
  return props.full ? '1px 0px' : '1px';
}, function (props) {
  return props.full ? '0' : get('radii.2');
}, function (props) {
  return props.full ? '-1px' : '0';
}, function (props) {
  return getIconColor(props.variant, props.theme);
}, get('space.2'), COMMON, variants, sx);

var Flash = function Flash(_ref) {
  var variant = _ref.variant,
      scheme = _ref.scheme,
      props = _objectWithoutProperties(_ref, ["variant", "scheme"]);

  var deprecate = useDeprecation({
    name: 'Flash "scheme" prop',
    version: '20.0.0',
    message: 'Use the variant prop instead. See https://primer.style/components/Flash for more details.'
  });

  if (scheme) {
    deprecate();
    variant = schemeMap[scheme];
  }

  return /*#__PURE__*/React.createElement(StyledFlash, _extends({
    variant: variant
  }, props));
};

Flash.displayName = "Flash";
Flash.defaultProps = {
  theme: theme,
  variant: 'default'
};
Flash.propTypes = _objectSpread({
  children: PropTypes.node,
  full: PropTypes.bool,
  scheme: PropTypes.oneOf(Object.keys(schemeMap)),
  // deprecate 20.0.0
  variant: PropTypes.oneOf(['default', 'warning', 'success', 'danger'])
}, COMMON.propTypes, {}, sx.propTypes);
export default Flash;