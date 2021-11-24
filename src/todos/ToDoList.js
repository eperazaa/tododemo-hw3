import React, { useContext } from 'react'
import ToDoItem from './ToDoItem'

import { StateContext } from '../Contexts'


export default function ToDoList () {

      const {state} = useContext(StateContext)
      const {todos} = state;

     return (
      <div>
      {todos.map((t, i) => <ToDoItem {...t} todo={t} id={t._id} key={i}  />)}
      
      </div> 
      )
}

