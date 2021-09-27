import React from 'react'

import Logout from './Logout'
import Register from './Register'
import Login from './Login'
import AddToDoItem from '../todos/AddToDoItem'

export default function UserBar({user}) {
  
  

  if (user) {
      return (
        <div>
        <Logout user={user} />
        <AddToDoItem user="Eli" />
        </div>
      )
  } else {
      return (
          <div>
            <Login />
            <br/><hr/>
            <Register />
          </div>
      )
  }
}
