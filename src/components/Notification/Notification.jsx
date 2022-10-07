import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.Component {
  static propTypes = { message: PropTypes.string };
  render() {
    const { message } = this.props;

    return <span style={{ fontSize: '18px' }}>{message}</span>;
  }
}

export default Notification;
