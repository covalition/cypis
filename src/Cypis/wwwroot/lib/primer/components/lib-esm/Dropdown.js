import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import Details from './Details';
import { COMMON, get } from './constants';
import getDirectionStyles from './DropdownStyles';
import theme from './theme';
import sx from './sx';
var StyledDetails = styled(Details).withConfig({
  displayName: "Dropdown__StyledDetails",
  componentId: "sc-3wysgd-0"
})(["position:relative;display:inline-block;"]);

var Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["children", "className"]);

  return /*#__PURE__*/React.createElement(StyledDetails, _extends({
    overlay: true,
    className: className
  }, rest), children);
};

Dropdown.displayName = "Dropdown";

Dropdown.Button = function (_ref2) {
  var children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["children"]);

  return /*#__PURE__*/React.createElement(Button, _extends({
    as: "summary",
    "aria-haspopup": "true"
  }, rest), children, /*#__PURE__*/React.createElement(Dropdown.Caret, null));
};

Dropdown.Caret = styled.div.withConfig({
  displayName: "Dropdown__Caret",
  componentId: "sc-3wysgd-1"
})(["border:4px solid transparent;margin-left:12px;border-top-color:currentcolor;border-bottom-width:0;content:'';display:inline-block;height:0;vertical-align:middle;width:0;", ";", ";"], COMMON, sx);
Dropdown.Menu = styled.ul.withConfig({
  displayName: "Dropdown__Menu",
  componentId: "sc-3wysgd-2"
})(["background-clip:padding-box;background-color:", ";border:1px solid rgba(27,31,35,0.15);border-radius:", ";box-shadow:0 3px 12px rgba(27,31,35,0.15);left:0;list-style:none;margin-top:2px;padding:5px 0 5px 0 !important;position:absolute;top:100%;width:160px;z-index:100;&::before{position:absolute;display:inline-block;content:'';}&::after{position:absolute;display:inline-block;content:'';}&::before{border:8px solid transparent;border-bottom-color:", ";}&::after{border:7px solid transparent;border-bottom-color:", ";}> ul{list-style:none;}", ";", ";", ";"], get('colors.white'), get('radii.2'), get('colors.blackfade15'), get('colors.white'), function (props) {
  return props.direction ? getDirectionStyles(props.theme, props.direction) : '';
}, COMMON, sx);
Dropdown.Item = styled.li.withConfig({
  displayName: "Dropdown__Item",
  componentId: "sc-3wysgd-3"
})(["display:block;padding:", " 10px ", " 15px;overflow:hidden;color:", ";text-overflow:ellipsis;white-space:nowrap;a{color:", ";text-decoration:none;display:block;padding:", " 10px ", " 15px;overflow:hidden;color:", ";text-overflow:ellipsis;white-space:nowrap;}&:focus,a:focus{color:", ";text-decoration:none;background-color:", ";}&:hover,&:hover a{color:", ";text-decoration:none;background-color:", ";outline:none;}", ";", ";"], get('space.1'), get('space.1'), get('colors.gray.9'), get('colors.gray.9'), get('space.1'), get('space.1'), get('colors.gray.9'), get('colors.white'), get('colors.blue.5'), get('colors.white'), get('colors.blue.5'), COMMON, sx);
Dropdown.Menu.propTypes = _objectSpread({
  direction: PropTypes.oneOf(['ne', 'e', 'se', 's', 'sw', 'w'])
}, COMMON.propTypes, {}, sx.propTypes);
Dropdown.Menu.defaultProps = {
  direction: 'sw',
  theme: theme
};
Dropdown.Menu.displayName = 'Dropdown.Menu';
Dropdown.Item.defaultProps = {
  theme: theme
};
Dropdown.Item.propTypes = _objectSpread({}, COMMON.propTypes, {}, sx.propTypes);
Dropdown.Item.displayName = 'Dropdown.Item';
Dropdown.Button.defaultProps = _objectSpread({
  theme: theme
}, Button.defaultProps);
Dropdown.Button.propTypes = _objectSpread({}, Button.propTypes);
Dropdown.Button.displayName = 'Dropdown.Button';
Dropdown.Caret.defaultProps = {
  theme: theme
};
Dropdown.Caret.propTypes = _objectSpread({}, COMMON.propTypes, {}, sx.propTypes);
Dropdown.Caret.displayName = 'Dropdown.Caret';
Dropdown.defaultProps = _objectSpread({
  theme: theme
}, Details.defaultProps);
Dropdown.propTypes = _objectSpread({}, Details.propTypes, {}, COMMON.propTypes);
export default Dropdown;