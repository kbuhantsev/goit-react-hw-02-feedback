import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.Component {
  render() {
    const { message } = this.props;

    return <h2>{message}</h2>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
