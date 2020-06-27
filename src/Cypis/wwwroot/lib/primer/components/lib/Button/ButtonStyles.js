"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _constants = require("../constants");

var _default = (0, _styledComponents.css)(["position:relative;display:inline-block;padding:6px 16px;font-weight:", ";line-height:20px;white-space:nowrap;vertical-align:middle;cursor:pointer;user-select:none;border-radius:", ";appearance:none;text-decoration:none;text-align:center;&:hover{text-decoration:none;}&:focus{outline:none;}&:disabled{cursor:default;}&:disabled svg{opacity:0.6;}"], (0, _constants.get)('fontWeights.bold'), (0, _constants.get)('radii.2'));

exports["default"] = _default;