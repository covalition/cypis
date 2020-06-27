import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COMMON, LAYOUT, TYPOGRAPHY, get } from '../constants';
import theme from '../theme';
import sx from '../sx';
var ButtonTableList = styled.summary.withConfig({
  displayName: "ButtonTableList",
  componentId: "xtne0h-0"
})(["display:inline-block;padding:0;font-size:", ";color:", ";text-decoration:none;white-space:nowrap;cursor:pointer;user-select:none;background-color:transparent;border:0;appearance:none;&:hover{text-decoration:underline;}&:disabled{&,&:hover{color:rgba(", ",0.5);cursor:default;}}&:after{display:inline-block;margin-left:", ";width:0;height:0;vertical-align:-2px;content:\"\";border:4px solid transparent;border-top-color:currentcolor;}", " ", " ", " ", ";"], get('fontSizes.1'), get('colors.gray.6'), get('colors.gray.6'), get('space.1'), COMMON, TYPOGRAPHY, LAYOUT, sx);
ButtonTableList.defaultProps = {
  theme: theme
};
ButtonTableList.propTypes = _objectSpread({
  theme: PropTypes.object
}, sx.propTypes, {}, COMMON.propTypes, {}, TYPOGRAPHY.propTypes, {}, LAYOUT.propTypes);
export default ButtonTableList;