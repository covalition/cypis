import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import BorderBox from './BorderBox';
import Caret from './Caret';
import theme from './theme';

function PointerBox(props) {
  // don't destructure these, just grab them
  var bg = props.bg,
      border = props.border,
      borderColor = props.borderColor;

  var caret = props.caret,
      children = props.children,
      boxProps = _objectWithoutProperties(props, ["caret", "children"]);

  var caretProps = {
    bg: bg,
    borderColor: borderColor,
    borderWidth: border,
    location: caret
  };
  return /*#__PURE__*/React.createElement(BorderBox, _extends({
    sx: {
      position: 'relative'
    }
  }, boxProps), children, /*#__PURE__*/React.createElement(Caret, caretProps));
}

PointerBox.displayName = "PointerBox";
PointerBox.defaultProps = {
  theme: theme
};
PointerBox.propTypes = _objectSpread({}, BorderBox.propTypes, {
  caret: Caret.propTypes.location,
  theme: PropTypes.object
});
export default PointerBox;