import React, {useContext, useEffect}  from 'react'
import { StateContext } from '../Contexts'

import { useResource } from 'react-request-hook'

export default function ToDoItem ({id, item}) {

  
    const {dispatch} = useContext(StateContext)

    const [todoitem, deleteToDoItem ] = useResource(() => ({
        url: `/todos/${item.id}`,  // <-- does not read id without the item., id only is undefined, but can be read on the dispatch
        method: 'delete'
    }))


    function handleDeleteToDoItem () {
        deleteToDoItem();
        dispatch({type: "DELETE_TODO_ITEM", id: id}); // <--  does not read item.id
                
    }


    const [todoitem2, completeToDoItem ] = useResource((c) => ({
        url: `/todos/${item.id}`,  // <-- does not read id without the item., id only is undefined, but can be read don he dispatch
        method: 'PATCH',
        data: {
            complete: !c,
            dateCompleted: !c ? new Date(Date.now()).toLocaleDateString() : null

        }
    }))


    function handleCompleteToDoItem (c) {
        completeToDoItem(c);
    }
      

    

    useEffect(() => {
           if (todoitem2 && todoitem2.data) {
                dispatch({type: "TOGGLE_TODO_ITEM", id: id, complete: todoitem2.data.complete, dateCompleted: todoitem2.data.dateCompleted});
           }
      }, [todoitem2])



      
  return (
     <div>
          <input type="checkbox"  name="complete"  checked={item.complete} onChange={e => { handleCompleteToDoItem(item.complete);} }/>  <b>{item.title}</b><br/>
          Description: {item.description}<br/>
          Creation Date: {item.dateCreated}<br/>
          Completion date: {item.dateCompleted ? item.dateCompleted : ""} <br/>
          <button onClick={e => {handleDeleteToDoItem();}} name="delete">Remove</button>
     </div> 
 )
}
