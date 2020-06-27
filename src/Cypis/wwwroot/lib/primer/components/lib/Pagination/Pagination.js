"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sx = _interopRequireDefault(require("../sx"));

var _constants = require("../constants");

var _theme = _interopRequireDefault(require("../theme"));

var _Box = _interopRequireDefault(require("../Box"));

var _model = require("./model");

var Page = _styledComponents["default"].a.withConfig({
  displayName: "Pagination__Page",
  componentId: "sc-58gpf2-0"
})(["display:inline-block;min-width:32px;padding:5px 10px;font-style:normal;line-height:20px;color:", ";text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;user-select:none;text-decoration:none;margin-right:", ";&:last-child{margin-right:0;}border:", " solid transparent;border-radius:", ";transition:border-color 0.2s cubic-bezier(0.3,0,0.5,1);&:hover,&:focus{text-decoration:none;border-color:", ";outline:0;transition-duration:0.1s;}&:active{border-color:", ";}&[rel='prev'],&[rel='next']{color:", ";}&[aria-current],&[aria-current]:hover{color:", ";background-color:", ";border-color:", ";}&[aria-disabled],&[aria-disabled]:hover{color:", ";cursor:default;border-color:", ";}@supports (clip-path:polygon(50% 0,100% 50%,50% 100%)){&[rel='prev']::before,&[rel='next']::after{display:inline-block;width:16px;height:16px;vertical-align:text-bottom;content:'';background-color:currentColor;}&[rel='prev']::before{margin-right:", ";clip-path:polygon( 9.8px 12.8px,8.7px 12.8px,4.5px 8.5px,4.5px 7.5px,8.7px 3.2px,9.8px 4.3px,6.1px 8px,9.8px 11.7px,9.8px 12.8px );}&[rel='next']::after{margin-left:", ";clip-path:polygon( 6.2px 3.2px,7.3px 3.2px,11.5px 7.5px,11.5px 8.5px,7.3px 12.8px,6.2px 11.7px,9.9px 8px,6.2px 4.3px,6.2px 3.2px );}}", ";"], (0, _constants.get)('pagination.colors.normal.fg'), (0, _constants.get)('pagination.spaceBetween'), (0, _constants.get)('borderWidths.1'), (0, _constants.get)('pagination.borderRadius'), (0, _constants.get)('pagination.colors.hover.border'), (0, _constants.get)('pagination.colors.active.border'), (0, _constants.get)('pagination.colors.nextPrevious.fg'), (0, _constants.get)('pagination.colors.selected.fg'), (0, _constants.get)('pagination.colors.selected.bg'), (0, _constants.get)('pagination.colors.selected.border'), (0, _constants.get)('pagination.colors.disabled.fg'), (0, _constants.get)('pagination.colors.disabled.border'), (0, _constants.get)('pagination.spaceBetween'), (0, _constants.get)('pagination.spaceBetween'), _constants.COMMON);

function usePaginationPages(_ref) {
  var theme = _ref.theme,
      pageCount = _ref.pageCount,
      currentPage = _ref.currentPage,
      onPageChange = _ref.onPageChange,
      hrefBuilder = _ref.hrefBuilder,
      marginPageCount = _ref.marginPageCount,
      showPages = _ref.showPages,
      surroundingPageCount = _ref.surroundingPageCount;

  var pageChange = _react["default"].useCallback(function (n) {
    return function (e) {
      return onPageChange(e, n);
    };
  }, [onPageChange]);

  var model = _react["default"].useMemo(function () {
    return (0, _model.buildPaginationModel)(pageCount, currentPage, showPages, marginPageCount, surroundingPageCount);
  }, [pageCount, currentPage, showPages, marginPageCount, surroundingPageCount]);

  var children = _react["default"].useMemo(function () {
    return model.map(function (page) {
      var _buildComponentData = (0, _model.buildComponentData)(page, hrefBuilder, pageChange(page.num)),
          props = _buildComponentData.props,
          key = _buildComponentData.key,
          content = _buildComponentData.content;

      return /*#__PURE__*/_react["default"].createElement(Page, (0, _extends2["default"])({}, props, {
        key: key,
        theme: theme
      }), content);
    });
  }, [model, hrefBuilder, pageChange, theme]);

  return children;
}

var PaginationContainer = _styledComponents["default"].nav.withConfig({
  displayName: "Pagination__PaginationContainer",
  componentId: "sc-58gpf2-1"
})(["margin-top:20px;margin-bottom:15px;text-align:center;", ";"], _sx["default"]);

function Pagination(_ref2) {
  var theme = _ref2.theme,
      pageCount = _ref2.pageCount,
      currentPage = _ref2.currentPage,
      onPageChange = _ref2.onPageChange,
      hrefBuilder = _ref2.hrefBuilder,
      marginPageCount = _ref2.marginPageCount,
      showPages = _ref2.showPages,
      surroundingPageCount = _ref2.surroundingPageCount,
      rest = (0, _objectWithoutProperties2["default"])(_ref2, ["theme", "pageCount", "currentPage", "onPageChange", "hrefBuilder", "marginPageCount", "showPages", "surroundingPageCount"]);
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
  return /*#__PURE__*/_react["default"].createElement(PaginationContainer, (0, _extends2["default"])({
    "aria-label": "Pagination"
  }, rest, {
    theme: theme
  }), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "inline-block",
    theme: theme
  }, pageElements));
}

Pagination.displayName = "Pagination";

function defaultHrefBuilder(pageNum) {
  return "#".concat(pageNum);
}

function noop() {}

Pagination.propTypes = (0, _objectSpread2["default"])({
  currentPage: _propTypes["default"].number.isRequired,
  hrefBuilder: _propTypes["default"].func,
  marginPageCount: _propTypes["default"].number,
  onPageChange: _propTypes["default"].func,
  pageCount: _propTypes["default"].number.isRequired,
  showPages: _propTypes["default"].bool,
  surroundingPageCount: _propTypes["default"].number
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
Pagination.defaultProps = {
  hrefBuilder: defaultHrefBuilder,
  marginPageCount: 1,
  onPageChange: noop,
  showPages: true,
  surroundingPageCount: 2,
  theme: _theme["default"]
};
var _default = Pagination;
exports["default"] = _default;