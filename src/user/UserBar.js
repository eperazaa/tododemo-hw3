import React, {useContext}  from 'react'

import Logout from './Logout'
import Register from './Register'
import Login from './Login'
import { StateContext } from '../Contexts'

export default function UserBar() {
  
  const {state} = useContext(StateContext)
  const {user} = state;

  if (user) {
      return (
        <div>
        <Logout />
        </div>
      )
  } else {
      return (
          <div>
            <Login />
            <br/><hr/><br/>
            <Register />
          </div>
      )
  }
}
