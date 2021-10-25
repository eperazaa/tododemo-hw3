import React, {useState, useEffect}  from 'react'
import { useContext } from 'react/cjs/react.development';

import { StateContext } from '../Contexts';
import { useResource } from 'react-request-hook';


export default function Login()  {

    const {dispatch} = useContext(StateContext)

    const [username, setUsername] = useState('');
    const [ password, setPassword ] = useState('')
    const [ loginFailed, setLoginFailed ] = useState(false)


    function handleUsername (evt) { setUsername(evt.target.value) } 
    function handlePassword (evt) { setPassword(evt.target.value) }

    const [ user, login ] = useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method: 'get'
    }))

    useEffect(() => {
        if (user && user.data) {
            if (user.data.length > 0) {
                            setLoginFailed(false)
                            dispatch({ type: 'LOGIN', username: user.data[0].username })
            } else {
                            setLoginFailed(true)
            }
        } 
    }, [user])


   return (
        <form onSubmit={evt => {evt.preventDefault(); login(username, password); }} >
            <h3>Sign In</h3>
            <input placeholder="Username" type="text" name="login-username" id="login-username" value={username} onChange={handleUsername}/><br/>
            
            <input placeholder="Password" type="password" name="login-password" id="login-password"  value={password} onChange={handlePassword}/><br/>
            {loginFailed && <span style={{ color: 'red' }}>Invalid username or password!</span>}<br/><br/>
            <input type="submit" value="Login" />
          
            
        </form>
    )
}
