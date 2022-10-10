import { Box } from 'components/Box';
import Button from 'components/Button/Button';
import React from 'react';
import PropTypes from 'prop-types';

function FeedbackOptions({ onButtonClick, buttons }) {
  console.log(buttons);
  return (
    <Box gridGap="10px">
      {buttons.map(button => (
        <Button title={button} onButtonClick={onButtonClick} action={button} />
      ))}
    </Box>
  );
}

FeedbackOptions.propTypes = {
  onButtonClick: PropTypes.func,
};
export default FeedbackOptions;
