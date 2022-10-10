import { Box } from 'components/Box';
import Button from 'components/Button/Button';
import React from 'react';
import PropTypes from 'prop-types';

function FeedbackOptions({ onButtonClick }) {
  return (
    <Box gridGap="10px">
      <Button title="Good" onButtonClick={onButtonClick} action="good" />
      <Button title="Neutral" onButtonClick={onButtonClick} action="neutral" />
      <Button title="Bad" onButtonClick={onButtonClick} action="bad" />
    </Box>
  );
}

FeedbackOptions.propTypes = {
  onButtonClick: PropTypes.func,
};
export default FeedbackOptions;
