import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {login} from '../actions'
import {connect} from 'react-redux'

const SignInForm = (props) => {
  const [credentials, setCredentials] = useState({});


  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
}

const authorize = e => {
  e.preventDefault();
  props.login(credentials)  
}


  return (
    <Form inline onSubmit = {authorize}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="text"
            name="username"
            value={credentials.username}
            onChange={this.handleChange} placeholder="badassusername" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input value={credentials.password}
            onChange={handleChange} type="password" name="password" id="examplePassword" placeholder="don't tell!" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default connect(null, {login})(SignInForm)