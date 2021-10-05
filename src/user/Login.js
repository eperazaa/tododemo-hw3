import React, {useState}  from 'react'


export default function Login({ dispatchUser })  {
    const [username, setUsername] = useState('');
    function handleUsername (evt) { setUsername(evt.target.value) } 
   return (
        <form onSubmit={evt => {evt.preventDefault(); dispatchUser({type:"LOGIN", username})} }>
            <h3>Sign In</h3>
            <input placeholder="Username" type="text" name="login-username" id="login-username" value={username} onChange={handleUsername}/><br/>
            
            <input placeholder="Password" type="password" name="login-password" id="login-password" /><br/><br/>
            <input type="submit" value="Login" />
        </form>
    )
}
