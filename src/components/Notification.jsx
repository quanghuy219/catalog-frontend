import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.min.css';

class Notification extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { message, error } = { ...nextProps.error };
    toast.error(message);
    Object.keys(error).map((key) => {
      if (Array.isArray(error[key])) {
        return toast.error(error[key][0]);
      }
      return toast.error(error[key]);
    });
  }

  render() {
    return (
      <ToastContainer hideProgressBar autoClose={3000} />
    );
  }
}

Notification.defaultProps = {
  error: {},
};

const mapStateToProps = state => (
  {
    error: state.error,
  }
);

export default connect(mapStateToProps, null)(Notification);
