import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.Component {
  render() {
    const { message } = this.props;

    return <span style={{ fontSize: '18px' }}>{message}</span>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
