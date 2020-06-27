import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COMMON, LAYOUT } from '../constants';
import theme from '../theme';
import buttonBaseStyles from './ButtonStyles';
import { compose, variant, fontSize } from 'styled-system';
import systemPropTypes from '@styled-system/prop-types';
var variants = variant({
  variants: {
    small: {
      p: '4px 12px',
      fontSize: 0
    },
    medium: {
      fontSize: 1
    },
    large: {
      fontSize: 2,
      p: '10px 20px'
    }
  }
});
var ButtonBase = styled.button.attrs(function (_ref) {
  var disabled = _ref.disabled,
      onClick = _ref.onClick;
  return {
    onClick: disabled ? undefined : onClick
  };
}).withConfig({
  displayName: "ButtonBase",
  componentId: "exshql-0"
})(["", " ", ""], buttonBaseStyles, variants);
export var systemStyles = compose(fontSize, COMMON, LAYOUT);
ButtonBase.defaultProps = {
  theme: theme,
  variant: 'medium'
};
ButtonBase.propTypes = _objectSpread({
  as: PropTypes.oneOfType([PropTypes.oneOf(['button', 'a', 'summary', 'input']), PropTypes.elementType]),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  fontSize: systemPropTypes.typography.fontSize,
  onClick: PropTypes.func,
  theme: PropTypes.object,
  variant: PropTypes.oneOf(['small', 'medium', 'large'])
}, COMMON.propTypes, {}, LAYOUT.propTypes);
export default ButtonBase;