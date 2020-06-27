import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { layout } from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';
import theme from './theme';
import { COMMON, get } from './constants';
import sx from './sx';
var Bar = styled.span.withConfig({
  displayName: "ProgressBar__Bar",
  componentId: "jrdkmi-0"
})(["width:", ";", ""], function (props) {
  return props.progress ? "".concat(props.progress, "%") : 0;
}, COMMON);
var sizeMap = {
  small: '5px',
  large: '10px',
  "default": '8px'
};
var ProgressContainer = styled.span.withConfig({
  displayName: "ProgressBar__ProgressContainer",
  componentId: "jrdkmi-1"
})(["display:", ";overflow:hidden;background-color:", ";border-radius:", ";height:", ";", " ", " ", ";"], function (props) {
  return props.inline ? 'inline-flex' : 'flex';
}, get('colors.gray.2'), get('radii.1'), function (props) {
  return sizeMap[props.barSize];
}, COMMON, layout.width, sx);

var ProgressBar = function ProgressBar(_ref) {
  var progress = _ref.progress,
      bg = _ref.bg,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ["progress", "bg", "theme"]);

  return /*#__PURE__*/React.createElement(ProgressContainer, _extends({
    theme: theme
  }, rest), /*#__PURE__*/React.createElement(Bar, {
    progress: progress,
    bg: bg,
    theme: theme
  }));
};

ProgressBar.displayName = "ProgressBar";
ProgressBar.defaultProps = {
  bg: 'green.5',
  barSize: 'default',
  theme: theme
};
ProgressBar.propTypes = _objectSpread({}, COMMON.propTypes, {
  barSize: PropTypes.oneOf(['small', 'default', 'large']),
  inline: PropTypes.bool,
  progress: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}, sx.propTypes, {
  theme: PropTypes.object,
  width: systemPropTypes.layout.width
});
export default ProgressBar;