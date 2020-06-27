import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import sx from './sx';
import { get } from './constants';
import { space } from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';
import theme from './theme';

function borderRadius(_ref) {
  var size = _ref.size;
  return {
    borderRadius: size <= 24 ? '2px' : '3px'
  };
}

var Avatar = styled.img.attrs(function (props) {
  return {
    height: props.size,
    width: props.size,
    alt: props.alt
  };
}).withConfig({
  displayName: "Avatar",
  componentId: "cqsihq-0"
})(["display:inline-block;overflow:hidden;line-height:", ";vertical-align:middle;", ";", ";", ";"], get('lineHeights.condensedUltra'), borderRadius, space, sx);
Avatar.defaultProps = {
  theme: theme,
  size: 20,
  alt: ''
};
Avatar.propTypes = _objectSpread({
  alt: PropTypes.string.isRequired,
  size: PropTypes.number,
  src: PropTypes.string
}, systemPropTypes.space, {}, sx.propTypes, {
  theme: PropTypes.object
});
export default Avatar;