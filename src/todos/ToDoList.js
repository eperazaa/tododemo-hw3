import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoList ({items = [], dispatch}) {
     return (
      <div>
      {items.map((item, i) => <div key={i}><ToDoItem item={item} id={i} key={i} dispatch={dispatch} /><hr /></div>)}
      </div> 
      )
}

