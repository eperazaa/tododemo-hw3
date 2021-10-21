import React, {useState, useContext, useEffect} from 'react'
import { StateContext } from '../Contexts'

import {useResource} from 'react-request-hook'


export default function AddToDoItem (){

     const [ title, setTitle ] = useState('')
     const [ description, setDescription ] = useState('')

     const [item , addToDoItem ] = useResource(({ title, description }) => ({
          url: '/todos',
          method: 'post',
          data: { title, description, dateCreated: new Date(Date.now()).toLocaleDateString(), complete: false, dateCompleted: null }
      }))


     
     const {state, dispatch} = useContext(StateContext)
     const {user} = state;
 
     function handleTitle (evt) { setTitle(evt.target.value) }
 
     function handleDescription (evt) { setDescription(evt.target.value) }

     function handleAddToDoItem () {
          addToDoItem({ title, description})
          
      }

      useEffect(() => {
           if (item && item.data) {
               dispatch({type: "ADD_TODO_ITEM", title: item.data.title, description: item.data.description, id: item.data.id, dateCreated: item.data.dateCreated, complete: item.data.complete, dateCompleted: item.data.dateCompleted})
           }
      }, [item])

     return (
          <form onSubmit={e => {e.preventDefault(); handleAddToDoItem();} }>
            <h3>Add ToDo Item</h3>
            <input required placeholder="Title" type="text" name="add-title" id="add-title" value={title} onChange={handleTitle} /><br/>
            <textarea placeholder="Describe your todo item..." name="add-description" id="add-description" value={description} onChange={handleDescription} /><br/>
            <input type="submit" value="Add Item" />        
         </form>   
          )
 }
 