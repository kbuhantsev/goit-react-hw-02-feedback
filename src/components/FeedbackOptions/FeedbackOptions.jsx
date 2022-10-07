import { Box } from 'components/Box';
import Button from 'components/Button/Button';
import React from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends React.Component {
  static propTypes = {
    onButtonClick: PropTypes.func,
  };
  render() {
    const { onButtonClick } = this.props;
    return (
      <Box gridGap="10px">
        <Button title="Good" onButtonClick={onButtonClick} action="good" />
        <Button
          title="Neutral"
          onButtonClick={onButtonClick}
          action="neutral"
        />
        <Button title="Bad" onButtonClick={onButtonClick} action="bad" />
      </Box>
    );
  }
}

export default FeedbackOptions;
