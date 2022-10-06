import { GlobalStyles } from './GlobalStyles/GlobalStyles.styled';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  handleButtonClick = event => {
    const actionName = event.target?.dataset?.action;

    switch (actionName) {
      case 'good':
        this.setState(
          {
            good: this.state.good + 1,
          },
          this.countTotalFeedback
        );
        break;
      case 'neutral':
        this.setState(
          {
            neutral: this.state.neutral + 1,
          },
          this.countTotalFeedback
        );
        break;
      case 'bad':
        this.setState(
          {
            bad: this.state.bad + 1,
          },
          this.countTotalFeedback
        );
        break;
      default:
        console.log('в кнопке не понятный дата атрибут');
    }
  };

  countTotalFeedback() {
    this.setState(
      {
        total: this.state.good + this.state.neutral + this.state.bad,
      },
      this.countPositiveFeedbackPercentage
    );
  }

  countPositiveFeedbackPercentage() {
    this.setState({
      positivePercentage: Math.round(
        (this.state.good * 100) / this.state.total
      ),
    });
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <Section title="Please live feedback">
          <FeedbackOptions onButtonClick={this.handleButtonClick} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          />
        </Section>
      </>
    );
  }
}
