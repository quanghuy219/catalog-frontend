import React from 'react';
import GoogleLogin from 'react-google-login';

function Login() {
  return (
    <div>
      <h3>Sign in with Google Account</h3>

      <GoogleLogin
        className="g-signin"
        scope="openid email profile"
        clientId="631390474610-5kpt48ufa9uh64g364asa6f716739p0d.apps.googleusercontent.com"
        accessType="offline"
        prompt="select_account"
        onSuccess="signInCallback"
        onFailure="handleFailure"
      />
      <div id="result" />
    </div>
  );
}

export default Login;
