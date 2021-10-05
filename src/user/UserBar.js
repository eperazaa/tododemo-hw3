import React, {useState} from 'react'

import Logout from './Logout'
import Register from './Register'
import Login from './Login'

export default function UserBar({user, dispatchUser}) {
  
  

  if (user) {
      return (
        <div>
        <Logout user={user} dispatchUser={dispatchUser} />
        </div>
      )
  } else {
      return (
          <div>
            <Login dispatchUser={dispatchUser} />
            <br/><hr/><br/>
            <Register dispatchUser={dispatchUser} />
          </div>
      )
  }
}
