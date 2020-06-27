import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sx from '../sx';
import { get, COMMON } from '../constants';
import theme from '../theme';
import Box from '../Box';
import { buildPaginationModel, buildComponentData } from './model';
var Page = styled.a.withConfig({
  displayName: "Pagination__Page",
  componentId: "sc-58gpf2-0"
})(["display:inline-block;min-width:32px;padding:5px 10px;font-style:normal;line-height:20px;color:", ";text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;user-select:none;text-decoration:none;margin-right:", ";&:last-child{margin-right:0;}border:", " solid transparent;border-radius:", ";transition:border-color 0.2s cubic-bezier(0.3,0,0.5,1);&:hover,&:focus{text-decoration:none;border-color:", ";outline:0;transition-duration:0.1s;}&:active{border-color:", ";}&[rel='prev'],&[rel='next']{color:", ";}&[aria-current],&[aria-current]:hover{color:", ";background-color:", ";border-color:", ";}&[aria-disabled],&[aria-disabled]:hover{color:", ";cursor:default;border-color:", ";}@supports (clip-path:polygon(50% 0,100% 50%,50% 100%)){&[rel='prev']::before,&[rel='next']::after{display:inline-block;width:16px;height:16px;vertical-align:text-bottom;content:'';background-color:currentColor;}&[rel='prev']::before{margin-right:", ";clip-path:polygon( 9.8px 12.8px,8.7px 12.8px,4.5px 8.5px,4.5px 7.5px,8.7px 3.2px,9.8px 4.3px,6.1px 8px,9.8px 11.7px,9.8px 12.8px );}&[rel='next']::after{margin-left:", ";clip-path:polygon( 6.2px 3.2px,7.3px 3.2px,11.5px 7.5px,11.5px 8.5px,7.3px 12.8px,6.2px 11.7px,9.9px 8px,6.2px 4.3px,6.2px 3.2px );}}", ";"], get('pagination.colors.normal.fg'), get('pagination.spaceBetween'), get('borderWidths.1'), get('pagination.borderRadius'), get('pagination.colors.hover.border'), get('pagination.colors.active.border'), get('pagination.colors.nextPrevious.fg'), get('pagination.colors.selected.fg'), get('pagination.colors.selected.bg'), get('pagination.colors.selected.border'), get('pagination.colors.disabled.fg'), get('pagination.colors.disabled.border'), get('pagination.spaceBetween'), get('pagination.spaceBetween'), COMMON);

function usePaginationPages(_ref) {
  var theme = _ref.theme,
      pageCount = _ref.pageCount,
      currentPage = _ref.currentPage,
      onPageChange = _ref.onPageChange,
      hrefBuilder = _ref.hrefBuilder,
      marginPageCount = _ref.marginPageCount,
      showPages = _ref.showPages,
      surroundingPageCount = _ref.surroundingPageCount;
  var pageChange = React.useCallback(function (n) {
    return function (e) {
      return onPageChange(e, n);
    };
  }, [onPageChange]);
  var model = React.useMemo(function () {
    return buildPaginationModel(pageCount, currentPage, showPages, marginPageCount, surroundingPageCount);
  }, [pageCount, currentPage, showPages, marginPageCount, surroundingPageCount]);
  var children = React.useMemo(function () {
    return model.map(function (page) {
      var _buildComponentData = buildComponentData(page, hrefBuilder, pageChange(page.num)),
          props = _buildComponentData.props,
          key = _buildComponentData.key,
          content = _buildComponentData.content;

      return /*#__PURE__*/React.createElement(Page, _extends({}, props, {
        key: key,
        theme: theme
      }), content);
    });
  }, [model, hrefBuilder, pageChange, theme]);
  return children;
}

var PaginationContainer = styled.nav.withConfig({
  displayName: "Pagination__PaginationContainer",
  componentId: "sc-58gpf2-1"
})(["margin-top:20px;margin-bottom:15px;text-align:center;", ";"], sx);

function Pagination(_ref2) {
  var theme = _ref2.theme,
      pageCount = _ref2.pageCount,
      currentPage = _ref2.currentPage,
      onPageChange = _ref2.onPageChange,
      hrefBuilder = _ref2.hrefBuilder,
      marginPageCount = _ref2.marginPageCount,
      showPages = _ref2.showPages,
      surroundingPageCount = _ref2.surroundingPageCount,
      rest = _objectWithoutProperties(_ref2, ["theme", "pageCount", "currentPage", "onPageChange", "hrefBuilder", "marginPageCount", "showPages", "surroundingPageCount"]);

  var pageElements = usePaginationPages({
    theme: theme,
    pageCount: pageCount,
    currentPage: currentPage,
    onPageChange: onPageChange,
    hrefBuilder: hrefBuilder,
    marginPageCount: marginPageCount,
    showPages: showPages,
    surroundingPageCount: surroundingPageCount
  });
  return /*#__PURE__*/React.createElement(PaginationContainer, _extends({
    "aria-label": "Pagination"
  }, rest, {
    theme: theme
  }), /*#__PURE__*/React.createElement(Box, {
    display: "inline-block",
    theme: theme
  }, pageElements));
}

Pagination.displayName = "Pagination";

function defaultHrefBuilder(pageNum) {
  return "#".concat(pageNum);
}

function noop() {}

Pagination.propTypes = _objectSpread({
  currentPage: PropTypes.number.isRequired,
  hrefBuilder: PropTypes.func,
  marginPageCount: PropTypes.number,
  onPageChange: PropTypes.func,
  pageCount: PropTypes.number.isRequired,
  showPages: PropTypes.bool,
  surroundingPageCount: PropTypes.number
}, COMMON.propTypes, {}, sx.propTypes);
Pagination.defaultProps = {
  hrefBuilder: defaultHrefBuilder,
  marginPageCount: 1,
  onPageChange: noop,
  showPages: true,
  surroundingPageCount: 2,
  theme: theme
};
export default Pagination;