import React, {useState, useEffect} from 'react'
import { useContext } from 'react/cjs/react.development';
import { useResource } from 'react-request-hook';
import {Form, Modal, Button} from 'react-bootstrap'

import { StateContext } from '../Contexts';

export default function Register({show, handleClose}) {

  const {dispatch} = useContext(StateContext)

  const [ formData, setFormData ] = useState({
    username: "",
    password: "", 
    passwordRepeat: ""
})

const [ user, register ] = useResource((username, password) => ({
  url: '/users',
  method: 'post',
  data: { username, password }
}))

useEffect(() => {
  if (user && user.data) {
    dispatch({ type: 'REGISTER', username: user.data.username })
    
  }
}, [user])

  /* return (
    
      <form onSubmit={e => {e.preventDefault(); register(formData.username, formData.password); }}>
          <br/>
          <h3>Sign Up here:</h3>
          <input placeholder="Username" type="text" name="register-username" id="register-username" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})} /><br/>

          <input placeholder="Password" type="password" name="register-password" id="register-password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} /><br/>

          <input  placeholder="Retype Your Password" type="password" name="register-password-repeat" id="register-password-repeat" value={formData.passwordRepeat} onChange={e => setFormData({...formData, passwordRepeat: e.target.value})} /><br/><br/>

          <input type="submit" value="Register" disabled={formData.username.length === 0 || formData.password.length === 0 || formData.password !== formData.passwordRepeat} />
      </form>
  ) */
  return (

    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={e => { e.preventDefault(); register(formData.username, formData.password); handleClose(); }}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="register-username">Username:</Form.Label>
          <Form.Control type="text" value={formData.username} onChange={e => setFormData({ ...formData, username: e.target.value })} name="register-username" id="register-username" />
          <Form.Label htmlFor="register-password">Password:</Form.Label>
          <Form.Control type="password" name="register-password" id="register-password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} />
          <Form.Label htmlFor="register-password-repeat">Repeat password:</Form.Label>
          <Form.Control type="password" name="register-password-repeat" id="register-password-repeat" value={formData.passwordRepeat} onChange={e => setFormData({ ...formData, passwordRepeat: e.target.value })} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" type="submit" disabled={formData.username.length === 0 || formData.password.length === 0 || formData.password !== formData.passwordRepeat}>Register</Button>
        </Modal.Footer>
      </Form>
    </Modal>

  )
}