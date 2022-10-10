import { GlobalStyles } from './GlobalStyles/GlobalStyles.styled';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
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

    this.setState(prevState => {
      return { [actionName]: prevState[actionName] + 1 };
    }, this.countTotalFeedback);
  };

  countTotalFeedback() {
    this.setState(prevState => {
      return { total: prevState.good + prevState.neutral + prevState.bad };
    }, this.countPositiveFeedbackPercentage);
  }

  countPositiveFeedbackPercentage() {
    this.setState(prevState => {
      return {
        positivePercentage: Math.round(
          (prevState.good * 100) / prevState.total
        ),
      };
    });
  }

  render() {
    let statistics;
    this.state.total
      ? (statistics = (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          />
        ))
      : (statistics = (
          <Notification message="There is no feedback"></Notification>
        ));

    return (
      <>
        <GlobalStyles />
        <Section title="Please live feedback">
          <FeedbackOptions onButtonClick={this.handleButtonClick} />
        </Section>
        <Section title="Statistics">{statistics}</Section>
      </>
    );
  }
}
