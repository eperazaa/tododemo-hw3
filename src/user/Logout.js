import React from 'react'

export default function Logout({user}) {
    return (
      <form onSubmit={e => e.preventDefault()}>
         Logged in as: <b>{user}</b> <br/>
         <input type="submit" value="Logout" />
      </form>
     )
 }
 
