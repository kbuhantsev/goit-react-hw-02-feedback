import { Box } from 'components/Box';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <Box as="section" flexDirection="column">
      {title && <h2>{title}</h2>}
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
