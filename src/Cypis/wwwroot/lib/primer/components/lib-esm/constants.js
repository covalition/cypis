import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import * as styledSystem from 'styled-system';
import PropTypes from 'prop-types';
import systemPropTypes from '@styled-system/prop-types';
import themeGet from '@styled-system/theme-get';
import theme from './theme';
var getKey = styledSystem.get,
    compose = styledSystem.compose,
    system = styledSystem.system;
export var get = function get(key) {
  return themeGet(key, getKey(theme, key));
};
var whiteSpace = system({
  whiteSpace: {
    property: 'whiteSpace',
    cssProperty: 'whiteSpace'
  }
});
export var TYPOGRAPHY = compose(styledSystem.typography, whiteSpace);
TYPOGRAPHY.propTypes = _objectSpread({}, systemPropTypes.typography, {
  whiteSpace: PropTypes.oneOf(['normal', 'nowrap', 'pre-wrap', 'pre', 'pre-line'])
});
export var COMMON = compose(styledSystem.space, styledSystem.color, styledSystem.display);
COMMON.propTypes = _objectSpread({}, systemPropTypes.space, {}, systemPropTypes.color);
export var BORDER = compose(styledSystem.border, styledSystem.shadow);
BORDER.propTypes = _objectSpread({}, systemPropTypes.border, {}, systemPropTypes.shadow); // these are 1:1 with styled-system's API now,
// so you could consider dropping the abstraction

export var LAYOUT = styledSystem.layout;
export var POSITION = styledSystem.position;
export var FLEX = styledSystem.flexbox;
export var GRID = styledSystem.grid;
TYPOGRAPHY.propTypes = systemPropTypes.typography;
LAYOUT.propTypes = systemPropTypes.layout;
POSITION.propTypes = systemPropTypes.position;
FLEX.propTypes = systemPropTypes.flexbox;
GRID.propTypes = systemPropTypes.grid;