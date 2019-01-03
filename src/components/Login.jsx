import React from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { toast } from 'react-toastify';
import { login } from '../actions/User';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSigninSuccess = this.onSigninSuccess.bind(this);
    this.onSigninFailure = this.onSigninFailure.bind(this);
  }

  onSigninSuccess(code) {
    const props = { ...this.props };
    props.login(code);
  }

  onSigninFailure() {
    toast.error('Something went wrong. Please try again later');
  }

  render() {
    return (
      <div>
        <h3>Sign in with Google Account</h3>
        <GoogleLogin
          className="g-signin"
          scope="openid email profile"
          clientId="631390474610-5kpt48ufa9uh64g364asa6f716739p0d.apps.googleusercontent.com"
          accessType="offline"
          responseType="code"
          prompt="select_account"
          onSuccess={this.onSigninSuccess}
          onFailure={this.onSigninFailure}
        />
        <div id="result" />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    error: state.error,
    user: state.user,
  }
);

const mapDispatchToProps = dispatch => (
  {
    login: code => dispatch(login(code)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
