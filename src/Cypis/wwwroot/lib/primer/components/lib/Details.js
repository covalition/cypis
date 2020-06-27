"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("./constants");

var _theme = _interopRequireDefault(require("./theme"));

var _sx = _interopRequireDefault(require("./sx"));

// The <details> element is not yet supported in Edge so we have to use a polyfill.
// We have to check if window is defined before importing the polyfill
// so the code doesn’t run while pages build
// uses require because of primer/components issue #638
if (typeof window !== 'undefined') {
  require('details-element-polyfill');
}

var StyledDetails = (0, _styledComponents["default"])('details').withConfig({
  displayName: "Details__StyledDetails",
  componentId: "sc-1uozfty-0"
})(["& > summary{list-style:none;}& > summary::-webkit-details-marker{display:none;}", " ", ";"], _constants.COMMON, _sx["default"]);

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
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["children", "overlay", "render", "open", "onClickOutside", "onToggle", "defaultOpen"]);

  var _useState = (0, _react.useState)(defaultOpen),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      internalOpen = _useState2[0],
      setInternalOpen = _useState2[1];

  var ref = (0, _react.useRef)(null); // only use internal open state if user doesn't provide a value for the open prop

  var open = typeof userOpen !== 'undefined' ? userOpen : internalOpen;
  var onClickOutsideInternal = (0, _react.useCallback)(function (event) {
    if (event.target.closest('details') !== ref.current) {
      onClickOutside && onClickOutside(event);

      if (!event.defaultPrevented) {
        setInternalOpen(false);
      }
    }
  }, [ref, onClickOutside, setInternalOpen]); // handles the overlay behavior - closing the menu when clicking outside of it

  (0, _react.useEffect)(function () {
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

  return /*#__PURE__*/_react["default"].createElement(StyledDetails, (0, _extends2["default"])({}, rest, {
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
  theme: _theme["default"],
  overlay: false
};
Details.propTypes = (0, _objectSpread2["default"])({
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]),
  className: _propTypes["default"].string,
  defaultOpen: _propTypes["default"].bool,
  overlay: _propTypes["default"].bool,
  render: _propTypes["default"].func,
  theme: _propTypes["default"].object
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
var _default = Details;
exports["default"] = _default;