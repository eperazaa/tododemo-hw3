import React from 'react'

export default function Register() {
  return (
    
      <form onSubmit={e => e.preventDefault()}>
          <br/>
          <h3>Sign Up here:</h3>
          <input placeholder="Username" type="text" name="register-username" id="register-username" /><br/>

          <input placeholder="Password" type="password" name="register-password" id="register-password" /><br/>

          <input  placeholder="Retype Your Password" type="password" name="register-password-repeat" id="register-password-repeat" /><br/><br/>

          <select name="register-question" id="register-question">
          <option disabled hidden selected>Security Question</option>
            <option value='1'>Pet name?</option>
            <option value='2'>Mom's maiden name?</option>
            <option value='3'>High School Math Teacher</option>
            <option value='4'>High School City?</option>
          </select><br/>

          <input placeholder="Security Answer" type="text" name="register-answer" id="register-answer" /><br/><br/>
          
          <input type="submit" value="Register" />
      </form>
  )
}