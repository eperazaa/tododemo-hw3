import React, {useState} from 'react'

export default function AddToDoItem ({dispatch}){

     const [ title, setTitle ] = useState('')
     const [ description, setDescription ] = useState('')
     
 
     function handleTitle (evt) { setTitle(evt.target.value) }
 
     function handleDescription (evt) { setDescription(evt.target.value) }

     return (
          <form onSubmit={e => {e.preventDefault(); dispatch({type: "ADD_TODO_ITEM", title, description});} }>
            <h3>Add ToDo Item</h3>
            <input required placeholder="Title" type="text" name="add-title" id="add-title" value={title} onChange={handleTitle} /><br/>
            <textarea placeholder="Describe your todo item..." name="add-description" id="add-description" value={description} onChange={handleDescription} /><br/>
            <input type="submit" value="Add Item" />        
         </form>   
          )
 }
 