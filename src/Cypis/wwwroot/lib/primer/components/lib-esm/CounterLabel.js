import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COMMON, get } from './constants';
import theme from './theme';
import sx from './sx';

var colorStyles = function colorStyles(_ref) {
  var scheme = _ref.scheme,
      props = _objectWithoutProperties(_ref, ["scheme"]);

  return {
    color: scheme === 'gray-light' ? get('colors.gray.9')(props) : scheme === 'gray' ? get('colors.white')(props) : get('colors.gray.6')(props)
  };
};

var bgStyles = function bgStyles(_ref2) {
  var scheme = _ref2.scheme,
      props = _objectWithoutProperties(_ref2, ["scheme"]);

  return {
    backgroundColor: scheme === 'gray-light' ? get('colors.blackfade15')(props) : scheme === 'gray' ? get('colors.gray.5')(props) : get('colors.counter.bg')(props)
  };
};

var CounterLabel = styled.span.withConfig({
  displayName: "CounterLabel",
  componentId: "dvbkn1-0"
})(["display:inline-block;padding:2px 5px;font-size:", ";font-weight:", ";line-height:", ";border-radius:20px;", ";", ";", ";&:empty{visibility:hidden;}", ";"], get('fontSizes.0'), get('fontWeights.bold'), get('lineHeights.condensedUltra'), colorStyles, bgStyles, COMMON, sx);
CounterLabel.defaultProps = {
  theme: theme
};
CounterLabel.propTypes = _objectSpread({
  children: PropTypes.node,
  scheme: PropTypes.oneOf(['gray', 'gray-light']),
  theme: PropTypes.object
}, COMMON.propTypes, {}, sx.propTypes);
export default CounterLabel;