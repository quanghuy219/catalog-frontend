import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { login } from '../actions/user';
import { showErrorMessage } from '../actions/notifications';
import { getErrorMessage } from '../utils/helpers';


function Login({
  token,
  login,
  showErrorMessage,
}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    const { success, res } = await login(username, password);
    if (!success) {
      const msg = getErrorMessage(res);
      showErrorMessage(msg);
    }
  };

  useEffect(() => {
    // Redirect to home when login is successful
    if (token) {
      history.push('/');
    }
  });

  return (
    <>
      <form style={{ width: '300px' }} onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            required
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            required
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <Link to="/signup">Sign up</Link>
    </>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  showErrorMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    token: state.user.token,
  }
);

export default withRouter(connect(mapStateToProps, { login, showErrorMessage })(Login));
