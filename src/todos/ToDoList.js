import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoList ({items = []}) {
     return (
      <div>
          <h3>ToDo List</h3><hr/>
       {items.map((item, i) => <div><ToDoItem {...item} title={item.title} description={item.description} dateCreated={item.dateCreated} complete={item.complete} dateCompleted={item.dateCompleted}  key={'post-' + i} /><hr/></div>)}
      </div> 
      )
}
    
