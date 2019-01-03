import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.min.css';

class Notification extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { message, error } = { ...nextProps.error };
    toast.error(message);
    Object.keys(error).forEach(key => toast.error(`${key}: ${error[key]}`));
  }

  render() {
    return (
      <ToastContainer hideProgressBar autoClose={3000} />
    );
  }
}
Notification.propTypes = {
  error: PropTypes.object,
};

Notification.defaultProps = {
  error: {},
};
const mapStateToProps = state => (
  {
    error: state.error,
  }
);

export default connect(mapStateToProps, null)(Notification);
