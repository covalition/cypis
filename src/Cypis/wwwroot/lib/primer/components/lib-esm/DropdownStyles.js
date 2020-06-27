import { get } from './constants';

var getDirectionStyles = function getDirectionStyles(theme, direction) {
  var map = {
    w: "\n      top: 0;\n      right: 100%;\n      left: auto;\n      width: auto;\n      margin-top: 0;\n      margin-right: 10px;\n\n      &::before {\n        top: 10px;\n        right: -16px;\n        left: auto;\n        border-color: transparent;\n        border-left-color: ".concat(get('colors.blackfade15')(theme), ";\n      }\n\n      &::after {\n        top: 11px;\n        right: -14px;\n        left: auto;\n        border-color: transparent;\n        border-left-color: ").concat(get('colors.white')(theme), ";\n      }\n    "),
    e: "\n      top: 0;\n      left: 100%;\n      width: auto;\n      margin-top: 0;\n      margin-left: 10px;\n\n      &::before {\n        top: 10px;\n        left: -16px;\n        border-color: transparent;\n        border-right-color: ".concat(get('colors.blackfade15')(theme), ";\n      }\n\n      &::after {\n        top: 11px;\n        left: -14px;\n        border-color: transparent;\n        border-right-color: ").concat(get('colors.white')(theme), ";\n      }\n    "),
    ne: "\n      top: auto;\n      bottom: 100%;\n      left: 0;\n      margin-bottom: 3px;\n\n      &::before,\n      &::after {\n        top: auto;\n        right: auto;\n      }\n\n      &::before {\n        bottom: -8px;\n        left: 9px;\n        border-top: 8px solid ".concat(get('colors.blackfade15')(theme), ";\n        border-bottom: 0;\n        border-left: 8px solid transparent;\n      }\n\n      &::after {\n        bottom: -7px;\n        left: 10px;\n        border-top: 7px solid ").concat(get('colors.white')(theme), ";\n        border-right: 7px solid transparent;\n        border-bottom: 0;\n        border-left: 7px solid transparent;\n      }\n    "),
    s: "\n      right: 50%;\n      left: auto;\n      transform: translateX(50%);\n\n      &::before {\n        top: -16px;\n        right: 50%;\n        transform: translateX(50%);\n      }\n\n      &::after {\n        top: -14px;\n        right: 50%;\n        transform: translateX(50%);\n      }\n    ",
    sw: "\n      right: 0;\n      left: auto;\n\n      &::before {\n        top: -16px;\n        right: 9px;\n        left: auto;\n      }\n\n      &::after {\n        top: -14px;\n        right: 10px;\n        left: auto;\n      }\n    ",
    se: "\n      &::before {\n        top: -16px;\n        left: 9px;\n      }\n\n      &::after {\n        top: -14px;\n        left: 10px;\n      }\n    "
  };
  return map[direction];
};

export default getDirectionStyles;