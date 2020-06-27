import PropTypes from 'prop-types';
import css from '@styled-system/css';

var sx = function sx(props) {
  return css(props.sx);
};

sx.propTypes = {
  sx: PropTypes.object
};
export default sx;