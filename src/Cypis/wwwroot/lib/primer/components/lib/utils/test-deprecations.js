"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _semver = _interopRequireDefault(require("semver"));

var _deprecate = require("../utils/deprecate");

var ourVersion = require('../../package.json').version;

beforeEach(function () {
  _deprecate.Deprecations.clearDeprecations();
});
afterEach(function () {
  var deprecations = _deprecate.Deprecations.getDeprecations();

  var _iterator = (0, _createForOfIteratorHelper2["default"])(deprecations),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var dep = _step.value;

      if (_semver["default"].gte(ourVersion, dep.version)) {
        throw new Error("Found a deprecation that should be removed in ".concat(dep.version));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});