import React from 'react'
import ToDoItem from './ToDoItem'

import { StateContext } from '../Contexts'
import { useContext } from 'react/cjs/react.development'

export default function ToDoList () {

      const {state} = useContext(StateContext)
      const {items} = state;

     return (
      <div>
      {items.map((item, i) => <div key={i}><ToDoItem item={item} id={item.id} key={i} /><hr /></div>)}
      </div> 
      )
}

