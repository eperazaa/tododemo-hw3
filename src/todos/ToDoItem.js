import React, {useContext}  from 'react'
import { StateContext } from '../Contexts'

export default function ToDoItem ({id, item}) {

  
     const {dispatch} = useContext(StateContext)
      
  return (
     <div>
          <input type="checkbox"  name="complete"  checked={item.complete} onChange={e => { dispatch({type: "TOGGLE_TODO_ITEM", id});} }/>  <b>{item.title}</b><br/>
          Description: {item.description}<br/>
          Creation Date: {item.dateCreated}<br/>
          Completion date: {item.dateCompleted ? item.dateCompleted : ""} <br/>
          <button onClick={e => {e.preventDefault(); dispatch({type: "DELETE_TODO_ITEM", id});}} name="delete">Remove</button>
     </div> 
 )
}
