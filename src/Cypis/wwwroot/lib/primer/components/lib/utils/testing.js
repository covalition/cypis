"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mount = mount;
exports.render = render;
exports.renderRoot = renderRoot;
exports.renderClasses = renderClasses;
exports.rendersClass = rendersClass;
exports.renderWithTheme = renderWithTheme;
exports.px = px;
exports.renderStyles = renderStyles;
exports.getComputedStyles = getComputedStyles;
exports.getProps = getProps;
exports.getClassName = getClassName;
exports.getClasses = getClasses;
exports.loadCSS = loadCSS;
exports.unloadCSS = unloadCSS;
exports.behavesAsComponent = behavesAsComponent;
exports.checkExports = checkExports;
exports.COMPONENT_DISPLAY_NAME_REGEX = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _react = _interopRequireDefault(require("react"));

var _util = require("util");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = _interopRequireDefault(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _styledComponents = require("styled-components");

var _theme = _interopRequireDefault(require("../theme"));

/* eslint-disable jsdoc/require-param, jsdoc/require-returns, jsdoc/require-description-complete-sentence, jsdoc/match-description */
var readFile = (0, _util.promisify)(require('fs').readFile);
var COMPONENT_DISPLAY_NAME_REGEX = /^[A-Z][A-Za-z]+(\.[A-Z][A-Za-z]+)*$/;
exports.COMPONENT_DISPLAY_NAME_REGEX = COMPONENT_DISPLAY_NAME_REGEX;

_enzyme["default"].configure({
  adapter: new _enzymeAdapterReact["default"]()
});

function mount(component) {
  return _enzyme["default"].mount(component);
}
/**
 * Render the component (a React.createElement() or JSX expression)
 * into its intermediate object representation with 'type',
 * 'props', and 'children' keys
 *
 * The returned object can be matched with expect().toEqual(), e.g.
 *
 * ```js
 * expect(render(<Foo />)).toEqual(render(<div foo='bar' />))
 * ```
 */


function render(component) {
  return _reactTestRenderer["default"].create(component).toJSON();
}
/**
 * Render the component (a React.createElement() or JSX expression)
 * using react-test-renderer and return the root node
 * ```
 */


function renderRoot(component) {
  return _reactTestRenderer["default"].create(component).root;
}
/**
 * Get the HTML class names rendered by the component instance
 * as an array.
 *
 * ```js
 * expect(renderClasses(<div className='a b' />))
 *   .toEqual(['a', 'b'])
 * ```
 */


function renderClasses(component) {
  var _render = render(component),
      className = _render.props.className;

  return className ? className.trim().split(' ') : [];
}
/**
 * Returns true if a node renders with a single class.
 */


function rendersClass(node, klass) {
  return renderClasses(node).includes(klass);
}

function renderWithTheme(node) {
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _theme["default"];
  return render( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, node));
}

function px(value) {
  return typeof value === 'number' ? "".concat(value, "px") : value;
}

function renderStyles(node) {
  var _render2 = render(node),
      className = _render2.props.className;

  return getComputedStyles(className);
}

function getComputedStyles(className) {
  var div = document.createElement('div');
  div.className = className;
  var computed = {};

  var _iterator = (0, _createForOfIteratorHelper2["default"])(document.styleSheets),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var sheet = _step.value;

      var _iterator3 = (0, _createForOfIteratorHelper2["default"])(sheet.cssRules),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var rule = _step3.value;

          if (rule.type === 1) {
            readRule(rule, computed);
          } else if (rule.type === 4) {
            readMedia(rule);
          } else {// console.warn('rule.type =', rule.type)
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return computed;

  function readRule(rule, dest) {
    if (matchesSafe(div, rule.selectorText)) {
      var style = rule.style;

      for (var i = 0; i < style.length; i++) {
        var prop = style[i];
        dest[prop] = style.getPropertyValue(prop);
      }
    } else {// console.warn('no match:', rule.selectorText)
    }
  }

  function readMedia(mediaRule) {
    var key = "@media ".concat(mediaRule.media[0]); // const dest = computed[key] || (computed[key] = {})

    var dest = {};

    var _iterator2 = (0, _createForOfIteratorHelper2["default"])(mediaRule.cssRules),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var rule = _step2.value;
        readRule(rule, dest);
      } // Don't add media rule to computed styles
      // if no styles were actually applied

    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    if (Object.keys(dest).length > 0) {
      computed[key] = dest;
    }
  }

  function matchesSafe(node, selector) {
    if (!selector) {
      return false;
    }

    try {
      return node.matches(selector);
    } catch (error) {
      return false;
    }
  }
}
/**
 * This provides a layer of compatibility between the render() function from
 * react-test-renderer and Enzyme's mount()
 */


function getProps(node) {
  return typeof node.props === 'function' ? node.props() : node.props;
}

function getClassName(node) {
  return getProps(node).className;
}

function getClasses(node) {
  var className = getClassName(node);
  return className ? className.trim().split(/ +/) : [];
}

function loadCSS(path) {
  return readFile(require.resolve(path), 'utf8').then(function (css) {
    var style = document.createElement('style');
    style.setAttribute('data-path', path);
    style.textContent = css;
    document.head.appendChild(style);
    return style;
  });
}

function unloadCSS(path) {
  var style = document.querySelector("style[data-path=\"".concat(path, "\"]"));

  if (style) {
    style.remove();
    return true;
  }
} // If a component requires certain props or other conditions in order
// to render without errors, you can pass a `toRender` function that
// returns an element ready to be rendered.


function behavesAsComponent(Component, systemPropArray) {
  var toRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var options = arguments.length > 3 ? arguments[3] : undefined;

  if ((0, _typeof2["default"])(toRender) === 'object' && !options) {
    options = toRender;
    toRender = null;
  }

  options = options || {};

  var getElement = function getElement() {
    return toRender ? toRender() : /*#__PURE__*/_react["default"].createElement(Component, null);
  };

  it('implements system props', function () {
    var _iterator4 = (0, _createForOfIteratorHelper2["default"])(systemPropArray),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var systemProps = _step4.value;
        expect(Component).toImplementSystemProps(systemProps);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  });

  if (!options.skipSx) {
    it('implements the sx prop', function () {
      expect(Component).toImplementSxProp();
    });
    it('implements sx prop behavior', function () {
      expect(getElement()).toImplementSxBehavior();
    });
  }

  if (!options.skipAs) {
    it('respects the as prop', function () {
      var As = _react["default"].forwardRef(function (_props, ref) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "as-component",
          ref: ref
        });
      });

      var elem = _react["default"].cloneElement(getElement(), {
        as: As
      });

      expect(render(elem)).toEqual(render( /*#__PURE__*/_react["default"].createElement(As, null)));
    });
  }

  it('sets a valid displayName', function () {
    expect(Component.displayName).toMatch(COMPONENT_DISPLAY_NAME_REGEX);
  });
  it('sets the default theme', function () {
    expect(getElement()).toSetDefaultTheme();
  });
  it('renders consistently', function () {
    expect(render(getElement())).toMatchSnapshot();
  });
}

function checkExports(path, exports) {
  it('has declared exports', function () {
    var mod = require("../".concat(path));

    expect(mod).toSetExports(exports);
  });
}