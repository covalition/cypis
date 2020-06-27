import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COMMON, get } from './constants';
import theme from './theme';
import sx from './sx';

function ItemBase(_ref) {
  var children = _ref.children,
      count = _ref.count,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ["children", "count", "theme"]);

  return /*#__PURE__*/React.createElement("a", rest, count && /*#__PURE__*/React.createElement("span", {
    title: "results",
    className: "count"
  }, count), children);
}

ItemBase.displayName = "ItemBase";
var Item = styled(ItemBase).withConfig({
  displayName: "FilterList__Item",
  componentId: "sc-1widapo-0"
})(["position:relative;display:block;padding:", ";margin:", ";overflow:hidden;font-size:", ";color:", ";background-color:", "!important;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;border-radius:", ";&:hover{text-decoration:none;background-color:", ";}&:active{color:", ";background-color:", ";}.count{float:right;font-weight:", ";}", ";", ";"], function (props) {
  return props.small ? "".concat(get('space.1')(props), " 10px") : "".concat(get('space.2')(props), " 11px");
}, function (props) {
  return props.small ? '0 0 2px' : '0 0 5px 0';
}, get('fontSizes.1'), function (props) {
  return props.selected ? get('colors.white') : get('colors.gray.6');
}, function (props) {
  return props.selected ? get('colors.blue.5') : '';
}, get('radii.1'), get('colors.filterList.hoverBg'), get('colors.white'), get('colors.blue.5'), get('fontWeights.bold'), COMMON, sx);

var FilterListBase = function FilterListBase(_ref2) {
  var children = _ref2.children,
      theme = _ref2.theme,
      rest = _objectWithoutProperties(_ref2, ["children", "theme"]);

  var items = React.Children.map(children, function (child) {
    return /*#__PURE__*/React.createElement("li", null, child);
  });
  return /*#__PURE__*/React.createElement("ul", rest, items);
};

FilterListBase.displayName = "FilterListBase";
var FilterList = styled(FilterListBase).withConfig({
  displayName: "FilterList",
  componentId: "sc-1widapo-1"
})(["list-style-type:none;", ";", ";"], COMMON, sx);
FilterList.defaultProps = {
  theme: theme,
  m: 0,
  p: 0
};
FilterList.propTypes = _objectSpread({
  children: PropTypes.node,
  small: PropTypes.bool
}, COMMON.propTypes, {}, sx.propTypes);
FilterList.Item = Item;
FilterList.Item.defaultProps = {
  theme: theme
};
FilterList.Item.propTypes = _objectSpread({
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  children: PropTypes.node,
  className: PropTypes.string,
  count: PropTypes.string,
  selected: PropTypes.bool,
  theme: PropTypes.object
}, COMMON.propTypes, {}, sx.propTypes);
FilterList.Item.displayName = 'FilterList.Item';
export default FilterList;