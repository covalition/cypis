import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from './theme';
import { COMMON, get } from './constants';
var FilteredSearch = styled.div.withConfig({
  displayName: "FilteredSearch",
  componentId: "sc-7vue7r-0"
})(["", ";display:flex;align-items:stretch;summary{border-radius:0;border-top-left-radius:", ";border-bottom-left-radius:", ";border-right:0;}.TextInput-wrapper{border-radius:0;border-top-right-radius:", ";border-bottom-right-radius:", ";z-index:1;}"], COMMON, get('radii.2'), get('radii.2'), get('radii.2'), get('radii.2'));
FilteredSearch.defaultProps = {
  theme: theme
};
FilteredSearch.propTypes = _objectSpread({}, COMMON.propTypes, {
  theme: PropTypes.object
});
export default FilteredSearch;