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

    switch (actionName) {
      case 'good':
        this.setState(prevState => {
          return { good: prevState.good + 1 };
        }, this.countTotalFeedback);
        break;
      case 'neutral':
        this.setState(prevState => {
          return { neutral: prevState.neutral + 1 };
        }, this.countTotalFeedback);
        break;
      case 'bad':
        this.setState(prevState => {
          return { bad: prevState.bad + 1 };
        }, this.countTotalFeedback);
        break;
      default:
        console.log('в кнопке не понятный дата атрибут');
    }
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
    if (this.state.total) {
      statistics = (
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positivePercentage}
        />
      );
    } else {
      statistics = <Notification message="There is no feedback"></Notification>;
    }

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
