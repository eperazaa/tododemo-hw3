import React from 'react'
import { useContext } from 'react/cjs/react.development';

import { StateContext } from '../Contexts';

 export default function Logout() {
   const {state, dispatch} = useContext(StateContext)
   const {user} = state;

  return (
    <form onSubmit={e => {e.preventDefault(); dispatch({type:"LOGOUT"}) } }>
       Logged in as: <b>{user}</b> <br/>
       <input type="submit" value="Logout" />
    </form>
   )
}
