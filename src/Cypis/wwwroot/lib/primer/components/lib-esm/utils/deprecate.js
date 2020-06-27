import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";

/* eslint-disable no-console */
import { useRef, useCallback } from 'react';

var noop = function noop() {}; // eslint-disable-next-line import/no-mutable-exports


var deprecate = null;

if (process.env.NODE_ENV !== 'production') {
  deprecate = function deprecate(_ref) {
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
  deprecate = noop;
}

export { deprecate }; // eslint-disable-next-line import/no-mutable-exports

var useDeprecation = null;

if (process.env.NODE_ENV !== 'production') {
  useDeprecation = function useDeprecation(_ref2) {
    var name = _ref2.name,
        message = _ref2.message,
        version = _ref2.version;
    var ref = useRef(false);
    var logDeprecation = useCallback(function () {
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
  useDeprecation = function useDeprecation() {
    return noop;
  };
}

export { useDeprecation };
export var Deprecations = /*#__PURE__*/function () {
  _createClass(Deprecations, null, [{
    key: "get",
    value: function get() {
      if (!Deprecations.instance) {
        Deprecations.instance = new Deprecations();
      }

      return Deprecations.instance;
    }
  }]);

  function Deprecations() {
    _classCallCheck(this, Deprecations);

    this.deprecations = [];
  }

  _createClass(Deprecations, null, [{
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