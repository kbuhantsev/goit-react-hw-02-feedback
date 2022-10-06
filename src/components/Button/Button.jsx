import PropTypes from 'prop-types';
import { Button as ButtonStyle } from './Button.styled';

function Button({ title }) {
  return <ButtonStyle type="button">{title}</ButtonStyle>;
}

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
