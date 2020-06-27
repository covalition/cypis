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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _sx = _interopRequireDefault(require("../sx"));

var _constants = require("../constants");

var _theme = _interopRequireDefault(require("../theme"));

var _SelectMenuContext = require("./SelectMenuContext");

var _SelectMenuDivider = _interopRequireDefault(require("./SelectMenuDivider"));

var _SelectMenuFilter = _interopRequireDefault(require("./SelectMenuFilter"));

var _SelectMenuFooter = _interopRequireDefault(require("./SelectMenuFooter"));

var _SelectMenuItem = _interopRequireDefault(require("./SelectMenuItem"));

var _SelectMenuList = _interopRequireDefault(require("./SelectMenuList"));

var _SelectMenuModal = _interopRequireDefault(require("./SelectMenuModal"));

var _SelectMenuTabs = _interopRequireDefault(require("./SelectMenuTabs"));

var _SelectMenuHeader = _interopRequireDefault(require("./SelectMenuHeader"));

var _SelectMenuTab = _interopRequireDefault(require("./SelectMenuTab"));

var _SelectMenuTabPanel = _interopRequireDefault(require("./SelectMenuTabPanel"));

var _useKeyboardNav = _interopRequireDefault(require("./hooks/useKeyboardNav"));

var wrapperStyles = "\n  &[open] > summary::before {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 80;\n    display: block;\n    cursor: default;\n    content: ' ';\n    background: transparent;\n  }\n  // Remove marker added by the display: list-item browser default\n  > summary {\n    list-style: none;\n  }\n  // Remove marker added by details polyfill\n  > summary::before {\n    display: none;\n  }\n  // Remove marker added by Chrome\n  > summary::-webkit-details-marker {\n    display: none;\n  }\n";

var StyledSelectMenu = _styledComponents["default"].details.withConfig({
  displayName: "SelectMenu__StyledSelectMenu",
  componentId: "sc-12xd8o8-0"
})(["", " ", " ", ";"], wrapperStyles, _constants.COMMON, _sx["default"]); // 'as' is spread out because we don't want users to be able to change the tag.


var SelectMenu = function SelectMenu(_ref) {
  var children = _ref.children,
      initialTab = _ref.initialTab,
      as = _ref.as,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["children", "initialTab", "as"]);
  var ref = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(initialTab),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selectedTab = _useState2[0],
      setSelectedTab = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var menuProviderValues = {
    selectedTab: selectedTab,
    setSelectedTab: setSelectedTab,
    setOpen: setOpen,
    open: open,
    initialTab: initialTab
  };

  function toggle(event) {
    setOpen(event.target.open);
  }

  (0, _useKeyboardNav["default"])(ref, open, setOpen);
  return /*#__PURE__*/_react["default"].createElement(_SelectMenuContext.MenuContext.Provider, {
    value: menuProviderValues
  }, /*#__PURE__*/_react["default"].createElement(StyledSelectMenu, (0, _extends2["default"])({
    ref: ref
  }, rest, {
    open: open,
    onToggle: toggle
  }), children));
};

SelectMenu.displayName = "SelectMenu";
SelectMenu.MenuContext = _SelectMenuContext.MenuContext;
SelectMenu.List = _SelectMenuList["default"];
SelectMenu.Divider = _SelectMenuDivider["default"];
SelectMenu.Filter = _SelectMenuFilter["default"];
SelectMenu.Footer = _SelectMenuFooter["default"];
SelectMenu.Item = _SelectMenuItem["default"];
SelectMenu.List = _SelectMenuList["default"];
SelectMenu.Modal = _SelectMenuModal["default"];
SelectMenu.Tabs = _SelectMenuTabs["default"];
SelectMenu.Tab = _SelectMenuTab["default"];
SelectMenu.TabPanel = _SelectMenuTabPanel["default"];
SelectMenu.Header = _SelectMenuHeader["default"];
SelectMenu.defaultProps = {
  theme: _theme["default"]
};
SelectMenu.propTypes = (0, _objectSpread2["default"])({
  initialTab: _propTypes["default"].string
}, _constants.COMMON.propTypes, {}, _sx["default"].propTypes);
var _default = SelectMenu;
exports["default"] = _default;