import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
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
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            required
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            required
            onChange={e => setName(e.target.value)}
          />
        </FormGroup>

        <Button color="primary">Submit</Button>
      </Form>
    </>
  );
}

const mapStateToProps = state => (
  {
    token: state.user.token,
  }
);

export default connect(mapStateToProps, { register, showErrorMessage })(Signup);
