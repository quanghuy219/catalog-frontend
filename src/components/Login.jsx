import React from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { toast } from 'react-toastify';
import { login } from '../actions/user';

class Login extends React.Component {
  onSigninSuccess = (code) => {
    this.props.login(code)
      .then(() => this.props.history.push('/'));
  }

  onSigninFailure = () => {
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

const mapDispatchToProps = dispatch => (
  {
    login: code => dispatch(login(code)),
  }
);

export default connect(null, mapDispatchToProps)(Login);
