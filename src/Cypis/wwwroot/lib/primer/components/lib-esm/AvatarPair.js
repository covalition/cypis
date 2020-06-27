import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { get } from './constants';
import Avatar from './Avatar';
import theme from './theme';
var getBackgroundColor = get('colors.white');
var Wrapper = styled('div').withConfig({
  displayName: "AvatarPair__Wrapper",
  componentId: "sc-1v5x8y5-0"
})(["display:inline-flex;position:relative;"]);

var childStyles = function childStyles(props) {
  return {
    display: 'inline-block',
    overflow: 'hidden',
    // Ensure page layout in Firefox should images fail to load
    lineHeight: "".concat(get('lineHeights.condensedUltra')),
    verticalAlign: 'middle',
    borderRadius: '2px',
    position: 'absolute',
    right: '-15%',
    bottom: '-9%',
    boxShadow: '-2px -2px 0 rgba(255,255,255,0.8)',
    backgroundColor: "".concat(getBackgroundColor(props))
  };
};

var ChildAvatar = styled(Avatar).withConfig({
  displayName: "AvatarPair__ChildAvatar",
  componentId: "sc-1v5x8y5-1"
})(childStyles);

var AvatarPair = function AvatarPair(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  var avatars = React.Children.map(children, function (child, i) {
    return i === 0 ? React.cloneElement(child, {
      size: 40
    }) : /*#__PURE__*/React.createElement(ChildAvatar, _extends({}, child.props, {
      size: 20
    }));
  });
  return /*#__PURE__*/React.createElement(Wrapper, rest, avatars);
};

AvatarPair.displayName = "AvatarPair";
// styled() changes this
AvatarPair.displayName = 'AvatarPair';
AvatarPair.defaultProps = {
  theme: theme
};
AvatarPair.propTypes = _objectSpread({
  children: PropTypes.instanceOf(Avatar)
}, Avatar.propTypes, {
  theme: PropTypes.object
});
export default AvatarPair;