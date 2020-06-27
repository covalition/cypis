import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COMMON } from './constants';
import theme from './theme';
import sx from './sx'; // The <details> element is not yet supported in Edge so we have to use a polyfill.
// We have to check if window is defined before importing the polyfill
// so the code doesn’t run while pages build
// uses require because of primer/components issue #638

if (typeof window !== 'undefined') {
  require('details-element-polyfill');
}

var StyledDetails = styled('details').withConfig({
  displayName: "Details__StyledDetails",
  componentId: "sc-1uozfty-0"
})(["& > summary{list-style:none;}& > summary::-webkit-details-marker{display:none;}", " ", ";"], COMMON, sx);

function getRenderer(children) {
  return typeof children === 'function' ? children : function () {
    return children;
  };
}

function Details(_ref) {
  var children = _ref.children,
      overlay = _ref.overlay,
      _ref$render = _ref.render,
      render = _ref$render === void 0 ? getRenderer(children) : _ref$render,
      userOpen = _ref.open,
      onClickOutside = _ref.onClickOutside,
      onToggle = _ref.onToggle,
      _ref$defaultOpen = _ref.defaultOpen,
      defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
      rest = _objectWithoutProperties(_ref, ["children", "overlay", "render", "open", "onClickOutside", "onToggle", "defaultOpen"]);

  var _useState = useState(defaultOpen),
      _useState2 = _slicedToArray(_useState, 2),
      internalOpen = _useState2[0],
      setInternalOpen = _useState2[1];

  var ref = useRef(null); // only use internal open state if user doesn't provide a value for the open prop

  var open = typeof userOpen !== 'undefined' ? userOpen : internalOpen;
  var onClickOutsideInternal = useCallback(function (event) {
    if (event.target.closest('details') !== ref.current) {
      onClickOutside && onClickOutside(event);

      if (!event.defaultPrevented) {
        setInternalOpen(false);
      }
    }
  }, [ref, onClickOutside, setInternalOpen]); // handles the overlay behavior - closing the menu when clicking outside of it

  useEffect(function () {
    if (open && overlay) {
      document.addEventListener('click', onClickOutsideInternal);
      return function () {
        document.removeEventListener('click', onClickOutsideInternal);
      };
    }
  }, [open, overlay, onClickOutsideInternal]);

  function handleToggle(e) {
    onToggle && onToggle(e);

    if (!e.defaultPrevented) {
      setInternalOpen(e.target.open);
    }
  }

  return /*#__PURE__*/React.createElement(StyledDetails, _extends({}, rest, {
    ref: ref,
    open: open,
    onToggle: handleToggle,
    overlay: overlay
  }), render({
    open: open
  }));
}

Details.displayName = "Details";
Details.defaultProps = {
  theme: theme,
  overlay: false
};
Details.propTypes = _objectSpread({
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  defaultOpen: PropTypes.bool,
  overlay: PropTypes.bool,
  render: PropTypes.func,
  theme: PropTypes.object
}, COMMON.propTypes, {}, sx.propTypes);
export default Details;