import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _styled from "styled-components";
import { COMMON, get } from './constants';
import styled, { css } from 'styled-components';
import Box from './Box';
import Flex from './Flex';
import PropTypes from 'prop-types';
import React from 'react';
import { Relative } from './Position';
import classnames from 'classnames';
import theme from './theme';
import sx from './sx';
var Timeline = styled(Flex).withConfig({
  displayName: "Timeline",
  componentId: "sc-1y01lij-0"
})(["flex-direction:column;", " ", ";"], function (props) {
  return props.clipSidebar && css([".Timeline-Item:first-child{padding-top:0;}.Timeline-Item:last-child{padding-bottom:0;}"]);
}, sx);
Timeline.Item = styled(Flex).attrs(function (props) {
  return {
    className: classnames('Timeline-Item', props.className)
  };
}).withConfig({
  displayName: "Timeline__Item",
  componentId: "sc-1y01lij-1"
})(["position:relative;padding:", " 0;margin-left:", ";&::before{position:absolute;top:0;bottom:0;left:0;display:block;width:2px;content:'';background-color:", ";}", " ", ";", ";"], get('space.3'), get('space.3'), get('colors.gray.2'), function (props) {
  return props.condensed && css(["padding-top:", ";padding-bottom:0;&:last-child{padding-bottom:", ";}.TimelineItem-Badge{height:16px;margin-top:", ";margin-bottom:", ";color:", ";background-color:", ";border:0;}"], get('space.1'), get('space.3'), get('space.2'), get('space.2'), get('colors.gray.4'), get('colors.white'));
}, COMMON, sx);

var _StyledFlex = styled(Flex).withConfig({
  displayName: "Timeline___StyledFlex",
  componentId: "sc-1y01lij-2"
})(["border-radius:50%;border:2px solid ", ";"], function (p) {
  return p._css;
});

Timeline.Badge = function (props) {
  return /*#__PURE__*/React.createElement(Relative, {
    zIndex: 1
  }, /*#__PURE__*/React.createElement(_StyledFlex, _extends({
    className: classnames(props.className, 'TimelineItem-Badge'),
    flexShrink: 0,
    overflow: "hidden",
    color: "gray.7",
    bg: "gray.2",
    width: "32px",
    height: "32px",
    mr: 2,
    ml: "-15px",
    alignItems: "center",
    justifyContent: "center"
  }, props, {
    _css: get('colors.white')
  }), props.children));
};

Timeline.Body = styled(Box).withConfig({
  displayName: "Timeline__Body",
  componentId: "sc-1y01lij-3"
})(["min-width:0;max-width:100%;margin-top:", ";color:", ";flex:auto;font-size:", ";", ";"], get('space.1'), get('colors.gray.7'), get('fontSizes.1'), sx);
Timeline.Break = styled(Relative).withConfig({
  displayName: "Timeline__Break",
  componentId: "sc-1y01lij-4"
})(["z-index:1;height:24px;margin:0;margin-bottom:-", ";margin-left:0;background-color:", ";border:0;border-top:", " solid ", ";", ";"], get('space.3'), get('colors.white'), get('space.1'), get('colors.gray.2'), sx);
Timeline.defaultProps = {
  theme: theme
};
Timeline.propTypes = _objectSpread({
  children: PropTypes.node,
  clipSidebar: PropTypes.bool,
  theme: PropTypes.object
}, Flex.propTypes, {}, sx.propTypes);
Timeline.Item.defaultProps = {
  theme: theme
};
Timeline.Item.propTypes = _objectSpread({
  children: PropTypes.node,
  condensed: PropTypes.bool,
  theme: PropTypes.object
}, Flex.propTypes, {}, sx.propTypes);
Timeline.Item.displayName = 'Timeline.Item';
Timeline.Badge.defaultProps = {
  theme: theme
};
Timeline.Badge.propTypes = _objectSpread({
  children: PropTypes.node,
  theme: PropTypes.object
}, Flex.propTypes, {}, sx.propTypes);
Timeline.Badge.displayName = 'Timeline.Badge';
Timeline.Body.defaultProps = {
  theme: theme
};
Timeline.Body.propTypes = _objectSpread({
  children: PropTypes.node,
  theme: PropTypes.object
}, Box.propTypes, {}, sx.propTypes);
Timeline.Body.displayName = 'Timeline.Body';
Timeline.Break.defaultProps = {
  theme: theme
};
Timeline.Break.propTypes = _objectSpread({
  children: PropTypes.node,
  theme: PropTypes.object
}, Box.propTypes, {}, sx.propTypes);
Timeline.Break.displayName = 'Timeline.Break';
export default Timeline;