import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter, useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
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
      <Form style={{ width: '300px' }} onSubmit={submit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            required
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            required
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
      <Link to="/signup">Sign up</Link>
    </>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    token: state.user.token,
  }
);

export default withRouter(connect(mapStateToProps, { login, showErrorMessage })(Login));
