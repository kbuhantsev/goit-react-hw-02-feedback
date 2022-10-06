import { GlobalStyles } from './GlobalStyles/GlobalStyles.styled';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Section title="Please live feedback">
        <FeedbackOptions />
      </Section>
      <Section title="Statistics">
        <Statistics
          good="1"
          neutral="2"
          bad="3"
          total="4"
          positivePercentage="50"
        />
      </Section>
    </>
  );
}
