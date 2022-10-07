import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import React from 'react';

class Section extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <Box as="section" flexDirection="column" ml={[3]} mb={[3]}>
        {title && <h2 style={{ marginBottom: '10px' }}>{title}</h2>}
        {children}
      </Box>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
