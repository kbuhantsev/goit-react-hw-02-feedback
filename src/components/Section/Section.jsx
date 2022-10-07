import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import React from 'react';

class Section extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    const { title, children } = this.props;
    return (
      <Box as="section" flexDirection="column" ml={[3]} mb={[4]}>
        {title && <h2 style={{ marginBottom: '20px' }}>{title}</h2>}
        {children}
      </Box>
    );
  }
}

export default Section;
