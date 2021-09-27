import React, {useState} from 'react'

export default function User() {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')

    function handleNameChange(evt) {       
        setName(evt.target.value)
    }  
    
    function handleLastNameChange(evt) {       
        setLastName(evt.target.value)
    }    
      
    
    return (    
    <div>            
        <h1>Hello {name} {lastName}</h1>
        <input type="text" value={name} onChange={handleNameChange} />
        <input type="text" value={lastName} onChange={handleLastNameChange} />      
    </div>    
    )
}