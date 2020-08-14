import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { login } from '../actions/user';


function Login({ login }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    const { success } = await login(username, password);
    if (success) {
      history.push('/');
    }
  };

  return (
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
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { login })(Login));
