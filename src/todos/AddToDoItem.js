import React, {useState, useContext, useEffect} from 'react'
import { StateContext } from '../Contexts'
import {useResource} from 'react-request-hook'

import { useNavigation } from 'react-navi'

export default function AddToDoItem (){

     const [ title, setTitle ] = useState('')
     const [ description, setDescription ] = useState('')

     const navigation = useNavigation()

     const {state, dispatch} = useContext(StateContext)
     const {user} = state;

     const [todo , addToDoItem ] = useResource(({ title, description, author }) => ({
          url: '/todos',
          method: 'post',
          headers: {"Authorization": `${state.user.access_token}`},
          data: { title, description, createdOn: new Date(Date.now()).toLocaleDateString(), completed: false, completedOn: undefined, author }
      }))

     function handleTitle (evt) { setTitle(evt.target.value) }
 
     function handleDescription (evt) { setDescription(evt.target.value) }

     function handleAddToDoItem () {
          addToDoItem({ title, description, author: user.username})
     }

      useEffect(() => {
           if (todo && todo.data) {
               dispatch({type: "ADD_TODO_ITEM", title: todo.data.title, description: todo.data.description, id: todo.data.id, createdOn: todo.data.createdOn, completed: todo.data.completed, completedOn: todo.data.completedOn, author:user.username})
               console.log(todo.data)
               //navigation.navigate(`/todos/${todo.data.id}`)
               navigation.navigate(`/`)
           }
      }, [todo])

     return (
          <form onSubmit={e => {e.preventDefault(); handleAddToDoItem();} }>
               <div>Author: <b>{user.username}</b></div>
               <input required placeholder="Title" type="text" name="add-title" id="add-title" value={title} onChange={handleTitle} /><br/>
               <textarea placeholder="Describe your todo item..." name="add-description" id="add-description" value={description} onChange={handleDescription} /><br/>
               <input type="submit" value="Add Item" />        
         </form>   
          )
 }
 