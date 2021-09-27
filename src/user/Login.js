import React from 'react'

export default function Login() {
   return (
        <form onSubmit={evt => evt.preventDefault()}>
            <h3>Sign In</h3>
            <input placeholder="Username" type="text" name="login-username" id="login-username" /><br/>
            
            <input placeholder="Password" type="password" name="login-password" id="login-password" /><br/><br/>
            <input type="submit" value="Login" />
        </form>
    )
}
