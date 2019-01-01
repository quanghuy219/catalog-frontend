import React from 'react';
import GoogleLogin from 'react-google-login';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

export default Login;
