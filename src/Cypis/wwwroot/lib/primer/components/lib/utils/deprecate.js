"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Deprecations = exports.useDeprecation = exports.deprecate = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _react = require("react");

/* eslint-disable no-console */
var noop = function noop() {}; // eslint-disable-next-line import/no-mutable-exports


var deprecate = null;
exports.deprecate = deprecate;

if (process.env.NODE_ENV !== 'production') {
  exports.deprecate = deprecate = function deprecate(_ref) {
    var name = _ref.name,
        message = _ref.message,
        version = _ref.version;
    Deprecations.deprecate({
      name: name,
      message: message,
      version: version
    });
  };
} else {
  exports.deprecate = deprecate = noop;
}

// eslint-disable-next-line import/no-mutable-exports
var useDeprecation = null;
exports.useDeprecation = useDeprecation;

if (process.env.NODE_ENV !== 'production') {
  exports.useDeprecation = useDeprecation = function useDeprecation(_ref2) {
    var name = _ref2.name,
        message = _ref2.message,
        version = _ref2.version;
    var ref = (0, _react.useRef)(false);
    var logDeprecation = (0, _react.useCallback)(function () {
      if (!ref.current) {
        ref.current = true;
        deprecate({
          name: name,
          message: message,
          version: version
        });
      }
    }, [name, message, version]);
    return logDeprecation;
  };
} else {
  exports.useDeprecation = useDeprecation = function useDeprecation() {
    return noop;
  };
}

var Deprecations = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Deprecations, null, [{
    key: "get",
    value: function get() {
      if (!Deprecations.instance) {
        Deprecations.instance = new Deprecations();
      }

      return Deprecations.instance;
    }
  }]);

  function Deprecations() {
    (0, _classCallCheck2["default"])(this, Deprecations);
    this.deprecations = [];
  }

  (0, _createClass2["default"])(Deprecations, null, [{
    key: "deprecate",
    value: function deprecate(_ref3) {
      var name = _ref3.name,
          message = _ref3.message,
          version = _ref3.version;
      var msg = "WARNING! ".concat(name, " is deprecated and will be removed in version ").concat(version, ". ").concat(message);
      console.warn(msg);
      this.get().deprecations.push({
        name: name,
        message: message,
        version: version
      });
    }
  }, {
    key: "getDeprecations",
    value: function getDeprecations() {
      return this.get().deprecations;
    }
  }, {
    key: "clearDeprecations",
    value: function clearDeprecations() {
      this.get().deprecations.length = 0;
    }
  }]);
  return Deprecations;
}();

exports.Deprecations = Deprecations;