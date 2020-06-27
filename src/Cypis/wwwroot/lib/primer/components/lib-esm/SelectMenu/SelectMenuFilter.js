import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React, { useRef, useContext, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COMMON, get } from '../constants';
import theme from '../theme';
import TextInput from '../TextInput';
import { MenuContext } from './SelectMenuContext';
import sx from '../sx';
var StyledForm = styled.form.withConfig({
  displayName: "SelectMenuFilter__StyledForm",
  componentId: "k2jey9-0"
})(["padding:", ";margin:0;border-top:", " solid ", ";background-color:", ";", ";@media (min-width:", "){padding:", ";}", ";"], get('space.3'), get('borderWidths.1'), get('colors.border.gray'), get('colors.white'), COMMON, get('breakpoints.0'), get('space.2'), sx);

function SelectMenuFilter(_ref) {
  var theme = _ref.theme,
      value = _ref.value,
      sx = _ref.sx,
      rest = _objectWithoutProperties(_ref, ["theme", "value", "sx"]);

  var inputRef = useRef(null);

  var _useContext = useContext(MenuContext),
      open = _useContext.open; // puts focus on the filter input when the menu is opened


  useEffect(function () {
    if (open) {
      inputRef.current.focus();
    }
  }, [open]);
  return /*#__PURE__*/React.createElement(StyledForm, {
    theme: theme,
    sx: sx
  }, /*#__PURE__*/React.createElement(TextInput, _extends({
    theme: theme,
    ref: inputRef,
    width: "100%",
    block: true,
    value: value
  }, rest)));
}

SelectMenuFilter.displayName = "SelectMenuFilter";
SelectMenuFilter.defaultProps = {
  theme: theme
};
SelectMenuFilter.propTypes = _objectSpread({}, COMMON.propTypes, {}, sx.propTypes, {
  value: PropTypes.string
});
SelectMenuFilter.displayName = 'SelectMenu.Filter';
export default SelectMenuFilter;