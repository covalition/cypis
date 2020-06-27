import _createForOfIteratorHelper from "@babel/runtime/helpers/createForOfIteratorHelper";
import semver from 'semver';
import { Deprecations } from '../utils/deprecate';

var ourVersion = require('../../package.json').version;

beforeEach(function () {
  Deprecations.clearDeprecations();
});
afterEach(function () {
  var deprecations = Deprecations.getDeprecations();

  var _iterator = _createForOfIteratorHelper(deprecations),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var dep = _step.value;

      if (semver.gte(ourVersion, dep.version)) {
        throw new Error("Found a deprecation that should be removed in ".concat(dep.version));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});