import React from 'react'

export default function ToDoItem ({title, description,dateCreated,complete,dateCompleted}) {
  return (
     <div>
          <b>{title}</b><br/>
          Description: {description}<br/>
          Creation Date: {dateCreated}<br/>
          <input type="checkbox" name="complete" checked={complete}/>  {dateCompleted}
     </div> 
 )
}
