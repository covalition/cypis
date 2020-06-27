"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _serializer = require("jest-styled-components/serializer");

var _theme = _interopRequireDefault(require("../theme"));

var _testing = require("./testing");

expect.addSnapshotSerializer(_serializer.styleSheetSerializer);

var stringify = function stringify(d) {
  return JSON.stringify(d, null, '  ');
};
/**
 * These are props that styled-system aliases for backwards compatibility.
 * For some reason, they don't show up in our toImplementSystemProps() matcher,
 * so we skip over them.
 */


var ALIAS_PROP_TYPES = ['w', 'align', 'justify', 'wrap'];
expect.extend({
  toMatchKeys: function toMatchKeys(obj, values) {
    var _this = this;

    return {
      pass: Object.keys(values).every(function (key) {
        return _this.equals(obj[key], values[key]);
      }),
      message: function message() {
        return "Expected ".concat(stringify(obj), " to have matching keys: ").concat(stringify(values));
      }
    };
  },
  toHaveClass: function toHaveClass(node, klass) {
    var classes = (0, _testing.getClasses)(node);
    var pass = classes.includes(klass);
    return {
      pass: pass,
      message: function message() {
        return "expected ".concat(stringify(classes), " to include: ").concat(stringify(klass));
      }
    };
  },
  toHaveClasses: function toHaveClasses(node, klasses) {
    var only = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var classes = (0, _testing.getClasses)(node);
    var pass = only ? this.equals(classes.sort(), klasses.sort()) : klasses.every(function (klass) {
      return classes.includes(klass);
    });
    return {
      pass: pass,
      message: function message() {
        return "expected ".concat(stringify(classes), " to include: ").concat(stringify(klasses));
      }
    };
  },
  toImplementSystemProps: function toImplementSystemProps(Component, propNames) {
    var propKeys = new Set(Object.keys(Component.propTypes));
    var expectedPropKeys = Object.keys(propNames.propTypes);
    var missing = expectedPropKeys.filter(function (key) {
      return !propKeys.has(key);
    }).filter(function (key) {
      return !ALIAS_PROP_TYPES.includes(key);
    });
    return {
      pass: missing.length === 0,
      message: function message() {
        return "Missing prop".concat(missing.length === 1 ? '' : 's', ": ").concat(stringify(missing));
      }
    };
  },
  toImplementSxProp: function toImplementSxProp(Component) {
    return {
      pass: !!Component.propTypes.sx,
      message: function message() {
        return 'Missing sx propTypes';
      }
    };
  },
  toImplementSxBehavior: function toImplementSxBehavior(element) {
    var mediaKey = '@media (max-width:123px)';
    var sxPropValue = (0, _defineProperty2["default"])({}, mediaKey, {
      color: 'red.5'
    });

    var elem = _react["default"].cloneElement(element, {
      sx: sxPropValue
    });

    var rendered = (0, _testing.render)(elem);

    function checkStylesDeep(rendered) {
      var className = rendered.props ? rendered.props.className : '';
      var styles = (0, _testing.getComputedStyles)(className);

      if (styles[mediaKey] && styles[mediaKey].color) {
        return true;
      } else if (rendered.children) {
        return rendered.children.some(function (child) {
          return checkStylesDeep(child);
        });
      } else {
        return false;
      }
    }

    return {
      pass: checkStylesDeep(rendered),
      message: function message() {
        return 'sx prop values did not change styles of component nor of any sub-components';
      }
    };
  },
  toSetDefaultTheme: function toSetDefaultTheme(Component) {
    var comp;

    if (Component.type) {
      comp = Component;
    } else {
      comp = /*#__PURE__*/_react["default"].createElement(Component, null);
    }

    var wrapper = (0, _testing.mount)(comp);
    var pass = this.equals(wrapper.prop('theme'), _theme["default"]);
    return {
      pass: pass,
      message: function message() {
        return 'default theme is not set';
      }
    };
  },
  toSetExports: function toSetExports(mod, expectedExports) {
    if (!Object.keys(expectedExports).includes('default')) {
      return {
        pass: false,
        message: function message() {
          return "You must specify the module's default export";
        }
      };
    }

    var seen = new Set();

    var _loop = function _loop() {
      var exp = _Object$keys[_i];
      seen.add(exp);

      if (mod[exp] !== expectedExports[exp]) {
        if (!mod[exp] && !expectedExports[exp]) {
          return "continue";
        }

        return {
          v: {
            pass: false,
            message: function message() {
              return "Module exported a different value from key '".concat(exp, "' than expected");
            }
          }
        };
      }
    };

    for (var _i = 0, _Object$keys = Object.keys(expectedExports); _i < _Object$keys.length; _i++) {
      var _ret = _loop();

      switch (_ret) {
        case "continue":
          continue;

        default:
          if ((0, _typeof2["default"])(_ret) === "object") return _ret.v;
      }
    }

    var _loop2 = function _loop2() {
      var exp = _Object$keys2[_i2];

      if (seen.has(exp)) {
        return "continue";
      }

      if (mod[exp] !== expectedExports[exp]) {
        return {
          v: {
            pass: false,
            message: function message() {
              return "Module exported an unexpected value from key '".concat(exp, "'");
            }
          }
        };
      }
    };

    for (var _i2 = 0, _Object$keys2 = Object.keys(mod); _i2 < _Object$keys2.length; _i2++) {
      var _ret2 = _loop2();

      switch (_ret2) {
        case "continue":
          continue;

        default:
          if ((0, _typeof2["default"])(_ret2) === "object") return _ret2.v;
      }
    }

    return {
      pass: true,
      message: function message() {
        return '';
      }
    };
  }
});