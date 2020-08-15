import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { register } from '../actions/user';
import { showErrorMessage } from '../actions/notifications';
import { getErrorMessage } from '../utils/helpers';


function Signup({
  token,
  register,
  showErrorMessage,
}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const history = useHistory();

  useEffect(() => {
    // Redirect to home when signup is successful
    if (token) {
      history.push('/');
    }
  });

  const submit = async (e) => {
    e.preventDefault();

    const { success, res } = await register({
      username, password, email, name,
    });
    if (!success) {
      const msg = getErrorMessage(res);
      showErrorMessage(msg);
    }
  };

  return (
    <>
      <h2>Register</h2>
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
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            required
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

Signup.propTypes = {
  register: PropTypes.func.isRequired,
  showErrorMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    token: state.user.token,
  }
);

export default connect(mapStateToProps, { register, showErrorMessage })(Signup);
