import React from 'react'

export default function AddToDoItem ({user}) {
     return (
          <form onSubmit={e => e.preventDefault()}>
            <h3>Add ToDo Item</h3>
            <input required placeholder="Title" type="text" name="add-title" id="add-title" /><br/>
            <textarea placeholder="Describe your todo item..." name="add-description" id="add-description"/><br/>
            <input type="submit" value="Add Item" />        
         </form>   
          )
 }
 