import { Box } from 'components/Box';
import Button from 'components/Button/Button';

function FeedbackOptions() {
  return (
    <Box>
      <Button title="Good" />
      <Button title="Neutral" />
      <Button title="Bad" />
    </Box>
  );
}

export default FeedbackOptions;
