import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoList ({items = [], dispatch}) {
     return (
      <div>
          <h3>ToDo List</h3><hr/>
       {items.map((item, i) => <div><ToDoItem  item={item} id={i} key={"item-" + i}  dispatch={dispatch} /><hr/></div>)}
      </div> 
      )
}