"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _theme = _interopRequireDefault(require("./theme"));

var oppositeEdge = {
  top: 'Bottom',
  right: 'Left',
  bottom: 'Top',
  left: 'Right'
};
var perpendicularEdge = {
  top: 'Left',
  right: 'Top',
  bottom: 'Left',
  left: 'Top'
};

function getEdgeAlign(location) {
  var _location$split = location.split('-'),
      _location$split2 = (0, _slicedToArray2["default"])(_location$split, 2),
      edge = _location$split2[0],
      align = _location$split2[1];

  return [edge, align];
}

function getPosition(edge, align, spacing) {
  var _ref;

  var opposite = oppositeEdge[edge].toLowerCase();
  var perp = perpendicularEdge[edge].toLowerCase();
  return _ref = {}, (0, _defineProperty2["default"])(_ref, opposite, '100%'), (0, _defineProperty2["default"])(_ref, align || perp, align ? spacing : '50%'), _ref;
}

var getBg = (0, _styledSystem.style)({
  prop: 'bg',
  key: 'colors'
});
var getBorderColor = (0, _styledSystem.style)({
  prop: 'borderColor',
  key: 'colors'
});
var getBorderWidth = (0, _styledSystem.style)({
  prop: 'borderWidth',
  key: 'borderWidths',
  scale: [0, 1]
});

function Caret(props) {
  var _getBg = getBg(props),
      bg = _getBg.bg;

  var _getBorderColor = getBorderColor(props),
      borderColor = _getBorderColor.borderColor;

  var _getBorderWidth = getBorderWidth(props),
      borderWidth = _getBorderWidth.borderWidth;

  var size = props.size,
      location = props.location;

  var _getEdgeAlign = getEdgeAlign(location),
      _getEdgeAlign2 = (0, _slicedToArray2["default"])(_getEdgeAlign, 2),
      edge = _getEdgeAlign2[0],
      align = _getEdgeAlign2[1];

  var perp = perpendicularEdge[edge];
  var style = (0, _objectSpread3["default"])({
    pointerEvents: 'none',
    position: 'absolute'
  }, getPosition(edge, align, size), (0, _defineProperty2["default"])({}, "margin".concat(perp), align ? null : -size)); // note: these arrays represent points in the form [x, y]

  var a = [-size, 0];
  var b = [0, size];
  var c = [size, 0]; // spaces are optional in path `d` attribute, and points are
  // represented in the form `x,y` -- which is what the arrays above
  // become when stringified!

  var triangle = "M".concat(a, "L").concat(b, "L").concat(c, "L").concat(a, "Z");
  var line = "M".concat(a, "L").concat(b, "L").concat(c);
  var transform = {
    top: "translate(".concat([size, size * 2], ") rotate(180)"),
    right: "translate(".concat([0, size], ") rotate(-90)"),
    bottom: "translate(".concat([size, 0], ")"),
    left: "translate(".concat([size * 2, size], ") rotate(90)")
  }[edge];
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: size * 2,
    height: size * 2,
    style: style
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: transform
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: triangle,
    fill: bg
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: line,
    fill: "none",
    stroke: borderColor,
    strokeWidth: borderWidth
  })));
}

Caret.displayName = "Caret";
Caret.locations = ['top', 'top-left', 'top-right', 'right', 'right-top', 'right-bottom', 'bottom', 'bottom-left', 'bottom-right', 'left', 'left-top', 'left-bottom'];
Caret.defaultProps = {
  bg: 'white',
  borderColor: 'gray.2',
  borderWidth: 1,
  location: 'bottom',
  size: 8,
  theme: _theme["default"]
};
Caret.propTypes = {
  /* eslint-disable react/sort-prop-types  */
  // eslint can't determine whether these props are used
  // because they're accessed inside of styled-system.

  /* eslint-disable react/no-unused-prop-types */
  bg: _propTypes["default"].string,
  borderColor: _propTypes["default"].string,
  borderWidth: _propTypes["default"].number,
  size: _propTypes["default"].number,
  location: _propTypes["default"].oneOf(Caret.locations)
  /* eslint-enable */

};
var _default = Caret;
exports["default"] = _default;