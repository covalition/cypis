import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GitMerge, GitPullRequest, IssueClosed, IssueOpened, Question } from '@primer/octicons-react';
import { variant } from 'styled-system';
import theme from './theme';
import { COMMON, get } from './constants';
import StyledOcticon from './StyledOcticon';
import sx from './sx';
import { useDeprecation } from './utils/deprecate';
var octiconMap = {
  issueOpened: IssueOpened,
  pullOpened: GitPullRequest,
  issueClosed: IssueClosed,
  pullClosed: GitPullRequest,
  pullMerged: GitMerge,
  draft: GitPullRequest
};
var colorVariants = variant({
  prop: 'status',
  scale: 'stateLabels.status'
});
var sizeVariants = variant({
  prop: 'variant',
  scale: 'stateLabels.sizes'
});
var StateLabelBase = styled.span.withConfig({
  displayName: "StateLabel__StateLabelBase",
  componentId: "bvwoe0-0"
})(["display:inline-flex;align-items:center;font-weight:600;line-height:16px;color:", ";text-align:center;border-radius:", ";", ";", ";", ";", ";"], get('colors.white'), get('radii.3'), colorVariants, sizeVariants, COMMON, sx);

function StateLabel(_ref) {
  var children = _ref.children,
      small = _ref.small,
      status = _ref.status,
      variant = _ref.variant,
      rest = _objectWithoutProperties(_ref, ["children", "small", "status", "variant"]);

  var deprecate = useDeprecation({
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
  return /*#__PURE__*/React.createElement(StateLabelBase, _extends({}, rest, {
    variant: variant,
    status: status
  }), status && /*#__PURE__*/React.createElement(StyledOcticon, _extends({
    mr: 1
  }, octiconProps, {
    icon: octiconMap[status] || Question
  })), children);
}

StateLabel.displayName = "StateLabel";
StateLabel.defaultProps = {
  theme: theme,
  variant: 'normal'
};
StateLabel.propTypes = _objectSpread({
  small: PropTypes.bool,
  status: PropTypes.oneOf(['issueOpened', 'pullOpened', 'issueClosed', 'pullClosed', 'pullMerged', 'draft']).isRequired,
  theme: PropTypes.object,
  variant: PropTypes.oneOf(['small', 'normal'])
}, COMMON.propTypes, {}, sx.propTypes);
export default StateLabel;