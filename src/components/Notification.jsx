import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class Notification extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { message, error, type } = { ...nextProps.notification };
    if (type === 'ERROR') {
      toast.error(message);
      Object.keys(error).map((key) => {
        if (Array.isArray(error[key])) {
          return toast.error(error[key][0]);
        }
        return toast.error(error[key]);
      });
    } else {
      toast.info(message);
    }
  }

  render() {
    return (
      <ToastContainer hideProgressBar autoClose={3000} />
    );
  }
}

const mapStateToProps = state => (
  {
    notification: state.notification,
  }
);

export default connect(mapStateToProps, null)(Notification);
