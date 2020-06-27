"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _octiconsReact = require("@primer/octicons-react");

var _styledSystem = require("styled-system");

var _theme = _interopRequireDefault(require("./theme"));

var _constants = require("./constants");

var _StyledOcticon = _interopRequireDefault(require("./StyledOcticon"));

var _sx = _interopRequireDefault(require("./sx"));

var _deprecate = require("./utils/deprecate");

var octiconMap = {
  issueOpened: _octiconsReact.IssueOpened,
  pullOpened: _octiconsReact.GitPullRequest,
  issueClosed: _octiconsReact.IssueClosed,
  pullClosed: _octiconsReact.GitPullRequest,
  pullMerged: _octiconsReact.GitMerge,
  draft: _octiconsReact.GitPullRequest
};
var colorVariants = (0, _styledSystem.variant)({
  prop: 'status',
  scale: 'stateLabels.status'
});
var sizeVariants = (0, _styledSystem.variant)({
  prop: 'variant',
  scale: 'stateLabels.sizes'
});

var StateLabelBase = _styledComponents["default"].span.withConfig({
  displayName: "StateLabel__StateLabelBase",
  componentId: "bvwoe0-0"
})(["display:inline-flex;align-items:center;font-weight:600;line-height:16px;color:", ";text-align:center;border-radius:", ";", ";", ";", ";", ";"], (0, _constants.get)('colors.white'), (0, _constants.get)('radii.3'), colorVariants, sizeVariants, _constants.COMMON, _sx["default"]);

function StateLabel(_ref) {
  var children = _ref.children,
      small = _ref.small,
      status = _ref.status,
      variant = _ref.variant,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["children", "small", "status", "variant"]);
  var deprecate = (0, _deprecate.useDeprecation)({
    name: "StateLabel 'small' prop",
    message: "Use variant='small' or variant='normal' instead.",
    version: '20.0.0'
  });

  if (small) {
    deprecate();
    variant = 'small';
  }

  var octiconProps = variant === 'small' ? {
    width: '1em'
  } : {};
  return /*#__PURE__*/_react["default"].createElement(StateLabelBase, (0, _extends2["default"])({}, rest, {
    variant: variant,
    status: status
  }), status && /*#__PURE__*/_react["default"].createElement(_StyledOcticon["default"], (0, _extends2["default"])({
    mr: 1
  }, octiconProps, {
    icon: octiconMap[status] || _octiconsReact.Question
  })), children);
}

StateLabel.displayName = "StateLabel";
StateLabel.defaultProps = {
  theme: _theme["default"],
  variant: 'normal'
};
StateLabel.propTypes = (0, _objectSpread2["default"])({
  small: _propTypes["default"].bool,
  status: _propTypes["default"].oneOf(['issueOpened', 'pullOpened', 'issueClosed', 'pullClosed', 'pullMerged', 'draft']).isRequired,
  theme: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['small', 'normal'])
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
var _default = StateLabel;
exports["default"] = _default;