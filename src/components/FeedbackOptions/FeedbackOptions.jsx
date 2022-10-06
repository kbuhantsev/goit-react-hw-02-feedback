import { Box } from 'components/Box';
import Button from 'components/Button/Button';

function FeedbackOptions(onButtonClick) {
  return (
    <Box>
      <Button title="Good" onButtonClick={onButtonClick} action="good" />
      <Button title="Neutral" onButtonClick={onButtonClick} action="neutral" />
      <Button title="Bad" onButtonClick={onButtonClick} action="bad" />
    </Box>
  );
}

export default FeedbackOptions;
