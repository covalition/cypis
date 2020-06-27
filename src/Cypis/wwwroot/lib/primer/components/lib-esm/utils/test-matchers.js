import _typeof from "@babel/runtime/helpers/typeof";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import 'jest-styled-components';
import { styleSheetSerializer } from 'jest-styled-components/serializer';
import theme from '../theme';
import { getClasses, mount, getComputedStyles, render } from './testing';
expect.addSnapshotSerializer(styleSheetSerializer);

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
    var classes = getClasses(node);
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
    var classes = getClasses(node);
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

    var sxPropValue = _defineProperty({}, mediaKey, {
      color: 'red.5'
    });

    var elem = React.cloneElement(element, {
      sx: sxPropValue
    });
    var rendered = render(elem);

    function checkStylesDeep(rendered) {
      var className = rendered.props ? rendered.props.className : '';
      var styles = getComputedStyles(className);

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
      comp = /*#__PURE__*/React.createElement(Component, null);
    }

    var wrapper = mount(comp);
    var pass = this.equals(wrapper.prop('theme'), theme);
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
          if (_typeof(_ret) === "object") return _ret.v;
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
          if (_typeof(_ret2) === "object") return _ret2.v;
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