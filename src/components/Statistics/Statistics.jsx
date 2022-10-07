import PropTypes from 'prop-types';
import { StatList, StatItem } from 'components/Statistics/Statistics.styled';
import React from 'react';
class Statistics extends React.Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <StatList>
        <StatItem>Good: {good}</StatItem>
        <StatItem>Neutral: {neutral}</StatItem>
        <StatItem>Bad: {bad}</StatItem>
        <StatItem>Total: {total}</StatItem>
        <StatItem>Positive feedback: {positivePercentage}%</StatItem>
      </StatList>
    );
  }
}

export default Statistics;
