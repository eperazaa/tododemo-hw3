import React, { useContext } from 'react'
import UserEntry from './UserEntry'

import { StateContext } from '../Contexts'


export default function UserList () {

      const {state} = useContext(StateContext)
      const {users} = state;

     return (
      <div>
      {users.map((t, i) => <UserEntry {...t} userentry={t} id={t._id} key={i} />)}
      
      </div> 
      )
}

