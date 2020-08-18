import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {postFriend} from '../actions'
import {connect} from 'react-redux'

const AddFriend = (props) => {
    const emptyForm = {name: '', age: '', email: ''}
    const [newFriend, setnewFriend] = useState(emptyForm);
  
  
    const handleChange = e => {
      setnewFriend({
        ...newFriend,
        [e.target.name]: e.target.value,
      })
  }
  
  const submitFriend = e => {
    e.preventDefault();
    props.postFriend(newFriend) 

  }
  return (
    <Form onSubmit = {submitFriend}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="AddFriendName" className="mr-sm-2">Name</Label>
        <Input type="Name" name="name" onChange = {handleChange} value = {newFriend.name} id="AddFriendName" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="AddFriendEmail" className="mr-sm-2">Email</Label>
        <Input onChange = {handleChange} value = {newFriend.email} type="email" name="email" id="AddFriendEmail" placeholder="something@idk.cool" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="AddFriendage" className="mr-sm-2">Age</Label>
        <Input type="text" onChange = {handleChange} value = {newFriend.age} name="age" id="AddFriendage" placeholder="don't tell!" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default connect(null, {postFriend})(AddFriend)